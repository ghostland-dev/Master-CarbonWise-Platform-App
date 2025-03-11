
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const TabsControl = () => {
  const { toast } = useToast();
  
  const handleTabChange = (value: string) => {
    let tabName = "";
    switch(value) {
      case "apercu":
        tabName = "Aperçu";
        break;
      case "details":
        tabName = "Détails";
        break;
      case "rapports":
        tabName = "Rapports";
        break;
      default:
        tabName = value;
    }
    
    toast({
      title: `Onglet: ${tabName}`,
      description: `Vous consultez maintenant les données ${tabName.toLowerCase()}`
    });
  };

  return (
    <Tabs defaultValue="apercu" className="w-full" onValueChange={handleTabChange}>
      <TabsList className="bg-muted/50">
        <TabsTrigger value="apercu">Aperçu</TabsTrigger>
        <TabsTrigger value="details">Détails</TabsTrigger>
        <TabsTrigger value="rapports">Rapports</TabsTrigger>
      </TabsList>
      <TabsContent value="apercu">
        {/* Le contenu est déjà géré par DashboardLayout */}
      </TabsContent>
      <TabsContent value="details">
        <div className="text-sm text-muted-foreground mt-2">
          Affichage détaillé des émissions carbone par catégorie et période.
        </div>
      </TabsContent>
      <TabsContent value="rapports">
        <div className="text-sm text-muted-foreground mt-2">
          Vos rapports programmés et historiques d'émissions.
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default TabsControl;
