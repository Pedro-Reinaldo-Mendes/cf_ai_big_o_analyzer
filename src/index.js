import html from '../public/index.html'; // We will import the HTML as a string

export class HistoryDO {
	constructor(state, env) {
		this.state = state;
	}

	async fetch(request) {
		// Get current history
		let history = (await this.state.storage.get("history")) || [];

		// If it's a POST, add new entry
		if (request.method === "POST") {
			const data = await request.json();
			history.unshift(data); // Add to top
			if (history.length > 5) history.pop(); // Keep only last 5
			await this.state.storage.put("history", history);
		}

		return new Response(JSON.stringify(history));
	}
}

export default {
	async fetch(request, env) {
		const url = new URL(request.url);

		// 1. Serve the Frontend
		if (url.pathname === "/") {
			return new Response(html, {
				headers: { "Content-Type": "text/html" },
			});
		}

		// 2. Handle Analysis Request
		if (url.pathname === "/analyze" && request.method === "POST") {
			const { code } = await request.json();

			// A. Call Workers AI
			const messages = [
				{ role: "system", content: "You are an expert algorithm analyst. Analyze the Big O Time and Space complexity of the user's code. Be concise." },
				{ role: "user", content: code }
			];

			const response = await env.AI.run('@cf/meta/llama-3-8b-instruct', { messages });
			const analysis = response.response;

			// B. Save to Durable Object (History)
			const id = env.HISTORY.idFromName("global_history");
			const stub = env.HISTORY.get(id);
			await stub.fetch("http://do/save", {
				method: "POST",
				body: JSON.stringify({ code: code.substring(0, 50) + "...", analysis, timestamp: new Date() })
			});

			return new Response(JSON.stringify({ analysis }));
		}

		// 3. Get History
		if (url.pathname === "/history") {
			const id = env.HISTORY.idFromName("global_history");
			const stub = env.HISTORY.get(id);
			const historyRes = await stub.fetch("http://do/get");
			return historyRes;
		}

		return new Response("Not Found", { status: 404 });
	}
};