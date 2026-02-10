import { Code, Smartphone, Cloud, BrainCircuit, ShieldCheck, Server, Layers, Settings } from "lucide-react";
export const services = [
  {
    icon: Code,
    title: "Web Development",
    slug: "web-development",
    description:
      "High-performance, responsive websites and web applications using React, Next.js and modern full-stack technologies.",
    intro:
      "We design and develop high-performance web applications that are scalable, secure and built to grow with your business.",

    overview:
      "Our web development services focus on building fast, SEO-optimized and user-centric applications using modern technologies. From corporate websites to complex SaaS platforms, we deliver solutions that are reliable, maintainable and future-ready.",

    features: [
      "Custom web application development",
      "Responsive and mobile-first design",
      "SEO-optimized architecture",
      "High-performance and scalable systems",
      "Secure authentication and authorization",
      "API integrations and third-party services",
    ],

    process: [
      "Requirement analysis & planning",
      "UI/UX design and prototyping",
      "Frontend & backend development",
      "Testing, optimization & security audits",
      "Deployment and post-launch support",
    ],

    techStack: [
      "React",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
      "PostgreSQL / MongoDB",
      "AWS / Vercel",
    ],

    useCases: [
      "Corporate websites",
      "SaaS platforms",
      "E-commerce solutions",
      "Admin dashboards",
      "Enterprise web systems",
    ],
  },
  
  {
    icon: Smartphone,
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description:
      "Cross-platform mobile apps with seamless UX for Android and iOS powered by the latest frameworks.",
   intro:
        "We create high-quality mobile applications that deliver exceptional user experiences across both Android and iOS platforms.",
    overview:
        "Our mobile app development services leverage cross-platform frameworks to build performant and visually appealing applications. We focus on user-centric design, smooth functionality, and robust performance to ensure your app stands out in the competitive mobile market.",
    features: [
      "Cross-platform app development",
      "Intuitive UI/UX design",
      "Performance optimization",
      "Push notifications & offline support",
      "App Store & Google Play deployment",
      "Post-launch maintenance & updates",
    ],
    process: [
      "Conceptualization & requirement gathering",
      "Wireframing & UI/UX design",
        "App development & integration",
        "Testing & quality assurance",
        "Launch & distribution",
        "Ongoing support & enhancements",
    ],
    techStack: [
      "React Native",
      "Flutter",
      "Swift (iOS)",
        "Kotlin (Android)",
        "Firebase",
        "AWS Amplify",  
    ],
    useCases: [
      "Business apps",
      "E-commerce apps",
      "Social networking apps",
      "Productivity tools",
      "Enterprise mobile solutions",
    ],  
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    slug: "cloud-devops",
    description:
      "Cloud architecture, CI/CD pipelines, containerization and scalable infrastructure for business continuity.",
    intro:
        "We provide comprehensive cloud and DevOps services to streamline your development processes and ensure scalable, reliable infrastructure.",
    overview:
        "Our cloud and DevOps solutions help businesses leverage the power of cloud computing while implementing best practices in continuous integration and continuous deployment (CI/CD). We focus on automation, scalability, and security to optimize your operations and reduce time-to-market.",
    features: [
      "Cloud infrastructure setup & management",
      "CI/CD pipeline implementation",
      "Containerization with Docker & Kubernetes",
      "Infrastructure as Code (IaC)",
      "Monitoring & performance optimization",
      "Disaster recovery & backup solutions",
    ],
    process: [  
        "Assessment & strategy planning",
        "Cloud architecture design",
        "CI/CD pipeline setup",
        "Containerization & orchestration",
        "Monitoring & optimization",
        "Ongoing management & support",
    ],
    techStack: [
        "AWS / Azure / GCP",
        "Docker & Kubernetes",
        "Jenkins / GitHub Actions",
        "Terraform / CloudFormation",
        "Prometheus & Grafana",
        "Ansible / Puppet",
    ],
    useCases: [
        "Scalable web applications",
        "Microservices architecture",
        "Automated deployment pipelines",
        "Disaster recovery solutions",
        "Enterprise cloud migration",
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    slug: "ai-machine-learning",
    description:
      "Intelligent systems, automation, predictive analytics, and personalized AI solutions that drive insights.",
    intro:
        "We build AI-powered solutions that enhance decision-making, automate processes, and deliver personalized experiences.",
    overview:
        "Our AI and Machine Learning services focus on developing intelligent systems that leverage data to provide actionable insights and automate complex tasks. From predictive analytics to natural language processing, we create solutions that help businesses stay ahead in the digital age.",
    features: [
      "Custom AI model development",
      "Data analysis & predictive modeling",
      "Natural Language Processing (NLP)",
      "Computer Vision solutions",      
        "AI-powered chatbots & virtual assistants",
        "Integration with existing systems",
    ],  
    process: [
        "Data collection & preprocessing",
        "Model selection & training",
        "Evaluation & optimization",
        "Deployment & integration",
        "Monitoring & maintenance",
        "Continuous improvement",
    ],
    techStack: [
        "Python & R",
        "TensorFlow & PyTorch",
        "scikit-learn",
        "NLTK & SpaCy",
        "OpenCV",
        "AWS SageMaker / GCP AI Platform",
    ],
    useCases: [
        "Predictive analytics",
        "Customer segmentation",      
        "Chatbots & virtual assistants",
        "Image & video analysis",
        "Recommendation systems",
    ],

  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    slug: "cyber-security", 
    description:
      "Comprehensive security audits, data protection, authentication, and compliance services.",
   intro:
        "We offer robust cyber security solutions to protect your digital assets and ensure compliance with industry standards.",
    overview:   
        "Our cyber security services are designed to safeguard your business from evolving threats. We conduct thorough security audits, implement advanced protection measures, and ensure compliance with relevant regulations to keep your data and systems secure.",
    features: [
      "Security audits & vulnerability assessments",
      "Data encryption & protection",
      "Secure authentication & access control",
      "Threat detection & incident response",
      "Compliance management (GDPR, HIPAA, etc.)",
      "Employee training & awareness programs",
    ],
    process: [
        "Initial security assessment",
        "Vulnerability scanning & penetration testing",
        "Implementation of security measures",
        "Monitoring & threat detection",
        "Incident response planning",
        "Ongoing training & updates",
    ],      
    techStack: [
        "Wireshark & Nmap",
        "Metasploit",
        "Splunk",
        "AWS Security Tools",
        "Encryption protocols (AES, RSA)",
        "SIEM solutions",
    ],
    useCases: [     
        "Data protection for enterprises",
        "Secure application development",
        "Regulatory compliance",
        "Threat detection & response",
        "Employee security training",
    ],  
  },
  {
    icon: Server,
    title: "Backend & API Development",
    slug: "backend-api-development",
    description:
      "Robust backend solutions and secure API integrations tailored to your enterprise needs.",
    intro:
        "We specialize in building scalable and secure backend systems and APIs that power your applications and services.",
    overview:
        "Our backend and API development services focus on creating reliable server-side solutions that ensure seamless data flow and integration. We build RESTful and GraphQL APIs, implement microservices architectures, and optimize backend performance to support your business operations effectively.",
    features: [
        "Custom backend development",
        "RESTful & GraphQL API design",
        "Microservices architecture",
        "Database design & management",
        "Performance optimization & caching",
        "Security & authentication",
    ],
    process: [
        "Requirement analysis & architecture design",
        "API design & development",
        "Database setup & integration",
        "Testing & performance tuning",
        "Deployment & scaling",
        "Maintenance & updates",
    ],
    techStack: [
        "Node.js & Express",
        "Django & Flask",
        "GraphQL & REST",
        "PostgreSQL / MongoDB",
        "Redis & RabbitMQ",
        "Docker & Kubernetes",
    ],
    useCases: [
        "Enterprise application backends",
        "Mobile app backends",
        "Third-party API integrations",
        "Microservices-based systems",
        "Real-time data processing",
    ],
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description:
      "User-centered interface design that balances aesthetics and performance to increase engagement.",
    intro:
        "We create intuitive and visually appealing UI/UX designs that enhance user engagement and drive business growth.",
    overview:
        "Our UI/UX design services focus on delivering user-centric designs that are both functional and aesthetically pleasing. We conduct user research, create wireframes and prototypes, and design interfaces that provide seamless user experiences across all devices.",
    features: [
        "User research & persona development",
        "Wireframing & prototyping",
        "Visual design & branding",
        "Responsive & mobile-first design",
        "Usability testing & feedback",
        "Design system creation",
    ],
    process: [
        "User research & requirement gathering",
        "Wireframing & prototyping",
        "Visual design & iteration",
        "Usability testing & refinement",
        "Final design delivery",
        "Handoff to development team",
    ],
    techStack: [
        "Figma",
        "Adobe XD",
        "Sketch",
        "InVision",
        "Zeplin",
        "Principle",
    ],
    useCases: [
        "Web application design",
        "Mobile app interfaces",
        "E-commerce platforms",
        "Corporate branding",
        "User experience optimization",
    ],
    
  },    

  {
    icon: Settings,
    title: "Custom Software Solutions",
    slug: "custom-software-solutions",
    description:
      "Bespoke software that scales with your business model and operational goals.",
    intro:
        "We develop custom software solutions tailored to your unique business needs and objectives.",
    overview:
        "Our custom software development services focus on creating solutions that align with your specific business processes and goals. We work closely with you to understand your requirements and deliver software that enhances efficiency, productivity, and growth.",
    features: [
        "Bespoke software development",
        "Business process automation",
        "System integration & migration",
        "Scalable architecture design",
        "Ongoing support & maintenance",
        "User training & documentation",
    ],
    process: [
        "Requirement analysis & consultation",
        "Custom solution design",
        "Agile development & iteration",
        "Testing & quality assurance",
        "Deployment & user training",
        "Ongoing support & enhancements",
    ],
    techStack: [
        "Varies based on project requirements",
        "Full-stack development",
        "Cloud & on-premises solutions",
        "API integrations",
        "Database management",
        "DevOps practices",
    ],
    useCases: [
        "Industry-specific software",
        "Internal business tools",
        "Customer relationship management (CRM)",
        "Enterprise resource planning (ERP)",
        "Custom automation solutions",
    ],
  },
];
