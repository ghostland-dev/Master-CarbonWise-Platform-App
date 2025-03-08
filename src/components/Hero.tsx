
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-soft-pattern opacity-30 dark:opacity-10"></div>
      
      {/* Gradient orbs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-teal-200/30 dark:bg-teal-900/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
      
      <div className="container relative px-4 md:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary animate-fade-in">
            <span>Sustainability made simple</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 text-balance animate-slide-up">
            Measure, manage, and reduce your
            <span className="text-gradient"> carbon footprint</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance animate-slide-up animation-delay-100">
            The all-in-one platform helping businesses track environmental impact, 
            meet compliance requirements, and build a more sustainable future.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto animate-slide-up animation-delay-200">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-md"
              onClick={() => navigate("/dashboard")}
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
            >
              Learn more
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto w-full animate-fade-in animation-delay-500">
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold mb-2 text-balance text-gradient">30%</div>
              <p className="text-sm text-muted-foreground">Average emissions reduction</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold mb-2 text-balance text-gradient">1,000+</div>
              <p className="text-sm text-muted-foreground">Companies using CarbonWise</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold mb-2 text-balance text-gradient">100%</div>
              <p className="text-sm text-muted-foreground">CSRD compliance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
