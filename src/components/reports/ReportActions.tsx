
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar, Filter } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Database, FileCheck, BarChart2 } from "lucide-react";

interface ReportActionsProps {
  openReportDialog: (type: string) => void;
}

const ReportActions = ({ openReportDialog }: ReportActionsProps) => {
  return (
    <div className="glass-card p-6 animate-slide-up">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <Tabs defaultValue="generate" className="w-full md:w-auto">
          <TabsList className="bg-muted/50 w-full md:w-auto">
            <TabsTrigger value="generate">Générer un Rapport</TabsTrigger>
            <TabsTrigger value="scheduled">Planifiés</TabsTrigger>
            <TabsTrigger value="templates">Modèles</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Button variant="outline" size="sm" className="gap-1">
            <Calendar className="h-4 w-4" />
            <span>Période</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <Filter className="h-4 w-4" />
            <span className="hidden md:inline">Filtres</span>
          </Button>
        </div>
      </div>

      {/* Options de génération de rapport */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-transparent border-2 border-primary/20 hover:border-primary/40 transition-all cursor-pointer">
          <CardHeader className="pb-2">
            <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center mb-2">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-lg">Rapport CSRD</CardTitle>
            <CardDescription>Conformité à la Directive sur la Publication d'Informations en matière de Durabilité</CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              className="w-full" 
              size="sm"
              onClick={() => openReportDialog("csrd")}
            >
              Générer
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-transparent border hover:border-primary/30 transition-all cursor-pointer">
          <CardHeader className="pb-2">
            <div className="h-10 w-10 rounded-md bg-blue-100/20 flex items-center justify-center mb-2">
              <Database className="h-5 w-5 text-blue-500" />
            </div>
            <CardTitle className="text-lg">Rapport Personnalisé</CardTitle>
            <CardDescription>Construire un rapport personnalisé avec des métriques sélectionnées</CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              variant="outline" 
              className="w-full" 
              size="sm"
              onClick={() => openReportDialog("custom")}
            >
              Créer
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-transparent border hover:border-primary/30 transition-all cursor-pointer">
          <CardHeader className="pb-2">
            <div className="h-10 w-10 rounded-md bg-green-100/20 flex items-center justify-center mb-2">
              <FileCheck className="h-5 w-5 text-green-500" />
            </div>
            <CardTitle className="text-lg">Passeport Produit Numérique</CardTitle>
            <CardDescription>Créer des DPP pour vos gammes de produits</CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              variant="outline" 
              className="w-full" 
              size="sm"
              onClick={() => openReportDialog("dpp")}
            >
              Générer
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-transparent border hover:border-primary/30 transition-all cursor-pointer">
          <CardHeader className="pb-2">
            <div className="h-10 w-10 rounded-md bg-amber-100/20 flex items-center justify-center mb-2">
              <BarChart2 className="h-5 w-5 text-amber-500" />
            </div>
            <CardTitle className="text-lg">Empreinte Carbone</CardTitle>
            <CardDescription>Calculer et rapporter sur tous les scopes d'émissions</CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              variant="outline" 
              className="w-full" 
              size="sm"
              onClick={() => openReportDialog("carbon")}
            >
              Générer
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReportActions;
