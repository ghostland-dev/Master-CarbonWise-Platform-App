
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface ReportGenerationFormProps {
  reportType: string;
  onClose?: () => void;
}

const ReportGenerationForm = ({ reportType, onClose }: ReportGenerationFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    reportName: "",
    dateRange: "last-quarter",
    format: "pdf",
    includeCharts: true,
    includeTables: true,
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
    
    // Simulate report generation
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Report scheduled for generation",
        description: `Your ${getReportTypeName(reportType)} will be ready shortly.`,
      });
      if (onClose) onClose();
    }, 1500);
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
