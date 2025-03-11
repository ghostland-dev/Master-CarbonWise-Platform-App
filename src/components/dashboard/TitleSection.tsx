
import React from "react";

interface TitleSectionProps {
  title: string;
  description: string;
}

const TitleSection = ({ title, description }: TitleSectionProps) => {
  return (
    <div className="mb-8 pt-4">
      <h1 className="text-3xl font-bold tracking-tight animate-slide-down">{title}</h1>
      <p className="text-muted-foreground mt-1 animate-slide-down animation-delay-100">
        {description}
      </p>
    </div>
  );
};

export default TitleSection;
