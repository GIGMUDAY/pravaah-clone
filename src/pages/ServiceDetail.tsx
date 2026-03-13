import { motion } from "framer-motion";
import { useEffect, useRef, useState, type CSSProperties, type MouseEvent } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  AtSign,
  CheckSquare,
  Briefcase,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  BadgeCheck,
  Code2,
  ChevronDown,
  ChevronUp,
  ClipboardCheck,
  FileText,
  FlaskConical,
  Globe,
  HandHeart,
  LifeBuoy,
  LineChart,
  Link2,
  Lightbulb,
  MessageCircle,
  Monitor,
  Percent,
  RefreshCw,
  Rocket,
  Search,
  MessageSquare,
  Share2,
  ShieldCheck,
  Settings,
  ShoppingBag,
  Smartphone,
  Store,
  PenTool,
  Server,
  Users,
  Video,
  FolderOpen,
  Handshake,
  Target,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import InfiniteMovingCards from "@/components/InfiniteMovingCards";
import LogoLoop from "@/components/LogoLoop";
import SocialTestimonialCard from "@/components/SocialTestimonialCard";
import { services } from "@/data/services";
import teamImg from "@/assets/team-collab.jpg";
import officeImg from "@/assets/office.jpg";
import heroBgImg from "@/assets/hero-bg.jpg";
import serviceProductImg from "@/assets/service-product-engineering.jpg";
import serviceEcommerceImg from "@/assets/service-ecommerce.jpg";
import serviceMarketingImg from "@/assets/service-marketing.jpg";
import serviceAgenticImg from "@/assets/service-agentic-ai.jpg";

const productEngineeringCapabilities = [
  {
    title: "Product Conceptualization and Prototyping",
    desc: "We kickstart your product journey by diving into your business needs, crafting ideal customer profiles, and developing specific concepts with clear roadmaps. Our rapid prototypes capture early feedback from stakeholders and users, enabling quick iterations to align features, timelines, and launches with market demands.",
  },
  {
    title: "Product and User Experience Design",
    desc: "Our design experts brainstorm innovative UIs through user research, wireframes, mockups, and high-fidelity prototypes, followed by thorough usability testing. The result is intuitive interfaces that boost engagement, drive sales, and meet your business goals.",
  },
  {
    title: "Custom Software Development",
    desc: "From native mobile apps and cross-platform web solutions to desktop software for Windows, macOS, and Linux, we build bespoke products using front-end technologies (React, Angular) and back-end technologies (Node.js, Python, .NET).",
  },
  {
    title: "Product Testing and Quality Assurance",
    desc: "Building on our robust testing services, we perform manual and automated checks for functional, non-functional, and UX issues, as well as edge cases. Load, stress, and performance testing guarantee reliability under high traffic and flawless releases.",
  },
  {
    title: "Product Maintenance and Support",
    desc: "Our proactive support keeps your products performing at high efficiency with regular updates, glitch fixes, and feature enhancements. We tackle adaptive, corrective, perfective, and preventive needs to reduce downtime and ensure long-term scalability.",
  },
  {
    title: "Cloud Services and DevOps",
    desc: "We migrate and manage your infrastructure across public, private, hybrid, and multi-cloud environments. This cloud-native synergy accelerates time-to-market, boosts scalability, and integrates smoothly with your tech stack.",
  },
  {
    title: "Security and Compliance",
    desc: "Security is baked in from day one. We assess risks, ensure GDPR/HIPAA compliance, apply threat modeling, encryption, and penetration testing across all stages to protect trust and data.",
  },
  {
    title: "Data Engineering, Analytics, and Visualization",
    desc: "Harness ETL/ELT pipelines, data lakes, and visualization tools built with Python to integrate large datasets and create interactive dashboards for actionable insights and better decisions.",
  },
  {
    title: "Data Science and AI/ML",
    desc: "Our AI/ML models uncover patterns in large datasets, predict trends, and power NLP-driven chatbots for automated support. Retention and segmentation analytics help personalize experiences and reduce risk.",
  },
  {
    title: "Generative AI Integration",
    desc: "Embrace GenAI with LLMs for automated document analysis, real-time summarization, 24/7 AI chatbots, and customized content generation while adapting to evolving market needs.",
  },
  {
    title: "Internet of Things (IoT) Solutions",
    desc: "We deliver end-to-end IoT from strategy and edge computing to custom platforms for healthcare wearables, industrial monitoring, and retail with real-time data collection.",
  },
  {
    title: "Blockchain Development",
    desc: "Through consulting and custom builds, we implement blockchain for secure transactions, smart contracts, tokenization, and trading platforms to improve traceability and efficiency.",
  },
];

const industries = [
  {
    title: "Healthcare",
    desc: "Pravaah optimizes healthcare with AI-driven diagnostics and telemedicine platforms for faster patient care and secure data handling. Our solutions reduce wait times and enhance service quality across providers.",
  },
  {
    title: "Logistics and Transportation",
    desc: "We build route optimization, fleet intelligence, and predictive maintenance products that reduce operational costs and improve delivery reliability.",
  },
  {
    title: "Manufacturing",
    desc: "Our product engineering teams create quality control systems, production intelligence dashboards, and predictive maintenance tools for smart factories.",
  },
  {
    title: "Retail",
    desc: "From omnichannel platforms to personalized recommendation engines, we help retailers drive conversion, retention, and customer lifetime value.",
  },
  {
    title: "SaaS",
    desc: "We architect cloud-native SaaS products with robust multi-tenant foundations, scalable APIs, and frictionless onboarding experiences.",
  },
  {
    title: "Enterprise",
    desc: "For large organizations, we modernize legacy systems and build secure digital platforms aligned with governance, compliance, and scale.",
  },
  {
    title: "Fintech",
    desc: "We design secure fintech applications, payment integrations, and analytics solutions with compliance-first engineering for high-trust transactions.",
  },
  {
    title: "E-commerce",
    desc: "We engineer high-performance storefronts, checkout systems, and customer data platforms to increase conversion and repeat purchase behavior.",
  },
  {
    title: "Supply Chain",
    desc: "Our supply-chain products provide real-time visibility, forecasting intelligence, and workflow automation to improve resilience and efficiency.",
  },
];

const productEngineeringProcess = [
  {
    step: "1",
    title: "Analysis and Planning",
    desc: "Pravaah starts by capturing business requirements, performing market research, and evaluating competition to confirm product feasibility and value. A clear roadmap is crafted, detailing resources, budgets, timelines, and milestones for agile execution and rapid market entry.",
  },
  {
    step: "2",
    title: "Defining Requirements",
    desc: "Business needs are refined into detailed specifications, use cases, and traceability matrices covering architecture, functionality, testing, and deployment. This ensures scalable, user-focused solutions tailored to industries such as healthcare and finance.",
  },
  {
    step: "3",
    title: "Design",
    desc: "Applying design thinking, Pravaah develops high-fidelity prototypes that address customer pain points, elevate UX, and align with business objectives. Solution architecture is designed to optimize component interactions using tools such as React and Node.js.",
  },
  {
    step: "4",
    title: "Development",
    desc: "Cross-functional teams of managers, developers, architects, and designers build robust solutions from validated prototypes, leveraging agile and DevOps practices. This delivers high-performance mobile, web, and custom products with minimized time-to-market.",
  },
  {
    step: "5",
    title: "Testing",
    desc: "Rigorous functional and non-functional testing, including automation and performance validation, eliminates defects for superior quality, security, and usability. Pravaah's approach guarantees reliable products ready for diverse real-world demands.",
  },
  {
    step: "6",
    title: "Deployment",
    desc: "Advanced strategies such as CI/CD pipelines and rolling deployments enable seamless, low-risk product launches. This supports Pravaah's focus on rapid adaptability in dynamic sectors such as e-commerce and transportation.",
  },
  {
    step: "7",
    title: "Maintenance",
    desc: "Continuous monitoring, feedback integration, and proactive updates address issues, drive enhancements, and respond to market shifts to ensure optimal uptime. Pravaah ensures sustained performance and customer loyalty through tailored long-term support.",
  },
];

const whyPartnerItems = [
  {
    title: "Skilled R&D Team",
    desc: "We have a skilled R&D team at the forefront of innovation, driving excellence in product engineering services. Using cutting-edge technologies, our team ensures visionary solutions that propel businesses into the future.",
  },
  {
    title: "Complete Range Of Product Testing",
    desc: "Our wide product testing services provide businesses with a full range of quality assurance, ensuring robust and dependable products.",
  },
  {
    title: "Clear Business Direction And Plan",
    desc: "Our clear business direction and strategic planning lead to precision and success in software development. For businesses navigating the dynamic landscape of product development, this focused approach ensures efficient execution and optimal outcomes.",
  },
  {
    title: "Technology Adaptable",
    desc: "Our technologically adaptable approach provides businesses with versatile product engineering services. Our rapid adoption of cutting-edge technologies ensures seamless integration and future-ready products for long-term success.",
  },
  {
    title: "Optimized Design",
    desc: "Our optimized design approach ensures efficiency, functionality, and user-centric solutions, enhancing businesses with streamlined and superior products. Our design strategies prioritize performance and user experience, which contribute to the market success of your products.",
  },
  {
    title: "Reducing Development Cost",
    desc: "We specialize in lowering business development costs through efficient resource allocation and strategic optimization in product engineering services. Our low-cost solutions ensure high-quality results without sacrificing innovation or performance.",
  },
  {
    title: "Customer-Driven Management",
    desc: "We create products that resonate with end-users by prioritizing client requirements, which contributes to long-term relationships and market competitiveness. We ensure tailored solutions that meet the needs of our clients, fostering customer satisfaction and business success.",
  },
  {
    title: "Market Relevance",
    desc: "Our dedication to market relevance in product engineering services ensures that businesses stay ahead of the competition by delivering solutions that align with industry trends and user expectations.",
  },
];

const partnerImages = [
  {
    src: serviceProductImg,
    alt: "Product mockup",
    desktopClass: "top-[4%] left-2 w-[220px] h-[120px] xl:w-[260px] xl:h-[145px]",
    mobileClass: "mt-0",
  },
  {
    src: serviceAgenticImg,
    alt: "Technology concept",
    desktopClass: "top-[9%] left-[24%] w-[240px] h-[135px] xl:w-[290px] xl:h-[165px]",
    mobileClass: "mt-6",
  },
  {
    src: officeImg,
    alt: "Office setup",
    desktopClass: "top-[20%] left-3 w-[220px] h-[125px] xl:w-[260px] xl:h-[150px]",
    mobileClass: "mt-1",
  },
  {
    src: heroBgImg,
    alt: "Chip and circuitry",
    desktopClass: "top-[26%] left-[26%] w-[230px] h-[130px] xl:w-[280px] xl:h-[160px]",
    mobileClass: "mt-4",
  },
  {
    src: officeImg,
    alt: "Bridge and city lights",
    desktopClass: "top-[36%] left-5 w-[220px] h-[120px] xl:w-[265px] xl:h-[145px]",
    mobileClass: "mt-2",
  },
  {
    src: serviceMarketingImg,
    alt: "Digital screen lighting",
    desktopClass: "top-[43%] left-[27%] w-[240px] h-[130px] xl:w-[290px] xl:h-[160px]",
    mobileClass: "mt-5",
  },
  {
    src: serviceEcommerceImg,
    alt: "Controller close-up",
    desktopClass: "top-[54%] left-3 w-[230px] h-[125px] xl:w-[275px] xl:h-[150px]",
    mobileClass: "mt-2",
  },
  {
    src: serviceProductImg,
    alt: "Product design close-up",
    desktopClass: "top-[60%] left-[26%] w-[230px] h-[125px] xl:w-[280px] xl:h-[150px]",
    mobileClass: "mt-6",
  },
  {
    src: heroBgImg,
    alt: "Neon chip view",
    desktopClass: "top-[70%] left-4 w-[220px] h-[120px] xl:w-[265px] xl:h-[145px]",
    mobileClass: "mt-3",
  },
  {
    src: serviceAgenticImg,
    alt: "AI dashboard detail",
    desktopClass: "top-[76%] left-[26%] w-[235px] h-[125px] xl:w-[285px] xl:h-[150px]",
    mobileClass: "mt-5",
  },
  {
    src: serviceMarketingImg,
    alt: "Analytics workspace",
    desktopClass: "top-[82%] left-3 w-[225px] h-[120px] xl:w-[270px] xl:h-[145px]",
    mobileClass: "mt-2",
  },
  {
    src: serviceEcommerceImg,
    alt: "Hardware product close-up",
    desktopClass: "top-[86%] left-[27%] w-[230px] h-[125px] xl:w-[280px] xl:h-[150px]",
    mobileClass: "mt-5",
  },
];

const digitalToolboxItems = [
  {
    name: "Angular Js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "React Js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node Js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Kotlin",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  },
  {
    name: "HTML 5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "Microsoft .Net",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
  },
];

const projectStories = [
  {
    title: "EMH Sports",
    image: serviceProductImg,
    summaryTitle: "Engineering the Future: Our Portfolio of High-Impact Solutions",
    summary:
      "Explore how plus Consulting empowers global enterprises to ignite growth through transformative product engineering services. From Agentic AI and custom software development to high-level digital strategy, our work showcases the measurable business value we deliver. Join over 100 satisfied clients who have scaled with our future-ready, accelerated solutions.",
  },
  {
    title: "Growth Commerce Suite",
    image: serviceEcommerceImg,
    summaryTitle: "Engineering the Future: Our Portfolio of High-Impact Solutions",
    summary:
      "We design and deliver scalable commerce platforms that increase conversion, streamline operations, and improve customer retention. Through robust architecture and data-driven optimization, our teams help businesses launch faster and grow with confidence.",
  },
  {
    title: "AI Operations Hub",
    image: serviceAgenticImg,
    summaryTitle: "Engineering the Future: Our Portfolio of High-Impact Solutions",
    summary:
      "Our AI-led product engineering unlocks automation across service delivery, analytics, and decision-making workflows. The result is improved operational efficiency, reduced costs, and highly adaptive digital products aligned with business goals.",
  },
];

const testimonials = [
  {
    quote:
      "Pravaah transformed our legacy systems into a scalable product suite, cutting deployment time by 40% with agile engineering. Their expertise in React and cloud-native design exceeded expectations for our healthcare platform.",
    name: "Shirley M.,",
    role: "Operations Manager",
  },
  {
    quote:
      "Security-first product engineering from Pravaah secured our fintech app against threats while enabling rapid iterations. We achieved 100% compliance and a 30% performance boost, true partners in innovation.",
    name: "Mark T.,",
    role: "CTO",
  },
  {
    quote:
      "Pravaah's mobile product development launched our ecommerce app under budget and ahead of schedule. Their DevOps integration drove 25% higher user retention, giving us a competitive edge.",
    name: "Jessica L.,",
    role: "CEO",
  },
  {
    quote:
      "Our modernized web product from Pravaah spiked engagement by 30% through AI personalization and seamless UX. Their end-to-end process ensured market-ready quality every step.",
    name: "David K.,",
    role: "Marketing Director",
  },
];

const aiMlServices = [
  {
    id: "01",
    title: "AI Strategy, Architecture & Responsible Governance",
    desc: "From use case discovery to GenAI policy design, we empower your organization to build the strategy, governance frameworks, and Centers of Excellence (CoE) that make AI adoption scalable, responsible, and real, ensuring alignment with ethical and business standards.",
  },
  {
    id: "02",
    title: "Full-Lifecycle ML Model Design & Deployment",
    desc: "We transition your data from insight to impact. Our experts design, build, and deploy robust Machine Learning models that process complex enterprise data, unlocking smarter, predictive decisions and streamlined operational efficiency across your business landscape.",
  },
  {
    id: "03",
    title: "AI-Native Product & Application Development",
    desc: "Leverage our proprietary AI-native framework to accelerate your product roadmap. We develop tailored AI and ML solutions designed for real-time personalization and seamless integration, delivering maximum business agility and a game-changing customer experience.",
  },
  {
    id: "04",
    title: "Bespoke AI Solution Development",
    desc: "Your business challenges demand unique solutions. We engineer custom AI systems around your specific goals, building tailored models, workflows, and integrations that drive measurable business impact and sustainable growth at scale.",
  },
  {
    id: "05",
    title: "Secure & Compliant Enterprise AI",
    desc: "We design AI systems with security, compliance, and audit-readiness integrated right from Day One. From secure data handling to resilient deployment, we fortify your AI investments, providing the intelligent protection your business needs to operate confidently.",
  },
  {
    id: "06",
    title: "AI Model Performance & Managed Services",
    desc: "Ensure your AI assets consistently run at peak performance and deliver maximum ROI. We provide comprehensive managed services, handling continuous monitoring, tuning, and compliance updates, so your models evolve seamlessly as your business scales.",
  },
  {
    id: "07",
    title: "Generative AI (GenAI) Implementation",
    desc: "Move beyond prototypes to practical, transformative GenAI solutions. From defining the strategic roadmap for secure, full-scale integration to embedding generative AI into your core workflows, we enhance creativity, automate processes, and achieve massive efficiency gains.",
  },
  {
    id: "08",
    title: "Intelligent AI Agent Development",
    desc: "Design AI agents that act with context and intelligence, not just code. We build task-specific, multi-modal agents that revolutionize customer interactions, streamline internal processes, and empower real-time, data-driven decisions.",
  },
  {
    id: "09",
    title: "Edge AI & Real-Time Inference",
    desc: "Bring intelligence closer to the action and eliminate dependence on cloud latency. We build and deploy edge-ready models that enable rapid, real-time inference and processing, making instantaneous decision-making possible across distributed and operational environments.",
  },
];

const aiIndustrySolutions = [
  {
    title: "Insurance",
    intro:
      "Facilitate complex claims, enhance underwriting accuracy, and preemptively detect fraudulent activities.",
    points: [
      "Automate and accelerate claims processing using anomaly detection to flag exceptions and auto-prioritize reports.",
      "Employ predictive ML models for real-time fraud detection and early pattern analysis across policies and transactions.",
      "Minimize administrative burden by automating data entry and compliance checks, allowing adjusters to focus on high-value decisions.",
      "Implement scalable AI/ML solutions optimized for regulatory compliance and faster time-to-value.",
    ],
  },
  {
    title: "Healthcare",
    intro:
      "Improve patient outcomes and operational efficiency with AI-powered diagnostics, workflow automation, and predictive insights.",
    points: [
      "Support early disease detection with AI-assisted imaging and risk scoring models.",
      "Optimize appointment scheduling, triage, and care coordination with intelligent automation.",
      "Apply NLP to clinical notes for better documentation quality and decision support.",
      "Strengthen compliance and data privacy with secure model governance and monitoring.",
    ],
  },
  {
    title: "Retail & E-commerce",
    intro:
      "Increase conversion and customer lifetime value through hyper-personalization and demand-aware automation.",
    points: [
      "Deploy recommendation engines based on behavior, preference, and purchase intent signals.",
      "Use AI forecasting to optimize inventory, promotions, and replenishment planning.",
      "Automate support and engagement using intelligent chat and agent-assist solutions.",
      "Detect churn early and trigger retention strategies with predictive customer analytics.",
    ],
  },
  {
    title: "Fintech",
    intro:
      "Build secure, compliant, and intelligent financial products with real-time risk and fraud intelligence.",
    points: [
      "Improve credit decisioning with explainable ML scoring models.",
      "Detect suspicious activity in real time with anomaly and graph-based analytics.",
      "Automate KYC/AML workflows using document intelligence and pattern detection.",
      "Increase platform performance with model observability and continuous optimization.",
    ],
  },
  {
    title: "Manufacturing & Industrial IoT",
    intro:
      "Drive smarter production with predictive maintenance, quality intelligence, and connected operations.",
    points: [
      "Predict equipment failures before downtime impacts output and revenue.",
      "Detect defects using computer vision pipelines integrated with production lines.",
      "Optimize throughput with AI-driven scheduling and resource allocation models.",
      "Unify sensor data for real-time decisioning across plants and supply networks.",
    ],
  },
  {
    title: "Logistics & Supply Chain",
    intro:
      "Enhance visibility, reliability, and cost efficiency across transport and fulfillment operations.",
    points: [
      "Forecast demand and route capacity to reduce delays and inventory imbalance.",
      "Improve ETA accuracy using live traffic, weather, and operational signals.",
      "Automate exception handling with intelligent alerts and decision workflows.",
      "Boost resilience with scenario modeling and predictive disruption analytics.",
    ],
  },
];

const endToEndApproach = [
  {
    title: "Strategic Discovery & Outcome Roadmapping",
    desc: "We start by identifying your most critical business challenge, define measurable success metrics, and map a focused AI roadmap tied to real outcomes.",
  },
  {
    title: "Enterprise Data Audit & Feasibility Check",
    desc: "Our team audits data quality, structure, and compliance to validate AI/ML feasibility and remove technical or regulatory blockers before build.",
  },
  {
    title: "Accelerated Deployment: From POC to Enterprise Scale",
    desc: "We rapidly launch a Proof of Concept, validate it as an MVP, then scale to production with security, performance, and integration built in.",
  },
  {
    title: "Agile & Iterative Model Development Sprints",
    desc: "We work in short agile sprints for continuous testing, learning, and tuning so deployment speed stays aligned with quality and business goals.",
  },
  {
    title: "Responsible AI (RAI) & Trust by Design",
    desc: "From day one, we embed ethical guardrails including bias monitoring, privacy controls, and explainability to deliver reliable and trusted AI systems.",
  },
];

const aiMlJourney = [
  {
    id: "01",
    title: "AI Readiness & Foundation Audit",
    desc: "We begin by auditing your foundational elements: current data quality, infrastructure maturity, existing workflows, and team capabilities. This step ensures your environment is optimized for a successful AI initiative, whether it involves Generative AI or classic ML.",
  },
  {
    id: "02",
    title: "Strategic Use Case Definition",
    desc: "Working collaboratively, we identify high-impact opportunities where AI will measurably move the needle for your business. Every use case is clearly defined, tied directly to key performance indicators (KPIs), and vetted for both business alignment and technical feasibility.",
  },
  {
    id: "03",
    title: "Model Development & Training",
    desc: "Based on the problem, we select and build the appropriate solution, from custom-tuned LLMs and computer vision to predictive analytics models. We train it on your proprietary data, optimize for performance, and prioritize transparency and control.",
  },
  {
    id: "04",
    title: "Testing, Validation, and Ethical Review",
    desc: "Before deployment, we rigorously test the model under pressure to identify edge cases, look for hidden issues, and ensure compliance. This validation step incorporates our Responsible AI practices to guarantee the solution is robust, fair, and ready for real-world operations.",
  },
  {
    id: "05",
    title: "Integration & Production Deployment",
    desc: "Our solutions are built for scale and integration. We deploy models into your production environment, integrating them seamlessly through APIs, embedding them into existing applications, and orchestrating them via cloud-native, containerized workflows for zero-touch operation.",
  },
  {
    id: "06",
    title: "Continuous Monitoring & Iteration",
    desc: "Post-launch, we maintain a vigilant focus on performance, data drift, and user interaction. The best machine learning services never stop learning: we adapt, retrain, and refine the model continuously based on feedback and shifting business needs to ensure long-term effectiveness.",
  },
];

const whyChooseUsItems = [
  { 
    title: "Innovative Solutions", 
    icon: Lightbulb,
    desc: "We stay at the bleeding edge of AI research, bringing the latest breakthroughs in Agentic workflows and RAG systems directly to your business challenges."
  },
  { 
    title: "Industry-Centric Competence", 
    icon: Globe,
    desc: "Our models aren't generic; they are fine-tuned with deep domain knowledge across healthcare, finance, and logistics for maximum operational impact."
  },
  { 
    title: "Collaboration with Clients", 
    icon: Users,
    desc: "We believe in co-creation. Our engineers work as an extension of your team to ensure every AI solution aligns perfectly with your internal culture and goals."
  },
  { 
    title: "Data-Driven Decision-Making", 
    icon: FileText,
    desc: "Every recommendation we make is backed by rigorous data analysis and empirical testing, turning your raw data into a strategic competitive advantage."
  },
  { 
    title: "Responsible and Ethical AI", 
    icon: BadgeCheck,
    desc: "Trust is paramount. We build ethical guardrails, bias monitoring, and full explainability into every model to ensure fair and transparent outcomes."
  },
];

const aiMlTechStack = [
  {
    category: "Programming Language",
    tools: ["Python", "TypeScript"],
  },
  {
    category: "Core Machine Learning Frameworks",
    tools: ["PyTorch", "TensorFlow", "JAX", "Keras"],
  },
  {
    category: "Large Language Model Frameworks & Retrieval-Augmented Generation (RAG)",
    tools: ["LlamaIndex", "LangChain", "DSPy"],
  },
  {
    category: "Agentic AI Platforms",
    tools: ["LangGraph", "CrewAI"],
  },
  {
    category: "Models and API Providers",
    tools: ["OpenAI", "Anthropic", "Gemini", "Mistral", "Cohere", "Groq", "Hugging Face"],
  },
  {
    category: "Vector Databases",
    tools: ["Pinecone", "Weaviate", "Qdrant", "ChromaDB", "FAISS"],
  },
  {
    category: "Natural Language Processing (NLP) & Computer Vision Tools",
    tools: ["spaCy", "Hugging Face Transformers", "Sentence Transformers", "YOLO", "OpenCV", "SAM"],
  },
  {
    category: "Model Fine-Tuning Tools",
    tools: ["Axolotl", "Unsloth", "PEFT"],
  },
  {
    category: "Data Labeling Platforms",
    tools: ["Label Studio"],
  },
  {
    category: "Observability and Experiment Tracking",
    tools: ["MLflow", "Weights & Biases", "LangSmith"],
  },
  {
    category: "Deployment and Inference Tools",
    tools: ["vLLM", "Ollama", "Docker", "Kubernetes", "Vertex AI"],
  },
  {
    category: "DevOps and Continuous Integration / Continuous Deployment (CI/CD)",
    tools: ["GitHub Actions", "GitLab"],
  },
];

const ecommerceGuidanceServices = [
  {
    title: "Ecommerce Consulting",
    desc: "We guide you on business models, technology stacks, and operations to boost efficiency and deliver seamless customer experiences tailored to your market.",
    icon: Briefcase,
  },
  {
    title: "Custom Ecommerce Development",
    desc: "Transition to headless, decoupled architectures for ultimate flexibility. Leverage AI enhancements like personalized recommendations and voice-enabled shopping.",
    icon: Code2,
  },
  {
    title: "Platform-Based Ecommerce Development",
    desc: "Launch fast with proven platforms like Shopify, BigCommerce, or Adobe Commerce with scalable solutions optimized for growth and multi-location SEO/AEO.",
    icon: Store,
  },
  {
    title: "Mobile Ecommerce Apps",
    desc: "Extend your webstore to mobile with branded apps, enabling anytime shopping and push notifications for higher engagement.",
    icon: Smartphone,
  },
  {
    title: "Ecommerce Front-End Development",
    desc: "Craft modern, responsive storefronts using the latest frameworks for fast load times and superior UX perfect for converting users.",
    icon: Monitor,
  },
  {
    title: "Ecommerce Back-End Development",
    desc: "Build secure, scalable logic with enterprise-grade technologies to ensure smooth inventory, payments, and AI-driven personalization.",
    icon: Server,
  },
  {
    title: "Ecommerce Website Design",
    desc: "Deliver pixel-perfect UX/UI through audience research, competitor insights, branding, and rigorous testing for intuitive navigation.",
    icon: PenTool,
  },
  {
    title: "Ecommerce Integrations",
    desc: "Seamlessly connect CRM, ERP, and third-party tools via APIs for automated data flow and operations.",
    icon: Link2,
  },
  {
    title: "Ecommerce Migration",
    desc: "Upgrade from legacy systems to flexible architectures, migrating data without downtime to fuel business growth.",
    icon: RefreshCw,
  },
  {
    title: "Ecommerce Audit",
    desc: "Audit your platform for code issues, security gaps, performance bottlenecks, and UX flaws, then map out fixes to achieve peak efficiency.",
    icon: Search,
  },
  {
    title: "Ongoing Support & Evolution",
    desc: "Partner long-term for monitoring, troubleshooting, feature rollouts, and major upgrades like AI integrations or platform migrations.",
    icon: LifeBuoy,
  },
];

const ecommerceExpertiseAreas = [
  {
    title: "Wix",
    desc: "As a Wix Legend Partner, we offer expert development and optimization for your ecommerce platform, ensuring a smooth customer journey and increased revenue.",
    icon: CheckCircle2,
  },
  {
    title: "BigCommerce",
    desc: "Scale faster with expert BigCommerce development. We specialize in complex ERP integrations, B2B portals, and multi-storefront management to build high-performance stores.",
    icon: FolderOpen,
  },
  {
    title: "Wordpress / WooCommerce",
    desc: "As an eCommerce agency in the USA, we help you take your business online. WooCommerce gives the brand an amazing presence across all channels.",
    icon: Settings,
  },
  {
    title: "Shopify",
    desc: "As a specialized Shopify development company, we focus on frictionless checkouts, AI-powered product recommendations, and intuitive navigation.",
    icon: ShoppingBag,
  },
  {
    title: "Magento 2.0",
    desc: "As an eCommerce agency, Pravaah recommends Magento Commerce to provide a better in-store experience, increasing loyalty and sales of products.",
    icon: Percent,
  },
  {
    title: "Website Development",
    desc: "Our custom website development services are curated to deliver secure, scalable, and unique solutions.",
    icon: BadgeCheck,
  },
];

const ecommerceBusinessModelSolutions = [
  {
    id: "01",
    title: "Microservices-Based Ecommerce",
    desc: "Our solution architects design and deploy modular microservices for rapid scaling. Ideal for growing ecommerce brands needing flexible, high-traffic operations.",
  },
  {
    id: "02",
    title: "Multi-Store Platforms",
    desc: "Expand into new markets or segments with a unified multistore setup. Manage multiple languages, catalogs, and inventory from one dashboard for global reach.",
  },
  {
    id: "03",
    title: "Online Marketplaces",
    desc: "Build product or service marketplaces with tailored seller onboarding, order flows, and revenue models. Optimized for owners, sellers, and buyers in B2B tech ecosystems.",
  },
  {
    id: "04",
    title: "Web Portals",
    desc: "Create vendor portals, customer hubs, or brand experiences with custom workflows. Perfect for retail businesses focused on engagement, catalog sharing, and supply chain efficiency.",
  },
  {
    id: "05",
    title: "Headless Commerce",
    desc: "Leverage decoupled architectures for template-free designs across web, mobile, IoT devices, and AR/VR. Deliver consistent, omnichannel experiences with AI personalization.",
  },
  {
    id: "06",
    title: "Progressive Web Apps (PWA)",
    desc: "One app for web and mobile users, automatically adapting layouts for any screen. Boost engagement and conversions with app-like speed on any device.",
  },
  {
    id: "07",
    title: "B2C Ecommerce",
    desc: "Craft consumer webstores with stunning UI, smart personalization, and scalable infrastructure. Drive conversions through data-driven insights tailored to your audience.",
  },
  {
    id: "08",
    title: "B2B Ecommerce",
    desc: "Target business buyers with streamlined journeys that simplify complex decisions. Integrate CRM, bulk ordering, and compliance features for enterprise operations.",
  },
];

const ecommerceNewAgeTechs = [
  {
    title: "Virtual Try-Ons",
    desc: "Let customers preview products like clothing or makeup in AR, reducing returns through realistic simulations.",
  },
  {
    title: "Virtual Try-Outs",
    desc: "Enable hands-on VR demos of items like furniture or jewelry, personalizing the shopping journey.",
  },
  {
    title: "Live Video Consultations",
    desc: "Offer real-time stylist or expert sessions to build trust and drive immediate sales.",
  },
  {
    title: "3D Modeling",
    desc: "Build interactive product visuals with 360-degree views to enhance catalog appeal on your custom ecommerce site.",
  },
  {
    title: "Voice-Assisted Shopping",
    desc: "Integrate AI voice features for seamless, hands-free browsing and purchases.",
  },
  {
    title: "Decentralized Marketplaces",
    desc: "Leverage blockchain for secure, peer-to-peer trading platforms tailored to your brand.",
  },
  {
    title: "Interactive User Manuals",
    desc: "Embed dynamic guides with AR overlays to simplify product onboarding and support.",
  },
  {
    title: "IoT-Powered Ecommerce Operations",
    desc: "Connect smart devices for real-time inventory, personalized alerts, and automated fulfillment.",
  },
];

const ecommerceOperationsItems = [
  {
    title: "Inventory Management",
    desc: "Build real-time stock visibility, automated replenishment rules, and demand-aware inventory controls across channels.",
  },
  {
    title: "Order Management",
    desc: "Orchestrate orders from capture to fulfillment with automation for routing, status tracking, and exception handling.",
  },
  {
    title: "Logistics Management",
    desc: "Optimize delivery operations using intelligent carrier selection, shipment tracking, and SLA performance monitoring.",
  },
  {
    title: "Product Information Management (PIM)",
    desc: "Centralize and enrich product data to ensure consistent, high-quality catalog experiences across marketplaces and stores.",
  },
  {
    title: "Digital Marketing Automation",
    desc: "Automate campaign workflows, segmentation, and lifecycle messaging to improve conversion and retention at scale.",
  },
  {
    title: "Retail Business Intelligence (BI)",
    desc: "Turn commerce data into actionable insights with KPI dashboards, forecasting models, and decision-ready reporting.",
  },
];

const ecommerceTransformationBenefits = [
  {
    id: "01",
    title: "Increased Sales Opportunities",
    desc: "With a 24/7 online presence, you can reach customers anytime, anywhere, leading to higher sales and revenue growth.",
  },
  {
    id: "02",
    title: "Enhanced Customer Experience",
    desc: "Our user-friendly designs and seamless navigation create a shopping experience that keeps customers returning for more.",
  },
  {
    id: "03",
    title: "Cost Efficiency",
    desc: "Reduce operational costs by automating processes like inventory management and order fulfillment, allowing you to focus on growth.",
  },
  {
    id: "04",
    title: "Wider Market Reach",
    desc: "Break geographical barriers and tap into a global customer base, expanding your market reach beyond local limitations.",
  },
  {
    id: "05",
    title: "Data-Driven Insights",
    desc: "Leverage analytics to understand customer behavior, optimize marketing strategies, and make informed business decisions.",
  },
  {
    id: "06",
    title: "Scalability and Flexibility",
    desc: "Our eCommerce solutions grow with your business, easily adapting to changing needs and market demands for sustained success.",
  },
];

const ecommerceShowcaseProjects = [
  {
    title: "Unleashed Perfumes",
    image:
      "https://images.pexels.com/photos/5632398/pexels-photo-5632398.jpeg?auto=compress&cs=tinysrgb&w=1400",
    summary:
      "Success in digital commerce isn't an accident, it's engineered. Explore our portfolio of recent projects where we've helped brands overcome technical hurdles and aesthetic plateaus. From reducing bounce rates to increasing checkout conversions by 40%, these case studies showcase how plus Consulting turns complex business challenges into seamless, high-growth online stores.",
  },
  {
    title: "Elite Lifestyle Store",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1400",
    summary:
      "We redesigned the storefront and checkout architecture to improve mobile performance and conversion. The result was faster page speed, stronger retention, and a measurable uplift in average order value across key campaigns.",
  },
  {
    title: "Modern Commerce Hub",
    image:
      "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1400",
    summary:
      "By combining UX simplification, catalog optimization, and personalization, we transformed a fragmented buying journey into a streamlined experience that increased repeat purchases and reduced cart abandonment.",
  },
];

const ecommerceHowWeWork = [
  {
    title: "Discover & Plan",
    desc: "We get to know you and your vision for your online store. What are your goals? Who are your customers? We choose the best platform for your needs and map out a winning strategy.",
    icon: FileText,
  },
  {
    title: "Design & Build",
    desc: "Our design team crafts a stunning, custom website that reflects your brand and wows your customers. We develop a user-friendly, mobile-optimized site that makes shopping a breeze.",
    icon: Settings,
  },
  {
    title: "Connect & Integrate",
    desc: "We seamlessly integrate your website with essential tools like payment gateways, shipping providers, and marketing platforms.",
    icon: Link2,
  },
  {
    title: "Test & Launch",
    desc: "We thoroughly test everything to ensure your site is secure, fast, and ready for customers. Then, we launch your new online store to the world!",
    icon: Rocket,
  },
  {
    title: "Grow & Optimize",
    desc: "Lastly, we provide ongoing support, monitor your site's performance, and keep it up-to-date with the latest trends. Together, we'll fine-tune your strategy to maximize sales and customer satisfaction!",
    icon: LineChart,
  },
  {
    title: "Analyze & Refine",
    desc: "We continuously analyze your site's performance using data analytics tools. Based on insights, we refine your marketing strategy and make adjustments to ensure your online store stays competitive and continues to grow.",
    icon: BarChart3,
  },
];

const ecommerceTestimonials = [
  {
    quote:
      "Since partnering with plus Consulting, our online sales have skyrocketed! They created a stunning website that looks great and converts visitors into loyal customers. Highly recommend!",
    name: "Sarah M.",
    role: "Owner of Fashion Boutique",
  },
  {
    quote:
      "Pravaah delivered a highly customized eCommerce solution tailored to our needs. Their expertise in Magento made integration seamless, and our new site functions flawlessly. We're thrilled with the results!",
    name: "David L.",
    role: "CEO",
  },
  {
    quote:
      "Choosing Pravaah for our Wix store was the best decision! They designed a user-friendly site that perfectly reflects our brand. Plus, their SEO strategies have boosted our visibility significantly!",
    name: "Emily K.",
    role: "Founder of Homemade Good Store",
  },
  {
    quote:
      "plus Consulting is more than just a web design agency; they're a true partner. Their ongoing support and proactive guidance keep our online store running smoothly. We couldn't ask for better service!",
    name: "Michael B.",
    role: "Marketing Manager of Home Decor",
  },
];

const marketingServices = [
  {
    id: "01",
    title: "Web Design & Development",
    desc: "Build visually stunning, SEO-optimized websites tailored to business goals, including omnichannel integration for seamless user experiences across platforms. Services cover WordPress design, Shopify design, Magento design, custom development, e-commerce optimization, Wix, and site maintenance.",
  },
  {
    id: "02",
    title: "Pay Per Click Advertising",
    desc: "Launch targeted PPC campaigns via Google Ads, Facebook Ads, and more to drive high-ROI traffic with remarketing, landing pages, and e-commerce focus. Ties into Pravaah's branding and advertising for cohesive ad strategies that boost conversions.",
  },
  {
    id: "03",
    title: "Search Engine Optimization",
    desc: "Elevate rankings through local SEO, national SEO, e-commerce SEO, technical SEO audit, blogging (content creation), franchise SEO, AEO, and GEO, aligning with Pravaah's visibility-boosting expertise.",
  },
  {
    id: "04",
    title: "Email & SMS Marketing",
    desc: "Deliver personalized campaigns with marketing automation, email newsletters, Klaviyo/Mailchimp expertise, and SMS marketing, enhanced by Pravaah's email strategy for audience resonance.",
  },
  {
    id: "05",
    title: "Social Media Marketing",
    desc: "Grow engagement on Facebook and Instagram, X, LinkedIn, video and short-form marketing, plus influencer marketing and graphic design for posts. Complements Pravaah's SMM and omnichannel approach for brand loyalty.",
  },
  {
    id: "06",
    title: "Additional Services",
    desc: "Reputation management builds trust via online monitoring, while graphic design and video marketing support all channels. Amazon marketing optimizes e-commerce listings for sales growth.",
  },
];

const marketingIndustries = [
  {
    title: "Retail and e-commerce",
    desc: "Boost conversion, retention, and average order value with omnichannel campaigns, lifecycle automation, and performance marketing tailored to digital storefronts.",
  },
  {
    title: "Healthcare",
    desc: "Strengthen patient engagement and service awareness through compliant digital campaigns, educational content, and trust-focused brand strategy.",
  },
  {
    title: "Finance and banking",
    desc: "Drive qualified lead generation with high-intent paid media, SEO authority building, and conversion-focused funnels for financial services.",
  },
  {
    title: "Education",
    desc: "Increase enrollments through targeted outreach, social proof storytelling, and channel-specific campaigns for institutions and edtech brands.",
  },
  {
    title: "Travel and hospitality",
    desc: "Capture demand with seasonal campaigns, personalized remarketing, and visibility strategies that turn discovery into bookings.",
  },
  {
    title: "Real estate",
    desc: "Generate high-quality buyer and seller leads through local SEO, paid search, and geo-targeted campaigns for listings and projects.",
  },
  {
    title: "Automotive",
    desc: "Accelerate inquiries and showroom traffic using inventory-focused campaigns, model-specific landing pages, and full-funnel optimization.",
  },
  {
    title: "Food and beverage",
    desc: "Grow brand affinity and repeat purchases through social-first storytelling, influencer collaboration, and promotion-led campaign execution.",
  },
  {
    title: "Professional services",
    desc: "Position your expertise with authority content, search visibility, and strategic lead-generation funnels built for service conversion.",
  },
  {
    title: "Local services",
    desc: "Improve local discovery with map optimization, review strategy, and high-converting ads that drive calls, bookings, and walk-ins.",
  },
];

const marketingFeatureHighlights = [
  {
    label: "Results-Driven Website Design",
    title: "Get a fantastic website that converts visitors into loyal customers.",
    desc: "Enhance your brand with a high-performance site designed for your business goals. Pravaah's expert designers craft responsive websites that load fast, shine on every device, and drive measurable results through clear calls-to-action and SEO optimization.",
    metric: "150+",
    metricText: "Successful websites launched for clients since 2018.",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1400",
    reverse: false,
    icon: Monitor,
  },
  {
    label: "Certified Pay-Per-Click (PPC) Advertising",
    title: "Improve your ROI with targeted PPC strategies",
    desc: "plus Consulting ranks among the elite digital marketing agencies, blending proven performance with exceptional client service. Our PPC specialists deliver track records of business growth, leveraging data-driven campaigns to capture high-intent leads and outperform competitors.",
    image:
      "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1400",
    reverse: true,
    icon: Percent,
  },
  {
    label: "Proven Organic SEO Approach",
    title: "Drive more organic traffic to your website with Pravaah's expert SEO strategies.",
    desc: "Get qualified traffic on search terms that matter to your business. Pravaah achieves measurable results by optimizing every SERP factor, from technical audits to AI-driven content, building on our existing SEO services for long-term visibility and growth.",
    metric: "200%",
    metricText: "Traffic Growth: Double the traffic within 6 months with a data-driven tracking process.",
    image:
      "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1400",
    reverse: false,
    icon: Search,
  },
  {
    label: "Email & SMS Marketing",
    title: "Convert visitors into loyal customers.",
    desc: "Maximize your brand's potential by improving the likelihood that visitors take desired actions. Turn prospects into customers and customers into frequent buyers through personalized email automation, SMS campaigns, newsletters via Klaviyo/Mailchimp, and omnichannel integration to drive higher engagement and ROI.",
    image:
      "https://images.pexels.com/photos/7594246/pexels-photo-7594246.jpeg?auto=compress&cs=tinysrgb&w=1400",
    reverse: false,
    icon: MessageCircle,
  },
  {
    label: "Engaging Social Media Management",
    title: "Raise brand awareness and expand your influence",
    desc: "Pravaah tells your company's story with original branded content, custom graphics, strategic commenting, and targeted boosting. Our comprehensive solutions cover all aspects of your business's social media presence, integrating seamlessly with SEO, influencer marketing, and omnichannel strategies to drive traffic, build loyalty, and grow your business.",
    image:
      "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1400",
    reverse: true,
    icon: Globe,
  },
  {
    label: "Creative Graphic Design & Video Marketing",
    title: "Captivate audiences and amplify your brand story",
    desc: "Pravaah crafts stunning custom graphics, motion designs, and high-impact videos, from explainer animations to social reels and brand films. Our integrated approach boosts engagement, supports SEO-optimized content, and drives conversions across platforms, ensuring every visual asset aligns with your growth strategy.",
    image:
      "https://images.pexels.com/photos/3379943/pexels-photo-3379943.jpeg?auto=compress&cs=tinysrgb&w=1400",
    reverse: false,
    icon: PenTool,
  },
  {
    label: "Strategic Branding & Reputation Management",
    title: "Build trust, protect your image, and stand out online",
    desc: "Pravaah develops cohesive brand identities with targeted advertising and proactive reputation strategies, using data-driven monitoring and AI personalization. We turn positive narratives into loyalty, mitigate risks, and enhance visibility through omnichannel efforts tied to social media management and content creation.",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1400",
    reverse: true,
    icon: BadgeCheck,
  },
];

const marketingTransformationBenefits = [
  {
    id: "01",
    title: "Skyrocket Your Visibility",
    desc: "Get found online! We boost your rankings on Google so more customers discover you.",
  },
  {
    id: "02",
    title: "Turn Followers into Customers",
    desc: "Social media works. We create engaging content to build your brand and drive sales.",
  },
  {
    id: "03",
    title: "Target the Right People",
    desc: "Stop wasting money on ads! Our PPC campaigns put your message in front of your ideal customers.",
  },
  {
    id: "04",
    title: "Build a Brand That Stands Out",
    desc: "We craft a unique brand identity that captures attention and builds trust.",
  },
  {
    id: "05",
    title: "Connect with Your Audience",
    desc: "Engage with your customers on a personal level.",
  },
  {
    id: "06",
    title: "Watch Your Business Grow",
    desc: "Our goal is simple: to grow your business.",
  },
];

const marketingExpertiseAreas = [
  { title: "Content Creation", icon: FileText },
  { title: "Influencer Marketing", icon: Users },
  { title: "Email & Social Media Campaign", icon: AtSign },
  { title: "Amazon", icon: Store },
  { title: "PPC", icon: Percent },
  { title: "SEO", icon: Search },
  { title: "Graphic Designing", icon: PenTool },
  { title: "Video Marketing", icon: Video },
  { title: "Website Design & Development", icon: Monitor },
  { title: "Reputation Management", icon: ShieldCheck },
];

const marketingWorkflowCards = [
  {
    title: "Listen & Learn",
    desc: "We pinpoint your biggest challenges and uncover hidden opportunities by identifying the right data to measure success.",
    image:
      "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    title: "Craft a Plan",
    desc: "Forget generic strategies. We build a custom plan that fits your unique needs and targets your ideal customers.",
    image:
      "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    title: "Make It Happen",
    desc: "We're not just talking. We put your plan into action with website magic, engaging content, and smart ad campaigns.",
    image:
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    title: "Track, Tweak, Triumph",
    desc: "We obsess over results. We constantly monitor, analyze, and optimize to ensure you get the best possible ROI.",
    image:
      "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
];

const marketingWhyChooseUs = [
  { title: "Customized Solution", icon: Lightbulb },
  { title: "Full-Service Powerhouse", icon: Target },
  { title: "Results-Obsessed Team", icon: Handshake },
  { title: "Experts You Can Trust", icon: CheckSquare },
];

const caseStudies = [
  {
    title: "An upcoming Perfume Brand in NYC",
    category: "GenAI & E-commerce",
    desc: "Revolutionized their e-commerce strategy by implementing an AI image generator app. Leveraging this technology, they transformed product visuals, generating hyper-realistic, personalized scent representations. This innovative approach enhanced the online shopping experience, allowing customers to virtually experience fragrances before purchase. The AI-driven imagery not only increased engagement but also significantly boosted conversion rates.",
    icon: FlaskConical,
    image: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    title: "Boston based Healthcare support company",
    category: "Conversational AI",
    desc: "plus Consulting introduced a groundbreaking solution leveraging AI-driven chatbots for building a supportive mental health community. This innovative system incorporates a chatbot equipped with PDF-reading capabilities, fostering meaningful conversations and community engagement. The AI chatbot analyzes and extracts relevant information, creating conversation starters for community members.",
    icon: HandHeart,
    image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    title: "A Leading Hair Care Brand For The Afro-American Population",
    category: "ML Recommendation Engine",
    desc: "Partnered with plus Consulting to enhance customer experience through a personalized recommendation engine. AI helped customers discover the most suitable products for unique hair care needs by considering hair type, purchase history, and preferences, and delivering personalized insights that improved retention and repeat purchases.",
    icon: BadgeCheck,
    image: "https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
];

const marketingProjectStories = [
  {
    title: "The Love of people",
    image: serviceMarketingImg,
    summaryTitle: "Engineering the Future: Our Portfolio of High-Impact Solutions",
    summary:
      "Explore how plus Consulting empowers global enterprises to ignite growth through transformative product engineering services. From Agentic AI and custom software development to high-level digital strategy, our work showcases the measurable business value we deliver. Join over 100 satisfied clients who have scaled with our future-ready, accelerated solutions.",
  },
  {
    title: "Northstar Wellness",
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1400",
    summaryTitle: "Engineering the Future: Our Portfolio of High-Impact Solutions",
    summary:
      "We combine data-led performance marketing, lifecycle automation, and conversion-focused creative to drive sustained demand. The result is stronger customer acquisition, better retention, and measurable revenue growth.",
  },
  {
    title: "Peakline Commerce",
    image:
      "https://images.pexels.com/photos/6476258/pexels-photo-6476258.jpeg?auto=compress&cs=tinysrgb&w=1400",
    summaryTitle: "Engineering the Future: Our Portfolio of High-Impact Solutions",
    summary:
      "Pravaah orchestrates SEO, paid media, and social campaigns into one growth engine. This integrated approach improves marketing efficiency and delivers consistent ROI across channels.",
  },
];

const marketingTestimonials = [
  {
    quote:
      "plus Consulting transformed our SEO strategy, boosting organic traffic by 150% in just six months. Their data-driven approach and responsive team made all the difference.",
    name: "Olivia Mitchell,",
    role: "Marketing Director",
  },
  {
    quote:
      "From social media campaigns to PPC, Pravaah delivered a 200% increase in leads while staying within budget. True partners in our growth!",
    name: "David Reynolds,",
    role: "CEO",
  },
  {
    quote:
      "Their custom content and email strategies exceeded expectations, driving a 300% CTR uplift. Professional, innovative, and results-focused.",
    name: "Lisa Chen,",
    role: "Founder",
  },
  {
    quote:
      "Pravaah rebuilt our online presence with stunning website design and reputation management. Engagement soared, and sales followed. Highly recommend!",
    name: "Mark Thompson,",
    role: "Owner",
  },
];

const agenticTestimonials = [
  {
    quote:
      "plus Consulting? They got our data! Their NLP skills helped us unlock insights we never knew were there. Game-changer!",
    name: "Shirley M.",
    role: "VP",
  },
  {
    quote:
      "Our sales are way up thanks to Pravaah's AI recommendation engine. It's like they knew our customers better than we did! Super collaborative team.",
    name: "George S.",
    role: "Sr. Manager",
  },
  {
    quote:
      "Predicting the future used to be a guessing game. Now, with Pravaah's AI, our forecasts are spot-on. Seriously impressive work.",
    name: "David P.",
    role: "President",
  },
  {
    quote:
      "plus Consulting's anomaly detection is like having a superhero for our finances. They catch fraud before it even happens! Highly recommend.",
    name: "Amanda L.",
    role: "CFO",
  },
];

const agenticSectionImage =
  "https://images.pexels.com/photos/16094043/pexels-photo-16094043.jpeg?auto=compress&cs=tinysrgb&w=1400";
const aiIndustriesImage =
  "https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=1400";

const pageWidthClass = "w-full px-3 md:px-6 lg:px-8";
const revealUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};
const scrollViewport = { once: true, amount: 0.2 };

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);
  const [openIndustry, setOpenIndustry] = useState("Healthcare");
  const [openAiIndustry, setOpenAiIndustry] = useState("Insurance");
  const [openEcommerceOperation, setOpenEcommerceOperation] = useState("");
  const [openMarketingIndustry, setOpenMarketingIndustry] = useState("");
  const [activeEcommerceShowcaseIndex, setActiveEcommerceShowcaseIndex] = useState(0);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeMarketingProjectIndex, setActiveMarketingProjectIndex] = useState(0);
  const [activeAiCaseStudyIndex, setActiveAiCaseStudyIndex] = useState(0);
  const [activeAiServiceId, setActiveAiServiceId] = useState("01");
  const [activeCapabilityIndex, setActiveCapabilityIndex] = useState(0);
  const [isCapabilityCarouselPaused, setIsCapabilityCarouselPaused] = useState(false);
  const [isAiCaseStudyPaused, setIsAiCaseStudyPaused] = useState(false);
  const capabilityCarouselRef = useRef<HTMLDivElement>(null);
  const capabilityScrollAnimationRef = useRef<number | null>(null);
  const capabilityAutoScrollRef = useRef<number | null>(null);

  // Autoplay for AI Case Studies
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isAiCaseStudyPaused) {
      interval = setInterval(() => {
        // caseStudies is accessed here or we can use the hardcoded length 3 if it's imported globally
        // Wait, caseStudies is defined globally in the file based on the other usage
        setActiveAiCaseStudyIndex((prev) => (prev === 2 ? 0 : prev + 1));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAiCaseStudyPaused]);

  if (!service) {
    return <Navigate to="/not-found" replace />;
  }

  const isProductEngineering = service.slug === "product-engineering";
  const isAgenticAiEngineering = service.slug === "agentic-ai-engineering";
  const isEcommerce = service.slug === "ecommerce";
  const isMarketing = service.slug === "marketing";
  const activeProject = projectStories[activeProjectIndex];
  const activeMarketingProject = marketingProjectStories[activeMarketingProjectIndex];
  const activeEcommerceShowcase = ecommerceShowcaseProjects[activeEcommerceShowcaseIndex];
  const approachIcons = [Search, ClipboardCheck, Rocket, RefreshCw, ShieldCheck];
  const replayViewport = { amount: 0.2 };
  const capabilityLoopItems = [...productEngineeringCapabilities, ...productEngineeringCapabilities];
  const capabilityCardImages = [
    serviceProductImg,
    serviceAgenticImg,
    serviceEcommerceImg,
    serviceMarketingImg,
    heroBgImg,
    officeImg,
  ];

  const scrollToCapabilityCard = (index: number) => {
    const container = capabilityCarouselRef.current;
    if (!container) return;

    const total = productEngineeringCapabilities.length;
    if (!total) return;
    const normalizedIndex = ((index % total) + total) % total;
    const cards = Array.from(container.querySelectorAll<HTMLElement>("[data-capability-index]"));
    const matchingCards = cards.filter(
      (card) => Number(card.dataset.capabilityOriginalIndex) === normalizedIndex,
    );
    if (!matchingCards.length) return;
    const targetCard = matchingCards.reduce((closest, current) => {
      const currentDistance = Math.abs(current.offsetLeft - container.scrollLeft);
      const closestDistance = Math.abs(closest.offsetLeft - container.scrollLeft);
      return currentDistance < closestDistance ? current : closest;
    });

    if (capabilityScrollAnimationRef.current !== null) {
      cancelAnimationFrame(capabilityScrollAnimationRef.current);
      capabilityScrollAnimationRef.current = null;
    }

    const startLeft = container.scrollLeft;
    const targetLeft = targetCard.offsetLeft;
    const distance = targetLeft - startLeft;
    const duration = 950;
    const startTime = performance.now();

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      container.scrollLeft = startLeft + distance * easeOutCubic(progress);

      if (progress < 1) {
        capabilityScrollAnimationRef.current = requestAnimationFrame(animate);
      } else {
        capabilityScrollAnimationRef.current = null;
      }
    };

    capabilityScrollAnimationRef.current = requestAnimationFrame(animate);
    setActiveCapabilityIndex(normalizedIndex);
  };

  const handleCapabilityScroll = () => {
    const container = capabilityCarouselRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll<HTMLElement>("[data-capability-index]"));
    if (!cards.length) return;

    let closestIndex = 0;
    let minDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const distance = Math.abs(card.offsetLeft - container.scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    const originalIndex = Number(cards[closestIndex].dataset.capabilityOriginalIndex ?? 0);
    setActiveCapabilityIndex(originalIndex);
  };

  const handleProcessSpotlightMove = (event: MouseEvent<HTMLElement>) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    card.style.setProperty("--spotlight-x", `${x}px`);
    card.style.setProperty("--spotlight-y", `${y}px`);
    card.style.setProperty("--spotlight-opacity", "1");
  };

  const handleProcessSpotlightLeave = (event: MouseEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--spotlight-opacity", "0");
  };

  const staggerCards = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  useEffect(() => {
    if (!isProductEngineering || isCapabilityCarouselPaused || !productEngineeringCapabilities.length) return;

    const container = capabilityCarouselRef.current;
    if (!container) return;

    const step = () => {
      const loopWidth = container.scrollWidth / 2;
      container.scrollLeft += 0.45;

      if (container.scrollLeft >= loopWidth) {
        container.scrollLeft -= loopWidth;
      }

      capabilityAutoScrollRef.current = requestAnimationFrame(step);
    };

    capabilityAutoScrollRef.current = requestAnimationFrame(step);

    return () => {
      if (capabilityAutoScrollRef.current !== null) {
        cancelAnimationFrame(capabilityAutoScrollRef.current);
        capabilityAutoScrollRef.current = null;
      }
    };
  }, [isCapabilityCarouselPaused, isProductEngineering]);

  useEffect(() => {
    if (!isProductEngineering || projectStories.length < 2) return;

    const timer = setInterval(() => {
      setActiveProjectIndex((prev) => (prev === projectStories.length - 1 ? 0 : prev + 1));
    }, 4200);

    return () => clearInterval(timer);
  }, [isProductEngineering]);

  useEffect(() => {
    return () => {
      if (capabilityScrollAnimationRef.current !== null) {
        cancelAnimationFrame(capabilityScrollAnimationRef.current);
      }
      if (capabilityAutoScrollRef.current !== null) {
        cancelAnimationFrame(capabilityAutoScrollRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pb-20">
        {isProductEngineering ? (
          <>
            {/* ── HERO ── */}
            <section className="relative min-h-[86vh] md:min-h-[92vh] flex items-end overflow-hidden">
              <motion.img
                src={teamImg}
                alt="Product Engineering Services"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className={`${pageWidthClass} relative z-10 pb-16 md:pb-20`}>
                <div className="max-w-4xl">
                  <motion.h1
                    className="text-3xl md:text-5xl font-heading font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
                  >
                    Product Engineering Services
                  </motion.h1>
                  <motion.p
                    className="text-white/90 text-lg md:text-xl leading-relaxed max-w-3xl mb-8"
                    initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.85, ease: "easeOut", delay: 0.45 }}
                  >
                    Maximize the potential of your product from beginning to end with our top engineering expertise.
                  </motion.p>
                  <motion.div
                    className="flex flex-wrap gap-4"
                    initial={{ opacity: 0, y: 24, scale: 0.94 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.65 }}
                  >
                    <a
                      href="#service-overview"
                      className="inline-flex items-center justify-center h-14 px-8 rounded-md bg-primary text-primary-foreground text-lg font-semibold hover:brightness-110 hover:scale-105 transition-all"
                    >
                      Learn More
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center h-14 px-8 rounded-md bg-white text-black text-lg font-semibold hover:bg-white/90 hover:scale-105 transition-all"
                    >
                      Contact Us
                    </a>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* ── OVERVIEW ── */}
            <section id="service-overview" className={`${pageWidthClass} py-20 md:py-24`}>
              <motion.h2
                className="text-3xl md:text-5xl font-heading font-bold leading-tight max-w-6xl mb-8"
                initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.75, ease: "easeOut" }}
              >
                Innovate Competitive Solutions With End-to-End product engineering
              </motion.h2>
              <motion.div
                className="relative mb-10"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <div className="h-px bg-border/70" />
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-foreground" />
              </motion.div>

              <div className="grid lg:grid-cols-[1fr_1.25fr] gap-8 lg:gap-12 items-center">
                <motion.p
                  className="text-lg md:text-xl leading-relaxed text-foreground/95"
                  initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  plus Consulting accelerates digital innovation and maximizes business impact through full-cycle product engineering (from concept to launch). The team transforms bold ideas into scalable, secure, market-ready products using agile methodologies, AI-accelerated engineering, rapid prototyping, and advanced tools like React JS, Python, and Node JS. This user-centric approach navigates technology complexities and reduces time-to-market and cost, ensuring future-readiness with cloud-native architectures across industries such as healthcare, finance, and ecommerce.
                </motion.p>

                <motion.div
                  className="relative rounded-[28px] overflow-hidden border border-border/70"
                  initial={{ opacity: 0, x: 40, scale: 0.96 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                >
                  <img
                    src={service.image}
                    alt="Product engineering collaboration"
                    className="w-full h-[360px] md:h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <a
                    href="#contact"
                    className="absolute right-4 bottom-4 inline-flex items-center gap-3 h-12 px-6 rounded-full bg-primary text-primary-foreground text-lg font-semibold hover:brightness-110 hover:scale-105 transition-all"
                  >
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-primary">
                      <MessageCircle size={18} />
                    </span>
                    Contact Us
                  </a>
                </motion.div>
              </div>
            </section>

            {/* ── CAPABILITIES ── */}
            <section className="py-16 md:py-20 bg-primary overflow-hidden">
              <div className={pageWidthClass}>
                <motion.h2
                  className="text-3xl md:text-5xl font-heading font-bold leading-tight max-w-6xl mb-8 text-primary-foreground"
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  Product Engineering Services for Next-Gen Digital Solutions
                </motion.h2>
                <motion.div
                  className="relative mb-10"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  <div className="h-px bg-primary-foreground/30" />
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary-foreground" />
                </motion.div>

                <div className="flex items-center justify-end gap-3 mb-6">
                  <button
                    type="button"
                    onClick={() =>
                      scrollToCapabilityCard(
                        activeCapabilityIndex === 0
                          ? productEngineeringCapabilities.length - 1
                          : activeCapabilityIndex - 1,
                      )
                    }
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-primary-foreground/35 text-primary-foreground hover:bg-white/10 transition-colors"
                    aria-label="Previous capability card"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      scrollToCapabilityCard(
                        activeCapabilityIndex === productEngineeringCapabilities.length - 1
                          ? 0
                          : activeCapabilityIndex + 1,
                      )
                    }
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-primary-foreground/35 text-primary-foreground hover:bg-white/10 transition-colors"
                    aria-label="Next capability card"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>

                <div
                  ref={capabilityCarouselRef}
                  onScroll={handleCapabilityScroll}
                  onMouseEnter={() => setIsCapabilityCarouselPaused(true)}
                  onMouseLeave={() => setIsCapabilityCarouselPaused(false)}
                  className="flex gap-5 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  {capabilityLoopItems.map((capability, index) => {
                    const originalIndex = index % productEngineeringCapabilities.length;
                    return (
                    <motion.article
                      key={`${capability.title}-${index}`}
                      data-capability-index={index}
                      data-capability-original-index={originalIndex}
                      initial={{ opacity: 0, y: 20, scale: 0.97 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.25), ease: "easeOut" }}
                      whileHover={{ y: -6, scale: 1.01 }}
                      className="group relative shrink-0 w-[86%] sm:w-[72%] md:w-[48%] xl:w-[32%] min-h-[410px] rounded-3xl overflow-hidden border border-primary-foreground/30"
                    >
                      <img
                        src={capabilityCardImages[originalIndex % capabilityCardImages.length]}
                        alt={capability.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/55 to-black/85" />
                      <div className="relative h-full p-6 md:p-7 flex flex-col">
                        <div className="inline-flex h-12 min-w-12 px-3 rounded-md items-center justify-center bg-primary-foreground text-primary text-lg font-medium mb-6 w-fit">
                          {String(originalIndex + 1).padStart(2, "0")}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-heading font-bold leading-tight mb-4 text-primary-foreground">
                          {capability.title}
                        </h3>
                        <p className="text-lg md:text-xl leading-relaxed text-primary-foreground/90">
                          {capability.desc}
                        </p>
                      </div>
                    </motion.article>
                    );
                  })}
                </div>

                <div className="mt-6 flex items-center justify-center gap-2">
                  {productEngineeringCapabilities.map((capability, index) => (
                    <button
                      key={`capability-dot-${capability.title}`}
                      type="button"
                      onClick={() => scrollToCapabilityCard(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        activeCapabilityIndex === index
                          ? "w-7 bg-primary-foreground"
                          : "w-2.5 bg-primary-foreground/35 hover:bg-primary-foreground/60"
                      }`}
                      aria-label={`Go to capability ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* ── INDUSTRIES ── */}
            <section className="py-16 md:py-20 bg-primary">
              <div className={pageWidthClass}>
                <motion.h2
                  className="text-3xl md:text-5xl font-heading font-bold leading-tight max-w-6xl mb-6 text-primary-foreground"
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  Product Engineering Across Industries
                </motion.h2>
                <motion.div
                  className="relative mb-10"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  <div className="h-px bg-primary-foreground/30" />
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary-foreground" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-6 lg:gap-8 lg:items-stretch">
                  <motion.div
                    className="rounded-3xl overflow-hidden border border-primary/80 h-[340px] lg:h-full"
                    initial={{ opacity: 0, x: -40, scale: 0.96 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <img
                      src={service.image}
                      alt="Product engineering industries"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
                  >
                    {industries.map((industry) => {
                      const isOpen = openIndustry === industry.title;
                      return (
                        <article
                          key={industry.title}
                          className="rounded-3xl overflow-hidden border border-transparent"
                        >
                          <button
                            type="button"
                            onClick={() => setOpenIndustry(isOpen ? "" : industry.title)}
                            className="w-full bg-background text-foreground px-6 py-4 flex items-center justify-between text-left hover:bg-accent/10 transition-colors"
                          >
                            <span className="text-2xl font-semibold">
                              {industry.title}
                            </span>
                            {isOpen ? (
                              <ChevronUp size={22} className="text-foreground" />
                            ) : (
                              <ChevronDown size={22} className="text-foreground" />
                            )}
                          </button>
                          {isOpen ? (
                            <motion.div
                              className="bg-background border-t border-border px-6 pb-5 pt-3"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                              <p className="text-foreground/90 text-lg leading-relaxed">
                                {industry.desc}
                              </p>
                            </motion.div>
                          ) : null}
                        </article>
                      );
                    })}
                  </motion.div>
                </div>
              </div>
            </section>

            {/* ── PROCESS ── */}
            <section className="py-16 md:py-20 bg-card">
              <div className={pageWidthClass}>
                <motion.h2
                  className="text-3xl md:text-5xl font-heading font-bold text-center mb-10 text-foreground"
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  Our Product Engineering Process
                </motion.h2>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5"
                  variants={staggerCards}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  {productEngineeringProcess.map((process) => (
                    <motion.article
                      key={process.step}
                      variants={revealUp}
                      onMouseMove={handleProcessSpotlightMove}
                      onMouseLeave={handleProcessSpotlightLeave}
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 180, damping: 22 }}
                      style={
                        {
                          "--spotlight-x": "50%",
                          "--spotlight-y": "50%",
                          "--spotlight-opacity": "0",
                        } as CSSProperties
                      }
                      className="group relative rounded-3xl border border-primary/60 bg-background p-6 md:p-7 overflow-hidden"
                    >
                      <div
                        className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300"
                        style={{
                          opacity: "var(--spotlight-opacity)",
                          background:
                            "radial-gradient(220px circle at var(--spotlight-x) var(--spotlight-y), rgba(201, 201, 201, 0.32), transparent 70%)",
                        }}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)] dark:bg-[radial-gradient(circle_at_top,rgba(54,54,54,0.18),transparent_60%)]" />
                      <p className="relative text-center text-3xl mb-2">{process.step}</p>
                      <h3 className="relative text-2xl md:text-3xl font-heading font-bold text-center mb-4">
                        {process.title}
                      </h3>
                      <p className="relative text-lg md:text-xl leading-relaxed text-center text-foreground/90">
                        {process.desc}
                      </p>
                    </motion.article>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* ── WHY PARTNER ── */}
            <section className="py-16 md:py-20 bg-primary">
              <div className={`${pageWidthClass} relative overflow-hidden`}>
                <motion.h2
                  className="text-3xl md:text-5xl font-heading font-bold text-center mb-10 md:mb-14 text-primary-foreground"
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  Why Partner With Us?
                </motion.h2>

                <div className="hidden lg:block absolute inset-0 pointer-events-none">
                  {partnerImages.map((item, i) => (
                    <motion.div
                      key={item.alt}
                      className={`absolute rounded-md overflow-hidden border border-primary/60 bg-black/20 ${item.desktopClass}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.05 }}
                      transition={{ duration: 0.6, delay: i * 0.04, ease: "easeOut" }}
                    >
                      <img src={item.src} alt={item.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8 lg:hidden">
                  {partnerImages.map((item, i) => (
                    <motion.div
                      key={`${item.alt}-mobile`}
                      className={`rounded-md overflow-hidden border border-primary/60 bg-black/20 ${item.mobileClass}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.05 }}
                      transition={{ duration: 0.5, delay: i * 0.03, ease: "easeOut" }}
                    >
                      <img src={item.src} alt={item.alt} className="w-full h-[120px] object-cover" />
                    </motion.div>
                  ))}
                </div>

                <div className="relative z-10 lg:pl-[48%] xl:pl-[50%]">
                  <div className="space-y-7 md:space-y-9">
                    {whyPartnerItems.map((item, i) => (
                      <motion.article
                        key={item.title}
                        className="grid grid-cols-[30px_1fr] gap-3"
                        initial={{ opacity: 0, x: 40, filter: "blur(6px)" }}
                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.65, delay: i * 0.07, ease: "easeOut" }}
                      >
                        <div className="pt-1">
                          <div className="grid grid-cols-2 gap-1 w-5">
                            {Array.from({ length: 6 }).map((_, index) => (
                              <span key={`${item.title}-${index}`} className="w-1.5 h-1.5 rounded-full bg-primary-foreground" />
                            ))}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2 text-primary-foreground">{item.title}</h3>
                          <p className="text-lg md:text-xl leading-relaxed text-primary-foreground/90">{item.desc}</p>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ── DIGITAL TOOLBOX ── */}
            <section className="py-16 md:py-20 bg-background">
              <div className={pageWidthClass}>
                <motion.h2
                  className="text-3xl md:text-5xl font-heading font-bold text-center mb-10 md:mb-12 text-foreground"
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  Our Digital Toolbox and Technological Resources
                </motion.h2>

                <div className="h-[220px] md:h-[240px] flex items-center">
                  <LogoLoop
                    logos={digitalToolboxItems.map((tool) => ({
                      src: tool.logo,
                      alt: `${tool.name} logo`,
                      title: tool.name,
                    }))}
                    speed={110}
                    direction="left"
                    logoHeight={56}
                    gap={26}
                    hoverSpeed={0}
                    scaleOnHover
                    fadeOut
                    fadeOutColor="hsl(var(--background))"
                    ariaLabel="Our digital toolbox logos"
                  />
                </div>
              </div>
            </section>

            {/* ── PROJECTS ── */}
            <section className="py-16 md:py-20 bg-card">
              <div className={pageWidthClass}>
                <motion.h2
                  className="text-3xl md:text-4xl font-heading font-bold mb-10 md:mb-14 text-foreground"
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  Our Projects &amp; Success Stories
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 md:gap-10 items-center">
                  <motion.div
                    className="max-w-3xl"
                    initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.75, ease: "easeOut" }}
                  >
                    <h3 className="text-2xl md:text-3xl font-heading font-semibold leading-snug mb-6">
                      {activeProject.summaryTitle}
                    </h3>
                    <p className="text-lg md:text-xl leading-relaxed text-foreground/95">{activeProject.summary}</p>
                  </motion.div>

                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: 40, scale: 0.97 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActiveProjectIndex((prev) =>
                          prev === 0 ? projectStories.length - 1 : prev - 1,
                        )
                      }
                      className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-primary-foreground text-primary inline-flex items-center justify-center hover:scale-110 transition-transform"
                      aria-label="Previous project"
                    >
                      <ArrowLeft size={14} />
                    </button>

                    <div className="rounded-[28px] overflow-hidden border border-border bg-card p-4 md:p-6">
                      <motion.img
                        key={activeProject.title}
                        src={activeProject.image}
                        alt={activeProject.title}
                        className="w-full h-[260px] md:h-[340px] object-cover rounded-2xl"
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    </div>
                    <motion.h4
                      key={`title-${activeProject.title}`}
                      className="text-center text-4xl md:text-5xl font-heading font-bold mt-5"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      {activeProject.title}
                    </motion.h4>

                    <button
                      type="button"
                      onClick={() =>
                        setActiveProjectIndex((prev) =>
                          prev === projectStories.length - 1 ? 0 : prev + 1,
                        )
                      }
                      className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-primary-foreground text-primary inline-flex items-center justify-center hover:scale-110 transition-transform"
                      aria-label="Next project"
                    >
                      <ArrowRight size={14} />
                    </button>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section className="py-16 md:py-20 bg-primary">
              <div className={pageWidthClass}>
                <motion.h2
                  className="text-3xl md:text-5xl font-heading font-bold text-center mb-10 md:mb-12 text-primary-foreground"
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  Testimonials
                </motion.h2>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4"
                  variants={staggerCards}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  {testimonials.map((item) => (
                    <motion.div key={item.name} variants={revealUp}>
                      <SocialTestimonialCard
                        quote={item.quote}
                        name={item.name}
                        role={item.role}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

          </>
        ) : null}

        {isAgenticAiEngineering ? (
          <>
            {/* ── HERO ── */}
            <section className="relative min-h-[86vh] md:min-h-[92vh] flex items-end overflow-hidden">
              <motion.img
                src={service.image}
                alt="Artificial Intelligence and Machine Learning Services"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className={`${pageWidthClass} relative z-10 pb-16 md:pb-20`}>
                <div className="max-w-4xl">
                  <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-5 leading-[1.08] tracking-tight"
                    initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
                  >
                    Artificial Intelligence &amp; Machine Learning Services: Drive Innovation with AI
                  </motion.h1>
                  <motion.p
                    className="text-white/90 text-lg sm:text-xl md:text-2xl leading-[1.3] max-w-3xl mb-8"
                    initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.85, ease: "easeOut", delay: 0.45 }}
                  >
                    Open the strength of AI to enhance human capabilities, optimize operations, and drive
                    business growth with plus Consulting&apos;s AI/ML services.
                  </motion.p>
                  <motion.div
                    className="flex flex-wrap gap-4"
                    initial={{ opacity: 0, y: 24, scale: 0.94 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.65 }}
                  >
                    <a
                      href="#service-overview"
                      className="inline-flex items-center justify-center h-12 px-7 rounded-md bg-primary text-primary-foreground text-lg font-semibold hover:brightness-110 hover:scale-105 transition-all"
                    >
                      Learn More
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center h-12 px-7 rounded-md bg-white !text-black text-lg font-semibold hover:bg-white/90 hover:scale-105 transition-all"
                    >
                      Contact Us
                    </a>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* ── OVERVIEW ── */}
            <section id="service-overview" className="py-16 md:py-20 bg-background overflow-hidden">
              <div className={pageWidthClass}>
                <motion.h2
                  className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-8 text-foreground"
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  Unleash the Power of AI &amp; ML for Transformative Growth
                </motion.h2>
                <motion.div
                  className="relative mb-12"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  <div className="h-px bg-border/70" />
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-foreground" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-8 lg:gap-12 items-center">
                  <motion.p
                    className="text-lg md:text-xl leading-relaxed text-foreground/90"
                    initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.75, ease: "easeOut" }}
                  >
                    Artificial Intelligence and Machine Learning are revolutionizing industries, reshaping how
                    businesses operate and compete. plus Consulting empowers you to harness the full potential of
                    these transformative technologies. We help you navigate the complexities of AI/ML adoption, from
                    identifying strategic opportunities to implementing robust solutions that deliver tangible results.
                    With AI&apos;s global market projected to reach unprecedented heights, partnering with Pravaah
                    ensures you&apos;re at the forefront of this wave of innovation.
                  </motion.p>

                  <motion.div
                    className="relative rounded-3xl overflow-hidden border border-border/70"
                    initial={{ opacity: 0, x: 40, scale: 0.96 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                  >
                    <img
                      src={agenticSectionImage}
                      alt="AI and ML innovation"
                      className="w-full h-[320px] md:h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                </div>
              </div>
            </section>

            {/* ── OUR AI & ML SERVICES ── */}
            <section className="py-16 md:py-24 bg-background">
              <div className={pageWidthClass}>
                {/* Header */}
                <motion.div
                  className="mb-12 md:mb-16"
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">What we offer</p>
                  <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-0">
                    Our AI &amp; ML Services
                  </h2>
                </motion.div>

                {/* Split Panel */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start relative pb-16">

                  {/* LEFT — scrolling service list */}
                  <div className="w-full lg:w-[45%] flex flex-col gap-4 pb-[30vh]">
                    {aiMlServices.map((item) => {
                      const isActive = activeAiServiceId === item.id;
                      return (
                        <motion.button
                          key={item.id}
                          id={`ai-service-item-${item.id}`}
                          onViewportEnter={() => {
                            // Automatically select this item to update the right panel when scrolling
                            setActiveAiServiceId(item.id);
                          }}
                          viewport={{ amount: 0.6, margin: "-30% 0px -30% 0px" }}
                          type="button"
                          onClick={() => {
                            setActiveAiServiceId(item.id);
                            document.getElementById(`ai-service-item-${item.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          }}
                          className={`group w-full text-left rounded-2xl px-5 py-5 lg:py-6 flex items-start gap-5 transition-all duration-300 border ${
                            isActive
                              ? "bg-primary text-primary-foreground border-primary shadow-lg scale-100"
                              : "bg-card border-border hover:border-primary/40 hover:bg-primary/5 scale-[0.98] opacity-80"
                          }`}
                        >
                          {/* Number pill */}
                          <div
                            className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-sm lg:text-base font-bold font-heading transition-all duration-300 ${
                              isActive
                                ? "bg-primary-foreground/20 text-primary-foreground"
                                : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                            }`}
                          >
                            {item.id}
                          </div>
                          
                          <div className="flex flex-col gap-2 flex-1 pt-1">
                            <span
                              className={`text-lg lg:text-xl font-bold leading-snug transition-colors duration-300 ${
                                isActive ? "text-primary-foreground" : "text-foreground"
                              }`}
                            >
                              {item.title}
                            </span>
                          </div>

                          {/* Active indicator arrow */}
                          <span
                            className={`hidden md:block shrink-0 transition-all duration-300 pt-1 text-2xl ${
                              isActive ? "opacity-100 translate-x-0 text-primary-foreground" : "opacity-0 -translate-x-2"
                            }`}
                          >
                            →
                          </span>
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* RIGHT — static/sticky detail panel */}
                  <div className="w-full lg:w-[55%] lg:sticky lg:top-32 shrink-0 h-auto hidden lg:block">
                    {aiMlServices.map((item) => {
                      const isActive = activeAiServiceId === item.id;
                      if (!isActive) return null;
                      return (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, scale: 0.98, x: 20 }}
                          animate={{ opacity: 1, scale: 1, x: 0 }}
                          exit={{ opacity: 0, scale: 0.98, x: -20 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="relative rounded-[2rem] bg-primary overflow-hidden p-8 md:p-12 min-h-[500px] flex flex-col justify-center shadow-2xl transition-all duration-500 border border-primary-foreground/20"
                        >
                          {/* Subtle grid texture */}
                          <div
                            className="absolute inset-0 pointer-events-none opacity-[0.06]"
                            style={{
                              backgroundImage:
                                "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                              backgroundSize: "40px 40px",
                            }}
                          />
                          {/* Ambient glow */}
                          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.06] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none animate-pulse duration-1000" />
                          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/[0.04] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none delay-500 animate-pulse duration-1000" />

                          <div className="relative z-10 flex flex-col items-start gap-6">
                            {/* Large number watermark */}
                            <div className="absolute top-1/2 -translate-y-1/2 right-0 text-[180px] lg:text-[240px] font-bold font-heading leading-none text-white/[0.05] select-none pointer-events-none">
                              {item.id}
                            </div>

                            {/* Service ID indicator */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground/80 text-xs font-bold tracking-widest uppercase shadow-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60 animate-pulse" />
                              SERVICE {item.id} OF {aiMlServices.length.toString().padStart(2, "0")}
                            </div>

                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground leading-tight max-w-xl">
                              {item.title}
                            </h3>

                            <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/80 leading-relaxed max-w-2xl font-medium mt-2">
                              {item.desc}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>


            {/* ── AI & ML SOLUTIONS ACROSS INDUSTRIES ── */}
            <section className="py-16 md:py-20 bg-primary">
              <div className={pageWidthClass}>
                <motion.h2
                  className="text-3xl md:text-5xl font-heading font-bold mb-8 text-primary-foreground"
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  AI &amp; ML Solutions Across Key Industries
                </motion.h2>
                <motion.div
                  className="relative mb-10"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  <div className="h-px bg-primary-foreground/30" />
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary-foreground" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.28fr] gap-6 lg:gap-8 lg:items-stretch">
                  <motion.div
                    className="rounded-3xl overflow-hidden border border-primary-foreground/20 h-[340px] lg:h-full"
                    initial={{ opacity: 0, x: -40, scale: 0.96 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <img
                      src={aiIndustriesImage}
                      alt="AI and ML solutions across industries"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-3"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
                  >
                    {aiIndustrySolutions.map((industry) => {
                      const isOpen = openAiIndustry === industry.title;
                      return (
                        <article
                          key={industry.title}
                          className="rounded-3xl overflow-hidden border border-transparent"
                        >
                          <button
                            type="button"
                            onClick={() => setOpenAiIndustry(isOpen ? "" : industry.title)}
                            className="w-full bg-background text-foreground px-6 py-4 flex items-center justify-between text-left hover:bg-accent/10 transition-colors"
                          >
                            <span className="text-3xl font-medium text-foreground">{industry.title}</span>
                            {isOpen ? (
                              <ChevronUp size={22} className="text-foreground" />
                            ) : (
                              <ChevronDown size={22} className="text-foreground" />
                            )}
                          </button>
                          {isOpen ? (
                            <motion.div
                              className="bg-background border-t border-border px-6 pb-5 pt-3"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                              <p className="text-foreground/90 text-xl leading-relaxed mb-3">{industry.intro}</p>
                              <ul className="space-y-1.5 text-foreground/90 text-xl leading-relaxed list-disc pl-6">
                                {industry.points.map((point) => (
                                  <li key={point}>{point}</li>
                                ))}
                              </ul>
                            </motion.div>
                          ) : null}
                        </article>
                      );
                    })}
                  </motion.div>
                </div>
              </div>
            </section>

            {/* ── OUR END TO END APPROACH ── */}
            <section className="py-16 md:py-20 bg-primary">
              <div className={pageWidthClass}>
                <motion.h2
                  className="text-3xl md:text-5xl font-heading font-bold text-center mb-8 text-primary-foreground"
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  Our End-to-End Approach
                </motion.h2>
                <div className="relative mb-10">
                  <div className="h-px bg-primary-foreground/30" />
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary-foreground" />
                </div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4"
                  variants={staggerCards}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  {endToEndApproach.map((item, index) => {
                    const Icon = approachIcons[index];
                    return (
                      <motion.article
                        key={item.title}
                        variants={revealUp}
                        onMouseMove={handleProcessSpotlightMove}
                        onMouseLeave={handleProcessSpotlightLeave}
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 180, damping: 22 }}
                        style={
                          {
                            "--spotlight-x": "50%",
                            "--spotlight-y": "50%",
                            "--spotlight-opacity": "0",
                          } as React.CSSProperties
                        }
                        className="group relative rounded-3xl border border-primary-foreground/30 p-5 md:p-6 min-h-[430px] overflow-hidden bg-white/10 text-primary-foreground"
                      >
                       <div
                          className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300"
                          style={{
                            opacity: "var(--spotlight-opacity)",
                            background: "radial-gradient(220px circle at var(--spotlight-x) var(--spotlight-y), rgba(255, 255, 255, 0.15), transparent 70%)",
                          }}
                        />
                        <Icon size={34} className="relative z-10 mx-auto mb-5" />
                        <h3 className="relative z-10 text-xl md:text-2xl font-heading font-bold text-center leading-tight mb-3">{item.title}</h3>
                        <p className="relative z-10 text-sm md:text-base leading-relaxed text-center text-primary-foreground/90">{item.desc}</p>
                      </motion.article>
                    );
                  })}
                </motion.div>
              </div>
            </section>

            {/* ── PRAVAAH JOURNEY ── */}
            <section className="py-16 md:py-20 bg-background overflow-hidden">
              <div className={pageWidthClass}>
                <motion.h2
                  className="text-3xl md:text-5xl font-heading font-bold mb-8 text-foreground"
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  The Pravaah AI &amp; ML Transformation Journey
                </motion.h2>
                <div className="relative mb-10">
                  <div className="h-px bg-border/70" />
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-foreground" />
                </div>

                <InfiniteMovingCards
                  items={aiMlJourney}
                  direction="right"
                  speed="slow"
                  className="py-2"
                />
              </div>
            </section>

            {/* ── WHY CHOOSE US ── */}
            <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
              {/* Animated background highlights */}
              <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] animate-pulse pointer-events-none" />
              <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />

              <div className={pageWidthClass}>
                <motion.div 
                  className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-primary-foreground">
                    Why Choose Us
                  </h2>
                  <div className="w-24 h-1.5 bg-primary-foreground/30 mx-auto rounded-full mb-8" />
                  <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed">
                    We combine technical mastery with strategic vision to deliver AI solutions that don&apos;t just work—they transform.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
                  {whyChooseUsItems.map((item, index) => {
                    const Icon = item.icon;
                    const spans = [
                      "lg:col-span-4 md:col-span-3",
                      "lg:col-span-8 md:col-span-3",
                      "lg:col-span-7 md:col-span-3",
                      "lg:col-span-5 md:col-span-3",
                      "lg:col-span-12 md:col-span-6",
                    ];
                    return (
                      <motion.article
                        key={item.title}
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.6, 
                          delay: index * 0.1,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                        whileHover={{ y: -10 }}
                        className={`${spans[index]} group relative rounded-[32px] p-8 md:p-10 bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden flex flex-col justify-between transition-all duration-500 hover:bg-white/10 hover:border-white/20`}
                      >
                        {/* Interactive Glow */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
                        </div>

                        <div className="relative z-10">
                          <div className="inline-flex p-4 rounded-2xl bg-white/10 text-white mb-8 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                            <Icon size={38} />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
                            {item.title}
                          </h3>
                          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
                            {item.desc}
                          </p>
                        </div>

                        {/* Animated background text/decor */}
                        <div className="absolute -bottom-6 -right-6 text-9xl font-bold text-white/5 select-none pointer-events-none group-hover:text-white/10 transition-colors duration-500">
                          0{index + 1}
                        </div>
                      </motion.article>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* ── TECH STACK ── */}
            <section className="py-16 md:py-20 bg-background overflow-hidden">
              <div className={pageWidthClass}>
                <motion.h2
                  className="text-3xl md:text-5xl font-heading font-bold text-center mb-10 md:mb-12 text-foreground"
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  Our AI &amp; ML Tech Stack
                </motion.h2>

                <div className="space-y-3 md:space-y-4">
                  {aiMlTechStack.map((row, i) => (
                    <motion.article
                      key={row.category}
                      className="rounded-3xl overflow-hidden bg-card border border-border grid grid-cols-1 md:grid-cols-[260px_1fr]"
                      initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
                      whileHover={{ scale: 1.015 }}
                    >
                      <div className="bg-primary text-primary-foreground px-5 py-6 md:px-6 md:py-8 flex items-center justify-center text-center">
                        <h3 className="text-xl md:text-2xl font-medium leading-snug">{row.category}</h3>
                      </div>

                      <div className="px-4 py-5 md:px-7 md:py-7 flex flex-wrap gap-2.5 md:gap-3 items-start">
                        {row.tools.map((tool, index) => (
                          <span
                            key={`${row.category}-${tool}`}
                            className={`inline-flex items-center rounded-md border px-3 py-1.5 text-xl md:text-2xl ${index === 0
                              ? "bg-primary border-primary text-primary-foreground"
                              : "bg-transparent border-border text-foreground hover:bg-border/40 transition-colors"
                              }`}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </section>

            {/* ── CASE STUDY ── */}
            <section 
              className="py-16 md:py-24 bg-card relative overflow-hidden"
              onMouseEnter={() => setIsAiCaseStudyPaused(true)}
              onMouseLeave={() => setIsAiCaseStudyPaused(false)}
            >
               {/* Decorative background elements */}
               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
               <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

              <div className={pageWidthClass}>
                <motion.div 
                  className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="max-w-2xl">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">Case Study</h2>
                    <div className="w-24 h-1.5 bg-primary rounded-full mb-6" />
                    <p className="text-xl text-foreground/70">
                      Explore how we've helped industry leaders leverage the power of Agentic AI to solve complex challenges and drive innovation.
                    </p>
                  </div>
                  
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setActiveAiCaseStudyIndex(prev => (prev === 0 ? caseStudies.length - 1 : prev - 1))}
                      className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm"
                      aria-label="Previous Case Study"
                    >
                      <ArrowLeft size={24} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveAiCaseStudyIndex(prev => (prev === caseStudies.length - 1 ? 0 : prev + 1))}
                      className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-sm"
                      aria-label="Next Case Study"
                    >
                      <ArrowRight size={24} />
                    </button>
                  </div>
                </motion.div>

                <div className="relative">
                  <motion.div
                    key={activeAiCaseStudyIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="grid lg:grid-cols-[1.2fr_1fr] gap-0 rounded-[40px] overflow-hidden bg-background border border-border shadow-2xl"
                  >
                    {/* Image Side */}
                    <div className="relative h-[400px] lg:h-[650px] overflow-hidden">
                      <motion.img
                        src={caseStudies[activeAiCaseStudyIndex].image}
                        alt={caseStudies[activeAiCaseStudyIndex].title}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20" />
                      
                      {/* Floating Category Tag */}
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="absolute top-8 left-8 bg-primary/90 backdrop-blur-md text-primary-foreground px-6 py-2 rounded-full text-sm font-bold tracking-wider uppercase shadow-lg"
                      >
                        {caseStudies[activeAiCaseStudyIndex].category}
                      </motion.div>
                    </div>

                    {/* Content Side */}
                    <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative bg-background">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="flex-1 flex flex-col"
                      >
                        <div className="mb-8 inline-flex p-4 rounded-2xl bg-primary/5 text-primary w-fit">
                          {(() => {
                            const Icon = caseStudies[activeAiCaseStudyIndex].icon;
                            return <Icon size={40} />;
                          })()}
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight">
                          {caseStudies[activeAiCaseStudyIndex].title}
                        </h3>
                        
                        <p className="text-lg md:text-xl leading-relaxed text-foreground/80 mb-10">
                          {caseStudies[activeAiCaseStudyIndex].desc}
                        </p>
                        
                        <div className="flex items-center gap-6 mt-auto">
                          <Link 
                            to="/contact" 
                            className="inline-flex items-center gap-2 text-primary font-bold text-lg group"
                          >
                            Read Full Success Story
                            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                          </Link>
                        </div>
                      </motion.div>
                      
                      {/* Navigation Dots (Mobile/Tablet) */}
                      <div className="flex gap-2 mt-12 lg:absolute lg:bottom-12 lg:right-12">
                        {caseStudies.map((_, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setActiveAiCaseStudyIndex(i)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              activeAiCaseStudyIndex === i ? "w-10 bg-primary" : "w-2 bg-border hover:bg-primary/40"
                            }`}
                            aria-label={`Switch to slide ${i + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section className="py-16 md:py-20 bg-primary">
              <div className={pageWidthClass}>
                <motion.h2
                  className="text-3xl md:text-5xl font-heading font-bold text-center mb-10 md:mb-12 text-primary-foreground"
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  Testimonials
                </motion.h2>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4"
                  variants={staggerCards}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  {agenticTestimonials.map((item) => (
                    <motion.div key={item.name} variants={revealUp} whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}>
                      <SocialTestimonialCard
                        quote={item.quote}
                        name={item.name}
                        role={item.role}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

          </>
        ) : null}

        {isEcommerce ? (
          <>
            {/* ── HERO ── */}
            <section className="relative min-h-[86vh] md:min-h-[92vh] flex items-end overflow-hidden">
              <motion.img
                src={service.image}
                alt="Ecommerce Website Design and Development Services"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-black/55" />

              <div className={`${pageWidthClass} relative z-10 pb-16 md:pb-20`}>
                <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-end">
                  <div className="max-w-5xl">
                    <motion.h1
                      className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 leading-tight"
                      initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
                    >
                      Ecommerce Website Design &amp; Development Services
                    </motion.h1>
                    <motion.p
                      className="text-white/90 text-lg md:text-xl leading-relaxed max-w-4xl mb-8"
                      initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ duration: 0.85, ease: "easeOut", delay: 0.45 }}
                    >
                      Drive sales with plus Consulting&apos;s expert eCommerce development, delivering fast,
                      mobile-first stores and seamless checkout experiences.
                    </motion.p>
                    <motion.div
                      className="flex flex-wrap gap-4"
                      initial={{ opacity: 0, y: 24, scale: 0.94 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.7, ease: "easeOut", delay: 0.65 }}
                    >
                      <a
                        href="#service-overview"
                        className="inline-flex items-center justify-center h-14 px-8 rounded-md bg-primary text-primary-foreground text-lg font-semibold hover:brightness-110 hover:scale-105 transition-all"
                      >
                        Learn More
                      </a>
                      <a
                        href="#contact"
                        className="inline-flex items-center justify-center h-14 px-8 rounded-md bg-white text-foreground text-lg font-semibold hover:bg-white/90 hover:scale-105 transition-all"
                      >
                        Contact Us
                      </a>
                    </motion.div>
                  </div>

                  <motion.div
                    className="hidden lg:block rounded-[26px] border border-white/25 bg-black/25 backdrop-blur-sm p-3"
                    initial={{ opacity: 0, x: 40, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
                  >
                    <img
                      src={serviceEcommerceImg}
                      alt="Ecommerce storefront preview"
                      className="w-full h-[290px] xl:h-[340px] object-cover rounded-[20px]"
                    />
                  </motion.div>
                </div>
              </div>
            </section>

            {/* ── OVERVIEW ── */}
            <section id="service-overview" className="py-16 md:py-20 bg-background overflow-hidden">
              <div className={pageWidthClass}>
                <motion.h2
                  className="text-3xl md:text-5xl font-heading font-bold leading-tight max-w-6xl mb-8 text-foreground"
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  A Leading Ecommerce Development Company Crafting High-Conversion Stores
                </motion.h2>
                <motion.div
                  className="relative mb-10"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  <div className="h-px bg-border-70" />
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-foreground" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-8 lg:gap-10 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.75, ease: "easeOut" }}
                  >
                    <p className="text-lg md:text-xl leading-relaxed text-foreground/95 mb-4">
                      Looking for an eCommerce store that converts? plus Consulting builds high-performance online
                      stores that turn visitors into loyal customers. Our award-winning designers focus on{" "}
                      <span className="underline">UX/UI excellence</span>, while our certified developers implement
                      intuitive, custom functionality on platforms like Shopify, Magento, and WooCommerce.
                    </p>
                    <ul className="list-disc pl-7 text-lg md:text-xl leading-relaxed text-foreground/95 space-y-1">
                      <li>Mobile-First Design: 100% responsive across all devices.</li>
                      <li>Lightning Speed: Optimized for Core Web Vitals to reduce bounce rates.</li>
                      <li>Scalable Code: Built to grow as your inventory and traffic expand.</li>
                    </ul>
                  </motion.div>

                  <motion.div
                    className="relative rounded-3xl overflow-hidden border border-border"
                    initial={{ opacity: 0, x: 40, scale: 0.96 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                  >
                    <img
                      src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1400"
                      alt="Ecommerce laptop storefront"
                      className="w-full h-[320px] md:h-[410px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                </div>
              </div>
            </section>

            {/* ── GUIDANCE SERVICES ── */}
            <section className="py-16 md:py-20 bg-primary">
              <div className={pageWidthClass}>
                <motion.h2
                  className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-10 text-primary-foreground"
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  Get Expert Guidance for Your Ecommerce Platform
                </motion.h2>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
                  variants={staggerCards}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  {ecommerceGuidanceServices.slice(0, 9).map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.article
                        key={item.title}
                        variants={revealUp}
                        onMouseMove={handleProcessSpotlightMove}
                        onMouseLeave={handleProcessSpotlightLeave}
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 180, damping: 22 }}
                        style={
                          {
                            "--spotlight-x": "50%",
                            "--spotlight-y": "50%",
                            "--spotlight-opacity": "0",
                          } as React.CSSProperties
                        }
                        className="group relative rounded-3xl border border-primary-foreground/30 bg-white/10 p-6 md:p-7 min-h-[300px] overflow-hidden"
                      >
                       <div
                          className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300"
                          style={{
                            opacity: "var(--spotlight-opacity)",
                            background:
                              "radial-gradient(220px circle at var(--spotlight-x) var(--spotlight-y), rgba(255, 255, 255, 0.15), transparent 70%)",
                          }}
                        />
                        <Icon size={34} className="relative z-10 mb-5 text-primary-foreground" />
                        <h3 className="relative z-10 text-2xl md:text-3xl font-heading font-bold leading-tight mb-4 text-primary-foreground">{item.title}</h3>
                        <p className="relative z-10 text-lg md:text-xl leading-relaxed text-primary-foreground/90">{item.desc}</p>
                      </motion.article>
                    );
                  })}
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[860px] mx-auto mt-5"
                  variants={staggerCards}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  {ecommerceGuidanceServices.slice(9).map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.article
                        key={item.title}
                        variants={revealUp}
                        onMouseMove={handleProcessSpotlightMove}
                        onMouseLeave={handleProcessSpotlightLeave}
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 180, damping: 22 }}
                        style={
                          {
                            "--spotlight-x": "50%",
                            "--spotlight-y": "50%",
                            "--spotlight-opacity": "0",
                          } as React.CSSProperties
                        }
                        className="group relative rounded-3xl border border-primary-foreground/30 bg-white/10 p-6 md:p-7 min-h-[300px] overflow-hidden"
                      >
                       <div
                          className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300"
                          style={{
                            opacity: "var(--spotlight-opacity)",
                            background:
                              "radial-gradient(220px circle at var(--spotlight-x) var(--spotlight-y), rgba(255, 255, 255, 0.15), transparent 70%)",
                          }}
                        />
                        <Icon size={34} className="relative z-10 mb-5 text-primary-foreground" />
                        <h3 className="relative z-10 text-2xl md:text-3xl font-heading font-bold leading-tight mb-4 text-primary-foreground">{item.title}</h3>
                        <p className="relative z-10 text-lg md:text-xl leading-relaxed text-primary-foreground/90">{item.desc}</p>
                      </motion.article>
                    );
                  })}
                </motion.div>
              </div>
            </section>

            {/* ── EXPERTISE ── */}
            <section className="py-16 md:py-20 bg-background">
              <div className={pageWidthClass}>
                <motion.h2
                  className="text-3xl md:text-3xl md:text-4xl font-heading font-bold mb-10 text-foreground"
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  Ecommerce Areas of Expertise
                </motion.h2>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
                  variants={staggerCards}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  {ecommerceExpertiseAreas.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.article
                        key={item.title}
                        variants={revealUp}
                        onMouseMove={handleProcessSpotlightMove}
                        onMouseLeave={handleProcessSpotlightLeave}
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 180, damping: 22 }}
                        style={
                          {
                            "--spotlight-x": "50%",
                            "--spotlight-y": "50%",
                            "--spotlight-opacity": "0",
                          } as React.CSSProperties
                        }
                        className="group relative rounded-3xl bg-card border border-primary/40 text-foreground p-6 md:p-8 min-h-[380px] flex flex-col items-center text-center overflow-hidden"
                      >
                         <div
                          className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300"
                          style={{
                            opacity: "var(--spotlight-opacity)",
                            background:
                              "radial-gradient(220px circle at var(--spotlight-x) var(--spotlight-y), rgba(200, 200, 200, 0.25), transparent 70%)",
                          }}
                        />
                        <Icon size={44} className="relative z-10 mb-5 text-primary group-hover:scale-110 transition-transform" />
                        <h3 className="relative z-10 text-2xl md:text-3xl font-heading font-bold mb-4 leading-tight">{item.title}</h3>
                        <p className="relative z-10 text-xl text-foreground/80 leading-relaxed flex-1">{item.desc}</p>
                        <a
                          href="#contact"
                          className="relative z-10 mt-7 inline-flex items-center justify-center h-12 px-7 rounded-md bg-primary text-primary-foreground text-lg font-semibold hover:brightness-110 hover:scale-105 transition-all"
                        >
                          Learn More
                        </a>
                      </motion.article>
                    );
                  })}
                </motion.div>
              </div>
            </section>

            {/* ── BUSINESS MODEL SOLUTIONS ── */}
            <section className="py-16 md:py-20 bg-primary">
              <div className={pageWidthClass}>
                <motion.h2
                  className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-8 text-primary-foreground"
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  Ecommerce Solutions for Any Business Model
                </motion.h2>
                <motion.div
                  className="relative mb-10"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  <div className="h-px bg-primary-foreground/30" />
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary-foreground" />
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
                  variants={staggerCards}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  {ecommerceBusinessModelSolutions.slice(0, 6).map((item) => (
                    <motion.article
                      key={item.title}
                      variants={revealUp}
                      onMouseMove={handleProcessSpotlightMove}
                      onMouseLeave={handleProcessSpotlightLeave}
                      whileHover={{ y: -6, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 180, damping: 22 }}
                      style={
                        {
                          "--spotlight-x": "50%",
                          "--spotlight-y": "50%",
                          "--spotlight-opacity": "0",
                        } as React.CSSProperties
                      }
                      className="group relative rounded-3xl border border-primary-foreground/20 bg-white/10 p-6 md:p-8 min-h-[280px] text-center overflow-hidden"
                    >
                      <div
                          className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300"
                          style={{
                            opacity: "var(--spotlight-opacity)",
                            background:
                              "radial-gradient(220px circle at var(--spotlight-x) var(--spotlight-y), rgba(255, 255, 255, 0.15), transparent 70%)",
                          }}
                        />
                      <div className="relative z-10 inline-flex h-10 min-w-10 px-3 rounded-md items-center justify-center bg-background text-foreground text-lg font-medium mb-5">
                        {item.id}
                      </div>
                      <h3 className="relative z-10 text-2xl md:text-3xl font-heading font-bold leading-tight mb-4 text-primary-foreground">{item.title}</h3>
                      <p className="relative z-10 text-lg md:text-xl leading-relaxed text-primary-foreground/90">{item.desc}</p>
                    </motion.article>
                  ))}
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[920px] mx-auto mt-5"
                  variants={staggerCards}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  {ecommerceBusinessModelSolutions.slice(6).map((item) => (
                    <motion.article
                      key={item.title}
                      variants={revealUp}
                      onMouseMove={handleProcessSpotlightMove}
                      onMouseLeave={handleProcessSpotlightLeave}
                      whileHover={{ y: -6, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 180, damping: 22 }}
                      style={
                        {
                          "--spotlight-x": "50%",
                          "--spotlight-y": "50%",
                          "--spotlight-opacity": "0",
                        } as React.CSSProperties
                      }
                      className="group relative rounded-3xl border border-primary-foreground/20 bg-white/10 p-6 md:p-8 min-h-[280px] text-center overflow-hidden"
                    >
                       <div
                          className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300"
                          style={{
                            opacity: "var(--spotlight-opacity)",
                            background:
                              "radial-gradient(220px circle at var(--spotlight-x) var(--spotlight-y), rgba(255, 255, 255, 0.15), transparent 70%)",
                          }}
                        />
                      <div className="relative z-10 inline-flex h-10 min-w-10 px-3 rounded-md items-center justify-center bg-background text-foreground text-lg font-medium mb-5">
                        {item.id}
                      </div>
                      <h3 className="relative z-10 text-2xl md:text-3xl font-heading font-bold leading-tight mb-4 text-primary-foreground">{item.title}</h3>
                      <p className="relative z-10 text-lg md:text-xl leading-relaxed text-primary-foreground/90">{item.desc}</p>
                    </motion.article>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* ── NEW AGE TECHS ── */}
            <section className="py-16 md:py-20 bg-background">
              <div className={pageWidthClass}>
                <motion.h2
                  className="text-3xl md:text-2xl md:text-3xl font-heading font-bold leading-tight mb-4 text-foreground"
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  Create Experiences with New-Age Techs
                </motion.h2>
                <motion.p
                  className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-10 max-w-6xl"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
                >
                  plus Consulting integrates <span className="underline">innovative AI tools</span> to transform
                  your online store into an interactive powerhouse, boosting engagement and conversions across devices.
                </motion.p>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
                  variants={staggerCards}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  {ecommerceNewAgeTechs.slice(0, 6).map((item) => (
                    <motion.article
                      key={item.title}
                      variants={revealUp}
                      whileHover={{ y: -6, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className="group rounded-3xl bg-card border border-primary/30 text-foreground p-6 md:p-8 min-h-[190px] shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">{item.title}</h3>
                      <p className="text-lg md:text-xl leading-relaxed text-foreground/80">{item.desc}</p>
                    </motion.article>
                  ))}
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[920px] mx-auto mt-5"
                  variants={staggerCards}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  {ecommerceNewAgeTechs.slice(6).map((item) => (
                    <motion.article
                      key={item.title}
                      variants={revealUp}
                      whileHover={{ y: -6, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className="group rounded-3xl bg-card border border-primary/30 text-foreground p-6 md:p-8 min-h-[190px] shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">{item.title}</h3>
                      <p className="text-lg md:text-xl leading-relaxed text-foreground/80">{item.desc}</p>
                    </motion.article>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* ── OPERATIONS ── */}
            <section className="py-16 md:py-20 bg-primary">
              <div className={pageWidthClass}>
                <motion.h2
                  className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-8 text-primary-foreground"
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  We Build Resilient, AI-Powered Ecommerce Operations
                </motion.h2>
                <motion.div
                  className="relative mb-10"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  <div className="h-px bg-primary-foreground/30" />
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary-foreground" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-6 lg:gap-8 lg:items-stretch">
                  <motion.div
                    className="rounded-3xl overflow-hidden border border-primary/60 h-[360px] lg:h-full"
                    initial={{ opacity: 0, x: -40, scale: 0.96 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <img
                      src="https://images.pexels.com/photos/6214347/pexels-photo-6214347.jpeg?auto=compress&cs=tinysrgb&w=1400"
                      alt="AI-powered ecommerce operations"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-3"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
                  >
                    {ecommerceOperationsItems.map((item) => {
                      const isOpen = openEcommerceOperation === item.title;
                      return (
                        <article key={item.title} className="rounded-3xl overflow-hidden border border-transparent">
                          <button
                            type="button"
                            onClick={() => setOpenEcommerceOperation(isOpen ? "" : item.title)}
                            className="w-full bg-background text-foreground px-6 py-4 flex items-center justify-between text-left hover:bg-accent/10 transition-colors"
                          >
                            <span className="text-2xl md:text-3xl font-medium text-foreground">{item.title}</span>
                            {isOpen ? (
                              <ChevronUp size={22} className="text-foreground" />
                            ) : (
                              <ChevronDown size={22} className="text-foreground" />
                            )}
                          </button>
                          {isOpen ? (
                            <motion.div
                              className="bg-background border-t border-border px-6 pb-5 pt-3"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                              <p className="text-foreground/90 text-xl leading-relaxed">{item.desc}</p>
                            </motion.div>
                          ) : null}
                        </article>
                      );
                    })}
                  </motion.div>
                </div>
              </div>
            </section>

            {/* ── TRANSFORMATION ── */}
            <section className="py-16 md:py-20 bg-background">
              <div className={pageWidthClass}>
                <motion.h2
                  className="text-3xl md:text-5xl font-heading font-bold text-center leading-tight mb-8 text-foreground"
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  How Can Our Ecommerce Services Transform Your Business?
                </motion.h2>
                <motion.div
                  className="relative mb-10"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  <div className="h-px bg-border/70" />
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-foreground" />
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
                  variants={staggerCards}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  {ecommerceTransformationBenefits.map((item) => (
                    <motion.article
                      key={item.id}
                      variants={revealUp}
                      onMouseMove={handleProcessSpotlightMove}
                      onMouseLeave={handleProcessSpotlightLeave}
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 180, damping: 22 }}
                      style={
                        {
                          "--spotlight-x": "50%",
                          "--spotlight-y": "50%",
                          "--spotlight-opacity": "0",
                        } as React.CSSProperties
                      }
                      className="group relative rounded-3xl border border-primary/40 bg-card p-6 md:p-8 min-h-[260px] text-center overflow-hidden"
                    >
                      <div
                        className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300"
                        style={{
                          opacity: "var(--spotlight-opacity)",
                          background:
                            "radial-gradient(220px circle at var(--spotlight-x) var(--spotlight-y), rgba(200, 200, 200, 0.25), transparent 70%)",
                        }}
                      />
                      <div className="relative z-10 inline-flex h-10 min-w-10 px-3 rounded-md items-center justify-center bg-primary text-primary-foreground text-lg font-medium mb-5">
                        {item.id}
                      </div>
                      <h3 className="relative z-10 text-2xl md:text-3xl font-heading font-bold leading-tight mb-4 text-foreground">{item.title}</h3>
                      <p className="relative z-10 text-lg md:text-xl leading-relaxed text-foreground/80">{item.desc}</p>
                    </motion.article>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* ── SHOWCASE / CASE STUDY ── */}
            <section className="py-16 md:py-20 bg-card">
              <div className={pageWidthClass}>
                <motion.h2
                  className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-10 text-foreground"
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  Transforming Visions into High-Performance Stores
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 md:gap-10 items-center">
                  <motion.div
                    className="max-w-3xl"
                    initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.75, ease: "easeOut" }}
                  >
                    <p className="text-lg md:text-xl leading-relaxed text-foreground/95 mb-6">
                      {activeEcommerceShowcase.summary}
                    </p>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveEcommerceShowcaseIndex((prev) =>
                          prev === 0 ? ecommerceShowcaseProjects.length - 1 : prev - 1,
                        )
                      }
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary border hover:border-transparent hover:scale-110 text-primary-foreground transition-all"
                      aria-label="Previous showcase project"
                    >
                      <ArrowLeft size={20} />
                    </button>
                  </motion.div>

                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: 40, scale: 0.97 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                  >
                    <div className="rounded-[30px] bg-background p-4 md:p-5 border border-primary/20">
                      <motion.img
                        key={activeEcommerceShowcase.title}
                        src={activeEcommerceShowcase.image}
                        alt={activeEcommerceShowcase.title}
                        className="w-full h-[260px] md:h-[340px] object-contain rounded-[22px] bg-background"
                        initial={{ opacity: 0, scale: 1.04 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    </div>
                    <motion.h3
                      key={`title-${activeEcommerceShowcase.title}`}
                      className="text-center text-2xl md:text-3xl font-heading font-bold mt-5 text-foreground"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      {activeEcommerceShowcase.title}
                    </motion.h3>

                    <button
                      type="button"
                      onClick={() =>
                        setActiveEcommerceShowcaseIndex((prev) =>
                          prev === ecommerceShowcaseProjects.length - 1 ? 0 : prev + 1,
                        )
                      }
                      className="absolute right-0 md:-right-7 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary border hover:border-transparent hover:scale-110 text-primary-foreground transition-all"
                      aria-label="Next showcase project"
                    >
                      <ArrowRight size={20} />
                    </button>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* ── HOW WE WORK ── */}
            <section className="py-16 md:py-20 bg-primary">
              <div className={pageWidthClass}>
                <motion.h2
                  className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-10 text-primary-foreground text-center"
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  How We Work: The Secret to Our Success
                </motion.h2>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
                  variants={staggerCards}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  {ecommerceHowWeWork.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.article
                        key={item.title}
                        variants={revealUp}
                        onMouseMove={handleProcessSpotlightMove}
                        onMouseLeave={handleProcessSpotlightLeave}
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 180, damping: 22 }}
                        style={
                          {
                            "--spotlight-x": "50%",
                            "--spotlight-y": "50%",
                            "--spotlight-opacity": "0",
                          } as React.CSSProperties
                        }
                        className="group relative rounded-3xl border border-primary-foreground/30 bg-white/10 p-6 md:p-8 min-h-[290px] text-center overflow-hidden"
                      >
                         <div
                          className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300"
                          style={{
                            opacity: "var(--spotlight-opacity)",
                            background:
                              "radial-gradient(220px circle at var(--spotlight-x) var(--spotlight-y), rgba(255, 255, 255, 0.15), transparent 70%)",
                          }}
                        />
                        <Icon size={44} className="relative z-10 mx-auto mb-5 text-primary-foreground group-hover:scale-110 transition-transform" />
                        <h3 className="relative z-10 text-2xl md:text-3xl font-heading font-bold leading-tight mb-4 text-primary-foreground">{item.title}</h3>
                        <p className="relative z-10 text-lg md:text-xl leading-relaxed text-primary-foreground/90">{item.desc}</p>
                      </motion.article>
                    );
                  })}
                </motion.div>
              </div>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section className="py-16 md:py-20 bg-background">
              <div className={pageWidthClass}>
                <motion.h2
                  className="text-3xl md:text-5xl font-heading font-bold text-center mb-10 md:mb-12 text-foreground"
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  What It&apos;s Like Working With plus Consulting
                </motion.h2>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4"
                  variants={staggerCards}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  {ecommerceTestimonials.map((item) => (
                    <motion.div key={item.name} variants={revealUp} whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}>
                      <SocialTestimonialCard
                        quote={item.quote}
                        name={item.name}
                        role={item.role}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>
          </>
        ) : null}

        {isMarketing ? (
          <>
            {/* ── HERO ── */}
            <section className="relative min-h-[86vh] md:min-h-[92vh] flex items-end overflow-hidden">
              <motion.img
                src={service.image}
                alt="Results-Driven Digital Marketing Services"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ scale: 1.15, filter: "blur(4px)" }}
                animate={{ scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.8, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

              <div className={`${pageWidthClass} relative z-10 pb-16 md:pb-20`}>
                <div className="max-w-5xl">
                  <motion.h1
                    className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white mb-6 leading-[1.05] tracking-tight"
                    initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                  >
                    Results-Driven Digital Marketing Services to Grow Your Business
                  </motion.h1>
                  <motion.p
                    className="text-white/95 text-xl md:text-2xl leading-[1.4] max-w-4xl mb-10"
                    initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.85, ease: "easeOut", delay: 0.4 }}
                  >
                    Your all-in-one partner: a full-service digital marketing agency that turns clicks into
                    customers.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
                  >
                    <a
                      href="#service-overview"
                      className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-primary text-primary-foreground text-lg font-bold hover:shadow-[0_0_20px_rgba(var(--primary),0.5)] hover:bg-primary/95 hover:-translate-y-1 transition-all duration-300 mr-4 mb-4"
                    >
                      Discover How
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-white text-black text-lg font-bold hover:bg-white/90 hover:-translate-y-1 transition-all duration-300 mb-4"
                    >
                      Contact Us
                    </a>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* ── OVERVIEW ── */}
            <section id="service-overview" className="py-16 md:py-24 bg-background overflow-hidden">
              <div className={pageWidthClass}>
                <motion.h2
                  className="text-3xl md:text-5xl font-heading font-bold leading-tight max-w-6xl mb-8 text-foreground"
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  Your Comprehensive Marketing Solutions to Amplify Your Brand
                </motion.h2>
                <motion.div
                  className="relative mb-12"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  <div className="h-px bg-border/70" />
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-foreground" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-8 lg:gap-14 items-center">
                  <motion.p
                    className="text-lg md:text-xl leading-relaxed text-foreground/95"
                    initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.75, ease: "easeOut" }}
                  >
                    Maximize your brand&apos;s impact with plus Consulting&apos;s innovative marketing strategies.
                    From digital marketing to brand development, our team helps you reach new audiences, boost
                    engagement, and drive business growth. By integrating AI-driven personalization and omnichannel
                    marketing, we create seamless customer experiences that resonate with your audience&apos;s values.
                    Our approach focuses on building a strong brand identity that fosters deeper connections and drives
                    loyalty. Explore how our marketing services can boost your brand&apos;s presence today!
                  </motion.p>

                  <motion.div
                    className="relative rounded-3xl overflow-hidden border border-border group"
                    initial={{ opacity: 0, x: 40, scale: 0.96 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                  >
                    <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                    <img
                      src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1400"
                      alt="Marketing team collaboration"
                      className="w-full h-[320px] md:h-[450px] object-cover hover:scale-[1.04] transition-transform duration-700 ease-in-out"
                    />
                  </motion.div>
                </div>
              </div>
            </section>

            {/* ── DIGITAL MARKETING SERVICES ── */}
            <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
              <div className={pageWidthClass}>
                <motion.h2
                  className="text-3xl md:text-5xl font-heading font-bold leading-tight max-w-6xl mb-8 text-primary-foreground relative z-10"
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  Next-Gen Digital Marketing Services for Measurable Success
                </motion.h2>
                <motion.div
                  className="relative mb-12 z-10"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  <div className="h-px bg-primary-foreground/30" />
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary-foreground" />
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 relative z-10"
                  variants={staggerCards}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  {marketingServices.map((item, index) => (
                    <motion.article
                      key={item.id}
                      className="group relative rounded-3xl border border-primary-foreground/20 bg-white/10 p-6 md:p-8 min-h-[300px] overflow-hidden backdrop-blur-sm"
                      variants={revealUp}
                      onMouseMove={handleProcessSpotlightMove}
                      onMouseLeave={handleProcessSpotlightLeave}
                      whileHover={{ y: -6, scale: 1.015 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      style={
                        {
                          "--spotlight-x": "50%",
                          "--spotlight-y": "50%",
                          "--spotlight-opacity": "0",
                        } as React.CSSProperties
                      }
                    >
                      <div
                        className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300"
                        style={{
                          opacity: "var(--spotlight-opacity)",
                          background:
                            "radial-gradient(250px circle at var(--spotlight-x) var(--spotlight-y), rgba(255, 255, 255, 0.15), transparent 70%)",
                        }}
                      />
                      <div className="relative z-10 inline-flex h-12 min-w-12 px-3 rounded-xl items-center justify-center bg-background text-foreground text-xl font-bold mb-6 shadow-md">
                        {item.id}
                      </div>
                      <h3 className="relative z-10 text-2xl md:text-3xl font-heading font-bold leading-tight mb-4 text-primary-foreground">{item.title}</h3>
                      <p className="relative z-10 text-lg md:text-xl leading-relaxed text-primary-foreground/90">{item.desc}</p>
                    </motion.article>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* ── DIGITAL MARKETING FEATURES ── */}
            <section className="py-16 md:py-24 bg-background">
              <div className={pageWidthClass}>
                <div className="space-y-16 md:space-y-28">
                  {marketingFeatureHighlights.map((item, index) => {
                    const Icon = item.icon;
                    const shouldReverse = index % 2 === 1;
                    return (
                      <article
                        key={item.label}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center group"
                      >
                        <motion.div
                          className={`rounded-3xl overflow-hidden border border-border/80 shadow-sm group-hover:shadow-md transition-shadow duration-500 ${shouldReverse ? "lg:order-2" : "lg:order-1"
                            }`}
                          initial={{ opacity: 0, x: shouldReverse ? 40 : -40, scale: 0.96 }}
                          whileInView={{ opacity: 1, x: 0, scale: 1 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                          <img src={item.image} alt={item.label} className="w-full h-[320px] md:h-[420px] object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-in-out" />
                        </motion.div>

                        <motion.div
                          className={`flex flex-col justify-center ${shouldReverse ? "lg:order-1" : "lg:order-2"}`}
                          initial={{ opacity: 0, x: shouldReverse ? -40 : 40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                        >
                          <div className="inline-flex items-center gap-3 rounded-full bg-primary/10 px-5 py-2 text-primary mb-5 self-start shadow-sm border border-primary/10">
                            <Icon size={20} />
                            <span className="text-xl md:text-2xl font-medium tracking-tight">{item.label}</span>
                          </div>
                          <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-5 text-foreground">
                            {item.title}
                          </h3>
                          <p className="text-lg md:text-xl leading-relaxed text-foreground/80">{item.desc}</p>
                          {item.metric ? (
                            <div className="mt-8 p-6 rounded-2xl bg-secondary/5 border border-border inline-block self-start">
                              <p className="text-xl md:text-2xl leading-snug text-foreground/90 flex flex-col md:flex-row md:items-center">
                                <span className="text-6xl md:text-7xl font-heading font-bold md:mr-4 text-primary tracking-tighter mb-2 md:mb-0 block">
                                  {item.metric}
                                </span>
                                <span className="font-medium text-foreground/80 md:max-w-[200px] block">{item.metricText}</span>
                              </p>
                            </div>
                          ) : null}
                        </motion.div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* ── INDUSTRIES WE SERVE ACCORDION ── */}
            <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
              <div className={pageWidthClass}>
                <motion.h2
                  className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-8 text-primary-foreground"
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  Industries We Serve
                </motion.h2>
                <motion.div
                  className="relative mb-12"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  <div className="h-px bg-primary-foreground/30" />
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary-foreground" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.28fr] gap-6 lg:gap-8 lg:items-stretch">
                  <motion.div
                    className="rounded-3xl overflow-hidden border border-primary-foreground/30 h-[360px] lg:h-full lg:min-h-[500px]"
                    initial={{ opacity: 0, x: -40, scale: 0.96 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <img
                      src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1400"
                      alt="Digital marketing industries"
                      className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-700 ease-out"
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-3"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
                  >
                    {marketingIndustries.map((industry) => {
                      const isOpen = openMarketingIndustry === industry.title;
                      return (
                        <article key={industry.title} className="rounded-3xl overflow-hidden border border-transparent">
                          <button
                            type="button"
                            onClick={() => setOpenMarketingIndustry(isOpen ? "" : industry.title)}
                            className="w-full bg-background text-foreground px-6 py-5 flex items-center justify-between text-left hover:bg-accent/10 transition-colors"
                          >
                            <span className="text-2xl md:text-3xl font-medium text-foreground tracking-tight">{industry.title}</span>
                            {isOpen ? (
                              <ChevronUp size={24} className="text-foreground shrink-0" />
                            ) : (
                              <ChevronDown size={24} className="text-foreground shrink-0" />
                            )}
                          </button>
                          {isOpen ? (
                            <motion.div
                              className="bg-background border-t border-border px-6 pb-6 pt-4"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.35, ease: "easeOut" }}
                            >
                              <p className="text-foreground/90 text-lg md:text-xl leading-relaxed">{industry.desc}</p>
                            </motion.div>
                          ) : null}
                        </article>
                      );
                    })}
                  </motion.div>
                </div>
              </div>
            </section>

            {/* ── CUSTOM STRATEGY CALLOUT ── */}
            <section className="py-16 md:py-24 bg-background">
              <div className={pageWidthClass}>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.02fr] gap-8 lg:gap-14 items-center">
                  <motion.div
                    className="rounded-3xl overflow-hidden border border-border group"
                    initial={{ opacity: 0, x: -40, scale: 0.96 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <img
                      src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1400"
                      alt="Custom digital marketing strategy"
                      className="w-full h-[320px] md:h-[450px] object-cover hover:scale-[1.04] transition-transform duration-700 ease-in-out"
                    />
                  </motion.div>

                  <motion.div
                    className="max-w-3xl"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
                  >
                    <h3 className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-8 text-foreground">
                      Don&apos;t see your industry?{" "}
                      <span className="font-medium text-foreground/70 italic block mt-2">No worries!</span>
                    </h3>
                    <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 mb-10">
                      Contact our team to craft a custom digital marketing strategy specific to your business
                      model. We adapt quickly to entirely new verticals.
                    </p>
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center h-16 px-10 rounded-full bg-primary text-primary-foreground text-xl font-bold hover:shadow-[0_0_20px_rgba(var(--primary),0.5)] hover:-translate-y-1 transition-all duration-300"
                    >
                      Build Your Strategy
                    </a>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* ── TRANSFORMATION ── */}
            <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
              <div className={pageWidthClass}>
                <motion.h2
                  className="text-3xl md:text-5xl font-heading font-bold leading-tight max-w-6xl mb-8 text-primary-foreground"
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  How Can Our Marketing Services Transform Your Business?
                </motion.h2>
                <motion.div
                  className="relative mb-12 relative z-10"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  <div className="h-px bg-primary-foreground/30" />
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary-foreground" />
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 relative z-10"
                  variants={staggerCards}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  {marketingTransformationBenefits.map((item) => (
                    <motion.article
                      key={item.id}
                      className="group relative rounded-3xl border border-primary-foreground/20 bg-white/10 p-6 md:p-8 min-h-[250px] text-center overflow-hidden"
                      variants={revealUp}
                      onMouseMove={handleProcessSpotlightMove}
                      onMouseLeave={handleProcessSpotlightLeave}
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 180, damping: 22 }}
                      style={
                        {
                          "--spotlight-x": "50%",
                          "--spotlight-y": "50%",
                          "--spotlight-opacity": "0",
                        } as React.CSSProperties
                      }
                    >
                      <div
                        className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300"
                        style={{
                          opacity: "var(--spotlight-opacity)",
                          background:
                            "radial-gradient(220px circle at var(--spotlight-x) var(--spotlight-y), rgba(255, 255, 255, 0.15), transparent 70%)",
                        }}
                      />
                      <div className="relative z-10 inline-flex h-12 min-w-12 px-3 rounded-full items-center justify-center bg-background text-primary text-xl font-bold mb-6 shadow-md">
                        {item.id}
                      </div>
                      <h3 className="relative z-10 text-2xl md:text-3xl font-heading font-bold leading-tight mb-4 text-primary-foreground">{item.title}</h3>
                      <p className="relative z-10 text-lg md:text-xl leading-relaxed text-primary-foreground/90">{item.desc}</p>
                    </motion.article>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* ── EXPERTISE ── */}
            <section className="py-16 md:py-24 bg-background">
              <div className={pageWidthClass}>
                <motion.h2
                  className="text-3xl md:text-5xl font-heading font-bold text-center mb-12 md:mb-16 text-foreground"
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  Our Experts Have Experience In
                </motion.h2>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
                  variants={staggerCards}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  {marketingExpertiseAreas.slice(0, 8).map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.article
                        key={item.title}
                        className="group rounded-3xl border border-border/80 hover:border-primary/50 bg-card min-h-[190px] p-6 md:p-8 flex flex-col items-center justify-center text-center text-foreground shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                        variants={revealUp}
                        whileHover={{ y: -8, scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      >
                        <div className="w-16 h-16 rounded-2xl bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center mb-5 transition-colors duration-300">
                          <Icon size={32} className="text-primary group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-heading font-bold leading-snug">{item.title}</h3>
                      </motion.article>
                    );
                  })}
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[920px] mx-auto mt-6"
                  variants={staggerCards}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  {marketingExpertiseAreas.slice(8).map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.article
                        key={item.title}
                        className="group rounded-3xl border border-border/80 hover:border-primary/50 bg-card min-h-[190px] p-6 md:p-8 flex flex-col items-center justify-center text-center text-foreground shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                        variants={revealUp}
                        whileHover={{ y: -8, scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      >
                        <div className="w-16 h-16 rounded-2xl bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center mb-5 transition-colors duration-300">
                          <Icon size={32} className="text-primary group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-heading font-bold leading-snug">{item.title}</h3>
                      </motion.article>
                    );
                  })}
                </motion.div>
              </div>
            </section>

            {/* ── HOW WE WORK ── */}
            <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
              <div className={pageWidthClass}>
                <motion.h2
                  className="text-3xl md:text-5xl font-heading font-bold text-center mb-12 md:mb-16 text-primary-foreground"
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  How We Work: The Secret to Our Success
                </motion.h2>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 relative z-10"
                  variants={staggerCards}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  {marketingWorkflowCards.map((item) => (
                    <motion.article
                      key={item.title}
                      className="group relative rounded-3xl border border-primary-foreground/20 bg-white/10 overflow-hidden"
                      variants={revealUp}
                      onMouseMove={handleProcessSpotlightMove}
                      onMouseLeave={handleProcessSpotlightLeave}
                      style={
                        {
                          "--spotlight-x": "50%",
                          "--spotlight-y": "50%",
                          "--spotlight-opacity": "0",
                        } as React.CSSProperties
                      }
                    >
                      <div
                        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
                        style={{
                          opacity: "var(--spotlight-opacity)",
                          background:
                            "radial-gradient(220px circle at var(--spotlight-x) var(--spotlight-y), rgba(255, 255, 255, 0.2), transparent 80%)",
                        }}
                      />
                      <div className="overflow-hidden">
                        <img src={item.image} alt={item.title} className="w-full h-[200px] object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                      </div>
                      <div className="p-6 md:p-8 text-center relative z-20">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold leading-tight mb-4 text-primary-foreground">{item.title}</h3>
                        <p className="text-lg md:text-xl leading-relaxed text-primary-foreground/90">{item.desc}</p>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* ── WHY CHOOSE US ── */}
            <section className="py-16 md:py-24 bg-background">
              <div className={pageWidthClass}>
                <motion.h2
                  className="text-3xl md:text-5xl font-heading font-bold text-center mb-12 md:mb-16 text-foreground"
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  Why Choose Us
                </motion.h2>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
                  variants={staggerCards}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  {marketingWhyChooseUs.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.article
                        key={item.title}
                        className="group rounded-3xl bg-card border border-border/70 hover:border-primary/40 text-foreground p-6 md:p-8 min-h-[190px] flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                        variants={revealUp}
                        whileHover={{ y: -8, scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      >
                        <div className="w-16 h-16 rounded-2xl bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center mb-5 transition-colors duration-300">
                          <Icon size={32} className="text-primary group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-heading font-bold leading-snug">{item.title}</h3>
                      </motion.article>
                    );
                  })}
                </motion.div>
              </div>
            </section>

            {/* ── PROJECTS & SUCCESS STORIES CAROUSEL ── */}
            <section className="py-16 md:py-24 bg-card">
              <div className={pageWidthClass}>
                <motion.h2
                  className="text-3xl md:text-4xl font-heading font-bold mb-12 md:mb-16 text-foreground"
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  Our Projects &amp; Success Stories
                </motion.h2>

                <div className="grid grid-cols-1 xl:grid-cols-[1fr_auto_1.1fr_auto] gap-8 md:gap-10 items-center">
                  <motion.div
                    className="max-w-3xl overflow-hidden"
                    key={`text-${activeMarketingProjectIndex}`}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <h3 className="text-3xl md:text-4xl font-heading font-semibold leading-snug mb-6">
                      {activeMarketingProject.summaryTitle}
                    </h3>
                    <p className="text-lg md:text-xl leading-relaxed text-foreground/95">
                      {activeMarketingProject.summary}
                    </p>
                  </motion.div>

                  <button
                    type="button"
                    onClick={() =>
                      setActiveMarketingProjectIndex((prev) =>
                        prev === 0 ? marketingProjectStories.length - 1 : prev - 1,
                      )
                    }
                    className="mx-auto xl:mx-0 w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 inline-flex items-center justify-center shadow-md transition-all duration-300"
                    aria-label="Previous project"
                  >
                    <ArrowLeft size={20} />
                  </button>

                  <motion.div
                    className="w-full relative group"
                    key={`img-${activeMarketingProjectIndex}`}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <div className="rounded-[20px] overflow-hidden border border-border/80 bg-background shadow-md group-hover:shadow-xl transition-shadow duration-500">
                      <img
                        src={activeMarketingProject.image}
                        alt={activeMarketingProject.title}
                        className="w-full h-[320px] md:h-[450px] object-cover"
                      />
                    </div>
                    <div className="absolute inset-x-4 bottom-4 inset-y-auto pt-16 pb-6 px-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-[16px] pointer-events-none">
                      <h4 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2 leading-tight">
                        {activeMarketingProject.title}
                      </h4>
                    </div>
                  </motion.div>

                  <button
                    type="button"
                    onClick={() =>
                      setActiveMarketingProjectIndex((prev) =>
                        prev === marketingProjectStories.length - 1 ? 0 : prev + 1,
                      )
                    }
                    className="mx-auto xl:mx-0 w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 inline-flex items-center justify-center shadow-md transition-all duration-300"
                    aria-label="Next project"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
              <div className={pageWidthClass}>
                <motion.h2
                  className="text-3xl md:text-5xl font-heading font-bold text-center mb-12 md:mb-16 text-primary-foreground relative z-10"
                  initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.75, ease: "easeOut" }}
                >
                  Testimonials
                </motion.h2>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative z-10"
                  variants={staggerCards}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                >
                  {marketingTestimonials.map((item) => (
                    <motion.div key={item.name} variants={revealUp}>
                      <SocialTestimonialCard
                        quote={item.quote}
                        name={item.name}
                        role={item.role}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>
          </>
        ) : null}

        {!isProductEngineering && !isAgenticAiEngineering && !isEcommerce && !isMarketing ? (
          <section id="service-overview" className={`${pageWidthClass} pt-28`}>
            <Link
              to="/#services"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              <span>Back to Services</span>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start"
            >
              <div className="rounded-2xl overflow-hidden border border-border/70 shadow-card">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[260px] md:h-[380px] object-cover"
                />
              </div>

              <div>
                <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">{service.title}</h1>
                <p className="text-muted-foreground text-lg leading-relaxed mb-7">{service.desc}</p>
                <h2 className="text-xl font-heading font-semibold mb-4">What We Deliver</h2>
                <ul className="space-y-3">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-foreground">
                      <span className="text-primary mt-1">*</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </section>
        ) : null}
      </main>

      {isProductEngineering || isAgenticAiEngineering || isEcommerce || isMarketing ? (
        <a
          href="#contact"
          className="fixed z-40 right-5 bottom-5 inline-flex items-center gap-3 h-14 px-7 rounded-full bg-primary text-primary-foreground text-lg font-semibold hover:brightness-110 transition-all shadow-card"
        >
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white text-primary">
            <MessageCircle size={18} />
          </span>
          Contact Us
        </a>
      ) : null}

      <ContactSection />
      <Footer />
    </div>
  );
};

export default ServiceDetail;
