
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ReportGenerationForm from "./ReportGenerationForm";

interface ReportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  reportType: string;
}

const ReportDialog = ({ open, onOpenChange, reportType }: ReportDialogProps) => {
  const getReportTitle = (type: string) => {
    switch (type) {
      case "csrd":
        return "Generate CSRD Report";
      case "custom":
        return "Create Custom Report";
      case "dpp":
        return "Create Digital Product Passport";
      case "carbon":
        return "Generate Carbon Footprint Report";
      default:
        return "Generate Report";
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{getReportTitle(reportType)}</DialogTitle>
        </DialogHeader>
        <ReportGenerationForm 
          reportType={reportType} 
          onClose={() => onOpenChange(false)} 
        />
      </DialogContent>
    </Dialog>
  );
};

export default ReportDialog;
