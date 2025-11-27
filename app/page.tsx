import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle,
  Brain,
  Cloud,
  Smartphone,
  Database,
  Code,
  Zap,
  FileText,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const features = [
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Quickly adapts to new technologies and frameworks",
    },
    {
      icon: Brain,
      title: "Problem Solver",
      description:
        "Analytical mindset focused on designing practical and innovative solutions",
    },
    {
      icon: Code,
      title: "Software Developer",
      description:
        "Passionate about building robust software systems and web applications",
    },
  ];

  const expertise = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description:
        "Building intelligent systems, predictive models, and AI solutions using Python, TensorFlow, and Scikit-Learn.",
    },
    {
      icon: Database,
      title: "Data Science & Big Data",
      description:
        "Analyzing, visualizing, and extracting insights from large datasets with Python, SQL, and Pandas.",
    },
    {
      icon: Code,
      title: "Software Development",
      description:
        "Building modern software applications, developing full-stack systems, and creating efficient, scalable solutions.",
    },
    {
      icon: Smartphone,
      title: "IoT & Embedded Systems",
      description:
        "Creating smart automation projects using sensors, microcontrollers, and connected devices.",
    },
  ];

  const stats = [
    { value: "2", label: "Universities" },
    { value: "5+", label: "Projects Completed" },
    { value: "4", label: "Tech Domains" },
    { value: "3+", label: "Years Learning" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative container mx-auto px-8 md:px-12 lg:px-20 py-24 md:py-36 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float animation-delay-400"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6 animate-slide-in-left">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary animate-bounce-slow">
                Welcome to My Portfolio
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                Hello, I'm{" "}
                <span className="animate-gradient-text animate-text-glow font-extrabold">
                  Kea Leanghong
                </span>
              </h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                I am a passionate Computer Science and Data Science student,
                dedicated to designing and building robust software systems and
                modern web applications. I combine AI, Big Data, Software
                Development and IoT technologies to create innovative,
                practical, and scalable solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="hover-lift" asChild>
                  <Link href="/contact">
                    Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="hover-lift bg-transparent"
                  asChild
                >
                  <Link href="/skill">View My Skills</Link>
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="hover-lift"
                  asChild
                >
                  <a
                    href="https://drive.google.com/file/d/1cTH_Vpslbc4uBiUWBJ-7dQWtq45zpf8X/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    My CV
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary via-primary/50 to-primary/20 animate-gradient blur-2xl opacity-50"></div>

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary to-transparent animate-rotate-slow opacity-30"></div>

                <div className="relative w-full h-full p-2">
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl hover-glow animate-float border-4 border-primary/20">
                    <img
                      src="/pic2.png"
                      alt="Kea Leanghong - Computer Science and Data Science Engineering"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/30 rounded-full blur-2xl animate-glow"></div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-glow animation-delay-400"></div>

                <div className="absolute top-10 -left-4 bg-background border-2 border-primary/30 rounded-xl p-3 shadow-lg animate-bounce-slow">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute top-1/3 -right-4 bg-background border-2 border-primary/30 rounded-xl p-3 shadow-lg animate-bounce-slow animation-delay-400">
                  <Cloud className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute bottom-1/4 -left-6 bg-background border-2 border-primary/30 rounded-xl p-3 shadow-lg animate-bounce-slow animation-delay-600">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute bottom-10 -right-6 bg-background border-2 border-primary/30 rounded-xl p-3 shadow-lg animate-bounce-slow animation-delay-800">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="border-y bg-muted/50 py-20 md:py-24">
          <div className="container mx-auto px-8 md:px-12 lg:px-20">
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const delays = [
                  "",
                  "animation-delay-200",
                  "animation-delay-400",
                ];
                return (
                  <div
                    key={feature.title}
                    className={`flex gap-4 animate-slide-up ${delays[index]} hover-lift`}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all hover:scale-110 hover:rotate-6">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="container mx-auto px-8 md:px-12 lg:px-20 py-24 md:py-28">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              My Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Areas of technology I'm passionate about and actively developing
              skills in
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              const delays = [
                "",
                "animation-delay-200",
                "animation-delay-400",
                "animation-delay-600",
              ];
              return (
                <Card
                  key={item.title}
                  className={`group hover:shadow-xl transition-all hover:-translate-y-2 animate-scale-in ${delays[index]} hover-glow`}
                >
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-12 animate-fade-in animation-delay-800">
            <Button
              size="lg"
              variant="outline"
              className="hover-lift bg-transparent"
              asChild
            >
              <Link href="/experience">View My Experiences</Link>
            </Button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y bg-muted/50 py-20 md:py-24">
          <div className="container mx-auto px-8 md:px-12 lg:px-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const delays = [
                  "",
                  "animation-delay-200",
                  "animation-delay-400",
                  "animation-delay-600",
                ];
                return (
                  <div
                    key={stat.label}
                    className={`text-center space-y-2 animate-slide-up ${delays[index]} hover-lift cursor-default`}
                  >
                    <div className="text-4xl md:text-5xl font-bold text-primary transition-transform hover:scale-110">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="border-y bg-muted/50 py-24 md:py-28">
          <div className="container mx-auto px-8 md:px-12 lg:px-20">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <div className="relative order-2 lg:order-1 lg:col-span-2 animate-slide-in-left group">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-transparent overflow-hidden shadow-2xl hover-glow border-2 border-primary/20">
                  <img
                    src="/photo_2025-11-10_09-15-02.jpg"
                    alt="Kea Leanghong"
                    className="rounded-2xl object-cover w-full h-full transition-transform hover:scale-105 duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-glow"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-glow animation-delay-400"></div>
              </div>
              <div className="space-y-6 order-1 lg:order-2 lg:col-span-3 animate-slide-in-right">
                <div className="inline-block">
                  <span className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                    Get to Know Me
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-balance">
                  About Me
                </h2>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  I'm currently pursuing dual degrees in Computer Science and
                  Data Science at the Royal University of Phnom Penh.
                </p>
                <ul className="space-y-4">
                  {[
                    "Studying at two leading tech programs in Cambodia",
                    "Focused on Artificial Intelligence, Machine Learning, and model deployment",
                    "Experienced in big data processing, analytics, and visualization",
                    "Website Developer: Building modern web apps using React, Next.js, Vue.js, and Node.js",
                    "Passionate about IoT, automation, and smart embedded systems",
                    "Committed to creating innovative and impactful technology solutions",
                  ].map((item, index) => (
                    <li
                      key={item}
                      className={`flex items-start gap-3 transition-all hover:translate-x-2 animate-fade-in animation-delay-${
                        index * 200
                      }`}
                    >
                      <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5 transition-transform hover:scale-125" />
                      <span className="text-base">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="hover-lift" asChild>
                  <Link href="/about">
                    Learn More About Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
