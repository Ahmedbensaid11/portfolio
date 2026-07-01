import Card from "../ui/Card";

export default function About() {
  return (
    <section id="about" className="py-24">
      <h2 className="text-3xl font-bold mb-12">About Me</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <p className="text-[var(--foreground)]/90 leading-relaxed">
            I'm a software engineering student and intern based in Tunisia, currently working at
            Tunisie Telecom on a platform for managing employee social activities. I enjoy working
            across the full stack — from REST APIs with Spring Boot to interfaces with React.
          </p>
          {/* TODO: replace with your own bio */}
        </Card>
        <Card>
          <h3 className="font-semibold mb-4">Quick Facts</h3>
          <ul className="space-y-2 text-sm text-[var(--muted)]">
            <li>📍 Nabeul, Tunisia</li>
            <li>🎓 Software Engineering Student</li>
            <li>💼 4+ internships completed</li>
            <li>🌐 EN · FR · AR</li>
          </ul>
        </Card>
      </div>
    </section>
  );
}