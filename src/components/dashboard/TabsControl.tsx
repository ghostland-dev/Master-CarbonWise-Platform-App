
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabsControl = () => {
  return (
    <Tabs defaultValue="apercu" className="w-full">
      <TabsList className="bg-muted/50">
        <TabsTrigger value="apercu">Aperçu</TabsTrigger>
        <TabsTrigger value="details">Détails</TabsTrigger>
        <TabsTrigger value="rapports">Rapports</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default TabsControl;
