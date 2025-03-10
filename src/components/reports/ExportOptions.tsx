
import { Button } from "@/components/ui/button";
import { FileText, FileSpreadsheet, Database, BarChart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ExportOptions = () => {
  const { toast } = useToast();

  return (
    <div className="glass-card p-6 animate-slide-in-right animation-delay-200">
      <h3 className="font-medium mb-4">Export Options</h3>
      <div className="space-y-3">
        <Button 
          variant="outline" 
          className="w-full justify-start"
          onClick={() => {
            toast({
              title: "PDF Export",
              description: "PDF export template selected"
            });
          }}
        >
          <FileText className="h-4 w-4 mr-2" />
          PDF Report
        </Button>
        <Button 
          variant="outline" 
          className="w-full justify-start"
          onClick={() => {
            toast({
              title: "Excel Export",
              description: "Excel export template selected"
            });
          }}
        >
          <FileSpreadsheet className="h-4 w-4 mr-2" />
          Excel Spreadsheet
        </Button>
        <Button 
          variant="outline" 
          className="w-full justify-start"
          onClick={() => {
            toast({
              title: "CSV Export", 
              description: "CSV export template selected"
            });
          }}
        >
          <Database className="h-4 w-4 mr-2" />
          CSV Data Export
        </Button>
        <Button 
          variant="outline" 
          className="w-full justify-start"
          onClick={() => {
            toast({
              title: "Interactive Dashboard",
              description: "Interactive dashboard template selected"
            });
          }}
        >
          <BarChart className="h-4 w-4 mr-2" />
          Interactive Dashboard
        </Button>
      </div>
    </div>
  );
};

export default ExportOptions;
