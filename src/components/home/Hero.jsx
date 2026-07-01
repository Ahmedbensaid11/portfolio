import Button from "../ui/Button";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center gap-6">
      <p className="text-[var(--primary)] font-medium">Hi, I'm</p>
      <h1 className="text-5xl sm:text-6xl font-bold">Ahmed Ben Said</h1>
      <h2 className="text-xl sm:text-2xl text-[var(--muted)]">Software Engineering Intern</h2>
      <p className="max-w-xl text-[var(--muted)]">
        I build full-stack web and desktop applications with Java, Spring Boot, React and more.
        Currently interning at Tunisie Telecom.
      </p>
      <div className="flex gap-4 mt-4">
        <a href="#projects"><Button>View Projects</Button></a>
        <a href="#contact"><Button variant="outline">Contact Me</Button></a>
      </div>
    </section>
  );
}