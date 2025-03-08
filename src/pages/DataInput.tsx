import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Upload, 
  Database, 
  FileInput, 
  ListCheck,
  Plus,
  ArrowRight,
  Download,
  Cloud,
  Building
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";

const DataInput = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("manual");
  
  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Data submitted successfully",
      description: "Your emissions data has been recorded.",
    });
  };
  
  const handleFileUpload = () => {
    toast({
      title: "File uploaded",
      description: "Your data file is being processed.",
    });
  };
  
  const handleConnectAPI = () => {
    toast({
      title: "API connected",
      description: "Successfully connected to external data source.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container pt-24 pb-16 max-w-6xl mx-auto">
        <div className="flex flex-col space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Data Input</h1>
            <p className="text-muted-foreground">
              Add your emissions data through manual entry, file upload, or connect to external systems.
            </p>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 w-full md:w-[400px]">
              <TabsTrigger value="manual">Manual Entry</TabsTrigger>
              <TabsTrigger value="upload">File Upload</TabsTrigger>
              <TabsTrigger value="api">External Data</TabsTrigger>
            </TabsList>
            
            <TabsContent value="manual" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Manual Data Entry</CardTitle>
                  <CardDescription>
                    Enter your emissions data directly using the form below.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleManualSubmit} className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="activityName">Activity Name</Label>
                        <Input id="activityName" placeholder="e.g., Business Travel" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="date">Date</Label>
                        <Input id="date" type="date" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ghgScope">GHG Protocol Scope</Label>
                        <Select defaultValue="scope1">
                          <SelectTrigger>
                            <SelectValue placeholder="Select scope" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="scope1">Scope 1 (Direct Emissions)</SelectItem>
                            <SelectItem value="scope2">Scope 2 (Indirect Emissions - Energy)</SelectItem>
                            <SelectItem value="scope3">Scope 3 (Indirect Emissions - Value Chain)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="stationary">Stationary Combustion</SelectItem>
                            <SelectItem value="mobile">Mobile Combustion</SelectItem>
                            <SelectItem value="fugitive">Fugitive Emissions</SelectItem>
                            <SelectItem value="process">Process Emissions</SelectItem>
                            <SelectItem value="purchased_electricity">Purchased Electricity</SelectItem>
                            <SelectItem value="purchased_heat">Purchased Heat</SelectItem>
                            <SelectItem value="business_travel">Business Travel</SelectItem>
                            <SelectItem value="employee_commuting">Employee Commuting</SelectItem>
                            <SelectItem value="waste">Waste Generated</SelectItem>
                            <SelectItem value="transportation">Transportation & Distribution</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="quantity">Quantity</Label>
                        <Input id="quantity" type="number" step="0.01" min="0" placeholder="0.00" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="unit">Unit</Label>
                        <Select defaultValue="kg">
                          <SelectTrigger>
                            <SelectValue placeholder="Select unit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kg">kg CO₂e</SelectItem>
                            <SelectItem value="ton">tonnes CO₂e</SelectItem>
                            <SelectItem value="kwh">kWh</SelectItem>
                            <SelectItem value="liter">Liters</SelectItem>
                            <SelectItem value="km">Kilometers</SelectItem>
                            <SelectItem value="mile">Miles</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="notes">Notes (Optional)</Label>
                      <textarea 
                        id="notes" 
                        placeholder="Additional context or information..."
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none mt-1.5"
                      />
                    </div>
                    
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" type="reset">Clear</Button>
                      <Button type="submit">Submit Entry</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Batch Entries</CardTitle>
                  <CardDescription>Add multiple records at once</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium">Quick Add Multiple Entries</h4>
                      <p className="text-sm text-muted-foreground">
                        Use our template to add multiple emission sources at once
                      </p>
                    </div>
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      Add Multiple
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="upload" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>File Upload</CardTitle>
                  <CardDescription>
                    Upload your emissions data from spreadsheets or CSV files.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg p-10 text-center">
                    <Upload className="h-10 w-10 text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Drag and drop your file here</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Supports Excel, CSV, and XML formats up to 10MB
                    </p>
                    <div className="flex flex-col md:flex-row gap-4">
                      <Button onClick={handleFileUpload}>
                        <FileInput className="mr-2 h-4 w-4" />
                        Browse Files
                      </Button>
                      <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Download Template
                      </Button>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="text-sm font-medium mb-4">Upload History</h4>
                    <div className="text-sm text-muted-foreground text-center py-6">
                      No recent uploads found
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="api" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Connect External Data Sources</CardTitle>
                  <CardDescription>
                    Import data directly from your existing systems and services.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Database className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-medium">ERP Systems</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Connect with SAP, Oracle, Microsoft Dynamics, and other ERP systems.
                          </p>
                          <Button variant="outline" size="sm" className="mt-3" onClick={handleConnectAPI}>
                            Connect
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <ListCheck className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-medium">Sustainability Platforms</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Import from specialized sustainability management platforms.
                          </p>
                          <Button variant="outline" size="sm" className="mt-3" onClick={handleConnectAPI}>
                            Connect
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Cloud className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-medium">Cloud Services</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Calculate emissions from AWS, Azure, Google Cloud, and other providers.
                          </p>
                          <Button variant="outline" size="sm" className="mt-3" onClick={handleConnectAPI}>
                            Connect
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Building className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-medium">Facility Management</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Connect with building management systems for energy usage data.
                          </p>
                          <Button variant="outline" size="sm" className="mt-3" onClick={handleConnectAPI}>
                            Connect
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-6">
                    <Button variant="outline">
                      <Plus className="mr-2 h-4 w-4" />
                      Custom API Integration
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DataInput;
