import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  Target,
  Lightbulb,
  Code,
  Brain,
  Rocket,
  Database,
  Cloud,
  Wifi,
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Always exploring new technologies and creative approaches to problem-solving",
    },
    {
      icon: Brain,
      title: "Continuous Learning",
      description:
        "Committed to expanding knowledge and staying current with tech trends",
    },
    {
      icon: Code,
      title: "Quality Code",
      description:
        "Writing clean, efficient, and maintainable code in every project",
    },
    {
      icon: Rocket,
      title: "Impact",
      description:
        "Creating solutions that make a real difference in people's lives",
    },
  ];

  const education = [
    {
      institution: "Royal University of Phnom Penh",
      degree: "Bachelor of Computer Science",
      period: "2022 - Present",
      description:
        "Focusing on software engineering, algorithms, and System Mangement",
    },
    {
      institution: "Royal University of Phnom Penh",
      degree: "Bachelor of Data Scince and Engineering ",
      period: "2023 - Present",
      description: "Studying AI, Big Data and Data Analyst ",
    },
  ];

  const milestones = [
    {
      year: "2022",
      event: "Started dual degree in Computer Science & Data Science at RUPP",
    },
    { year: "2023", event: "Completed first AI and machine learning projects" },
    {
      year: "2023",
      event: "Learned cloud computing and deployment fundamentals",
    },
    { year: "2024", event: "Developed IoT smart automation projects" },
    {
      year: "2024",
      event: "Worked on big data analytics and data visualization projects",
    },
    {
      year: "2025",
      event: "Continuing to explore AI, cloud, and IoT innovations",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b bg-muted/50 py-16 md:py-20">
          <div className="container mx-auto px-8 md:px-12 lg:px-20 text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-balance animate-fade-in">
              About Me
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              A passionate student on a journey to master technology and create
              innovative solutions
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="container mx-auto px-8 md:px-12 lg:px-20 py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">
                My Journey
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Hello! I'm Kea Leanghong, a dedicated student at the Royal
                  University of Phnom Penh, pursuing dual majors in Computer
                  Science and Data Science. My journey in technology began with
                  a curiosity about how things work and has evolved into a
                  passion for creating innovative and impactful solutions.
                </p>
                <p>
                  What drives me is the intersection of Computer Science and
                  Data Science, where technology and data meet. This unique
                  combination allows me to understand systems from both
                  analytical and computational perspectives, enabling me to
                  create more intelligent and efficient solutions. I'm
                  particularly fascinated by how AI, Big Data, Cloud Computing,
                  and IoT can work together to solve real-world problems.
                </p>
                <p>
                  My goal is to apply technology to build smart, efficient, and
                  practical solutions that create real-world impact. I'm
                  especially interested in AI, Data Science, Cloud Computing,
                  and IoT, and how they can work together to solve modern
                  challenges. I'm always eager to learn new skills, explore
                  innovative ideas, and turn them into meaningful projects that
                  make a difference.
                </p>
              </div>
            </div>
            <div className="relative animate-slide-in-right group">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl hover-glow animate-float border-4 border-primary/20">
                <img
                  src="\rupp.jpg"
                  alt="Technology and innovation"
                  className="rounded-2xl object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="border-y bg-muted/50 py-16 md:py-20">
          <div className="container mx-auto px-8 md:px-12 lg:px-20">
            <div className="text-center space-y-4 mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">
                Education
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Currently pursuing dual degrees at a prestigious institution
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {education.map((edu) => (
                <Card
                  key={edu.institution}
                  className="group hover:shadow-xl transition-all hover:-translate-y-2 animate-scale-in hover-glow h-full flex flex-col"
                >
                  <CardContent className="pt-8 pb-8 flex-1">
                    <div className="flex items-start gap-4 h-full">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all hover:scale-110 hover:rotate-6">
                        <GraduationCap className="h-7 w-7" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <h3 className="text-xl font-bold leading-tight">{edu.institution}</h3>
                        <p className="font-medium text-primary text-base leading-snug">
                          {edu.degree}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {edu.period}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Goals Section */}
        <section className="border-y bg-muted/50 py-16 md:py-20">
          <div className="container mx-auto px-8 md:px-12 lg:px-20">
            <div className="text-center space-y-4 mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary font-semibold text-sm mb-2">
                <Target className="h-4 w-4" />
                <span>Vision & Aspirations</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-balance">
                My Goals
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                I'm committed to becoming a well-rounded technology professional
                who can bridge the gap between hardware and software
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Brain,
                  title: "AI & Machine Learning",
                  description:
                    "Master artificial intelligence and machine learning to build intelligent systems that solve complex problems",
                },
                {
                  icon: Database,
                  title: "Big Data Expertise",
                  description:
                    "Develop advanced skills in analytics and large-scale data processing to extract meaningful insights",
                },
                {
                  icon: Cloud,
                  title: "Cloud Solutions",
                  description:
                    "Create robust, scalable, and efficient cloud-based applications using modern architectures",
                },
                {
                  icon: Wifi,
                  title: "IoT Innovation",
                  description:
                    "Build innovative IoT applications that seamlessly connect physical and digital worlds",
                },
                {
                  icon: Code,
                  title: "Open Source",
                  description:
                    "Contribute to open-source projects and collaborate with the global tech community",
                },
                {
                  icon: Rocket,
                  title: "Real Impact",
                  description:
                    "Use technology to solve real-world problems in Cambodia and create meaningful change",
                },
              ].map((goal, index) => {
                const Icon = goal.icon;
                const delays = [
                  "",
                  "animation-delay-200",
                  "animation-delay-400",
                  "animation-delay-200",
                  "animation-delay-400",
                  "animation-delay-600",
                ];
                return (
                  <Card
                    key={index}
                    className={`group hover:shadow-xl transition-all hover:-translate-y-2 animate-scale-in ${delays[index]} hover-glow h-full flex flex-col`}
                  >
                    <CardContent className="pt-8 pb-8 space-y-4 flex-1 flex flex-col">
                      <div className="flex items-start gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all group-hover:scale-110 group-hover:rotate-6">
                          <Icon className="h-7 w-7" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold group-hover:text-primary transition-colors leading-tight">
                            {goal.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {goal.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="border-y bg-muted/50 py-16 md:py-20">
          <div className="container mx-auto px-8 md:px-12 lg:px-20">
            <div className="text-center space-y-4 mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">
                What Drives Me
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                The principles that guide my learning and work
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                const delays = [
                  "",
                  "animation-delay-200",
                  "animation-delay-400",
                  "animation-delay-600",
                ];
                return (
                  <Card
                    key={value.title}
                    className={`group text-center hover:shadow-xl transition-all hover:-translate-y-2 animate-scale-in ${delays[index]} hover-glow h-full flex flex-col`}
                  >
                    <CardContent className="pt-8 pb-8 space-y-4 flex-1 flex flex-col">
                      <div className="flex justify-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all group-hover:scale-110 group-hover:rotate-6">
                          <Icon className="h-8 w-8" />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold leading-tight">{value.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
