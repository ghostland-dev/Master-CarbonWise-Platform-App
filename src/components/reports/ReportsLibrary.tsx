
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  FileText, Download, Search, FileCheck, FileSpreadsheet, 
  BarChart, Printer, ChevronDown, RefreshCw, Share2 
} from "lucide-react";

interface Report {
  id: number;
  name: string;
  type: string;
  lastGenerated: string;
  status: string;
}

interface ReportsLibraryProps {
  handleDownload: (reportName: string) => void;
  handleShare: (reportName: string) => void;
}

const ReportsLibrary = ({ handleDownload, handleShare }: ReportsLibraryProps) => {
  const [selectedReportType, setSelectedReportType] = useState("all");
  
  const availableReports = [
    { 
      id: 1, 
      name: "CSRD Annual Compliance Report", 
      type: "compliance", 
      lastGenerated: "2023-11-15", 
      status: "Complete" 
    },
    { 
      id: 2, 
      name: "Carbon Footprint Q2 2023", 
      type: "carbon", 
      lastGenerated: "2023-07-30", 
      status: "Complete" 
    },
    { 
      id: 3, 
      name: "Supply Chain Emissions Analysis", 
      type: "custom", 
      lastGenerated: "2023-10-05", 
      status: "Complete" 
    },
    { 
      id: 4, 
      name: "Digital Product Passport - EcoFriendly Series", 
      type: "dpp", 
      lastGenerated: "2023-09-22", 
      status: "Complete" 
    },
    { 
      id: 5, 
      name: "ESG Report for Investors", 
      type: "compliance", 
      lastGenerated: "2023-12-01", 
      status: "In Progress" 
    },
    { 
      id: 6, 
      name: "Renewable Energy Transition Plan", 
      type: "custom", 
      lastGenerated: "2023-08-17", 
      status: "Complete" 
    },
    { 
      id: 7, 
      name: "Digital Product Passport - Sustainable Collection", 
      type: "dpp", 
      lastGenerated: "", 
      status: "Not Started" 
    },
  ];

  const filteredReports = selectedReportType === "all" 
    ? availableReports 
    : availableReports.filter(report => report.type === selectedReportType);

  return (
    <div className="glass-card p-6 animate-slide-up animation-delay-100">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <h2 className="text-xl font-semibold">Reports Library</h2>
        
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search reports..." className="pl-9 w-full md:w-[240px]" />
          </div>
          <Button variant="outline" size="icon">
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <Button 
          variant={selectedReportType === "all" ? "default" : "outline"} 
          size="sm" 
          onClick={() => setSelectedReportType("all")}
        >All</Button>
        <Button 
          variant={selectedReportType === "compliance" ? "default" : "outline"} 
          size="sm"
          onClick={() => setSelectedReportType("compliance")}
        >Compliance</Button>
        <Button 
          variant={selectedReportType === "carbon" ? "default" : "outline"} 
          size="sm"
          onClick={() => setSelectedReportType("carbon")}
        >Carbon</Button>
        <Button 
          variant={selectedReportType === "custom" ? "default" : "outline"} 
          size="sm"
          onClick={() => setSelectedReportType("custom")}
        >Custom</Button>
        <Button 
          variant={selectedReportType === "dpp" ? "default" : "outline"} 
          size="sm"
          onClick={() => setSelectedReportType("dpp")}
        >Product Passports</Button>
      </div>

      <div className="overflow-auto rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Report Name</TableHead>
              <TableHead>Last Generated</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredReports.map((report) => (
              <TableRow key={report.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    {report.type === "compliance" && <FileText className="h-4 w-4 text-primary" />}
                    {report.type === "carbon" && <BarChart className="h-4 w-4 text-blue-500" />}
                    {report.type === "custom" && <FileSpreadsheet className="h-4 w-4 text-orange-500" />}
                    {report.type === "dpp" && <FileCheck className="h-4 w-4 text-green-500" />}
                    {report.name}
                  </div>
                </TableCell>
                <TableCell>{report.lastGenerated || "—"}</TableCell>
                <TableCell>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    report.status === "Complete" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" :
                    report.status === "In Progress" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400" :
                    "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400"
                  }`}>
                    {report.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    {report.status === "Complete" && (
                      <>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => handleDownload(report.name)}
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => handleShare(report.name)}
                        >
                          <Share2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Printer className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ReportsLibrary;
