import type { Experience } from "../../entities/experience/types";

export const experienceEn: readonly Experience[] = [
   {
      id: "freelancer",
      role: "Fullstack Developer",
      org: "Freelance & Collaborative Projects",
      orgType: "Freelance",
      start: "2025",
      end: "Present",
      summary:
         "Fullstack developer focused on building scalable, business-oriented web systems. Experienced in modular architecture, API development, role-based access control, and collaborative workflows. Currently available for new projects and technical collaborations.",

      responsibilities: [
         "Designed and implemented Fullstack architectures (Frontend + Backend) with clear separation of concerns and modular structure.",
         "Built RESTful APIs and data models aligned with real business processes.",
         "Developed role-based interfaces (RBAC) using React Router and structured navigation patterns.",
         "Collaborated using Git workflows (branching strategies, pull requests, code reviews) in team environments.",
         "Implemented consistent data validation across frontend and backend using strongly typed DTOs and schema validation.",
      ],

      impact: [
         "Delivered scalable and maintainable systems aligned with real-world business requirements.",
         "Improved development efficiency through reusable architecture and component-driven design.",
         "Enhanced user experience with responsive, consistent UI systems.",
      ],
   },
   {
      id: "electoral-operator",
      role: "Electoral Systems Operator",
      org: "Electoral Tribunal of Salta",
      orgType: "Government",
      start: "April 2025",
      end: "May 2025",
      summary:
         "Responsible for supervising and supporting electronic voting operations during provincial elections. Ensured proper system functionality, coordinated auxiliary staff, and guaranteed accurate and reliable vote transmission throughout the electoral process.",

      responsibilities: [
         "Provided real-time technical support for voting equipment and resolved on-site technical issues.",
         "Verified system connectivity and ensured successful transmission of voting data.",
         "Coordinated communication between polling stations and technical support teams.",
         "Ensured compliance with established electoral procedures and operational protocols.",
      ],

      impact: [
         "Contributed to the secure and reliable transmission of votes across assigned polling locations.",
         "Maintained operational stability during high-pressure electoral conditions.",
         "Strengthened leadership, organization, and communication skills by coordinating multiple team members simultaneously.",
      ],
   },
] as const;
