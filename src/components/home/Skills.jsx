import skillsData from "../../data/skills";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import { useTranslation } from "react-i18next";

export default function Skills() {
      const { t } = useTranslation();

  return (
    <section id="skills" className="py-24">
<h2 className="text-3xl font-bold mb-12">{t("skills.title")}</h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {skillsData.map((group) => (
          <Card key={group.category}>
            <h3 className="font-semibold text-lg mb-4">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}