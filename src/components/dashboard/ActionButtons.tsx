
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Download } from "lucide-react";

const ActionButtons = () => {
  return (
    <div className="flex items-center gap-2 w-full md:w-auto">
      <Button variant="outline" size="sm" className="gap-1">
        <Calendar className="h-4 w-4" />
        <span>30 derniers jours</span>
      </Button>
      <Button variant="outline" size="sm" className="gap-1">
        <Download className="h-4 w-4" />
        <span className="hidden md:inline">Exporter</span>
      </Button>
    </div>
  );
};

export default ActionButtons;
