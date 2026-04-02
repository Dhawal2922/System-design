# 🚀 System Design Copilot
### Transmute high-level ideas into production-grade architectural blueprints.

---

## ✨ Overview

**System Design Copilot** is a professional-grade engineering tool designed to bridge the gap between conceptual product ideas and scalable systems. Built for staff-level engineers, architects, and technical interview candidates, it leverages advanced AI to generate end-to-end architectural specifications, from functional requirements to interactive Mermaid.js diagrams.

In a world where architecture defines longevity, this tool provides the analytical depth required to evaluate bottlenecks, scaling strategies, and technical tradeoffs—instantly.

---

## 🔥 Key Features

- **🧠 Deep Architectural Thinking**: Unlike generic LLM wrappers, our engine is tuned specifically for systems engineering, prioritizing latency, consistency, and availability tradeoffs.
- **📊 Interactive Visualization**: Real-time rendering of technical infrastructure using Mermaid.js, providing visual clarity on data flow and component relationships.
- **⚡ Iterative Optimization**: A "Wand" feature that allows you to recursively improve an existing design, hardening it for 10x-100x traffic spikes.
- **🛠️ Real-World Tech Stacks**: Generates layered technology recommendations (Frontend, Backend, Data, Messaging) tailored to specific use cases.
- **🧪 Interview-Grade Outputs**: Structured for high-stakes technical environments, covering functional/non-functional requirements, bottlenecks, and core service definitions.

---

## 🧠 How It Works

1.  **Input Analysis**: The user provides a high-level system goal (e.g., "Design a globally distributed payment gateway").
2.  **Context Construction**: Our engine builds an architectural prompt that enforces industry-standard design patterns (CAP theorem, Microservices, Event-Driven Architecture).
3.  **Processing Pipeline**: The AI generates a structured technical specification.
4.  **Structured Parsing**: A specialized parser splits the raw output into a modular documentation system (Requirements, Scaling, Diagrams).
5.  **Component Rendering**: React-based components live-render the documentation with a premium, dark-mode SaaS UI.

---

## 🏗️ System Architecture

The application is built with a focus on performant rendering and modern server-side execution:

- **Client Layer**: A high-performance React (Next.js) frontend utilizing Tailwind CSS for the premium indigo-zinc aesthetic.
- **Logic Layer**: A standardized parser that translates AI-generated text into UI-ready modules.
- **Rendering Engine**: Mermaid.js for client-side SVG diagram generation.
- **AI Core**: GPT-4o-mini via OpenRouter, optimized for high-speed technical reasoning.

---

## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Standardized Indigo Design System)
- **AI Layer**: [OpenRouter API](https://openrouter.ai/) (GPT-4o-mini)
- **Visualization**: [Mermaid.js](https://mermaid.js.org/)
- **Iconography**: [Lucide React](https://lucide.dev/)
- **Parsing**: Advanced Multi-Section Documentation Parser

---

## ⚙️ Installation & Setup

Ensure you have **Node.js 18+** installed.

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/Dhawal2922/System-design.git
    cd system-design-copilot
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Set Environment Variables**  
    Create a `.env` file in the root directory:
    ```env
    OPENROUTER_API_KEY=your_api_key_here
    ```

4.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to start designing.

---

## 🧪 Example Usage

**Input:** `"Design Uber's Real-time Passenger Matching System"`

**Generated Specification:**
*   **Requirements**: Functional matching (lat/long) & Non-functional (Low latency < 100ms).
*   **Architecture**: Geo-sharded backend with Redis Geospatial indexing.
*   **Scaling Strategy**: Horizontal partitioning based on S2 Geometry Cells.
*   **Diagrams**: Visual mapping of Driver App → Gateway → Matching Service → Passenger App.

---

## 🚀 Unique Selling Points

- **Not just a Chatbot**: This is a structured documentation engine. It doesn't "talk"; it *architects*.
- **Consistency First**: Enforces a strict output schema, ensuring every design follows a professional engineering template.
- **Performance Driven**: Optimized for quick iterations and visual clarity, essential for rapid brainstorming or interview prep.

---

## 📈 Future Improvements

- [ ] **Multi-Model Comparison**: Compare architectural advice from GPT-4o, Claude 3.5 Sonnet, and Llama 3.
- [ ] **Export to PDF/Notion**: One-click documentation export for technical design docs (TDD).
- [ ] **Custom System Constraints**: Input specific constraints (e.g., "Must use AWS stack" or "No SQL allowed").
- [ ] **Collaborative Sessions**: Real-time collaborative architecture brainstorming.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue for feature requests.

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.
