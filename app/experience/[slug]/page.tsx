import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getExperienceBySlug, getAllExperiences } from "@/lib/experience-data";
import { notFound } from "next/navigation";
import {
  Calendar,
  MapPin,
  ArrowLeft,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
  const experiences = getAllExperiences();
  return experiences.map((exp) => ({
    slug: exp.slug,
  }));
}

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);

  if (!experience) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-6">
          <Button variant="ghost" asChild>
            <Link href="/experience" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Experience
            </Link>
          </Button>
        </div>

        {/* Hero Section */}
        <article className="container mx-auto px-4 pb-20">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="space-y-6 mb-12">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  {experience.type}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-balance">
                {experience.title}
              </h1>

              <div className="flex items-center gap-2 text-xl font-medium">
                <Briefcase className="h-5 w-5 text-primary" />
                {experience.company}
              </div>

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

              {/* Featured Image */}
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img
                  src={experience.image || "/placeholder.svg"}
                  alt={experience.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </header>

            {/* Technologies & Highlights */}
            <div className="grid md:grid-cols-2 gap-6 mb-12 p-6 bg-muted/50 rounded-lg">
              <div>
                <h3 className="font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm bg-background px-3 py-1 rounded-md border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Key Highlights</h3>
                <ul className="space-y-2">
                  {experience.highlights.slice(0, 3).map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {experience.content.overview}
              </p>

              {experience.content.sections.map((section, index) => (
                <section key={index} className="mt-8">
                  <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {section.content}
                  </p>
                  {section.points && (
                    <ul className="space-y-2 ml-6">
                      {section.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <section className="mt-12 p-6 bg-muted/50 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Impact & Results</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {experience.content.impact}
                </p>
              </section>
            </div>

            {/* All Highlights */}
            {experience.highlights.length > 3 && (
              <div className="mt-12 p-6 bg-muted/50 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">
                  All Key Achievements
                </h2>
                <ul className="grid md:grid-cols-2 gap-3">
                  {experience.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Author Section */}
            <div className="mt-12 p-6 bg-muted/50 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary flex-shrink-0">
                  KL
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Kea Leanghong</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Computer Science and Data Science student at RUPP.
                    Passionate about AI, Big Data and IoT. Always eager to learn
                    and create innovative solutions.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/about">Learn More About Me</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t flex justify-between items-center">
              <Button variant="outline" asChild>
                <Link href="/experience">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  All Experience
                </Link>
              </Button>
              <Button asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
