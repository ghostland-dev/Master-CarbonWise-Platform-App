import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { generatePDF } from "@/utils/pdfGenerator";

interface ReportGenerationFormProps {
  reportType: string;
  onClose?: () => void;
  onPdfGenerated?: (pdfUrl: string) => void;
}

const ReportGenerationForm = ({ reportType, onClose, onPdfGenerated }: ReportGenerationFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    reportName: "",
    dateRange: "last-quarter",
    format: "pdf",
    includeCharts: true,
    includeTables: true,
    includeScope1: true,
    includeScope2: true,
    includeScope3: false,
    includeComparison: true,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement> | { target: { name: string; value: string } }
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (formData.format === "pdf") {
      try {
        const pdfUrl = generatePDF({
          reportName: formData.reportName,
          reportType,
          dateRange: formData.dateRange,
          includeCharts: formData.includeCharts,
          includeTables: formData.includeTables,
          includeScope1: formData.includeScope1,
          includeScope2: formData.includeScope2,
          includeScope3: formData.includeScope3,
          includeComparison: formData.includeComparison,
        });
        
        if (onPdfGenerated) {
          onPdfGenerated(pdfUrl);
        }
        
        toast({
          title: "PDF Report Generated",
          description: `Your ${getReportTypeName(reportType)} has been generated successfully.`,
        });
        
        setIsLoading(false);
      } catch (error) {
        console.error("Error generating PDF:", error);
        toast({
          title: "Error generating PDF",
          description: "There was an error generating your PDF report. Please try again.",
          variant: "destructive",
        });
        setIsLoading(false);
      }
    } else {
      setTimeout(() => {
        setIsLoading(false);
        toast({
          title: "Report scheduled for generation",
          description: `Your ${getReportTypeName(reportType)} will be ready shortly.`,
        });
        if (onClose) onClose();
      }, 1500);
    }
  };

  const getReportTypeName = (type: string) => {
    switch (type) {
      case "csrd":
        return "CSRD Compliance Report";
      case "custom":
        return "Custom Sustainability Report";
      case "dpp":
        return "Digital Product Passport";
      case "carbon":
        return "Carbon Footprint Report";
      default:
        return "Report";
    }
  };

  const suggestedReportName = `${getReportTypeName(reportType)} - ${new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="reportName">Report Name</Label>
        <Input
          id="reportName"
          name="reportName"
          placeholder={suggestedReportName}
          value={formData.reportName}
          onChange={handleInputChange}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="dateRange">Time Period</Label>
        <Select
          value={formData.dateRange}
          onValueChange={(value) => handleSelectChange("dateRange", value)}
        >
          <SelectTrigger id="dateRange" className="w-full">
            <SelectValue placeholder="Select time period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="current-month">Current Month</SelectItem>
            <SelectItem value="last-month">Last Month</SelectItem>
            <SelectItem value="current-quarter">Current Quarter</SelectItem>
            <SelectItem value="last-quarter">Last Quarter</SelectItem>
            <SelectItem value="ytd">Year to Date</SelectItem>
            <SelectItem value="last-year">Last Year</SelectItem>
            <SelectItem value="custom">Custom Range</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {reportType === "csrd" && (
        <Card className="border border-muted bg-muted/20">
          <CardContent className="pt-4">
            <h4 className="font-medium mb-2">CSRD Requirements</h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-start gap-2">
                <input type="checkbox" id="doubleMateriality" defaultChecked className="mt-1" />
                <Label htmlFor="doubleMateriality" className="text-sm font-normal">Include double materiality assessment</Label>
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" id="valuechainEmissions" defaultChecked className="mt-1" />
                <Label htmlFor="valuechainEmissions" className="text-sm font-normal">Value chain emissions (Scope 3)</Label>
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" id="transitionPlans" defaultChecked className="mt-1" />
                <Label htmlFor="transitionPlans" className="text-sm font-normal">Climate transition plans</Label>
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" id="biodiversity" className="mt-1" />
                <Label htmlFor="biodiversity" className="text-sm font-normal">Biodiversity impact</Label>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {reportType === "dpp" && (
        <div className="space-y-2">
          <Label htmlFor="productLine">Product Line</Label>
          <Select defaultValue="eco-friendly">
            <SelectTrigger id="productLine" className="w-full">
              <SelectValue placeholder="Select product line" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="eco-friendly">EcoFriendly Series</SelectItem>
              <SelectItem value="sustainable">Sustainable Collection</SelectItem>
              <SelectItem value="circular">Circular Products</SelectItem>
              <SelectItem value="new">New Product Line</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      {reportType === "carbon" && (
        <Card className="border border-muted bg-muted/20">
          <CardContent className="pt-4">
            <h4 className="font-medium mb-2">Emission Scopes</h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-start gap-2">
                <input 
                  type="checkbox" 
                  id="includeScope1" 
                  checked={formData.includeScope1}
                  onChange={(e) => setFormData(prev => ({ ...prev, includeScope1: e.target.checked }))}
                  className="mt-1" 
                />
                <Label htmlFor="includeScope1" className="text-sm font-normal">
                  Scope 1 (Direct emissions)
                </Label>
              </div>
              <div className="flex items-start gap-2">
                <input 
                  type="checkbox" 
                  id="includeScope2" 
                  checked={formData.includeScope2}
                  onChange={(e) => setFormData(prev => ({ ...prev, includeScope2: e.target.checked }))}
                  className="mt-1" 
                />
                <Label htmlFor="includeScope2" className="text-sm font-normal">
                  Scope 2 (Indirect emissions from electricity)
                </Label>
              </div>
              <div className="flex items-start gap-2">
                <input 
                  type="checkbox" 
                  id="includeScope3" 
                  checked={formData.includeScope3}
                  onChange={(e) => setFormData(prev => ({ ...prev, includeScope3: e.target.checked }))}
                  className="mt-1" 
                />
                <Label htmlFor="includeScope3" className="text-sm font-normal">
                  Scope 3 (Value chain emissions)
                </Label>
              </div>
              <div className="flex items-start gap-2">
                <input 
                  type="checkbox" 
                  id="includeComparison" 
                  checked={formData.includeComparison}
                  onChange={(e) => setFormData(prev => ({ ...prev, includeComparison: e.target.checked }))}
                  className="mt-1" 
                />
                <Label htmlFor="includeComparison" className="text-sm font-normal">
                  Include year-over-year comparison
                </Label>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-border">
              <h4 className="font-medium mb-2">Calculation Method</h4>
              <Select defaultValue="ghg-protocol">
                <SelectTrigger id="calculationMethod" className="w-full">
                  <SelectValue placeholder="Select calculation method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ghg-protocol">GHG Protocol</SelectItem>
                  <SelectItem value="iso-14064">ISO 14064</SelectItem>
                  <SelectItem value="pef">Product Environmental Footprint (PEF)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      )}
      
      <div className="space-y-2">
        <Label htmlFor="format">Export Format</Label>
        <Select
          value={formData.format}
          onValueChange={(value) => handleSelectChange("format", value)}
        >
          <SelectTrigger id="format" className="w-full">
            <SelectValue placeholder="Select format" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pdf">PDF Report</SelectItem>
            <SelectItem value="excel">Excel Spreadsheet</SelectItem>
            <SelectItem value="csv">CSV Data Export</SelectItem>
            <SelectItem value="interactive">Interactive Dashboard</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="pt-2 space-y-2">
        <div className="flex items-start gap-2">
          <input 
            type="checkbox" 
            id="includeCharts" 
            checked={formData.includeCharts}
            onChange={(e) => setFormData(prev => ({ ...prev, includeCharts: e.target.checked }))}
            className="mt-1" 
          />
          <Label htmlFor="includeCharts" className="text-sm font-normal">Include charts and visualizations</Label>
        </div>
        <div className="flex items-start gap-2">
          <input 
            type="checkbox" 
            id="includeTables" 
            checked={formData.includeTables}
            onChange={(e) => setFormData(prev => ({ ...prev, includeTables: e.target.checked }))}
            className="mt-1" 
          />
          <Label htmlFor="includeTables" className="text-sm font-normal">Include detailed data tables</Label>
        </div>
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        {onClose && (
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
        )}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Generating..." : "Generate Report"}
        </Button>
      </div>
    </form>
  );
};

export default ReportGenerationForm;
