
import { Button } from "@/components/ui/button";
import { FileText, FileSpreadsheet, Database, BarChart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ExportOptions = () => {
  const { toast } = useToast();

  return (
    <div className="glass-card p-6 animate-slide-in-right animation-delay-200">
      <h3 className="font-medium mb-4">Options d'Exportation</h3>
      <div className="space-y-3">
        <Button 
          variant="outline" 
          className="w-full justify-start"
          onClick={() => {
            toast({
              title: "Export PDF",
              description: "Modèle d'export PDF sélectionné"
            });
          }}
        >
          <FileText className="h-4 w-4 mr-2" />
          Rapport PDF
        </Button>
        <Button 
          variant="outline" 
          className="w-full justify-start"
          onClick={() => {
            toast({
              title: "Export Excel",
              description: "Modèle d'export Excel sélectionné"
            });
          }}
        >
          <FileSpreadsheet className="h-4 w-4 mr-2" />
          Feuille de calcul Excel
        </Button>
        <Button 
          variant="outline" 
          className="w-full justify-start"
          onClick={() => {
            toast({
              title: "Export CSV", 
              description: "Modèle d'export CSV sélectionné"
            });
          }}
        >
          <Database className="h-4 w-4 mr-2" />
          Export de données CSV
        </Button>
        <Button 
          variant="outline" 
          className="w-full justify-start"
          onClick={() => {
            toast({
              title: "Tableau de bord interactif",
              description: "Modèle de tableau de bord interactif sélectionné"
            });
          }}
        >
          <BarChart className="h-4 w-4 mr-2" />
          Tableau de bord interactif
        </Button>
      </div>
    </div>
  );
};

export default ExportOptions;
