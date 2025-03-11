
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Share2, FileText, Calendar, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ReportsLibraryProps {
  handleDownload: (reportName: string) => void;
  handleShare: (reportName: string) => void;
}

const ReportsLibrary = ({ handleDownload, handleShare }: ReportsLibraryProps) => {
  const { toast } = useToast();
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [currentReport, setCurrentReport] = useState("");
  const [email, setEmail] = useState("");

  const onDownload = (reportName: string) => {
    handleDownload(reportName);
    toast({
      title: "Téléchargement démarré",
      description: `Le rapport "${reportName}" va être téléchargé.`
    });
  };

  const onOpenShareDialog = (reportName: string) => {
    setCurrentReport(reportName);
    setShowShareDialog(true);
  };

  const onShareSubmit = () => {
    if (email) {
      handleShare(currentReport);
      toast({
        title: "Rapport partagé",
        description: `"${currentReport}" a été partagé avec ${email}.`
      });
      setShowShareDialog(false);
      setEmail("");
    } else {
      toast({
        title: "Adresse e-mail requise",
        description: "Veuillez saisir une adresse e-mail valide.",
        variant: "destructive"
      });
    }
  };

  return (
    <>
      <div className="glass-card p-6 animate-slide-up animation-delay-100">
        <h3 className="font-medium mb-6">Bibliothèque de Rapports</h3>

        <div className="space-y-4">
          <div className="flex items-center bg-muted/30 rounded-md p-4 hover:bg-muted/50 transition-colors">
            <div className="mr-4 p-2 bg-blue-100/30 rounded-full">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium">Rapport d'Empreinte Carbone T1 2023</h4>
              <div className="flex text-sm text-muted-foreground items-center mt-1">
                <Calendar className="h-3.5 w-3.5 mr-1" />
                <span className="mr-3">31 mars 2023</span>
                <Clock className="h-3.5 w-3.5 mr-1" />
                <span>18:30</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="h-8"
                onClick={() => onOpenShareDialog("Rapport d'Empreinte Carbone T1 2023")}
              >
                <Share2 className="h-3.5 w-3.5 mr-1" />
                Partager
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="h-8"
                onClick={() => onDownload("Rapport d'Empreinte Carbone T1 2023")}
              >
                <Download className="h-3.5 w-3.5 mr-1" />
                Télécharger
              </Button>
            </div>
          </div>

          <div className="flex items-center bg-muted/30 rounded-md p-4 hover:bg-muted/50 transition-colors">
            <div className="mr-4 p-2 bg-green-100/30 rounded-full">
              <FileText className="h-6 w-6 text-green-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium">Rapport de Conformité CSRD 2022</h4>
              <div className="flex text-sm text-muted-foreground items-center mt-1">
                <Calendar className="h-3.5 w-3.5 mr-1" />
                <span className="mr-3">15 février 2023</span>
                <Clock className="h-3.5 w-3.5 mr-1" />
                <span>09:45</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="h-8"
                onClick={() => onOpenShareDialog("Rapport de Conformité CSRD 2022")}
              >
                <Share2 className="h-3.5 w-3.5 mr-1" />
                Partager
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="h-8"
                onClick={() => onDownload("Rapport de Conformité CSRD 2022")}
              >
                <Download className="h-3.5 w-3.5 mr-1" />
                Télécharger
              </Button>
            </div>
          </div>

          <div className="flex items-center bg-muted/30 rounded-md p-4 hover:bg-muted/50 transition-colors">
            <div className="mr-4 p-2 bg-amber-100/30 rounded-full">
              <FileText className="h-6 w-6 text-amber-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium">Passeport Produit - Série Durable</h4>
              <div className="flex text-sm text-muted-foreground items-center mt-1">
                <Calendar className="h-3.5 w-3.5 mr-1" />
                <span className="mr-3">20 janvier 2023</span>
                <Clock className="h-3.5 w-3.5 mr-1" />
                <span>14:15</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="h-8"
                onClick={() => onOpenShareDialog("Passeport Produit - Série Durable")}
              >
                <Share2 className="h-3.5 w-3.5 mr-1" />
                Partager
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="h-8"
                onClick={() => onDownload("Passeport Produit - Série Durable")}
              >
                <Download className="h-3.5 w-3.5 mr-1" />
                Télécharger
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Partager le rapport</DialogTitle>
            <DialogDescription>
              Partagez "{currentReport}" avec d'autres utilisateurs par e-mail.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Adresse e-mail</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="exemple@entreprise.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex justify-end gap-2">
              <DialogClose asChild>
                <Button variant="outline">Annuler</Button>
              </DialogClose>
              <Button onClick={onShareSubmit}>Partager</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ReportsLibrary;
