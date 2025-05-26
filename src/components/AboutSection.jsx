import { BarChart3, BarChartBig, BarChartHorizontal, Bot, BrainCircuit, Briefcase, Code, LayoutDashboard, MessagesSquare, PieChart, Presentation, PresentationIcon, SlidersHorizontal, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Machine Learning Enthusiast & Real-World Data Strategist
            </h3>

            <p className="text-muted-foreground">
              With a strong foundation in data science and AI, I specialize in 
              building data-driven, intelligent solutions using machine learning, LLMs,
               and Agentic AI, delivering impactful insights across healthcare, sustainability, 
               and public safety domains.
            </p>

            <p className="text-muted-foreground">
              I'm driven by a deep curiosity to solve real-world challenges with data. From 
              experimenting with cutting-edge AI frameworks to building practical 
              analytical tools, I thrive at the intersection of creativity, logic, and innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BarChartBig className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Data Science & Analytics</h4>
                  <p className="text-muted-foreground">
                    Transforming complex datasets into actionable insights using Python and SQL.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Machine Learning & AI</h4>
                  <p className="text-muted-foreground">
                    Developing intelligent systems with ML, LLMs, and Agentic AI tools.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <PresentationIcon className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Visualization & Communication</h4>
                  <p className="text-muted-foreground">
                    Delivering clear, compelling stories through dashboards, reports, and design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};