export const ExperienceSection = () => {
    return (
      <section id="experience" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Work <span className="text-primary">Experience</span>
          </h2>
  
          <div className="grid gap-6 md:grid-cols-1">
            <div className="bg-card border border-border rounded-2xl shadow-sm p-6 transition-colors">
              <h3 className="text-xl font-semibold">
                Graduate Teaching Assistant – University of North Texas
              </h3>
              <p className="text-sm text-muted-foreground">
                Denton, TX | Aug 2024 – Dec 2024
              </p>
              <div className="mt-2 space-y-1 text-muted-foreground">
                <p>Led hands-on workshops and guided graduate students in applying real-world healthcare data analytics techniques.</p>
                <p>Designed cloud-based analytics workflows and integrated data storytelling for improved student comprehension.</p>
              </div>
            </div>
  
            <div className="bg-card border border-border rounded-2xl shadow-sm p-6 transition-colors">
              <h3 className="text-xl font-semibold">
                Volunteer Data Engineer – Trio Hospice
              </h3>
              <p className="text-sm text-muted-foreground">
                Denton, TX | Nov 2023 – Present
              </p>
              <div className="mt-2 space-y-1 text-muted-foreground">
                <p>Developed scalable pipelines for healthcare service data, improving scheduling and operational efficiency.</p>
                <p>Enhanced data integration systems to support timely patient care decisions and trend analysis.</p>
              </div>
            </div>
  
            <div className="bg-card border border-border rounded-2xl shadow-sm p-6 transition-colors">
              <h3 className="text-xl font-semibold">
                Volunteer – Robotics Club, SNIST
              </h3>
              <p className="text-sm text-muted-foreground">
                Hyderabad, India | Jan 2023 – May 2023
              </p>
              <div className="mt-2 space-y-1 text-muted-foreground">
                <p>Built dashboards and predictive models to streamline event logistics and performance tracking.</p>
                <p>Used Tableau and Python to visualize participant data and enhance engagement metrics.</p>
              </div>
            </div>
  
            <div className="bg-card border border-border rounded-2xl shadow-sm p-6 transition-colors">
              <h3 className="text-xl font-semibold">
                Inventory Analyst Intern – Public Library
              </h3>
              <p className="text-sm text-muted-foreground">
                Hyderabad, India | May 2023 – Aug 2023
              </p>
              <div className="mt-2 space-y-1 text-muted-foreground">
                <p>Designed forecasting dashboards for inventory, improving stock availability by 20%.</p>
                <p>Applied predictive models to optimize resource planning in service-heavy environments.</p>
              </div>
            </div>
  
            <div className="bg-card border border-border rounded-2xl shadow-sm p-6 transition-colors">
              <h3 className="text-xl font-semibold">
                Data Analytics Intern – AWS
              </h3>
              <p className="text-sm text-muted-foreground">
                Hyderabad, India | Jan 2022 – Apr 2022
              </p>
              <div className="mt-2 space-y-1 text-muted-foreground">
                <p>Built end-to-end ETL workflows and dashboards for simulated healthcare datasets.</p>
                <p>Leveraged AWS Redshift and QuickSight for KPI reporting and operational insights.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };