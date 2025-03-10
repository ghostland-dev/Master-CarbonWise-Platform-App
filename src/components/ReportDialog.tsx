
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
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

  const getReportDescription = (type: string) => {
    switch (type) {
      case "csrd":
        return "Create a compliant report for Corporate Sustainability Reporting Directive.";
      case "custom":
        return "Build a custom report with the metrics and data you need.";
      case "dpp":
        return "Generate a Digital Product Passport for your product line.";
      case "carbon":
        return "Calculate and report on your organization's carbon footprint across all emission scopes.";
      default:
        return "Configure your report options below.";
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{getReportTitle(reportType)}</DialogTitle>
          <DialogDescription>{getReportDescription(reportType)}</DialogDescription>
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
