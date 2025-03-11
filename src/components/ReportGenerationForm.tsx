
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { generatePDF } from "@/utils/pdfGenerator";

interface ReportGenerationFormProps {
  reportType: string;
  onClose?: () => void;
  onPdfGenerated?: (pdfUrl: string) => void;
}

const ReportGenerationForm = ({ reportType, onClose, onPdfGenerated }: ReportGenerationFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    reportName: "",
    dateRange: "last-quarter",
    format: "pdf",
    includeCharts: true,
    includeTables: true,
    includeScope1: true,
    includeScope2: true,
    includeScope3: false,
    includeComparison: true,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement> | { target: { name: string; value: string } }
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (formData.format === "pdf") {
      try {
        const pdfUrl = generatePDF({
          reportName: formData.reportName,
          reportType,
          dateRange: formData.dateRange,
          includeCharts: formData.includeCharts,
          includeTables: formData.includeTables,
          includeScope1: formData.includeScope1,
          includeScope2: formData.includeScope2,
          includeScope3: formData.includeScope3,
          includeComparison: formData.includeComparison,
        });
        
        if (onPdfGenerated) {
          onPdfGenerated(pdfUrl);
        }
        
        toast({
          title: "Rapport PDF Généré",
          description: `Votre ${getReportTypeName(reportType)} a été généré avec succès.`,
        });
        
        setIsLoading(false);
      } catch (error) {
        console.error("Erreur lors de la génération du PDF:", error);
        toast({
          title: "Erreur de génération du PDF",
          description: "Une erreur s'est produite lors de la génération de votre rapport PDF. Veuillez réessayer.",
          variant: "destructive",
        });
        setIsLoading(false);
      }
    } else {
      setTimeout(() => {
        setIsLoading(false);
        toast({
          title: "Rapport planifié pour génération",
          description: `Votre ${getReportTypeName(reportType)} sera prêt sous peu.`,
        });
        if (onClose) onClose();
      }, 1500);
    }
  };

  const getReportTypeName = (type: string) => {
    switch (type) {
      case "csrd":
        return "Rapport de Conformité CSRD";
      case "custom":
        return "Rapport de Durabilité Personnalisé";
      case "dpp":
        return "Passeport Produit Numérique";
      case "carbon":
        return "Rapport d'Empreinte Carbone";
      default:
        return "Rapport";
    }
  };

  const suggestedReportName = `${getReportTypeName(reportType)} - ${new Date().toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' })}`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="reportName">Nom du Rapport</Label>
        <Input
          id="reportName"
          name="reportName"
          placeholder={suggestedReportName}
          value={formData.reportName}
          onChange={handleInputChange}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="dateRange">Période</Label>
        <Select
          value={formData.dateRange}
          onValueChange={(value) => handleSelectChange("dateRange", value)}
        >
          <SelectTrigger id="dateRange" className="w-full">
            <SelectValue placeholder="Sélectionner une période" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="current-month">Mois en cours</SelectItem>
            <SelectItem value="last-month">Mois dernier</SelectItem>
            <SelectItem value="current-quarter">Trimestre en cours</SelectItem>
            <SelectItem value="last-quarter">Trimestre dernier</SelectItem>
            <SelectItem value="ytd">Depuis le début de l'année</SelectItem>
            <SelectItem value="last-year">Année dernière</SelectItem>
            <SelectItem value="custom">Période personnalisée</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {reportType === "csrd" && (
        <Card className="border border-muted bg-muted/20">
          <CardContent className="pt-4">
            <h4 className="font-medium mb-2">Exigences CSRD</h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-start gap-2">
                <input type="checkbox" id="doubleMateriality" defaultChecked className="mt-1" />
                <Label htmlFor="doubleMateriality" className="text-sm font-normal">Inclure l'évaluation de double matérialité</Label>
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" id="valuechainEmissions" defaultChecked className="mt-1" />
                <Label htmlFor="valuechainEmissions" className="text-sm font-normal">Émissions de la chaîne de valeur (Scope 3)</Label>
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" id="transitionPlans" defaultChecked className="mt-1" />
                <Label htmlFor="transitionPlans" className="text-sm font-normal">Plans de transition climatique</Label>
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" id="biodiversity" className="mt-1" />
                <Label htmlFor="biodiversity" className="text-sm font-normal">Impact sur la biodiversité</Label>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {reportType === "dpp" && (
        <div className="space-y-2">
          <Label htmlFor="productLine">Gamme de Produits</Label>
          <Select defaultValue="eco-friendly">
            <SelectTrigger id="productLine" className="w-full">
              <SelectValue placeholder="Sélectionner une gamme de produits" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="eco-friendly">Série ÉcoResponsable</SelectItem>
              <SelectItem value="sustainable">Collection Durable</SelectItem>
              <SelectItem value="circular">Produits Circulaires</SelectItem>
              <SelectItem value="new">Nouvelle Gamme de Produits</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {reportType === "carbon" && (
        <Card className="border border-muted bg-muted/20">
          <CardContent className="pt-4">
            <h4 className="font-medium mb-2">Scopes d'Émissions</h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-start gap-2">
                <input 
                  type="checkbox" 
                  id="includeScope1" 
                  checked={formData.includeScope1}
                  onChange={(e) => setFormData(prev => ({ ...prev, includeScope1: e.target.checked }))}
                  className="mt-1" 
                />
                <Label htmlFor="includeScope1" className="text-sm font-normal">
                  Scope 1 (Émissions directes)
                </Label>
              </div>
              <div className="flex items-start gap-2">
                <input 
                  type="checkbox" 
                  id="includeScope2" 
                  checked={formData.includeScope2}
                  onChange={(e) => setFormData(prev => ({ ...prev, includeScope2: e.target.checked }))}
                  className="mt-1" 
                />
                <Label htmlFor="includeScope2" className="text-sm font-normal">
                  Scope 2 (Émissions indirectes de l'électricité)
                </Label>
              </div>
              <div className="flex items-start gap-2">
                <input 
                  type="checkbox" 
                  id="includeScope3" 
                  checked={formData.includeScope3}
                  onChange={(e) => setFormData(prev => ({ ...prev, includeScope3: e.target.checked }))}
                  className="mt-1" 
                />
                <Label htmlFor="includeScope3" className="text-sm font-normal">
                  Scope 3 (Émissions de la chaîne de valeur)
                </Label>
              </div>
              <div className="flex items-start gap-2">
                <input 
                  type="checkbox" 
                  id="includeComparison" 
                  checked={formData.includeComparison}
                  onChange={(e) => setFormData(prev => ({ ...prev, includeComparison: e.target.checked }))}
                  className="mt-1" 
                />
                <Label htmlFor="includeComparison" className="text-sm font-normal">
                  Inclure une comparaison année par année
                </Label>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-border">
              <h4 className="font-medium mb-2">Méthode de Calcul</h4>
              <Select defaultValue="ghg-protocol">
                <SelectTrigger id="calculationMethod" className="w-full">
                  <SelectValue placeholder="Sélectionner une méthode de calcul" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ghg-protocol">Protocole GES</SelectItem>
                  <SelectItem value="iso-14064">ISO 14064</SelectItem>
                  <SelectItem value="pef">Empreinte Environnementale des Produits (PEF)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      )}
      
      <div className="space-y-2">
        <Label htmlFor="format">Format d'Exportation</Label>
        <Select
          value={formData.format}
          onValueChange={(value) => handleSelectChange("format", value)}
        >
          <SelectTrigger id="format" className="w-full">
            <SelectValue placeholder="Sélectionner un format" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pdf">Rapport PDF</SelectItem>
            <SelectItem value="excel">Feuille de calcul Excel</SelectItem>
            <SelectItem value="csv">Export de données CSV</SelectItem>
            <SelectItem value="interactive">Tableau de bord interactif</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="pt-2 space-y-2">
        <div className="flex items-start gap-2">
          <input 
            type="checkbox" 
            id="includeCharts" 
            checked={formData.includeCharts}
            onChange={(e) => setFormData(prev => ({ ...prev, includeCharts: e.target.checked }))}
            className="mt-1" 
          />
          <Label htmlFor="includeCharts" className="text-sm font-normal">Inclure des graphiques et visualisations</Label>
        </div>
        <div className="flex items-start gap-2">
          <input 
            type="checkbox" 
            id="includeTables" 
            checked={formData.includeTables}
            onChange={(e) => setFormData(prev => ({ ...prev, includeTables: e.target.checked }))}
            className="mt-1" 
          />
          <Label htmlFor="includeTables" className="text-sm font-normal">Inclure des tableaux de données détaillés</Label>
        </div>
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        {onClose && (
          <Button type="button" variant="outline" onClick={onClose}>
            Annuler
          </Button>
        )}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Génération en cours..." : "Générer le rapport"}
        </Button>
      </div>
    </form>
  );
};

export default ReportGenerationForm;
