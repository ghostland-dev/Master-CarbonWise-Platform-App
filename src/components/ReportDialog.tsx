
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import ReportGenerationForm from "./ReportGenerationForm";

interface ReportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  reportType: string;
}

const ReportDialog = ({ open, onOpenChange, reportType }: ReportDialogProps) => {
  const [generatedPdfUrl, setGeneratedPdfUrl] = useState<string | null>(null);

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

  const handlePdfGenerated = (pdfUrl: string) => {
    setGeneratedPdfUrl(pdfUrl);
  };

  const handleClose = () => {
    setGeneratedPdfUrl(null);
    onOpenChange(false);
  };

  const handleDialogOpenChange = (open: boolean) => {
    if (!open) {
      setGeneratedPdfUrl(null);
    }
    onOpenChange(open);
  };

  const downloadPdf = () => {
    if (generatedPdfUrl) {
      const link = document.createElement('a');
      link.href = generatedPdfUrl;
      link.download = `${getReportTitle(reportType).replace(/\s+/g, '-').toLowerCase()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleDialogOpenChange}>
      <DialogContent className={`sm:max-w-[${generatedPdfUrl ? '800px' : '600px'}]`}>
        <DialogHeader>
          <DialogTitle>{getReportTitle(reportType)}</DialogTitle>
          <DialogDescription>{getReportDescription(reportType)}</DialogDescription>
        </DialogHeader>
        
        {generatedPdfUrl ? (
          <div className="space-y-4">
            <div className="border rounded-md overflow-hidden h-[70vh]">
              <iframe 
                src={generatedPdfUrl} 
                className="w-full h-full" 
                title="PDF Preview"
              />
            </div>
            
            <div className="flex justify-end space-x-2">
              <button 
                className="px-4 py-2 rounded-md bg-primary text-white"
                onClick={downloadPdf}
              >
                Download PDF
              </button>
              <button 
                className="px-4 py-2 rounded-md border border-input bg-background"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <ReportGenerationForm 
            reportType={reportType} 
            onClose={() => onOpenChange(false)}
            onPdfGenerated={handlePdfGenerated}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ReportDialog;
