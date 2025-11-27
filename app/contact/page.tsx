"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  MessageSquare,
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative border-b bg-muted/50 py-20 md:py-24 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float animation-delay-400"></div>

          <div className="container mx-auto px-8 md:px-12 lg:px-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary animate-bounce-slow mb-2">
                Let's Connect
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
                Get In{" "}
                <span className="animate-gradient-text animate-text-glow font-extrabold">
                  Touch
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed animate-fade-in animation-delay-200">
                I'm always excited to connect with new people, discuss projects,
                or explore collaboration opportunities. Don't hesitate to reach
                out!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section className="container mx-auto px-8 md:px-12 lg:px-20 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: Mail,
                title: "Email",
                detail: "kealeanghong098@gmail.com",
                link: "mailto:kealeanghong098@gmail.com",
                description: "Best for detailed inquiries",
              },
              {
                icon: Phone,
                title: "Phone",
                detail: "+855 98 270 741",
                link: "tel:098270741",
                description: "Available all time",
              },
              {
                icon: MapPin,
                title: "Location",
                detail: "Phnom Penh, Cambodia",
                link: "https://maps.app.goo.gl/UxtngjoESgtpZ3DE9",
                description: "Royal University of Phnom Penh",
              },
            ].map((contact, index) => {
              const Icon = contact.icon;
              const delays = ["", "animation-delay-200", "animation-delay-400"];
              return (
                <Card
                  key={contact.title}
                  className={`group h-full hover:shadow-xl transition-all hover:-translate-y-2 animate-scale-in ${delays[index]} hover-glow border hover:border-primary/40`}
                >
                  <CardContent className="text-center space-y-3 pt-6 pb-6">
                    <div className="flex justify-center">
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all group-hover:scale-110 shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-base leading-tight mb-1.5 group-hover:text-primary transition-colors">
                        {contact.title}
                      </h3>
                      <a
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors break-all block mb-1"
                      >
                        {contact.detail}
                      </a>
                      <p className="text-xs text-muted-foreground/80">
                        {contact.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Social Links Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-8 md:px-12 lg:px-20">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: Linkedin,
                  title: "LinkedIn",
                  handle: "Kea Leanghong",
                  link: "https://www.linkedin.com/in/leanghong-kea-82b0a4382/",
                  color: "hover:bg-blue-600 hover:text-white",
                },
                {
                  icon: Facebook,
                  title: "Facebook",
                  handle: "Kea Leanghong",
                  link: "https://www.facebook.com/share/17GknyYfXZ/?mibextid=wwXIfr",
                  color: "hover:bg-blue-600 hover:text-white",
                },
                {
                  icon: MessageSquare,
                  title: "Telegram",
                  handle: "@Kealeanghong",
                  link: "https://t.me/Kealeanghong",
                  color: "hover:bg-blue-500 hover:text-white",
                },
              ].map((social, index) => {
                const Icon = social.icon;
                const delays = [
                  "",
                  "animation-delay-200",
                  "animation-delay-400",
                ];
                return (
                  <a
                    key={social.title}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group animate-scale-in ${delays[index]}`}
                  >
                    <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-2 hover-glow border hover:border-primary/40">
                      <CardContent className="pt-6 pb-6 text-center space-y-3">
                        <div className="flex justify-center">
                          <div
                            className={`flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-all shadow-md ${social.color}`}
                          >
                            <Icon className="h-7 w-7" />
                          </div>
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-bold text-base group-hover:text-primary transition-colors">
                            {social.title}
                          </h3>
                          <p className="text-xs text-muted-foreground break-all font-medium">
                            {social.handle}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
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
