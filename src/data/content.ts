type WorkItem = {
    title: string;
    points: string[];
  };
  
  export const content: Record<string, any> = {
    "About Me": {
      header_one:
        "Innovative and compassionate Software Engineer with 5 years’ experience as a software developer seeking to advance my skills and expand my knowledge in the domain of computer science and its applications. I have a keen interest in Cloud native applications and software architectures.",
    },
    "Work Experience": {
      work_items: [
        {
          title: "👨‍💻 Software Development Engineer 2, Barq, Remote (June 2023 - Current)",
          points: [
            "Developed a high-performance notification engine handling 12,000 TPM using Node.js and BullMQ.",
            "Built a Kafka microservice using Spring Boot and Apache Kafka for backend S2S events.",
            "Created shared libraries for Redis, Kafka, and common functionality using SOLID principles.",
            "Mentored junior developers and led code reviews with a TDD focus.",
            "Worked with third-party vendors to guide product integration decisions.",
          ],
        },
        {
          title: "👨‍💻 Software Development Engineer 1, Blackbuck, Bangalore (Aug 2022 – Mar 2023)",
          points: [
            "Developed backend service supporting real-time Fastag transactions using Amazon SQS and Kafka.",
            "Built and maintained REST APIs using Spring Boot.",
            "Provided on-call support and performance monitoring via Dynatrace and New Relic.",
            "Delivered application metrics for performance tuning and resource planning.",
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
    },
  };
  