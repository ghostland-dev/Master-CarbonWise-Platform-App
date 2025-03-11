
import React from "react";
import { Button } from "@/components/ui/button";
import { FileText, Factory, CloudRain, Globe } from "lucide-react";

const CarbonBreakdown = () => {
  return (
    <div className="glass-card p-6 mb-6 animate-slide-in-right">
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-medium">Répartition Carbone</h3>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <FileText className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-teal-400"></span>
              <span>Scope 1 (Direct)</span>
            </div>
            <span className="font-medium">98,5 tCO₂e</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-teal-400 rounded-full" style={{ width: "25%" }}></div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-400"></span>
              <span>Scope 2 (Indirect)</span>
            </div>
            <span className="font-medium">142,8 tCO₂e</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-blue-400 rounded-full" style={{ width: "35%" }}></div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-orange-400"></span>
              <span>Scope 3 (Chaîne de Valeur)</span>
            </div>
            <span className="font-medium">214,9 tCO₂e</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-orange-400 rounded-full" style={{ width: "40%" }}></div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-border">
        <h4 className="text-sm font-medium mb-4">Principales Sources d'Émissions</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Factory className="h-4 w-4 text-muted-foreground" />
              <span>Fabrication</span>
            </div>
            <span>32%</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <CloudRain className="h-4 w-4 text-muted-foreground" />
              <span>Consommation d'Énergie</span>
            </div>
            <span>28%</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <span>Transport</span>
            </div>
            <span>18%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonBreakdown;
