// src/components/home/Experience.jsx
import { useTranslation } from "react-i18next";
import experience from "../../data/experience";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatDate(value) {
  if (value === "Present") return "Present";
  const [year, month] = value.split("-");
  return `${MONTHS[parseInt(month, 10) - 1]} ${year}`;
}

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-24">
      <h2 className="text-3xl font-bold mb-12">{t("experience.title")}</h2>

      <div className="relative border-l border-[var(--border)] pl-8 space-y-12">
        {experience.map((job) => (
          <div key={job.id} className="relative">
            <span
              className={`absolute -left-[41px] top-1.5 w-3 h-3 rounded-full ${
                job.current ? "bg-[var(--foreground)]" : "bg-[var(--border)]"
              }`}
            />

            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">
                {job.position} · {job.company}
              </h3>
              <span className="text-sm text-[var(--muted)]">
                {formatDate(job.startDate)} — {formatDate(job.endDate)}
              </span>
            </div>

            <p className="text-sm text-[var(--muted)] mt-1">{job.location}</p>

            <p className="mt-3 text-[var(--foreground)]/90">{job.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {job.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded-md border border-[var(--border)] text-[var(--muted)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}