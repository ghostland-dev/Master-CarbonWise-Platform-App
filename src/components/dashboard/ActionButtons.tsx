
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Download } from "lucide-react";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { saveAs } from "file-saver";

const ActionButtons = () => {
  const { toast } = useToast();
  const [dateRange, setDateRange] = useState("30 derniers jours");
  
  const handleExport = () => {
    // Simulation d'export
    setTimeout(() => {
      toast({
        title: "Export réussi",
        description: `Les données ont été exportées pour la période: ${dateRange}`
      });
      
      // Simulation de téléchargement de fichier
      const blob = new Blob(["Données d'émissions carbone"], { type: "text/plain;charset=utf-8" });
      saveAs(blob, "emissions-carbone.csv");
    }, 1000);
  };
  
  const handleChangePeriod = (period: string) => {
    setDateRange(period);
    toast({
      title: "Période modifiée",
      description: `Période mise à jour: ${period}`
    });
  };

  return (
    <div className="flex items-center gap-2 w-full md:w-auto">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm" className="gap-1">
            <Calendar className="h-4 w-4" />
            <span>{dateRange}</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <div className="flex flex-col p-2">
            <Button 
              variant="ghost" 
              className="justify-start" 
              onClick={() => handleChangePeriod("7 derniers jours")}
            >
              7 derniers jours
            </Button>
            <Button 
              variant="ghost" 
              className="justify-start" 
              onClick={() => handleChangePeriod("30 derniers jours")}
            >
              30 derniers jours
            </Button>
            <Button 
              variant="ghost" 
              className="justify-start" 
              onClick={() => handleChangePeriod("3 derniers mois")}
            >
              3 derniers mois
            </Button>
            <Button 
              variant="ghost" 
              className="justify-start" 
              onClick={() => handleChangePeriod("Cette année")}
            >
              Cette année
            </Button>
          </div>
        </PopoverContent>
      </Popover>
      
      <Button variant="outline" size="sm" className="gap-1" onClick={handleExport}>
        <Download className="h-4 w-4" />
        <span className="hidden md:inline">Exporter</span>
      </Button>
    </div>
  );
};

export default ActionButtons;
