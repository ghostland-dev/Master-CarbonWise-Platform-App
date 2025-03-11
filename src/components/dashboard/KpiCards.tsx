
import React from "react";
import DataCard from "@/components/DataCard";
import { Leaf, TrendingDown, BarChart } from "lucide-react";

const KpiCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <DataCard
        title="Empreinte Carbone Totale"
        value="456,2 tCO₂e"
        description="Émissions depuis début d'année"
        icon={<Leaf className="h-5 w-5" />}
        trend={{ value: 8.4, isPositive: false }}
        className="animate-slide-up"
      />
      <DataCard
        title="Objectif de Réduction"
        value="25%"
        description="d'ici 2025 par rapport à 2019"
        icon={<TrendingDown className="h-5 w-5" />}
        className="animate-slide-up animation-delay-100"
      />
      <DataCard
        title="Intensité Carbone"
        value="18,7"
        description="tCO₂e par 1M€ de revenus"
        icon={<BarChart className="h-5 w-5" />}
        trend={{ value: 5.2, isPositive: false }}
        className="animate-slide-up animation-delay-200"
      />
    </div>
  );
};

export default KpiCards;
