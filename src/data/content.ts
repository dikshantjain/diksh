
  
  export const content: Record<string, any> = {
    "About Me": {
      header_one:
        "Innovative and compassionate Software Engineer with 5 years’ experience as a software developer seeking to advance my skills and expand my knowledge in the domain of computer science and its applications. I have a keen interest in Cloud native applications and software architectures.",
      header_two:
      "In my most recent role as a Founding Engineer, I led the end-to-end development of a highly scalable Notification Engine — including infrastructure setup, microservices deployment, and org-wide observability using OpenTelemetry. I played a key role in API design and third-party vendor integrations, gaining hands-on experience in taking products from 0 to 1. I’m now looking for a role that offers greater responsibility and the opportunity to make a meaningful impact, while continuing to grow as an engineer and leader."  
    },
    "Work Experience": {
      work_items: [
        {
          title: "👨‍💻 Founding Engineer , Barq, Remote (June 2023 - Current)",
          points: [
            "Joined as a Founding Engineer, playing a critical role in building systems and processes from scratch, including core architecture and deployment pipelines,",
            "Designed and developed a scalable Notification Engine capable of handling 12,000 TPM, leveraging CI/CD with Helm charts for efficient deployments.", 
            "Created Kafka and Redis boilerplate libraries in TypeScript and Java, enabling reusability and consistency across multiple teams and services.",
            "Led API design, third-party integrations, and vendor management, ensuring reliable communication between systems and external partners.",
            "Took ownership of CRM and ingestion services to drive user activity tracking and enable data-driven marketing campaigns.",            
            "Collaborated with stakeholders across multiple services to build a Super App ecosystem, while also mentoring junior developers and conducting code reviews to maintain high code quality.",
          ],
        },
        {
          title: "👨‍💻 Software Development Engineer 1, Blackbuck, Bangalore (Aug 2022 – Mar 2023)",
          points: [
            "Developed backend service supporting real-time Fastag transactions using Amazon SQS and Kafka.",
            "Built and maintained REST APIs using Spring Boot.",
            "Provided on-call support and performance monitoring via Dynatrace and New Relic.",
            "Providing qualitative and quantitative insights like application memory usage, API throughput and other JVM parameters for downsizing or upsizing of resources..",
          ],
        },
        {
          title: "👨‍💻 Software Development Engineer 1, Amadeus Labs, Bangalore (Aug 2020 – Jun 2022)",
          points: [
            "Developed REST APIs using JAX-RS deployed on Amadeus Cloud Services.",
            "Created Seat Map Plug N Play API and Covid Restriction API for major airlines.",
            "Conducted benchmark testing using Gatling and Apache JMeter.",
          ],
        },
      ],
    },
    Education: {
      header_one:
        "🎓 Vellore Institute of Technology (VIT), Vellore\nBTech in Electronics and Communication Engineering with Specialization in IoT and Sensors\nGraduated: June 2020\nCGPA: 8.86/10",
      header_two: "🎓 Jayshree Periwal High School, Jaipur,Rajasthan \nMay 2016",
    },
    Skills: {
      skill_groups: [
        {
          type: "Languages",
          skills: ["TypeScript", "Java", "Python"],
        },
        {
          type: "Frameworks",
          skills: ["Spring Boot", "React", "NestJS", "JAX-RS"],
        },
        {
          type: "Tools & Platforms",
          skills: ["Kafka", "Redis", "BullMQ",  "Docker", "AWS"],
        },
        {
          type: "Testing & Monitoring",
          skills: ["JMeter", "Gatling", "New Relic", "Dynatrace","Elastic APM"],
        },
      ],
    },
    Projects: {
      project_links: [
        {
          name: "Tic-Tac-Toe React Game",
          description: "A tic-tac-toe game developed using reactJs and tailwind",
          link: "https://dikshantjain.github.io/tic-tac-toe/",
        },
      ],
    },
  };
  