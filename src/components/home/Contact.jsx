import { Github, Linkedin, Mail } from "lucide-react";
import Card from "../ui/Card";
import Button from "../ui/Button";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <h2 className="text-3xl font-bold mb-12">Contact</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="text-center">
          <Mail className="mx-auto mb-3" />
          <p className="text-sm text-[var(--muted)] mb-3">Email</p>
          <a href="mailto:ahmed.ben.said660@gmail.com" className="font-medium break-all">ahmed.ben.said660@gmail.com</a>
        </Card>
        <Card className="text-center">
          <Linkedin className="mx-auto mb-3" />
          <p className="text-sm text-[var(--muted)] mb-3">LinkedIn</p>
          <a href="https://www.linkedin.com/in/ahmed-bensaid-83844225b/" target="_blank" rel="noreferrer" className="font-medium">ahmed-bensaid</a>
        </Card>
        <Card className="text-center">
          <Github className="mx-auto mb-3" />
          <p className="text-sm text-[var(--muted)] mb-3">GitHub</p>
          <a href="https://github.com/Ahmedbensaid11" target="_blank" rel="noreferrer" className="font-medium">Ahmedbensaid11</a>
        </Card>
      </div>

      <Card className="mt-6">
        <form action="mailto:ahmed.ben.said660@gmail.com" method="post" encType="text/plain" className="grid gap-4 sm:grid-cols-2">
          <input type="text" name="name" placeholder="Your name" required className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2" />
          <input type="email" name="email" placeholder="Your email" required className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2" />
          <textarea name="message" placeholder="Your message" required rows={4} className="sm:col-span-2 rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2" />
          <div className="sm:col-span-2"><Button type="submit">Send Message</Button></div>
        </form>
      </Card>
    </section>
  );
}