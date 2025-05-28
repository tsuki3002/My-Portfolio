import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 md:pt-0"
    >
      <div className="container max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 z-10 text-center md:text-left">
        {/* Profile Image */}
        <img
          src="/profile.HEIC" // Replace with your actual image file name
          alt="Sushma Kummari"
          className="w-48 h-58 md:w-60 md:h-70 rounded-full object-cover shadow-lg border-4 border-primary"
        />

        <div className="space-y-6 md:space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Sushma
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Kummari
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I build data-driven solutions that blend machine learning, LLMs, and Agentic AI to solve real-world problems.
            From analyzing crash data to enhancing healthcare response systems, I use advanced analytics to deliver impactful outcomes. 
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};