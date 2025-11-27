import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  Calendar,
  MapPin,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { getAllExperiences } from "@/lib/experience-data";

export default function ExperiencePage() {
  const experiences = getAllExperiences();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b bg-muted/50 py-24 md:py-28 text-center">
          <div className="container mx-auto px-8 md:px-12 lg:px-20 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-balance animate-fade-in">
              My Experience
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty animate-fade-in animation-delay-200">
              A journey through projects, research, and development experiences
              that have shaped my skills and expertise in technology.
            </p>
          </div>
        </section>

        {/* Experience Grid */}
        <section className="container mx-auto px-8 md:px-12 lg:px-20 py-24 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12">
            {experiences.map((experience, index) => {
              const delays = ["", "animation-delay-200"];
              return (
                <Card
                  key={experience.id}
                  className={`group flex flex-col hover:shadow-xl transition-all hover:-translate-y-2 animate-scale-in ${
                    delays[index % 2]
                  } hover-glow`}
                >
                  {/* Experience Image */}
                  <div className="relative aspect-video bg-muted overflow-hidden">
                    <img
                      src={experience.image || "/placeholder.svg"}
                      alt={experience.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>

                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      {experience.type}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{experience.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                    <Briefcase className="h-4 w-4" />
                    {experience.company}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 flex-1">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {experience.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {experience.location}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {experience.excerpt}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {experience.highlights
                      .slice(0, 3)
                      .map((highlight, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5 transition-transform hover:scale-125" />
                          <span className="text-muted-foreground">
                            {highlight}
                          </span>
                        </li>
                      ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                    {experience.technologies.length > 4 && (
                      <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                        +{experience.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Read More Button */}
                  <div className="pt-4">
                    <Button asChild className="w-full">
                      <Link href={`/experience/${experience.slug}`}>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t bg-muted/50 py-24 md:py-28">
          <div className="container mx-auto px-8 md:px-12 lg:px-20 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance animate-fade-in">
              Interested in Working Together?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty animate-fade-in animation-delay-200">
              I'm always open to new opportunities and collaborations. Let's
              create something amazing together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in animation-delay-400">
              <Button asChild size="lg" className="hover-lift">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="hover-lift">
                <Link href="/skill">View My Skills</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
