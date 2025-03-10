
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { useToast } from "@/hooks/use-toast";
import ReportDialog from "@/components/ReportDialog";
import ReportActions from "@/components/reports/ReportActions";
import ReportsLibrary from "@/components/reports/ReportsLibrary";
import CSRDCompliance from "@/components/reports/CSRDCompliance";
import DigitalProductPassport from "@/components/reports/DigitalProductPassport";
import ExportOptions from "@/components/reports/ExportOptions";

const Reports = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentReportType, setCurrentReportType] = useState("");
  const { toast } = useToast();
  
  const openReportDialog = (type: string) => {
    setCurrentReportType(type);
    setDialogOpen(true);
  };

  const handleDownload = (reportName: string) => {
    toast({
      title: "Download started",
      description: `Downloading ${reportName}...`
    });
  };

  const handleShare = (reportName: string) => {
    toast({
      title: "Share report",
      description: `Link to ${reportName} copied to clipboard`
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container px-4 md:px-6 lg:px-8 pt-24 pb-16">
        <div className="mb-8 pt-4">
          <h1 className="text-3xl font-bold tracking-tight animate-slide-down">Reports</h1>
          <p className="text-muted-foreground mt-1 animate-slide-down animation-delay-100">
            Generate, customize, and export compliance and sustainability reports
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 space-y-6">
            <ReportActions openReportDialog={openReportDialog} />
            <ReportsLibrary 
              handleDownload={handleDownload} 
              handleShare={handleShare} 
            />
          </div>

          <div className="lg:col-span-4 space-y-6">
            <CSRDCompliance openReportDialog={openReportDialog} />
            <DigitalProductPassport 
              openReportDialog={openReportDialog} 
              handleDownload={handleDownload} 
            />
            <ExportOptions />
          </div>
        </div>
      </main>
      
      <ReportDialog 
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        reportType={currentReportType}
      />
    </div>
  );
};

export default Reports;
