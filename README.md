# Big O Complexity Analyzer

A Cloudflare Workers application that uses AI to analyze the time and space complexity of code snippets.

**Deployed Application:** [https://cf-ai-big-o-analyzer.pedroreinaldomendes.workers.dev/](https://cf-ai-big-o-analyzer.pedroreinaldomendes.workers.dev/)

## Features

-   **AI-Powered Analysis**: Uses Cloudflare Workers AI (`@cf/meta/llama-3-8b-instruct`) to provide concise Big O time and space complexity analysis.
-   **History Tracking**: Stores the last 5 analyses using Cloudflare Durable Objects, shared globally across users.
-   **Responsive UI**: A clean, dark-mode interface built with HTML and Tailwind CSS.

## Tech Stack

-   **Cloudflare Workers**: Serverless compute platform.
-   **Cloudflare Workers AI**: Inference for the Llama 3 model.
-   **Cloudflare Durable Objects**: Low-latency coordination and storage for history.
-   **Tailwind CSS**: Utility-first CSS framework for styling.

## Prerequisites

-   [Node.js](https://nodejs.org/) (v16 or later)
-   [npm](https://www.npmjs.com/)
-   [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) (`npm install -g wrangler`)

## Setup & Installation

1.  **Clone the repository** (if applicable) or navigate to the project directory.
2.  **Install dependencies**:
    ```bash
    npm install
    ```

## Running Locally

To start the local development server:

```bash
npm run dev
```

This will start the Wrangler development server, usually accessible at `http://localhost:8787`.

## Deployment

To deploy the application to Cloudflare Workers:

```bash
npm run deploy
```

## Project Structure

-   **`src/index.js`**: Contains the main Worker logic, including:
    -   Serving the static HTML.
    -   Handling `/analyze` requests by calling Workers AI.
    -   Managing the `HistoryDO` Durable Object for storing recent queries.
-   **`public/index.html`**: The single-page frontend interface.
-   **`PROMPTS.md`**: Documentation of the AI prompts used for analysis and development.
