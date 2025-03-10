
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar, Filter } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Database, FileCheck } from "lucide-react";

interface ReportActionsProps {
  openReportDialog: (type: string) => void;
}

const ReportActions = ({ openReportDialog }: ReportActionsProps) => {
  return (
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
  );
};

export default ReportActions;
