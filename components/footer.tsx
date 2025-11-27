"use client";

import Link from "next/link";
import { Facebook, Linkedin, Github, ArrowUp, Send } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    about: [
      { href: "/about", label: "About Me" },
      { href: "/skill", label: "Skill" },
      { href: "/experience", label: "Experience" },
      { href: "/contact", label: "Contact" },
    ],
    experience: [
      {
        href: " /experience/Kru-AI-data-analyst",
        label: "AI & Machine Learning",
      },
      {
        href: "/experience/finscore-lead-developer",
        label: "Data Science & Big Data",
      },
      {
        href: "/experience/web-developer-portfolio",
        label: "Software Development",
      },
      {
        href: "/experience/iot-automation-engineer",
        label: "IoT & Embedded Systems",
      },
    ],
  };

  const socialLinks = [
    {
      href: "https://www.facebook.com/share/17GknyYfXZ/?mibextid=wwXIfr",
      icon: Facebook,
      label: "Facebook",
    },
    { href: "https://t.me/Kealeanghong", icon: Send, label: "Telegram" },
    {
      href: "https://www.linkedin.com/in/leanghong-kea-82b0a4382/",
      icon: Linkedin,
      label: "LinkedIn",
    },
    { href: "https://github.com/Hong-168", icon: Github, label: "GitHub" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t bg-muted/40 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-xl shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all">
                KL
              </div>
              <span className="text-2xl font-bold group-hover:text-primary transition">
                Kea Leanghong
              </span>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed">
              A dedicated Computer Science student passionate about Data
              Science, Cloud Computing, IoT, and Electronics Engineering.
              Building practical solutions through technology and innovation.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                  >
                    <Icon className="h-5 w-5 transition-transform group-hover:rotate-12" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-6 relative inline-block">
              About
              <span className="absolute -bottom-2 left-0 w-14 h-1 bg-primary rounded-full"></span>
            </h3>

            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-all flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          <div>
            <h3 className="font-bold text-lg mb-6 relative inline-block">
              Experience
              <span className="absolute -bottom-2 left-0 w-14 h-1 bg-primary rounded-full"></span>
            </h3>

            <ul className="space-y-3">
              {footerLinks.experience.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-all flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/40">
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Kea Leanghong — All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
      </button>
    </footer>
  );
}
