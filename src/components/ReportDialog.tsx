
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, X } from "lucide-react";
import ReportGenerationForm from "./ReportGenerationForm";
import { useToast } from "@/hooks/use-toast";

interface ReportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  reportType: string;
}

const ReportDialog = ({ open, onOpenChange, reportType }: ReportDialogProps) => {
  const [generatedPdfUrl, setGeneratedPdfUrl] = useState<string | null>(null);
  const { toast } = useToast();

  const getReportTitle = (type: string) => {
    switch (type) {
      case "csrd":
        return "Générer un Rapport CSRD";
      case "custom":
        return "Créer un Rapport Personnalisé";
      case "dpp":
        return "Créer un Passeport Produit Numérique";
      case "carbon":
        return "Générer un Rapport d'Empreinte Carbone";
      default:
        return "Générer un Rapport";
    }
  };

  const getReportDescription = (type: string) => {
    switch (type) {
      case "csrd":
        return "Créer un rapport conforme à la Directive sur la Publication d'Informations en matière de Durabilité des Entreprises.";
      case "custom":
        return "Construire un rapport personnalisé avec les métriques et données dont vous avez besoin.";
      case "dpp":
        return "Générer un Passeport Produit Numérique pour votre gamme de produits.";
      case "carbon":
        return "Calculer et rapporter l'empreinte carbone de votre organisation sur tous les scopes d'émissions.";
      default:
        return "Configurez les options de votre rapport ci-dessous.";
    }
  };

  const handlePdfGenerated = (pdfUrl: string) => {
    setGeneratedPdfUrl(pdfUrl);
    toast({
      title: "Rapport PDF Généré",
      description: "Votre rapport a été généré avec succès."
    });
  };

  const handleClose = () => {
    setGeneratedPdfUrl(null);
    onOpenChange(false);
  };

  const handleDialogOpenChange = (open: boolean) => {
    if (!open) {
      setGeneratedPdfUrl(null);
    }
    onOpenChange(open);
  };

  const downloadPdf = () => {
    if (generatedPdfUrl) {
      const link = document.createElement('a');
      link.href = generatedPdfUrl;
      link.download = `${getReportTitle(reportType).replace(/\s+/g, '-').toLowerCase()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Téléchargement Démarré",
        description: "Votre rapport PDF est en cours de téléchargement."
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleDialogOpenChange}>
      <DialogContent className={`sm:max-w-[${generatedPdfUrl ? '800px' : '600px'}]`}>
        <DialogHeader>
          <DialogTitle>{getReportTitle(reportType)}</DialogTitle>
          <DialogDescription>{getReportDescription(reportType)}</DialogDescription>
        </DialogHeader>
        
        {generatedPdfUrl ? (
          <div className="space-y-4">
            <div className="border rounded-md overflow-hidden h-[70vh]">
              <iframe 
                src={generatedPdfUrl} 
                className="w-full h-full" 
                title="Aperçu PDF"
              />
            </div>
            
            <div className="flex justify-end space-x-2">
              <Button 
                variant="outline"
                onClick={handleClose}
                className="gap-1"
              >
                <X className="h-4 w-4" />
                Fermer
              </Button>
              <Button 
                onClick={downloadPdf}
                className="gap-1"
              >
                <Download className="h-4 w-4" />
                Télécharger PDF
              </Button>
            </div>
          </div>
        ) : (
          <ReportGenerationForm 
            reportType={reportType} 
            onClose={() => onOpenChange(false)}
            onPdfGenerated={handlePdfGenerated}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ReportDialog;
