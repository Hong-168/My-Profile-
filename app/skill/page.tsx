import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Cloud,
  Database,
  Wifi,
  Code,
  Shield,
  BarChart,
  Cpu,
  CheckCircle,
  Award,
  ExternalLink,
  Calendar,
} from "lucide-react";
import Link from "next/link";

export default function SkillsPage() {
  const certificates = [
    {
      id: 1,
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy",
      date: "05 September 2025",
      description:
        "Fundamentals of Python programming including variables, control flow, functions, and problem-solving. Completed hands-on exercises and coding challenges. Developed the ability to write clean and structured basic Python scripts.",
      skills: ["Python", "Programming Basics", "Problem Solving"],
      image: "python_essentials1.png",
      verifyUrl:
        "https://drive.google.com/file/d/1S7ds-iRksBu25Y9UCx_GL-G_GAsIo7rp/view?usp=sharing",
    },
    {
      id: 2,
      title: "Python Essentials 2",
      issuer: "Cisco Networking Academy",
      date: "28 September 2025",
      description:
        "Advanced Python programming, including object-oriented programming, data structures, and script structuring. Completed applied coding labs. Strengthened the ability to build modular and reusable code for more complex applications.",
      skills: ["Python", "OOP", "Data Structures", "Scripting"],
      image: "python Essentials2.png", // optional: rename to avoid space in file name
      verifyUrl:
        "https://drive.google.com/file/d/1ERcPHpYSTodco_sX0Bxqgbh4rPfA6L7M/view?usp=sharing",
    },

    {
      id: 3,
      title: "Introduction to Programming",
      issuer: "Kaggle Learning Center",
      date: "19 July 2025", // update if different
      description:
        "Introduction to core programming concepts including variables, conditions, loops, functions, and problem-solving. Completed practical exercises to build foundational coding skills.",
      skills: [
        "Programming Basics",
        "Problem Solving",
        "Python",
        "Logical Thinking",
      ],
      image: "photo_2025-09-05_13-47-29.jpg", // remove the leading "\" to avoid broken path
      verifyUrl:
        "https://drive.google.com/file/d/173wl2gpVmkfuOQiVtsbYeASOrxOSkMpJ/view?usp=sharing",
    },

    {
      id: 4,
      title: "Personal Finance Score Program",
      issuer: "Credit Bureau Cambodia (CBC)",
      date: "30th August 2025", // update if different
      description:
        "Completed the Personal Finance Score training organized by the Credit Bureau Cambodia.The program focused on improving financial literacy, understanding credit scores, responsible borrowing, budgeting, and smart financial decision-making.",
      skills: [
        "Financial Literacy",
        "Budgeting",
        "Saving Habits",
        "Credit Score Understanding",
      ],
      image: "/CBC.pdf.png", // remove the leading "\" to avoid broken path
      verifyUrl:
        "https://drive.google.com/file/d/1MghpnQ8_h1Y2vRfOjnUt_KRLCu-elRWv/view?usp=sharing",
    },

    {
      id: 5,
      title: "Coding Certificate",
      issuer:
        "Hun Sen Balang High School – Kampong Thom Department of Education, Youth and Sport",
      date: "23 October 2023",
      description:
        "Successfully completed a 3-month coding course, focusing on the fundamentals of computer programming, logical thinking, and basic software development.The program aimed to build essential skills for digital literacy and technical problem-solving.",
      skills: [
        "Coding Basics",
        "Logical Thinking",
        "Problem Solving",
        "Computer Literacy",
      ],
      image: "/STEM.jpg",
      verifyUrl:
        "https://drive.google.com/file/d/1ZMGAD1TVNqUVwWx5BW8VLcN2oCsA7Pay/view?usp=sharing",
    },
  ];

  const skills = [
    {
      id: "ai",
      icon: Brain,
      title: "Artificial Intelligence & Machine Learning",
      description:
        "I explore AI and ML to solve real-world problems, focusing on predictive models and automation.",
      highlights: [
        "Data preprocessing & visualization",
        "Model training with Scikit-Learn & TensorFlow",
        "Neural networks & deep learning basics",
        "AI projects for education & finance",
      ],
      tools: [
        "Python",
        "TensorFlow",
        "Scikit-Learn",
        "Keras",
        "Jupyter Notebook",
      ],
    },
    {
      id: "iot",
      icon: Wifi,
      title: "IoT & Automation Systems",
      description:
        "I design IoT systems that connect devices for smarter and automated control.",
      highlights: [
        "ESP8266 & ESP32 projects",
        "Soil moisture auto pump control systems",
        "Sensor data monitoring & control",
        "Integration with LCD displays & web dashboards",
      ],
      tools: ["ESP8266", "ESP32", "Arduino IDE", "C/C++", "MQTT"],
    },
    {
      id: "web",
      icon: Code,
      title: "Web Development",
      description:
        "I build modern and responsive web applications with a focus on clean design and performance.",
      highlights: [
        "Frontend with React & Next.js",
        "Responsive UI using Tailwind CSS",
        "REST API integration",
        "Portfolio and project websites",
      ],
      tools: ["React", "Next.js", "TailwindCSS", "Node.js", "JavaScript"],
    },
    {
      id: "database",
      icon: Database,
      title: "Database Management & Data Science",
      description:
        "I manage structured and unstructured data efficiently to generate insights.",
      highlights: [
        "Relational database design",
        "SQL queries & data modeling",
        "Data cleaning and transformation",
        "Data visualization and analysis",
      ],
      tools: ["MySQL", "PostgreSQL", "MongoDB", "Pandas", "Matplotlib"],
    },
    {
      id: "analytics",
      icon: BarChart,
      title: "Data Analytics & Problem Solving",
      description:
        "I use analytics tools to interpret and visualize data for better decision-making.",
      highlights: [
        "Data-driven insights and reports",
        "Interactive dashboards",
        "Statistical analysis",
        "Business intelligence concepts",
      ],
      tools: ["Excel", "Power BI", "Tableau", "Python", "NumPy"],
    },
    {
      id: "consulting",
      icon: Cpu,
      title: "IT Consulting & Teamwork",
      description:
        "I collaborate with teams to design, plan, and optimize technology-driven solutions.",
      highlights: [
        "System planning and design",
        "Team coordination and collaboration",
        "Project management basics",
        "Agile learning and adaptability",
      ],
      tools: ["Agile", "Scrum", "Git", "VS Code"],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b bg-muted/50 py-24 md:py-28 text-center">
          <div className="container mx-auto px-8 md:px-12 lg:px-20 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-balance animate-fade-in">
              My Skills
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty animate-fade-in animation-delay-200">
              A combination of technical and analytical skills that help me
              build smart, data-driven, and automated systems.
            </p>
          </div>
        </section>

        {/* Skills Grid */}
        <section className="container mx-auto px-8 md:px-12 lg:px-20 py-24 md:py-28">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              const delays = [
                "",
                "animation-delay-200",
                "animation-delay-400",
                "",
                "animation-delay-200",
                "animation-delay-400",
              ];
              return (
                <Card
                  key={skill.id}
                  className={`group flex flex-col hover:shadow-xl transition-all hover:-translate-y-2 animate-scale-in ${delays[index]} hover-glow`}
                >
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground mb-4 transition-all group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {skill.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {skill.description}
                    </p>
                    <ul className="space-y-2">
                      {skill.highlights.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5 transition-transform hover:scale-125" />
                          <span className="text-muted-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {skill.tools.map((tool) => (
                        <span
                          key={tool}
                          className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Certificates Section */}
        <section className="border-t bg-muted/50 py-24 md:py-28">
          <div className="container mx-auto px-8 md:px-12 lg:px-20">
            <div className="text-center space-y-4 mb-12 animate-fade-in">
              <div className="flex items-center justify-center gap-2">
                <Award className="h-8 w-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-balance">
                  Certifications & Courses
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Professional certifications and completed courses that validate
                my expertise
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {certificates.map((cert, index) => {
                const delays = [
                  "",
                  "animation-delay-200",
                  "animation-delay-400",
                ];
                return (
                  <Card
                    key={cert.id}
                    className={`flex flex-col hover:shadow-xl transition-all hover:-translate-y-2 group overflow-hidden animate-scale-in ${delays[index]} hover-glow`}
                  >
                    {/* Certificate Image */}
                    <div className="relative aspect-video bg-muted overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2 bg-background/90 backdrop-blur-sm rounded-full p-2">
                        <Award className="h-4 w-4 text-primary" />
                      </div>
                    </div>

                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {cert.date}
                        </span>
                      </div>
                      <CardTitle className="text-lg">{cert.title}</CardTitle>
                      <p className="text-sm font-medium text-primary">
                        {cert.issuer}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4 flex-1 flex flex-col">
                      <p className="text-sm text-muted-foreground flex-1">
                        {cert.description}
                      </p>

                      <div>
                        <p className="text-xs text-muted-foreground mb-2">
                          Skills Covered:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill) => (
                            <span
                              key={skill}
                              className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2">
                        {cert.verifyUrl !== "#" && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full mt-3"
                            asChild
                          >
                            <Link href={cert.verifyUrl} target="_blank">
                              Verify Certificate
                              <ExternalLink className="ml-2 h-3 w-3" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t bg-muted/50 py-24 md:py-28">
          <div className="container mx-auto px-8 md:px-12 lg:px-20 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance animate-fade-in">
              Want to See My Work?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty animate-fade-in animation-delay-200">
              Explore my projects and experiences to see how I've applied these
              skills in real-world applications.
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in animation-delay-400">
              <Button asChild size="lg" className="hover-lift">
                <Link href="/experience">View My Experience</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="hover-lift"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
