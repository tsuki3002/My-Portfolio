export const EducationSection = () => {
    return (
      <section id="education" className="py-24 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Education <span className="text-primary">Background</span>
          </h2>
  
          <div className="grid gap-6 md:grid-cols-1">
            <div className="bg-card border border-border rounded-2xl shadow-sm p-6 transition-colors">
              <h3 className="text-xl font-semibold">
                Master of Science in Advanced Data Analytics
              </h3>
              <p className="text-muted-foreground text-sm">
                University of North Texas | Denton, TX | GPA: 4.0
              </p>
              <p className="text-muted-foreground mt-2">
                Relevant Coursework: Data Programming (Python, R), Machine Learning, Healthcare Analytics, Data Visualization (Tableau, Power BI), Statistics.
              </p>
            </div>
  
            <div className="bg-card border border-border rounded-2xl shadow-sm p-6 transition-colors">
              <h3 className="text-xl font-semibold">
                Bachelor of Technology in Electronics & Communication
              </h3>
              <p className="text-muted-foreground text-sm">
                Sreenidhi Institute of Science and Technology | Hyderabad, India | GPA: 3.61
              </p>
              <p className="text-muted-foreground mt-2">
                Built foundational technical and analytical skills across engineering, mathematics, and computing disciplines.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };