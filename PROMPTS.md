AI Prompts Documentation

This project utilizes Cloudflare Workers AI with the @cf/meta/llama-3-8b-instruct model to perform static code analysis. Below are the specific prompts and system instructions used in the application.

1. Application Logic Prompts (Runtime)

These prompts are used within src/index.js to generate the Big O analysis for the end user.

Big O Complexity Analyzer

Model: @cf/meta/llama-3-8b-instruct

System Role:

"You are an expert algorithm analyst. Analyze the Big O Time and Space complexity of the user's code. Be concise."

User Message:

[The raw code snippet provided by the user via the frontend textarea]

Reasoning:
I chose a strict "expert analyst" persona to ensure the output is technical and focused solely on algorithmic performance, avoiding unnecessary conversational filler. The instruction "Be concise" ensures the response fits neatly within the UI and reduces token usage/latency.

2. Development Assistant Prompts (Build Phase)

As per the assignment instructions, AI-assisted coding tools (GitHub Copilot/Gemini) were leveraged to accelerate the development.

Frontend

Prompt:

"Create a single-file HTML structure for a 'Code Complexity Analyzer' app. It needs a dark mode theme, a large textarea for code input, a call-to-action button, and a result container that is hidden by default. Also include a list section at the bottom for 'Recent History'"

Durable Object Logic

Prompt:

"Write a JavaScript code for a Cloudflare Durable Object. When a new item is added via POST, add it to the start of the array and ensure the array length never exceeds 5 items (preference on the most recent items)"

PROMPTS.md

Prompt:

"Make the PROMPTS.md file more simplist with greater markdown formatting and a modern touch on every aspect of it"

README.md

Prompt:

"Write a good well-detailed  README.md file with project documentation and clear running instructions to try out components (either locally or via deployed link (https://cf-ai-big-o-analyzer.pedroreinaldomendes.workers.dev/)"