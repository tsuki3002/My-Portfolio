import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Data Analysis & Visualization
  { name: "SQL", level: 90, category: "Data Analysis & Visualization" },
  { name: "Python (Pandas, Polars)", level: 90, category: "Data Analysis & Visualization" },
  { name: "Tableau", level: 90, category: "Data Analysis & Visualization" },
  { name: "Power BI", level: 85, category: "Data Analysis & Visualization" },
  { name: "Excel (Advanced)", level: 85, category: "Data Analysis & Visualization" },
  { name: "Matplotlib & Seaborn", level: 80, category: "Data Analysis & Visualization" },

  // Machine Learning & AI
  { name: "Scikit-Learn", level: 85, category: "Machine Learning & AI" },
  { name: "TensorFlow & Keras", level: 75, category: "Machine Learning & AI" },
  { name: "PyTorch", level: 70, category: "Machine Learning & AI" },
  { name: "Large Language Models (LLMs)", level: 65, category: "Machine Learning & AI" },
  { name: "Agentic AI (Langchain, Langgraph)", level: 60, category: "Machine Learning & AI" },
  { name: "Feature Engineering & Model Tuning", level: 80, category: "Machine Learning & AI" },

  // Data Engineering & Cloud Platforms
  { name: "AWS (S3, Redshift)", level: 80, category: "Data Engineering & Cloud" },
  { name: "Google Cloud Platform (BigQuery)", level: 75, category: "Data Engineering & Cloud" },
  { name: "Apache Spark", level: 70, category: "Data Engineering & Cloud" },
  { name: "Hadoop", level: 65, category: "Data Engineering & Cloud" },
  { name: "OpenRefine (Data Cleaning)", level: 70, category: "Data Engineering & Cloud" },
  { name: "SQL Query Optimization", level: 85, category: "Data Engineering & Cloud" },
];

const categories = ["all", "Data Analysis & Visualization", "Machine Learning & AI", "Data Engineering & Cloud"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};