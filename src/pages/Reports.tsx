
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { 
  FileText, Download, Calendar, Filter, Search, 
  FileCheck, FileSpreadsheet, BarChart, Printer, 
  ChevronDown, RefreshCw, Database, Share2
} from "lucide-react";
import ReportDialog from "@/components/ReportDialog";
import { useToast } from "@/hooks/use-toast";

const Reports = () => {
  const [selectedReportType, setSelectedReportType] = useState("compliance");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentReportType, setCurrentReportType] = useState("");
  const { toast } = useToast();
  
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
            {/* Report Actions */}
            <div className="glass-card p-6 animate-slide-up">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
                <Tabs defaultValue="generate" className="w-full md:w-auto">
                  <TabsList className="bg-muted/50 w-full md:w-auto">
                    <TabsTrigger value="generate">Generate Report</TabsTrigger>
                    <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
                    <TabsTrigger value="templates">Templates</TabsTrigger>
                  </TabsList>
                </Tabs>
                
                <div className="flex items-center gap-2 w-full md:w-auto">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Date Range</span>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Filter className="h-4 w-4" />
                    <span className="hidden md:inline">Filters</span>
                  </Button>
                </div>
              </div>

              {/* Report Generation Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="bg-transparent border-2 border-primary/20 hover:border-primary/40 transition-all cursor-pointer">
                  <CardHeader className="pb-2">
                    <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center mb-2">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">CSRD Report</CardTitle>
                    <CardDescription>Corporate Sustainability Reporting Directive compliance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      className="w-full" 
                      size="sm"
                      onClick={() => openReportDialog("csrd")}
                    >
                      Generate
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-transparent border hover:border-primary/30 transition-all cursor-pointer">
                  <CardHeader className="pb-2">
                    <div className="h-10 w-10 rounded-md bg-blue-100/20 flex items-center justify-center mb-2">
                      <Database className="h-5 w-5 text-blue-500" />
                    </div>
                    <CardTitle className="text-lg">Custom Report</CardTitle>
                    <CardDescription>Build a customized report with selected metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="outline" 
                      className="w-full" 
                      size="sm"
                      onClick={() => openReportDialog("custom")}
                    >
                      Create
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-transparent border hover:border-primary/30 transition-all cursor-pointer">
                  <CardHeader className="pb-2">
                    <div className="h-10 w-10 rounded-md bg-green-100/20 flex items-center justify-center mb-2">
                      <FileCheck className="h-5 w-5 text-green-500" />
                    </div>
                    <CardTitle className="text-lg">Digital Product Passport</CardTitle>
                    <CardDescription>Create DPPs for your product lines</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="outline" 
                      className="w-full" 
                      size="sm"
                      onClick={() => openReportDialog("dpp")}
                    >
                      Generate
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Reports Library */}
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
          </div>

          <div className="lg:col-span-4 space-y-6">
            {/* CSRD Compliance Checklist */}
            <div className="glass-card p-6 animate-slide-in-right">
              <h3 className="font-medium mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                CSRD Compliance Checklist
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded border-2 border-green-500 flex items-center justify-center bg-green-100/50">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-sm">Scope 1 & 2 emissions data</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded border-2 border-green-500 flex items-center justify-center bg-green-100/50">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-sm">Environmental risk assessment</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded border-2 border-amber-500 flex items-center justify-center bg-amber-100/50">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 9V12M12 15H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0378 2.66667 10.268 4L3.33978 16C2.56998 17.3333 3.53223 19 5.07183 19Z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-sm">Scope 3 emissions data (partial)</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded border-2 border-amber-500 flex items-center justify-center bg-amber-100/50">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 9V12M12 15H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0378 2.66667 10.268 4L3.33978 16C2.56998 17.3333 3.53223 19 5.07183 19Z" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-sm">Climate transition plans</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded border-2 border-gray-300 flex items-center justify-center">
                  </div>
                  <p className="text-sm">Biodiversity impact assessment</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded border-2 border-gray-300 flex items-center justify-center">
                  </div>
                  <p className="text-sm">Water and marine resources data</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <Button 
                  className="w-full"
                  onClick={() => openReportDialog("csrd")}
                >
                  Complete CSRD Requirements
                </Button>
              </div>
            </div>

            {/* Digital Product Passport */}
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

            {/* Export Options */}
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
