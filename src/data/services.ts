import productEngImg from "@/assets/service-product-engineering.jpg";
import agenticAiImg from "@/assets/service-agentic-ai.jpg";
import ecommerceImg from "@/assets/service-ecommerce.jpg";
import marketingImg from "@/assets/service-marketing.jpg";

export type Service = {
  slug: string;
  title: string;
  image: string;
  desc: string;
  details: string[];
};

export const services: Service[] = [
  {
    slug: "product-engineering",
    title: "Product Engineering",
    image: productEngImg,
    desc: "Building robust, scalable solutions customized to your unique needs.",
    details: [
      "Full-stack custom software development",
      "Cloud-native architecture & microservices",
      "API design and integration",
      "DevOps & CI/CD pipeline setup",
      "Legacy system modernization",
      "Quality assurance & automated testing",
    ],
  },
  {
    slug: "agentic-ai-engineering",
    title: "Agentic AI Engineering",
    image: agenticAiImg,
    desc: "Turning raw data into actionable intelligence for smarter decision-making.",
    details: [
      "Custom AI/ML model development",
      "Natural Language Processing (NLP)",
      "Computer Vision solutions",
      "Predictive analytics & forecasting",
      "AI-powered automation workflows",
      "Large Language Model (LLM) integration",
    ],
  },
  {
    slug: "ecommerce",
    title: "eCommerce",
    image: ecommerceImg,
    desc: "Powering growth with multi-channel, seamless commerce experiences.",
    details: [
      "SAP Commerce & Adobe Commerce implementation",
      "Shopify & headless commerce platforms",
      "Payment gateway integration (Stripe, PayPal)",
      "Inventory & order management systems",
      "Personalized product recommendations",
      "Multi-channel retail strategy",
    ],
  },
  {
    slug: "marketing",
    title: "Marketing",
    image: marketingImg,
    desc: "Amplifying your brand with data-driven strategies that maximize ROI.",
    details: [
      "SEO & content strategy",
      "Paid advertising & PPC campaigns",
      "Social media marketing & management",
      "Marketing analytics & ROI tracking",
      "Email marketing automation",
      "Brand identity & creative design",
    ],
  },
];
