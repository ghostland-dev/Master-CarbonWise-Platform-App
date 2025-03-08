
import { ReactNode } from "react";

interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="glass-card p-6 md:p-8 flex flex-col transition-all duration-300 hover:shadow-strong hover:scale-[1.02] transform-gpu">
      <div className="h-12 w-12 mb-6 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default Feature;
