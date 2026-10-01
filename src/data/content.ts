export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  shortDescription: string;
  fullDescription: string;
  keyOutcomes: string[];
  methodology: string[];
  deliverables: string[];
  icon: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  threatLandscape: string[];
  complianceFrameworks: string[];
  protectiveSolutions: string[];
  icon: string;
}

export interface SecurityProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  keyActivities: string[];
  deliverable: string;
}

export interface ValuePillar {
  title: string;
  description: string;
  details: string;
  icon: string;
}

export const COMPANY_DETAILS = {
  name: "PhenixHive",
  tagline: "Proactive Cybersecurity & Resilient Defense",
  shortDescription:
    "PhenixHive is an enterprise-focused cybersecurity company dedicated to safeguarding business systems, networks, cloud environments, and sensitive data against evolving threat actors.",
  phone: "08023391071",
  phoneInternational: "+234 802 339 1071",
  phoneRaw: "2348023391071",
  email: "phenixhive@gmail.com",
  linkedIn: "https://www.linkedin.com/company/phenixhive/",
  tikTok: "https://www.tiktok.com/@phenixhive",
  whatsAppUrl: "https://wa.me/2348023391071?text=Hello%20PhenixHive%2C%20I%20would%20like%20to%20discuss%20our%20organization%27s%20cybersecurity%20needs.",
  address: "Digital Security Operations & Advisory Hub",
  operatingHours: "24/7 Security Advisory & Support",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "penetration-testing",
    title: "Penetration Testing",
    category: "Offensive Security",
    badge: "Core Defense",
    icon: "ShieldAlert",
    shortDescription:
      "Controlled, adversarial simulation to uncover deep-seated vulnerabilities across your external perimeter, internal network, and applications before attackers exploit them.",
    fullDescription:
      "Our penetration testing mimics real-world adversaries using manual exploitation techniques paired with rigorous methodology. We go beyond automated scanners to uncover complex chaining vulnerabilities, authentication bypasses, and privilege escalation pathways.",
    keyOutcomes: [
      "Validate real-world exploitability of architectural weaknesses",
      "Prioritize fixes based on actual business impact, not theoretical CVE scores",
      "Executive summary and technical remediation guide for engineering teams",
    ],
    methodology: [
      "Reconnaissance & OSINT Mapping",
      "Threat Vector Modeling & Surface Analysis",
      "Adversarial Exploitation & Privilege Escalation",
      "Post-Exploitation Impact Analysis",
      "Debrief & Collaborative Retest",
    ],
    deliverables: [
      "Executive Risk Summary (Board-Ready)",
      "Technical Vulnerability Dossier with Proof-of-Concepts (PoCs)",
      "Prioritized Step-by-Step Remediation Plan",
      "Complimentary Post-Remediation Verification Retest",
    ],
  },
  {
    id: "vulnerability-assessment",
    title: "Vulnerability Assessment",
    category: "Security Hygiene",
    badge: "Continuous Hygiene",
    icon: "ScanSearch",
    shortDescription:
      "Comprehensive, systematic evaluation of systems and software to detect missing patches, misconfigurations, and known security weaknesses.",
    fullDescription:
      "A systematic evaluation of security weaknesses in an information system. We inventory digital assets, cross-reference global threat databases, evaluate patch levels, and deliver clear, actionable remediation roadmaps tailored to your infrastructure.",
    keyOutcomes: [
      "Complete inventory and visibility across enterprise digital assets",
      "Identification of zero-day exposures and critical configuration drifts",
      "Actionable patching roadmap mapped against CVSS v3/v4 severity",
    ],
    methodology: [
      "Asset Discovery & Fingerprinting",
      "Automated Multi-Engine Surface Scanning",
      "Manual False-Positive Elimination",
      "Risk Severity Scoring & Contextual Prioritization",
    ],
    deliverables: [
      "Comprehensive Vulnerability Catalog",
      "Asset Exposure Heatmap",
      "Tactical Patching & Hardening Playbook",
    ],
  },
  {
    id: "network-security",
    title: "Network Security & Architecture",
    category: "Infrastructure",
    badge: "Perimeter & Zero-Trust",
    icon: "Network",
    shortDescription:
      "Defend against unauthorized access, eavesdropping, and perimeter compromise with robust network segmentation, firewall tuning, and zero-trust controls.",
    fullDescription:
      "We design, audit, and fortify enterprise network architectures. From micro-segmentation and VPN/ZTNA policies to firewall configuration reviews and rogue device containment, we build layered defense topologies that halt lateral movement.",
    keyOutcomes: [
      "Eliminate unauthorized lateral movement across critical subnetworks",
      "Harden border routers, switches, next-gen firewalls, and bastion hosts",
      "Implement robust Zero-Trust Network Architecture (ZTNA)",
    ],
    methodology: [
      "Topology Architecture Review",
      "Firewall Rulebase Auditing & Clean-up",
      "VLAN & Micro-Segmentation Verification",
      "Egress Traffic Filtering & Data Leak Prevention Analysis",
    ],
    deliverables: [
      "Network Hardening Blueprint",
      "Firewall Optimization Matrix",
      "Zero-Trust Migration Roadmap",
    ],
  },
  {
    id: "web-application-security",
    title: "Web Application Security",
    category: "AppSec",
    badge: "OWASP & API Defense",
    icon: "Code2",
    shortDescription:
      "In-depth security analysis of web applications and APIs, targeting OWASP Top 10 flaws, business logic oversights, and data exposure vectors.",
    fullDescription:
      "Modern applications are the primary target for cybercriminals. We examine codebases, REST/GraphQL APIs, session management mechanisms, token validations, and business logic flaws that automated scanners routinely miss.",
    keyOutcomes: [
      "Neutralize OWASP Top 10 flaws including SQLi, SSRF, XSS, and IDOR",
      "Ensure robust authentication, session token handling, and RBAC integrity",
      "Secure API endpoints against unauthorized data scraping and tampering",
    ],
    methodology: [
      "Endpoint Mapping & API Schema Inspection",
      "Authentication & Role-Based Access Testing",
      "Business Logic & Race Condition Probing",
      "Injection & Server-Side Request Forgery Exploitation",
    ],
    deliverables: [
      "Detailed AppSec Vulnerability Report",
      "Developer Code Remediation Snippets",
      "Secure Coding Best Practice Checklist",
    ],
  },
  {
    id: "cloud-security",
    title: "Cloud Security Posture",
    category: "Cloud",
    badge: "Multi-Cloud Defense",
    icon: "CloudShield",
    shortDescription:
      "Safeguard your AWS, Azure, and Google Cloud environments from catastrophic misconfigurations, IAM over-permissioning, and insecure storage buckets.",
    fullDescription:
      "Cloud infrastructure moves fast and changes continuously. We evaluate Cloud Security Posture Management (CSPM), Kubernetes cluster configurations, CI/CD pipeline secrets management, and least-privilege IAM controls to prevent data exposure.",
    keyOutcomes: [
      "Prevent leaky storage buckets and unencrypted database instances",
      "Enforce least-privilege IAM policies and eliminate dangling credentials",
      "Harden containerized workloads and CI/CD automated deployment pipelines",
    ],
    methodology: [
      "Cloud IAM Role & Policy Auditing",
      "Multi-Cloud Infrastructure-as-Code (IaC) Review",
      "Object Storage & Database Exposure Scanning",
      "Kubernetes & Container Runtime Inspection",
    ],
    deliverables: [
      "Cloud Posture Assessment Matrix",
      "IAM Least-Privilege Remediation Scripting",
      "Cloud Architecture Hardening Guide",
    ],
  },
  {
    id: "security-audits-compliance",
    title: "Security Audits & Compliance",
    category: "Governance & GRC",
    badge: "Regulatory Readiness",
    icon: "FileCheck",
    shortDescription:
      "Navigate compliance requirements with confidence. We benchmark controls against ISO 27001, SOC 2, PCI-DSS, GDPR, and local data protection regulations.",
    fullDescription:
      "Regulatory compliance is more than checking boxes—it is establishing defensible, sustainable security governance. We help your organization benchmark security controls, identify audit gaps, and construct robust evidence packages for enterprise clients and regulatory authorities.",
    keyOutcomes: [
      "Identify compliance gaps before formal third-party regulatory audits",
      "Develop actionable policies, incident playbooks, and evidence artifacts",
      "Accelerate sales cycles with enterprise security questionnaires readiness",
    ],
    methodology: [
      "Gap Analysis Against Target Frameworks",
      "Policy & Documentation Verification",
      "Technical Control Validation & Sampling",
      "Executive Readiness Assessment & Action Plan",
    ],
    deliverables: [
      "Compliance Gap Matrix",
      "Information Security Policy Pack Templates",
      "Audit Readiness Dossier",
    ],
  },
  {
    id: "security-monitoring",
    title: "Security Monitoring & Triage",
    category: "SecOps",
    badge: "24/7 Situational Awareness",
    icon: "Activity",
    shortDescription:
      "Continuous visibility into endpoint, network, and identity activity to detect suspicious behavior, anomalous logons, and early-stage threat vectors.",
    fullDescription:
      "Without visibility, detection is impossible. We help organizations establish centralized log aggregation, fine-tune alert thresholds on SIEM/EDR solutions, and deploy telemetry collectors that cut through noise to surface genuine adversarial tactics.",
    keyOutcomes: [
      "Centralized visibility across identity providers, servers, and SaaS apps",
      "Reduction of alert fatigue through disciplined rule correlation",
      "Rapid detection of initial access, brute force, and anomalous data staging",
    ],
    methodology: [
      "Log Source Inventory & Ingestion Planning",
      "Detection Rule Engineering & Baseline Tuning",
      "Threat Hunting & Anomaly Corroboration",
      "Notification Escalation Architecture",
    ],
    deliverables: [
      "SIEM / Telemetry Integration Plan",
      "Custom Detection & Alerting Playbooks",
      "Operational Triage Workflow Guidelines",
    ],
  },
  {
    id: "incident-response",
    title: "Incident Response & Forensics",
    category: "Response & Resilience",
    badge: "Crisis Management",
    icon: "LifeBuoy",
    shortDescription:
      "Rapid containment, digital forensics, and root-cause analysis when suspected intrusions, ransomware, or unauthorized access occur.",
    fullDescription:
      "When a breach happens, every second dictates the degree of business damage. PhenixHive guides organizations through incident containment, forensic artifact preservation, malware eradication, and systematic operational recovery with forensic integrity.",
    keyOutcomes: [
      "Rapid containment to sever attacker command-and-control access",
      "Preservation of volatile memory and digital evidence for forensic auditing",
      "Thorough eradication of persistence mechanisms and backdoors",
    ],
    methodology: [
      "Initial Triage & Scope Determination",
      "Isolation & Containment Execution",
      "Forensic Investigation & Timeline Reconstruction",
      "Eradication, Remediation & Controlled Restoration",
      "Post-Incident Root Cause Analysis (RCA)",
    ],
    deliverables: [
      "Forensic Incident Investigation Report",
      "Root Cause Timeline & Attacker Attribution Dossier",
      "Remediation & Anti-Recurrence Action Plan",
    ],
  },
  {
    id: "risk-assessment",
    title: "Risk Assessment & Threat Modeling",
    category: "Strategy & GRC",
    badge: "Executive Strategy",
    icon: "Compass",
    shortDescription:
      "Quantify your organization's business risk exposure, evaluate vendor dependencies, and prioritize security investments where they matter most.",
    fullDescription:
      "Not all assets carry equal business weight. Our risk assessments evaluate your most valuable data assets, analyze realistic adversary threat models, audit third-party supply chain risks, and provide executive leadership with a defensible, quantified investment roadmap.",
    keyOutcomes: [
      "Prioritized matrix of organizational cyber risks mapped to revenue impact",
      "Threat modeling for key products and data pipelines (STRIDE/PASTA)",
      "Third-party vendor risk scoring to protect your supply chain",
    ],
    methodology: [
      "Asset Criticality Categorization",
      "Threat Agent Capability & Motivation Mapping",
      "Control Effectiveness Testing",
      "Business Impact Quantification",
    ],
    deliverables: [
      "Enterprise Cyber Risk Register",
      "Threat Model Architecture Diagrams",
      "Executive Security Investment Roadmap",
    ],
  },
  {
    id: "security-awareness-training",
    title: "Security Awareness Training",
    category: "Human Defense",
    badge: "Workforce Defense",
    icon: "GraduationCap",
    shortDescription:
      "Transform your employees from potential security targets into your first line of defense through realistic phishing simulations and role-based training.",
    fullDescription:
      "Human error is implicated in the majority of successful breaches. Our program delivers tailored, engaging security awareness training, realistic spear-phishing simulation campaigns, credential hygiene coaching, and clean reporting for management.",
    keyOutcomes: [
      "Measurable reduction in employee click rates on deceptive emails",
      "Culture of prompt security incident reporting without fear of blame",
      "Specialized training for high-risk targets (Finance, Executives, HR)",
    ],
    methodology: [
      "Baseline Phishing Resilience Benchmark",
      "Role-Tailored Micro-Learning Modules",
      "Adaptive Simulation Campaigns",
      "Continuous Measurement & Feedback Coaching",
    ],
    deliverables: [
      "Workforce Vulnerability Baseline Report",
      "Quarterly Phishing Simulation Metrics",
      "Employee Security Handbook & Quick Reference Cards",
    ],
  },
];

export const VALUE_PILLARS: ValuePillar[] = [
  {
    title: "Proactive Security",
    description:
      "We believe waiting for an incident is the costliest way to learn your vulnerabilities. We identify and neutralize risks before adversaries can discover them.",
    details:
      "Continuous threat hunting, preventative hardening, and offensive simulations keep your defensive posture ahead of opportunistic and targeted threats.",
    icon: "ShieldAlert",
  },
  {
    title: "Practical Solutions",
    description:
      "Security advice that engineering and operations teams can actually execute. No theoretical 200-page shelf-ware reports.",
    details:
      "Every finding comes with clear technical steps, exact code snippets, configuration directives, and verified remediation guidance.",
    icon: "Wrench",
  },
  {
    title: "Risk Reduction",
    description:
      "We focus on quantifiable business risk, prioritizing the vulnerabilities that represent genuine financial, legal, and operational exposure.",
    details:
      "By mapping technical flaws directly to your business assets, we ensure your defensive budget is spent where it delivers maximum protection.",
    icon: "TrendingDown",
  },
  {
    title: "Protection of Sensitive Data",
    description:
      "Customer records, financial ledgers, intellectual property, and internal communications are safeguarded at rest, in transit, and in processing.",
    details:
      "Rigorous cryptographic validation, strict access control enforcement, and comprehensive leak prevention keep your data sovereign.",
    icon: "Lock",
  },
  {
    title: "Continuous Improvement",
    description:
      "Cyber defense is not a single project or annual checklist. We partner with you to build sustainable, compounding resilience over time.",
    details:
      "Retesting, updated threat intelligence, and iterative hardening ensure your organization adapts as technology stacks evolve.",
    icon: "RefreshCw",
  },
  {
    title: "Business-Focused Security",
    description:
      "Security should accelerate business confidence and enterprise deals, never act as a bureaucratic obstacle to customer delivery.",
    details:
      "We align our controls with your operational velocity, helping you earn customer trust, close enterprise security questionnaires, and expand safely.",
    icon: "Briefcase",
  },
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "financial-services",
    name: "Financial Services & FinTech",
    tagline: "Uncompromising integrity for high-volume transactions & sensitive financial records.",
    description:
      "Banks, payment processors, and fintech platforms face relentless fraud attempts, API exploitation, and rigorous compliance mandates. We secure payment gateways, core transaction processing, and customer banking portals.",
    threatLandscape: [
      "API credential stuffing & payment tampering",
      "Targeted spear-phishing & wire fraud",
      "Account takeover (ATO) and unauthorized fund diversion",
    ],
    complianceFrameworks: ["PCI-DSS v4.0", "ISO 27001", "SOC 1 & SOC 2", "NDPR / GDPR"],
    protectiveSolutions: [
      "Rigorous API & transaction logic penetration testing",
      "Hardware security module (HSM) & encryption auditing",
      "Continuous perimeter vulnerability surveillance",
    ],
    icon: "Landmark",
  },
  {
    id: "technology",
    name: "Technology & SaaS",
    tagline: "Protecting codebases, multi-tenant cloud architectures, and customer data.",
    description:
      "Fast-shipping SaaS startups and tech scale-ups cannot afford to ship security holes into production. We safeguard CI/CD pipelines, containerized microservices, multi-tenant databases, and enterprise API endpoints.",
    threatLandscape: [
      "Multi-tenant data isolation bypass",
      "Supply chain compromises & vulnerable open-source dependencies",
      "Cloud IAM permission escalation",
    ],
    complianceFrameworks: ["SOC 2 Type II", "ISO 27001", "Cloud Security Alliance (CSA)", "GDPR"],
    protectiveSolutions: [
      "Shift-left application security and CI/CD pipeline reviews",
      "Cloud infrastructure and Kubernetes hardening",
      "Customer security questionnaire acceleration",
    ],
    icon: "Cpu",
  },
  {
    id: "healthcare",
    name: "Healthcare & MedTech",
    tagline: "Defending electronic patient records and critical medical infrastructure.",
    description:
      "Patient health information commands high prices on illicit marketplaces, making healthcare systems prime targets for ransomware and data exfiltration. We defend EHR systems, telehealth platforms, and connected clinic networks.",
    threatLandscape: [
      "Double-extortion ransomware halting clinical operations",
      "Unauthorized exfiltration of sensitive patient records",
      "Unpatched medical device and legacy hospital system exploitation",
    ],
    complianceFrameworks: ["HIPAA Security Rule", "HITECH", "ISO 27799", "National Health Data Regulations"],
    protectiveSolutions: [
      "Clinical network micro-segmentation",
      "EHR system access control and encryption reviews",
      "Ransomware tabletop drills and resilient backup isolation",
    ],
    icon: "HeartPulse",
  },
  {
    id: "government",
    name: "Government & Public Sector",
    tagline: "Safeguarding critical public infrastructure and citizen privacy.",
    description:
      "Public sector institutions store citizen registries, tax records, and civil infrastructure telemetry. We deliver strict access control validation, sovereign data protection, and perimeter resilience against advanced persistent threats.",
    threatLandscape: [
      "State-sponsored espionage and advanced persistent threats (APTs)",
      "Public service disruption and ransomware extortion",
      "Mass data leaks from outdated legacy databases",
    ],
    complianceFrameworks: ["NIST SP 800-53", "ISO 27001", "National Cybersecurity Guidelines"],
    protectiveSolutions: [
      "Zero-Trust perimeter engineering",
      "Sovereign data encryption and key governance",
      "Systematic threat intelligence and forensic readiness",
    ],
    icon: "Building2",
  },
  {
    id: "education",
    name: "Higher Education & EdTech",
    tagline: "Balancing open academic collaboration with rigorous data protection.",
    description:
      "Universities and EdTech platforms manage large, decentralized user bases, valuable intellectual research, and student financial records. We protect student portals and proprietary research databases while maintaining campus accessibility.",
    threatLandscape: [
      "Credential theft targeting student and faculty portals",
      "Theft of valuable research and intellectual property",
      "Distributed denial-of-service (DDoS) during exam and registration periods",
    ],
    complianceFrameworks: ["FERPA", "ISO 27001", "Local Education Data Acts"],
    protectiveSolutions: [
      "Multi-factor authentication (MFA) rollouts and identity governance",
      "DDoS mitigation and application perimeter caching",
      "Research network segmentation and data loss prevention",
    ],
    icon: "GraduationCap",
  },
  {
    id: "ecommerce",
    name: "E-Commerce & Retail",
    tagline: "Securing checkout flows, customer loyalty accounts, and fulfillment chains.",
    description:
      "Online retailers handle millions of transactions, credit card tokens, and customer identity profiles. A breach during peak retail cycles can inflict catastrophic revenue losses. We secure checkout pipelines, inventory systems, and cloud stores.",
    threatLandscape: [
      "Digital skimming (Magecart) and checkout script injection",
      "Automated bot attacks scraping inventory and hoarding flash sales",
      "Customer loyalty point and gift card balance theft",
    ],
    complianceFrameworks: ["PCI-DSS", "GDPR", "CCPA/CPRA"],
    protectiveSolutions: [
      "Client-side script auditing and Content Security Policy (CSP) enforcement",
      "Anti-bot and Web Application Firewall (WAF) rule optimization",
      "Supply chain and third-party plugin vulnerability audits",
    ],
    icon: "ShoppingBag",
  },
  {
    id: "smb",
    name: "Small & Medium Businesses",
    tagline: "Enterprise-grade protection scaled to fit growing business budgets.",
    description:
      "Over 60% of cyberattacks specifically target small and medium-sized enterprises because they often lack full-time in-house security teams. PhenixHive acts as your dedicated virtual cybersecurity advisory arm, securing your operations without breaking the bank.",
    threatLandscape: [
      "Business Email Compromise (BEC) and fake invoice rerouting",
      "Opportunistic automated ransomware attacks",
      "Unprotected cloud office suites (Microsoft 365, Google Workspace)",
    ],
    complianceFrameworks: ["Cyber Essentials", "CIS Controls", "Local Business Privacy Standards"],
    protectiveSolutions: [
      "Email and cloud office suite security hardening",
      "Endpoint detection and automated patch orchestration",
      "Practical incident recovery planning and employee phishing resilience",
    ],
    icon: "Store",
  },
];

export const PROCESS_STEPS: SecurityProcessStep[] = [
  {
    step: "01",
    title: "Assess",
    subtitle: "Discovery & Surface Mapping",
    description:
      "We begin by scoping your digital environment: public IP addresses, domain portfolios, cloud instances, repositories, and critical business applications.",
    keyActivities: [
      "Define scope, rules of engagement, and confidentiality agreements",
      "Discover all active internal and external digital assets",
      "Analyze business processes to identify core risk priorities",
    ],
    deliverable: "Scoping Document & Engagement Rules of Engagement (RoE)",
  },
  {
    step: "02",
    title: "Identify",
    subtitle: "Vulnerability & Threat Modeling",
    description:
      "Using automated intelligence and manual adversary probing, we systematically uncover misconfigurations, unpatched flaws, and architectural gaps.",
    keyActivities: [
      "Execute manual and tool-assisted vulnerability scanning",
      "Perform realistic penetration testing and logic probing",
      "Filter out false positives to validate real exploitability",
    ],
    deliverable: "Comprehensive Technical Vulnerability Dossier",
  },
  {
    step: "03",
    title: "Protect",
    subtitle: "Hardening & Remediation Support",
    description:
      "We partner directly with your IT and engineering teams to deploy concrete fixes, optimize firewall rules, configure access controls, and patch flaws.",
    keyActivities: [
      "Deliver prioritized step-by-step remediation roadmaps",
      "Provide engineers with direct code fixes and configuration directives",
      "Conduct post-remediation verification retests to confirm closure",
    ],
    deliverable: "Hardening Verification & Attestation Report",
  },
  {
    step: "04",
    title: "Monitor",
    subtitle: "Continuous Threat Surveillance",
    description:
      "Security is an ongoing posture, not a static checkpoint. We assist in configuring telemetry, log analysis, and early-warning tripwires.",
    keyActivities: [
      "Audit SIEM/EDR log feeds and alarm correlation rules",
      "Track emerging zero-day vulnerabilities affecting your tech stack",
      "Evaluate credential exposure across known data breaches",
    ],
    deliverable: "Surveillance Baseline & Incident Threshold Dashboard",
  },
  {
    step: "05",
    title: "Respond",
    subtitle: "Rapid Containment & Recovery",
    description:
      "When suspicious activity surfaces, our incident response playbooks ensure swift containment, forensic evidence preservation, and operational restoration.",
    keyActivities: [
      "Immediate isolation of compromised endpoints or accounts",
      "Forensic triage and malicious payload reverse-engineering",
      "Defensible root-cause analysis and anti-recurrence hardening",
    ],
    deliverable: "Incident Root Cause Analysis & Resilience Playbook",
  },
];
