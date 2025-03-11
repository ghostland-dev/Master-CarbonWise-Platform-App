
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

interface CSRDComplianceProps {
  openReportDialog: (type: string) => void;
}

const CSRDCompliance = ({ openReportDialog }: CSRDComplianceProps) => {
  return (
    <div className="glass-card p-6 animate-slide-in-right">
      <h3 className="font-medium mb-4 flex items-center gap-2">
        <FileText className="h-5 w-5 text-primary" />
        Liste de Contrôle de Conformité CSRD
      </h3>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 rounded border-2 border-green-500 flex items-center justify-center bg-green-100/50">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 13L9 17L19 7" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="text-sm">Données d'émissions Scope 1 & 2</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 rounded border-2 border-green-500 flex items-center justify-center bg-green-100/50">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 13L9 17L19 7" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="text-sm">Évaluation des risques environnementaux</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 rounded border-2 border-amber-500 flex items-center justify-center bg-amber-100/50">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 9V12M12 15H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0378 2.66667 10.268 4L3.33978 16C2.56998 17.3333 3.53223 19 5.07183 19Z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="text-sm">Données d'émissions Scope 3 (partiel)</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 rounded border-2 border-amber-500 flex items-center justify-center bg-amber-100/50">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 9V12M12 15H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0378 2.66667 10.268 4L3.33978 16C2.56998 17.3333 3.53223 19 5.07183 19Z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="text-sm">Plans de transition climatique</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 rounded border-2 border-gray-300 flex items-center justify-center">
          </div>
          <p className="text-sm">Évaluation de l'impact sur la biodiversité</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-5 w-5 rounded border-2 border-gray-300 flex items-center justify-center">
          </div>
          <p className="text-sm">Données sur l'eau et les ressources marines</p>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-border">
        <Button 
          className="w-full"
          onClick={() => openReportDialog("csrd")}
        >
          Compléter les Exigences CSRD
        </Button>
      </div>
    </div>
  );
};

export default CSRDCompliance;
