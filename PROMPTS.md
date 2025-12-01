# 🤖 AI Prompts & Configuration

Documentation of the AI models and prompts driving the **Big O Analyzer**.

---

## ⚡ Runtime Analysis
**Model:** `@cf/meta/llama-3-8b-instruct`

Used in `src/index.js` to analyze code complexity in real-time.

### System Prompt
> You are an expert algorithm analyst. Analyze the Big O Time and Space complexity of the user's code. Be concise.

### User Input
> *[Raw user code snippet]*

**Strategy:** The "expert analyst" persona ensures technical precision, while the "concise" constraint optimizes for UI display and latency.

---

## 🛠️ Development Assistance
Prompts used to accelerate the build process.

### 🎨 Frontend Generation
> Create a single-file HTML structure for a 'Code Complexity Analyzer' app. It needs a dark mode theme, a large textarea for code input, a call-to-action button, and a result container that is hidden by default. Also include a list section at the bottom for 'Recent History'.

### 💾 Durable Object Logic
> Write a JavaScript code for a Cloudflare Durable Object. When a new item is added via POST, add it to the start of the array and ensure the array length never exceeds 5 items (preference on the most recent items).

### 📝 Documentation
**PROMPTS.md Refinement**
> Make the PROMPTS.md file more simplist with greater markdown formatting and a modern touch on every aspect of it.

**README.md Generation**
> Write a good well-detailed README.md file with project documentation and clear running instructions to try out components (either locally or via deployed link (https://cf-ai-big-o-analyzer.pedroreinaldomendes.workers.dev/)).