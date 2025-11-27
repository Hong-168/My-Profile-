export interface Experience {
  id: number;
  slug: string;
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  excerpt: string;
  image: string;
  technologies: string[];
  highlights: string[];
  content: {
    overview: string;
    sections: {
      title: string;
      content: string;
      points?: string[];
    }[];
    impact: string;
  };
}

export const experiences: Experience[] = [
  {
    id: 1,
    slug: "finscore-lead-developer",
    title: "Lead Developer & Project Manager",
    company: "FinScore Project",
    period: "Jan 2025 - Mar 2025",
    location: "RUPP, Phnom Penh",
    type: "Academic Project",
    excerpt:
      "Led the development of a personal finance literacy and analytics platform using AI and Big Data to help users improve their financial habits.",
    image: "/PIC CBC.JPG",
    technologies: [
      "Python",
      "TensorFlow",
      "Data Analytics",
      "Machine Learning",
      "Survey Design",
      "Big Data",
    ],
    highlights: [
      "Led a team of developers in building an AI-powered finance platform",
      "Designed and implemented interactive quiz systems for financial literacy",
      "Integrated machine learning algorithms for personalized recommendations",
      "Analyzed user data to provide actionable financial insights",
      "Successfully delivered the project ahead of schedule",
    ],
    content: {
      overview:
        "As the lead developer and project manager for FinScore, I was responsible for architecting and implementing a comprehensive personal finance literacy and analytics platform. This project combined my passion for AI, data analytics, and social impact to create a tool that helps people make better financial decisions.",
      sections: [
        {
          title: "Project Leadership",
          content:
            "Leading the FinScore project taught me valuable lessons about team management, technical decision-making, and project planning. I was responsible for:",
          points: [
            "Defining project scope and timeline",
            "Coordinating with team members and stakeholders",
            "Making architectural and technology decisions",
            "Managing project risks and addressing challenges",
            "Ensuring quality and timely delivery",
          ],
        },
        {
          title: "Technical Architecture",
          content:
            "I designed a modular architecture that separated concerns and allowed for scalability. The system consisted of a frontend quiz interface, backend API for data processing, machine learning module for recommendations, database for user data and analytics, and visualization dashboard for insights.",
        },
        {
          title: "AI and Machine Learning Implementation",
          content:
            "One of the most challenging and rewarding aspects was implementing the AI components. I developed algorithms that:",
          points: [
            "Analyzed user spending patterns to identify trends",
            "Generated personalized saving recommendations",
            "Predicted future financial outcomes based on current habits",
            "Compared user performance with similar demographic groups",
            "Adapted recommendations based on user feedback",
          ],
        },
        {
          title: "Data Analytics and Visualization",
          content:
            "I implemented comprehensive data analytics to transform raw financial data into actionable insights. This included creating interactive dashboards, generating detailed reports, visualizing spending trends over time, and providing comparative analysis tools.",
        },
        {
          title: "User Experience Design",
          content:
            "Beyond the technical implementation, I focused heavily on user experience. The quiz system needed to be engaging but not overwhelming, the recommendations had to be clear and actionable, and the interface had to work well on both mobile and desktop devices.",
        },
        {
          title: "Challenges and Solutions",
          content:
            "The project faced several challenges: ensuring data privacy and security, handling diverse financial situations, making AI decisions explainable to users, and optimizing performance for large datasets. Each challenge required creative problem-solving and technical innovation.",
        },
      ],
      impact:
        "FinScore successfully helped over 100 beta users improve their financial literacy and make better money decisions. The project demonstrated the power of AI and data analytics in solving real-world problems and earned recognition at the university project showcase. This experience significantly enhanced my skills in project management, AI/ML, and full-stack development.",
    },
  },
  {
    id: 2,
    slug: "Kru-AI-data-analyst",
    title: "Data Analyst & Platform Developer",
    company: "Kru AI Education",
    period: "Nov 2024 - Feb 2025",
    location: "RUPP, Phnom Penh",
    type: "Education Project",
    excerpt:
      "Developed an educational platform for Grade 12 students, using data-driven insights to identify learning challenges and provide personalized study tools.",
    image: "/KRU AI.png",
    technologies: [
      "Data Analytics",
      "Python",
      "Survey Design",
      "Statistical Analysis",
      "Web Development",
      "Educational Technology",
    ],
    highlights: [
      "Designed comprehensive surveys to assess student learning needs",
      "Analyzed data from 200+ student responses",
      "Identified key learning challenges and patterns",
      "Developed smart study tools based on data insights",
      "Improved student engagement and learning outcomes",
    ],
    content: {
      overview:
        "As a data analyst and platform developer for Rean Smart, I combined my technical skills with a passion for education to create a platform that helps Grade 12 students in Cambodia prepare for their national examinations more effectively.",
      sections: [
        {
          title: "Research and Survey Design",
          content:
            "The foundation of Rean Smart was comprehensive research into student learning challenges. I designed and conducted surveys that explored:",
          points: [
            "Subject-specific difficulties and knowledge gaps",
            "Study habits and time management practices",
            "Access to learning resources and support systems",
            "Motivation levels and academic goals",
            "Preferred learning styles and methods",
          ],
        },
        {
          title: "Data Collection and Analysis",
          content:
            "I collected survey responses from over 200 Grade 12 students across multiple schools in Phnom Penh. Using Python and statistical analysis tools, I processed and analyzed this data to identify patterns, trends, and insights that informed the platform's features.",
        },
        {
          title: "Key Insights Discovered",
          content: "The data analysis revealed several important insights:",
          points: [
            "Students struggled most with Mathematics and Physics",
            "Time management was a major challenge for 70% of students",
            "Many students lacked access to quality practice materials",
            "Peer study groups improved performance by 25%",
            "Visual learning aids were more effective than text-only materials",
          ],
        },
        {
          title: "Platform Development",
          content:
            "Based on these insights, I developed a web platform that provided personalized study schedules, subject-specific practice materials, progress tracking tools, peer collaboration features, and adaptive learning recommendations.",
        },
        {
          title: "Impact Measurement",
          content:
            "I implemented analytics to measure the platform's effectiveness. Pilot testing with 50 students showed a 30% improvement in practice test scores, increased study time efficiency, and higher student satisfaction with their exam preparation.",
        },
        {
          title: "Skills Developed",
          content:
            "This project significantly enhanced my capabilities in survey methodology and research design, statistical data analysis, educational technology, user-centered design, and impact measurement.",
        },
      ],
      impact:
        "Rean Smart demonstrated how data analytics can transform education by making learning more personalized and effective. The platform received positive feedback from students, teachers, and parents, and served as a model for future educational technology initiatives.",
    },
  },
  {
    id: 3,
    slug: "iot-automation-engineer",
    title: "IoT Automation Engineer",
    company: "Smart Agriculture Project",
    period: "Aug 2024 - Oct 2024",
    location: "RUPP, Phnom Penh",
    type: "Engineering Project",
    excerpt:
      "Designed and built IoT-based smart irrigation systems using ESP32 and sensors to automate agricultural processes and optimize water usage.",
    image: "/smart farm.jpg",
    technologies: [
      "ESP32",
      "Arduino",
      "C/C++",
      "IoT Sensors",
      "MQTT",
      "Circuit Design",
      "Embedded Systems",
    ],
    highlights: [
      "Designed circuit boards for sensor integration",
      "Programmed ESP32 microcontrollers for automation",
      "Implemented MQTT protocol for real-time data transmission",
      "Created web dashboard for remote monitoring",
      "Reduced water consumption by 40% through smart automation",
    ],
    content: {
      overview:
        "This project combined my Computer Science and Electrical Engineering backgrounds to create an IoT-based smart irrigation system. The goal was to help local farmers optimize water usage and improve crop yields through automation and data-driven decision-making.",
      sections: [
        {
          title: "System Design",
          content:
            "I designed a complete IoT system that monitored soil moisture, temperature, and humidity levels. The system consisted of:",
          points: [
            "ESP32 microcontroller as the main processing unit",
            "Soil moisture sensors for real-time monitoring",
            "Temperature and humidity sensors",
            "Water pump control system for automated irrigation",
            "LCD display for local status updates",
            "Wi-Fi module for cloud connectivity",
          ],
        },
        {
          title: "Hardware Development",
          content:
            "I designed and assembled the circuit boards, integrated multiple sensors with proper calibration, implemented power management for battery operation, and built weatherproof enclosures for outdoor deployment.",
        },
        {
          title: "Firmware Programming",
          content:
            "Using C/C++ and the Arduino framework, I programmed the ESP32 to read sensor data at regular intervals, make intelligent irrigation decisions, transmit data to the cloud via MQTT, handle network connectivity issues, and implement sleep modes for power efficiency.",
        },
        {
          title: "Cloud Integration",
          content:
            "I set up a cloud backend to receive and store sensor data, process data for insights and trends, send alerts when intervention was needed, and provide an API for the web dashboard.",
        },
        {
          title: "Web Dashboard",
          content:
            "I developed a web-based dashboard that displayed real-time sensor data, showed historical trends and patterns, allowed remote control of irrigation, provided water usage analytics, and sent notifications for important events.",
        },
        {
          title: "Testing and Optimization",
          content:
            "Through field testing, I calibrated sensors for local soil conditions, optimized irrigation schedules based on weather, improved system reliability and fault tolerance, and achieved 40% reduction in water usage compared to manual irrigation.",
        },
      ],
      impact:
        "The smart irrigation system successfully demonstrated the potential of IoT in agriculture. It helped farmers save water, reduce labor, and improve crop yields. This project showcased my ability to work across hardware and software domains to create practical, real-world solutions.",
    },
  },
  {
    id: 4,
    slug: "web-developer-portfolio",
    title: "Full-Stack Web Developer",
    company: "Freelance & Personal Projects",
    period: "Jun 2024 - Present",
    location: "Remote",
    type: "Freelance",
    excerpt:
      "Building modern, responsive web applications using React, Next.js, and TailwindCSS for various clients and personal projects.",
    image: "/Web.png",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Node.js",
      "PostgreSQL",
      "Vercel",
    ],
    highlights: [
      "Developed 5+ production websites for clients",
      "Built responsive, mobile-first web applications",
      "Implemented modern UI/UX designs",
      "Optimized website performance and SEO",
      "Maintained 100% client satisfaction rate",
    ],
    content: {
      overview:
        "As a freelance web developer, I've had the opportunity to work on diverse projects ranging from personal portfolios to business websites. This experience has sharpened my full-stack development skills and taught me how to deliver quality solutions that meet client needs.",
      sections: [
        {
          title: "Frontend Development",
          content:
            "I specialize in building modern, responsive user interfaces using the latest web technologies:",
          points: [
            "React and Next.js for component-based architecture",
            "TypeScript for type-safe, maintainable code",
            "TailwindCSS for rapid, responsive styling",
            "Responsive design for mobile, tablet, and desktop",
            "Performance optimization for fast load times",
          ],
        },
        {
          title: "Backend Development",
          content:
            "For backend services, I work with Node.js to build RESTful APIs, implement authentication and authorization, integrate with databases (PostgreSQL, MongoDB), and handle file uploads and processing.",
        },
        {
          title: "Notable Projects",
          content:
            "Some of my key projects include this personal portfolio website showcasing my work, an e-commerce platform for a local business, a blog platform with CMS integration, a real-time dashboard for data visualization, and a booking system for service providers.",
        },
        {
          title: "Design and UX",
          content:
            "I work closely with clients to understand their vision and translate it into intuitive, beautiful interfaces. I focus on user-centered design principles, accessibility and inclusive design, consistent design systems, and smooth animations and interactions.",
        },
        {
          title: "Deployment and DevOps",
          content:
            "I handle the complete deployment process including setting up hosting on Vercel, Netlify, or AWS, configuring custom domains and SSL, implementing CI/CD pipelines, monitoring and error tracking, and providing ongoing maintenance and updates.",
        },
        {
          title: "Client Collaboration",
          content:
            "Success in freelance work requires more than just technical skills. I've learned the importance of clear communication, setting realistic expectations, iterative development with regular feedback, thorough documentation, and post-launch support.",
        },
      ],
      impact:
        "My web development work has helped businesses establish their online presence, individuals showcase their portfolios, and organizations better serve their communities. Every project is an opportunity to learn new technologies and deliver value to clients.",
    },
  },
  {
    id: 5,
    slug: "data-science-research-assistant",
    title: "Research Assistant - Data Science",
    company: "RUPP Data Science Lab",
    period: "Mar 2024 - Aug 2024",
    location: "RUPP, Phnom Penh",
    type: "Research",
    excerpt:
      "Led a heart disease prediction project using machine learning, focusing on data preprocessing, exploratory data analysis, and model evaluation. Achieved 86% accuracy with XGBoost and contributed to healthcare analytics research.",
    image: "/result1.png",
    technologies: [
      "Python",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Jupyter Notebook",
      "XGBoost",
      "Random Forest",
      "Logistic Regression",
    ],
    highlights: [
      "Developed predictive models for heart disease diagnosis with 86% accuracy",
      "Analyzed medical datasets with clinical features including age, cholesterol, and blood pressure",
      "Performed comprehensive data preprocessing including missing value imputation and feature engineering",
      "Compared multiple ML models including XGBoost, Random Forest, and Logistic Regression",
      "Presented research findings on risk factors and model performance",
    ],
    content: {
      overview:
        "As a research team member in the Data Science Lab at RUPP, I worked on a machine learning project focused on predicting heart disease using clinical data. This project involved extensive data analysis, feature engineering, and model evaluation to develop an accurate prediction system for early heart disease detection.",
      sections: [
        {
          title: "Research Focus Areas",
          content:
            "The research centered on applying machine learning to healthcare challenges, specifically heart disease prediction using clinical indicators.",
          points: [
            "Predictive modeling for early detection of heart disease",
            "Feature analysis of medical risk factors including age, cholesterol, and chest pain types",
            "Exploratory data analysis to identify correlations between clinical features and heart disease",
            "Comprehensive model comparison across multiple algorithms",
            "Risk factor analysis identifying key predictors like ST depression (oldpeak) and maximum heart rate",
          ],
        },
        {
          title: "Data Collection and Preparation",
          content:
            "Worked with clinical datasets containing 13 features including age, sex, chest pain type, blood pressure, cholesterol, and other medical indicators. Handled missing data through imputation and performed extensive preprocessing including outlier detection and feature engineering.",
        },
        {
          title: "Model Development",
          content:
            "Implemented and evaluated multiple machine learning models including Logistic Regression, Random Forest, XGBoost, SVM, Decision Trees, and K-Nearest Neighbors. Achieved best performance with XGBoost (86% accuracy, 0.85 precision, 0.91 recall) after hyperparameter tuning.",
        },
        {
          title: "Research Methodology",
          content:
            "Conducted literature review of existing research, performed exploratory data analysis to understand feature distributions and correlations, implemented rigorous train-test splits, and evaluated models using accuracy, precision, recall, F1-score, and AUC metrics.",
        },
        {
          title: "Key Findings and Analysis",
          content:
            "Identified strong correlations between heart disease and features like ST depression (oldpeak), age, and number of major vessels. Discovered that asymptomatic chest pain is strongly associated with heart disease, while typical angina occurs more often in healthy individuals.",
        },
        {
          title: "Collaboration and Presentation",
          content:
            "Collaborated with team members on data analysis and model development. Contributed to research documentation and presentation of findings, comparing results with published literature in the field.",
        },
      ],
      impact:
        "This project demonstrated the potential of machine learning for early heart disease detection, achieving performance comparable to published research. The work contributed to understanding key risk factors and provided a foundation for developing accessible healthcare prediction tools.",
    },
  },
  {
    id: 6,
    slug: "research-assistant-medical-cost",
    title: "Research Assistant - Data Science",
    company: "RUPP Data Science Lab",
    period: "Mar 2024 - Aug 2024",
    location: "RUPP, Phnom Penh",
    type: "Research",
    excerpt:
      "Led a medical cost prediction project using machine learning regression models, achieving 87.5% accuracy with Random Forest. Focused on healthcare analytics, feature correlation analysis, and insurance premium estimation.",
    image: "/result.png",
    technologies: [
      "Python",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Jupyter Notebook",
      "Random Forest",
      "Decision Tree",
      "Linear Regression",
    ],
    highlights: [
      "Developed regression models for medical cost prediction with 87.5% accuracy",
      "Analyzed healthcare datasets with 1,338 patient records and 7 clinical features",
      "Identified smoking status as the strongest predictor of medical costs",
      "Compared multiple regression models including Random Forest, Decision Tree, and Linear Regression",
      "Presented research findings comparing results with published literature",
    ],
    content: {
      overview:
        "As a research team member in the Data Science Lab at RUPP, I worked on a machine learning project focused on predicting medical insurance costs using patient demographic and clinical data. This project involved comprehensive data analysis, feature correlation studies, and regression model development to support fair insurance pricing.",
      sections: [
        {
          title: "Research Focus Areas",
          content:
            "The research centered on applying machine learning regression techniques to healthcare cost prediction and insurance premium estimation.",
          points: [
            "Predictive modeling for medical insurance cost estimation",
            "Feature correlation analysis to identify key cost drivers",
            "Regression model comparison for accurate premium pricing",
            "Exploratory data analysis of demographic and lifestyle factors",
            "Automated premium calculation systems development",
          ],
        },
        {
          title: "Data Collection and Preparation",
          content:
            "Worked with insurance datasets containing 1,338 records and 7 features including age, sex, BMI, children, smoking status, region, and medical charges. Performed data cleaning, encoding of categorical variables, and correlation analysis to understand feature relationships.",
        },
        {
          title: "Model Development",
          content:
            "Implemented and evaluated multiple regression models including Linear Regression, Decision Tree Regressor, and Random Forest Regressor. Achieved best performance with Random Forest (87.5% accuracy), with strong feature importance analysis showing smoking status as the primary cost driver.",
        },
        {
          title: "Research Methodology",
          content:
            "Conducted literature review of existing medical cost prediction research, performed exploratory data analysis to understand charge distributions, implemented correlation heatmaps, and evaluated models using MAE, MSE, and R² metrics with proper train-test splits.",
        },
        {
          title: "Key Findings and Analysis",
          content:
            "Identified smoking status as having the strongest positive correlation with medical charges (0.76), followed by BMI and age. Discovered that region and number of children had minimal impact on costs, providing insights for fair insurance pricing strategies.",
        },
        {
          title: "Comparative Analysis",
          content:
            "Compared results with published research (88.7%-98.67% accuracy range) and achieved competitive performance with Random Forest at 87.5% accuracy, demonstrating the effectiveness of our approach in medical cost prediction.",
        },
      ],
      impact:
        "This project advanced the application of machine learning in healthcare cost prediction, providing a foundation for fair insurance premium calculations. The research demonstrated practical approaches to automated premium estimation and contributed to understanding key factors driving medical costs in insurance contexts.",
    },
  },
];

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((exp) => exp.slug === slug);
}

export function getAllExperiences(): Experience[] {
  return experiences;
}
