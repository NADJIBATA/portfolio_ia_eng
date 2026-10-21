// All the text of the portfolio lives here. Edit this file to update the site.

export const profile = {
  name: "Nadjib Atamnia",
  role: "AI Engineer",
  focus: "Generative AI · RAG · LLM systems",
  location: "Paris, France",
  status: "Open to full-time roles (CDI) in AI, GenAI & ML",
  tagline:
    "I take AI models from research to production — retrieval pipelines, LLM agents, the backend that serves them and the interface people actually use.",
  email: "nadjib.atamnia.eng@gmail.com",
  github: "https://github.com/NADJIBATA",
  linkedin: "https://www.linkedin.com/in/nadjib213atamnia/",
  cv: "/cv/Nadjib_Atamnia_CV.pdf",
};

export const stats = [
  { value: "2", label: "AI internships — industry & research lab" },
  { value: "5", label: "end-to-end ML / LLM projects" },
  { value: "87%", label: "accuracy, Wav2Vec 2.0 on GTZAN" },
  { value: "M.Sc.", label: "Université Paris-Saclay (Évry)" },
];

export type Shot = { src: string; caption: string };

export type Project = {
  slug: string;
  kicker: string;
  title: string;
  summary: string;
  problem: string;
  highlights: string[];
  stack: string[];
  links: { label: string; href: string }[];
  shots?: Shot[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "doc-intelligence",
    kicker: "Featured · Personal project",
    title: "AI Document Intelligence Platform",
    summary:
      "A multi-tenant platform that lets users upload PDF, DOCX and TXT files, ask questions about them and get answers that cite the exact passages they come from.",
    problem:
      "Generic chatbots hallucinate on private documents. The goal was grounded answers a user can verify in one click, plus structured extraction and document comparison on top of the same retrieval layer.",
    highlights: [
      "Hybrid retrieval: BM25 + dense vectors in Qdrant, followed by a local neural reranker served with vLLM",
      "Async ingestion pipeline (FastAPI, Celery, Redis, PostgreSQL) with per-user data isolation",
      "Document Intelligence: LLM-extracted summary, type, author, keywords and key facts",
      "Document comparison by aspect (dates, clauses, obligations…), each difference backed by source passages",
      "React/TypeScript UI with conversational search and clickable citations",
    ],
    stack: ["Python", "FastAPI", "Celery", "Redis", "PostgreSQL", "Qdrant", "vLLM", "BM25", "React", "TypeScript"],
    links: [{ label: "Source code", href: "https://github.com/NADJIBATA/ai-document-intelligence" }],
    shots: [
      { src: "/projects/docintel-chat.webp", caption: "Chat with cited sources" },
      { src: "/projects/docintel-dashboard.webp", caption: "Workspace dashboard" },
      { src: "/projects/docintel-insights.webp", caption: "Structured extraction" },
      { src: "/projects/docintel-compare.webp", caption: "Document comparison" },
      { src: "/projects/docintel-documents.webp", caption: "Background indexing" },
    ],
    featured: true,
  },
  {
    slug: "ragmine",
    kicker: "Featured · Murata internship",
    title: "RAGMine — natural-language access to Redmine",
    summary:
      "An AI assistant that lets engineering teams query their Redmine projects, tickets and wikis in plain language, built as a set of microservices.",
    problem:
      "Knowledge was spread across thousands of Redmine tickets and wiki pages. Keyword search missed relevant results and gave no synthesis.",
    highlights: [
      "Orchestrator backend that routes each query between RAG, MCP tools (search, list_issues…) and plain chat — or picks automatically",
      "MCP service exposing Redmine as tools the LLM can call on live data",
      "Hybrid vector + lexical search with a neural reranking stage",
      "Document pipeline: extraction, cleaning, chunking, metadata enrichment, vector indexing",
      "Configurable reasoning effort and authentication with users' own Redmine accounts",
    ],
    stack: ["Python", "MCP", "LLM", "RAG", "Hybrid search", "Reranking", "Microservices", "Angular", "TypeScript"],
    links: [
      { label: "Backend", href: "https://github.com/NADJIBATA/RAGMine_backend" },
      { label: "Frontend", href: "https://github.com/NADJIBATA/RAGMine_frontend" },
    ],
    shots: [
      { src: "/projects/ragmine-chat.webp", caption: "Mode routing: Auto · RAG · MCP · Chat" },
      { src: "/projects/ragmine-login.webp", caption: "Sign-in with a Redmine account" },
    ],
    featured: true,
  },
  {
    slug: "apowerb",
    kicker: "Open source · Contributor",
    title: "apowerb — framework for production AI agents",
    summary:
      "Contributor to apowerb, an open-source (Apache-2.0) platform to build, orchestrate and operate AI agents in production — interactive or fully unattended.",
    problem:
      "Moving agents from demos to production needs orchestration, tools, knowledge, scheduling and governance in one self-hostable stack.",
    highlights: [
      "Agents built on Google ADK and LiteLLM, composed as sequential, parallel, loop or sub-agent flows",
      "MCP servers and built-in tools (Google Workspace, Microsoft 365, GitHub, SQL, S3…), RAG and Text-to-SQL",
      "Scheduled runs, webhooks, guardrails, audit traces and role-based permissions",
    ],
    stack: ["Python", "FastAPI", "Google ADK", "LiteLLM", "MCP", "PostgreSQL", "Docker"],
    links: [
      { label: "apowerb", href: "https://github.com/apowerb/apowerb" },
      { label: "My fork", href: "https://github.com/NADJIBATA/apowerb" },
    ],
  },
  {
    slug: "trace-generation",
    kicker: "Research · IBISC lab",
    title: "Generative models for cloud workload traces",
    summary:
      "Synthesising realistic job-flow scenarios from the Google Cluster dataset with probabilistic models and variational autoencoders.",
    problem:
      "Real cluster traces are scarce and sensitive; schedulers need realistic synthetic workloads — with a sense of how uncertain the generated scenarios are.",
    highlights: [
      "Literature review across IEEE, ACM and Elsevier on trace generation and uncertainty quantification",
      "Probabilistic models of the job-flow patterns observed in Google Cluster",
      "VAE-based generators producing realistic workload scenarios",
    ],
    stack: ["PyTorch", "VAE", "Probabilistic modelling", "Pandas", "Jupyter"],
    links: [{ label: "Source code", href: "https://github.com/NADJIBATA/google-cluster-trace-generation" }],
  },
  {
    slug: "wav2vec",
    kicker: "Deep learning",
    title: "Audio genre classification with Wav2Vec 2.0",
    summary:
      "Fine-tuning a self-supervised speech model for music genre classification on GTZAN, measured against a CNN baseline.",
    problem: "Does a model pre-trained on speech transfer to music — and is full fine-tuning worth its cost?",
    highlights: [
      "CNN on mel-spectrograms as a reference baseline",
      "Full fine-tuning vs. frozen backbone with a trained classification head",
      "Error and confusion analysis — best model reaches 87% accuracy",
    ],
    stack: ["PyTorch", "Hugging Face", "Wav2Vec 2.0", "Librosa"],
    links: [{ label: "Source code", href: "https://github.com/NADJIBATA/audio-genre-classification-gtzan-wav2vec" }],
  },
  {
    slug: "mini-gpt",
    kicker: "From first principles",
    title: "Mini-GPT — a decoder-only Transformer from scratch",
    summary: "A small GPT built and trained from zero to understand what happens inside an LLM.",
    problem: "Using LLMs well starts with knowing how they work — attention, tokenisation, sampling.",
    highlights: [
      "Causal self-attention, MLP, LayerNorm and residuals, trained on next-token prediction",
      "BPE tokenizer trained on WikiText-2 and a block-size batching pipeline",
      "Temperature & top-p sampling; interpretability with attention maps, logit lens and ablations",
    ],
    stack: ["PyTorch", "Transformers", "BPE", "Interpretability"],
    links: [{ label: "Source code", href: "https://github.com/NADJIBATA/MiniGpt_Wikit2text" }],
  },
];

export const experience = [
  {
    role: "AI Engineer Intern",
    org: "Murata",
    place: "Caen, France",
    period: "Mar 2026 — Aug 2026",
    points: [
      "Designed and built RAGMine, a microservices AI application querying Redmine data in natural language (RAG + MCP + LLM orchestrator).",
      "Implemented hybrid vector/lexical retrieval with neural reranking.",
      "Built the full document pipeline and the web front-end.",
    ],
  },
  {
    role: "Research Intern — Generative AI",
    org: "IBISC Lab, Université d'Évry Paris-Saclay",
    place: "Évry-Courcouronnes, France",
    period: "Dec 2025 — Feb 2026",
    points: [
      "Literature review on trace generation and uncertainty quantification.",
      "Probabilistic and VAE models to generate realistic cloud workload scenarios from Google Cluster data.",
    ],
  },
  {
    role: "M.Sc. Computer and Network Systems",
    org: "Université d'Évry Paris-Saclay",
    place: "Évry-Courcouronnes, France",
    period: "Oct 2024 — Jul 2026",
    points: [
      "Specialisation in AI and software engineering: machine learning, deep learning, reinforcement learning, multi-agent systems, cloud computing, game theory.",
    ],
  },
];

export const skills = [
  {
    group: "Generative AI",
    items: ["LLMs", "RAG", "MCP", "Agents & tool use", "LangChain", "Hybrid search", "BM25", "Reranking", "vLLM"],
  },
  {
    group: "ML & Deep Learning",
    items: ["PyTorch", "TensorFlow", "Hugging Face", "Scikit-learn", "XGBoost", "Random Forest", "VAE", "Transformers"],
  },
  {
    group: "Backend & Data",
    items: ["Python", "FastAPI", "Celery", "Node.js", "PostgreSQL", "Redis", "Qdrant"],
  },
  {
    group: "Frontend",
    items: ["TypeScript", "React", "Angular", "Tailwind CSS"],
  },
  {
    group: "DevOps & Cloud",
    items: ["Docker", "Apache Airflow", "Nexus Repository", "Scaleway", "Git", "Linux"],
  },
];

export const about = {
  photo: "/nadjib.webp",
  paragraphs: [
    "I'm a 22-year-old AI engineer based in Paris, with an M.Sc. in Computer and Network Systems from Université Paris-Saclay (Évry).",
    "My background mixes software engineering and ML research: at the IBISC lab I worked on generative models for cloud workloads, and at Murata I built a production RAG + MCP assistant used on real engineering data.",
    "What I enjoy most is the full path of an AI product — from reading the paper and setting a baseline, to the retrieval pipeline, the API, the deployment and the interface someone actually uses.",
  ],
};

export const principles = [
  { title: "Baseline first", text: "A clear metric and a simple baseline before anything clever." },
  { title: "Understand the why", text: "I implement methods from first principles before relying on them." },
  { title: "Ship services, not notebooks", text: "Typed APIs, workers, containers — code a team can maintain." },
];
