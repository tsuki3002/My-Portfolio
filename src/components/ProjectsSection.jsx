import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Workflow Experiments with LangChain",
    description: "Built and evaluated agentic AI workflows using LangChain and OpenAI APIs.",
    image: "/projects/project1.png",
    tags: ["LangChain", "Python", "LLMs"],
    demoUrl: "#",
    githubUrl: "https://github.com/tsuki3002/AI-workflow-studies/tree/main",
  },
  {
    id: 2,
    title: "Biomechanical IMU Movement Analysis",
    description:
      "Analyzed IMU data for joint movement using ML and signal processing.",
    image: "/projects/project2.png",
    tags: ["Python", "SciPy", "SVM"],
    demoUrl: "#",
    githubUrl: "https://github.com/tsuki3002/Biomechanical-IMU-movement-analysis/tree/main",
  },
  {
    id: 3,
    title: "Allegheny County Crash Data Analysis",
    description:
      "Analyzed 4 years of crash data with clustering, classification, and Power BI.",
    image: "/projects/project3.png",
    tags: ["Python", "Power BI", "Azure"],
    demoUrl: "#",
    githubUrl: "https://github.com/tsuki3002/Allegheny-county-crash-data-analysis/tree/main",
  },
  {
    id: 4,
    title: "Heart Rate Monitoring with Arduino",
    description:
      "Built a real-time heart rate monitoring system using Arduino and Python with alert triggers.",
    image: "/projects/project4.png",
    tags: ["Arduino", "Python", "Sensors"],
    demoUrl: "#",
  },
  {
    id: 5,
    title: "Carbon Emissions Prediction",
    description:
      "Created ML models to forecast carbon emissions using regression and time-series analysis.",
    image: "/projects/project5.png",
    tags: ["Machine Learning", "Pandas", "Time Series"],
    demoUrl: "#",
    githubUrl: "https://github.com/tsuki3002/Carbon-emission-forecasting",
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. EEach project reflects a hands-on approach to 
          solving real-world problems using data, AI, and intelligent systems, combining technical 
          depth with thoughtful design and practical impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {/* <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a> */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/tsuki3002"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};