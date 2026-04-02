export const buildPrompt = (idea: string) => `
You are a Staff Principal System Design Engineer. 
Design a production-ready, highly scalable system for the following prompt: "${idea}"

### OUTPUT STRUCTURE (MANDATORY)
You MUST output exactly these 8 sections in this order. 
Each section title must be on its own line, preceded by its number.
There MUST be a blank line after each section title.
No extra markdown headers or formatting on the titles themselves.

1. Requirements
2. High-Level Architecture
3. Core Components
4. Scaling Strategy
5. Tradeoffs
6. Bottlenecks
7. Architecture Diagram
8. Real-World Tech Stack

---

### SECTION GUIDELINES:

1. Requirements:
- List Functional Requirements (what the system does)
- List Non-Functional Requirements (availability, latency, scalability targets)

2. High-Level Architecture:
- Provide a high-level overview of the request flow.
- Describe the interaction between major tiers.

3. Core Components:
- List specific services, databases, and infrastructure components.
- Explain the role of each component.

4. Scaling Strategy:
- Detail how the system handles 10x or 100x load.
- Mention sharding, replication, caching, and load balancing.

5. Tradeoffs:
- Explicitly state Why X over Y (e.g., NoSQL vs SQL, Consistent vs Available).

6. Bottlenecks:
- Identify single points of failure.
- Mention potential performance limits (e.g., network bandwidth, disk I/O).

7. Architecture Diagram:
- Provide ONLY the Mermaid.js code.
- DO NOT use code blocks (no \`\`\`).
- MUST start with "graph LR".
- Use Layered Architecture (Client, Edge, Service, Data, Infra).

8. Real-World Tech Stack:
- Provide a structured, layered tech stack in TEXT format.
- STRICT FORMAT:
  ━━━━━━━━━━━━━━━━━━━━━━━
  Frontend
  ━━━━━━━━━━━━━━━━━━━━━━━
  Web:
  - React / Next.js
  Mobile:
  - Swift / Kotlin
  ━━━━━━━━━━━━━━━━━━━━━━━
  Backend
  ━━━━━━━━━━━━━━━━━━━━━━━
  API Layer:
  - Node.js / Go / Java
  Architecture:
  - Microservices
  ━━━━━━━━━━━━━━━━━━━━━━━
  Data Layer
  ━━━━━━━━━━━━━━━━━━━━━━━
  Primary DB:
  - PostgreSQL / MySQL
  Cache:
  - Redis
  Search:
  - Elasticsearch
  ━━━━━━━━━━━━━━━━━━━━━━━
  Messaging
  ━━━━━━━━━━━━━━━━━━━━━━━
  - Kafka / RabbitMQ
  ━━━━━━━━━━━━━━━━━━━━━━━
  Infrastructure
  ━━━━━━━━━━━━━━━━━━━━━━━
  - AWS / GCP
  - Docker
  - Kubernetes
  ━━━━━━━━━━━━━━━━━━━━━━━
  DevOps
  ━━━━━━━━━━━━━━━━━━━━━━━
  - CI/CD: GitHub Actions
  - Monitoring: Prometheus / Grafana

- RULES:
  - Use separators exactly like above
  - Use bullet points
  - Keep it clean and readable
  - DO NOT use diagrams
  - DO NOT use markdown code blocks
  - DO NOT claim exact company stack
  - Use phrasing like: "Commonly used in similar systems"
  - Output must feel like real engineering documentation

---

### MERMAID DIAGRAM RULES (STRICT):
- Use "graph LR"
- NO semicolons.
- NO markdown wrappers.
- Each node and connection MUST be on its own line.
- Use subgraphs for layers:
  subgraph Client Layer
  subgraph Edge Layer
  subgraph Service Layer
  subgraph Data Layer
  subgraph Infra Layer
- Nodes should have descriptive labels, e.g., A[User App] or B[(PostgreSQL)].

---

### EXAMPLE DIAGRAM FORMAT:
graph LR

subgraph Client Layer
  A[User App]
end

subgraph Edge Layer
  B[API Gateway]
end

A --> B
`;