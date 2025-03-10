
import { Button } from "@/components/ui/button";
import { FileCheck, Download } from "lucide-react";

interface DigitalProductPassportProps {
  openReportDialog: (type: string) => void;
  handleDownload: (reportName: string) => void;
}

const DigitalProductPassport = ({ openReportDialog, handleDownload }: DigitalProductPassportProps) => {
  return (
    <div className="glass-card p-6 animate-slide-in-right animation-delay-100">
      <h3 className="font-medium mb-4 flex items-center gap-2">
        <FileCheck className="h-5 w-5 text-green-500" />
        Digital Product Passport (DPP)
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        Create standardized digital passports containing verified data about your products' environmental characteristics, material composition, and circularity.
      </p>
      
      <div className="space-y-3">
        <div className="p-3 rounded-lg bg-muted/50">
          <div className="flex items-center gap-2 mb-1">
            <div className="h-8 w-8 rounded bg-green-100/50 flex items-center justify-center">
              <FileCheck className="h-4 w-4 text-green-500" />
            </div>
            <h4 className="font-medium">EcoFriendly Series</h4>
          </div>
          <p className="text-xs text-muted-foreground">
            Last updated: 2023-09-22
          </p>
          <div className="flex gap-2 mt-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs h-7"
              onClick={() => handleDownload("DPP - EcoFriendly Series")}
            >
              <Download className="h-3 w-3 mr-1" />
              DPP
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs h-7"
              onClick={() => openReportDialog("dpp")}
            >
              Update
            </Button>
          </div>
        </div>
        
        <Button 
          className="w-full"
          onClick={() => openReportDialog("dpp")}
        >
          Create New Product Passport
        </Button>
      </div>
    </div>
  );
};

export default DigitalProductPassport;
