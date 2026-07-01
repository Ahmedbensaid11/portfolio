import { Link } from "react-router-dom";
import projects from "../../data/projects";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import { useTranslation } from "react-i18next";

export default function Projects() {
      const { t } = useTranslation();

  return (
    <section id="projects" className="py-24">
<h2 className="text-3xl font-bold mb-12">{t("projects.title")}</h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Link key={project.id} to={`/projects/${project.id}`}>
            <Card className="h-full flex flex-col">
              <div className="aspect-video rounded-lg bg-[var(--border)]/30 mb-4 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => (e.target.style.display = "none")}
                />
              </div>

              <div className="flex items-center justify-between text-xs text-[var(--muted)] mb-2">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>

              <h3 className="font-semibold text-lg">{project.title}</h3>
              <p className="text-sm text-[var(--muted)] mt-2 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}