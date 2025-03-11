
import { Button } from "@/components/ui/button";
import { FileText, FileSpreadsheet, Database, BarChart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { saveAs } from "file-saver";

const ExportOptions = () => {
  const { toast } = useToast();

  const handleExport = (format: string, icon: string) => {
    // Simuler un délai de traitement
    toast({
      title: "Préparation du fichier",
      description: `Préparation de l'export ${format} en cours...`
    });

    setTimeout(() => {
      // Message de succès
      toast({
        title: `Export ${format}`,
        description: `Votre rapport au format ${format} est prêt à être téléchargé.`
      });
      
      // Simuler un téléchargement
      let filename = "";
      let content = "";
      
      switch (format) {
        case "PDF":
          filename = "rapport-carbone.pdf";
          content = "Contenu PDF simulé";
          break;
        case "Excel":
          filename = "donnees-emissions.xlsx";
          content = "Contenu Excel simulé";
          break;
        case "CSV":
          filename = "emissions-data.csv";
          content = "Date,Source,Emissions\n2023-01-01,Transport,45.2\n2023-01-02,Énergie,78.3";
          break;
        case "Dashboard":
          filename = "dashboard-config.json";
          content = JSON.stringify({
            title: "Tableau de bord interactif",
            charts: ["emissions", "trajectoire", "comparaison"],
            timeframe: "2023"
          });
          break;
      }
      
      const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
      saveAs(blob, filename);
    }, 1500);
  };

  return (
    <div className="glass-card p-6 animate-slide-in-right animation-delay-200">
      <h3 className="font-medium mb-4">Options d'Exportation</h3>
      <div className="space-y-3">
        <Button 
          variant="outline" 
          className="w-full justify-start"
          onClick={() => handleExport("PDF", "FileText")}
        >
          <FileText className="h-4 w-4 mr-2" />
          Rapport PDF
        </Button>
        <Button 
          variant="outline" 
          className="w-full justify-start"
          onClick={() => handleExport("Excel", "FileSpreadsheet")}
        >
          <FileSpreadsheet className="h-4 w-4 mr-2" />
          Feuille de calcul Excel
        </Button>
        <Button 
          variant="outline" 
          className="w-full justify-start"
          onClick={() => handleExport("CSV", "Database")}
        >
          <Database className="h-4 w-4 mr-2" />
          Export de données CSV
        </Button>
        <Button 
          variant="outline" 
          className="w-full justify-start"
          onClick={() => handleExport("Dashboard", "BarChart")}
        >
          <BarChart className="h-4 w-4 mr-2" />
          Tableau de bord interactif
        </Button>
      </div>
    </div>
  );
};

export default ExportOptions;
