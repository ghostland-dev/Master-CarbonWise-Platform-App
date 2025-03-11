
import React from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const SuggestedActions = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleActionClick = (action: string) => {
    toast({
      title: "Action sélectionnée",
      description: `Vous avez sélectionné l'action: ${action}`
    });
  };

  const handleViewAllRecommendations = () => {
    toast({
      title: "Toutes les recommandations",
      description: "Navigation vers la page de recommandations détaillées."
    });
    // Redirection vers une future page de recommandations
    setTimeout(() => navigate("/reports"), 500);
  };

  return (
    <div className="glass-card p-6 animate-slide-in-right animation-delay-200">
      <div className="flex items-center gap-3 text-amber-500 bg-amber-100/50 dark:bg-amber-900/20 p-3 rounded-lg mb-4">
        <AlertTriangle className="h-5 w-5 flex-shrink-0" />
        <p className="text-sm">Votre rapport d'émissions du T2 est dû dans 15 jours.</p>
      </div>
      
      <h3 className="font-medium mb-4">Actions Suggérées</h3>
      <div className="space-y-3">
        <div 
          className="p-3 bg-muted/50 rounded-lg cursor-pointer hover:bg-muted transition-colors"
          onClick={() => handleActionClick("Passage à l'énergie renouvelable")}
        >
          <h4 className="text-sm font-medium">Passage à l'énergie renouvelable</h4>
          <p className="text-xs text-muted-foreground mt-1">
            Pourrait réduire les émissions du Scope 2 jusqu'à 45%
          </p>
        </div>
        <div 
          className="p-3 bg-muted/50 rounded-lg cursor-pointer hover:bg-muted transition-colors"
          onClick={() => handleActionClick("Optimisation des itinéraires logistiques")}
        >
          <h4 className="text-sm font-medium">Optimisation des itinéraires logistiques</h4>
          <p className="text-xs text-muted-foreground mt-1">
            Réduction potentielle de 12% des émissions de transport
          </p>
        </div>
        <div 
          className="p-3 bg-muted/50 rounded-lg cursor-pointer hover:bg-muted transition-colors"
          onClick={() => handleActionClick("Mise à jour des exigences fournisseurs")}
        >
          <h4 className="text-sm font-medium">Mise à jour des exigences fournisseurs</h4>
          <p className="text-xs text-muted-foreground mt-1">
            Traite 30% de vos émissions du Scope 3
          </p>
        </div>
      </div>
      
      <Button 
        className="w-full mt-4"
        onClick={handleViewAllRecommendations}
      >
        Voir Toutes les Recommandations
      </Button>
    </div>
  );
};

export default SuggestedActions;
