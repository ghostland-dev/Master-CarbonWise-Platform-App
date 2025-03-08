
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import { FileUp, Plus, Save, Table as TableIcon, UploadCloud } from "lucide-react";

const DataInput = () => {
  const { toast } = useToast();
  const [inputType, setInputType] = useState<"manual" | "upload">("manual");
  const [formData, setFormData] = useState({
    source: "",
    category: "",
    subcategory: "",
    activityData: "",
    unit: "",
    date: "",
    notes: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate success
    toast({
      title: "Data saved successfully",
      description: "Your emission data has been recorded.",
      duration: 3000,
    });
    
    // Reset form
    setFormData({
      source: "",
      category: "",
      subcategory: "",
      activityData: "",
      unit: "",
      date: "",
      notes: "",
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileName = e.target.files[0].name;
      
      toast({
        title: "File uploaded",
        description: `${fileName} has been uploaded and is being processed.`,
        duration: 3000,
      });
      
      // Reset file input
      e.target.value = "";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container px-4 md:px-6 lg:px-8 pt-24 pb-16">
        <div className="mb-8 pt-4">
          <h1 className="text-3xl font-bold tracking-tight animate-slide-down">Data Input</h1>
          <p className="text-muted-foreground mt-1 animate-slide-down animation-delay-100">
            Add and manage your emission data
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="shadow-soft animate-scale-in">
              <CardHeader>
                <CardTitle>Add Emission Data</CardTitle>
                <CardDescription>
                  Record new emission sources and activities
                </CardDescription>
                <Tabs value={inputType} onValueChange={(value) => setInputType(value as "manual" | "upload")} className="mt-3">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="manual">Manual Entry</TabsTrigger>
                    <TabsTrigger value="upload">File Upload</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>
              
              <CardContent>
                {inputType === "manual" ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="source">Emission Source</Label>
                        <Input
                          id="source"
                          name="source"
                          placeholder="e.g., Company Vehicles"
                          value={formData.source}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="category">Scope Category</Label>
                        <Select value={formData.category} onValueChange={handleCategoryChange} required>
                          <SelectTrigger id="category">
                            <SelectValue placeholder="Select scope" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="scope1">Scope 1 (Direct Emissions)</SelectItem>
                            <SelectItem value="scope2">Scope 2 (Indirect Emissions)</SelectItem>
                            <SelectItem value="scope3">Scope 3 (Value Chain)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="subcategory">Subcategory</Label>
                        <Input
                          id="subcategory"
                          name="subcategory"
                          placeholder="e.g., Natural Gas, Electricity"
                          value={formData.subcategory}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="activityData">Activity Data</Label>
                          <Input
                            id="activityData"
                            name="activityData"
                            type="number"
                            placeholder="e.g., 500"
                            value={formData.activityData}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="unit">Unit</Label>
                          <Select required>
                            <SelectTrigger id="unit">
                              <SelectValue placeholder="Select unit" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="kwh">kWh</SelectItem>
                              <SelectItem value="liters">Liters</SelectItem>
                              <SelectItem value="kg">Kilograms</SelectItem>
                              <SelectItem value="miles">Miles</SelectItem>
                              <SelectItem value="tonnes">Tonnes</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Date</Label>
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="notes">Notes (optional)</Label>
                        <Input
                          id="notes"
                          name="notes"
                          placeholder="Additional information"
                          value={formData.notes}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-end pt-4">
                      <Button className="gap-2" type="submit">
                        <Save className="h-4 w-4" />
                        Save Entry
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-6">
                    <div className="border-2 border-dashed border-muted rounded-lg p-10 text-center">
                      <UploadCloud className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium mb-2">Upload your data file</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Drag and drop your CSV, Excel, or compatible file here, or click to browse
                      </p>
                      <div className="flex justify-center">
                        <Label
                          htmlFor="file-upload"
                          className="btn-primary cursor-pointer flex items-center gap-2 py-2"
                        >
                          <FileUp className="h-4 w-4" />
                          Browse Files
                        </Label>
                        <Input
                          id="file-upload"
                          type="file"
                          className="hidden"
                          accept=".csv,.xlsx,.xls"
                          onChange={handleFileUpload}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium mb-2">Supported file formats</h3>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="flex items-center justify-center bg-muted/30 rounded-md p-2">
                          <span className="text-xs font-medium">.CSV</span>
                        </div>
                        <div className="flex items-center justify-center bg-muted/30 rounded-md p-2">
                          <span className="text-xs font-medium">.XLSX</span>
                        </div>
                        <div className="flex items-center justify-center bg-muted/30 rounded-md p-2">
                          <span className="text-xs font-medium">.XLS</span>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium">Templates</h3>
                      <p className="text-xs text-muted-foreground">
                        Download our pre-formatted templates for quick data entry
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                        <Button variant="outline" size="sm" className="justify-start gap-2">
                          <TableIcon className="h-4 w-4" />
                          Emission Data Template
                        </Button>
                        <Button variant="outline" size="sm" className="justify-start gap-2">
                          <TableIcon className="h-4 w-4" />
                          Activity Data Template
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-1">
            <Card className="shadow-soft animate-scale-in animation-delay-200">
              <CardHeader>
                <CardTitle>Recent Entries</CardTitle>
                <CardDescription>
                  Your recently added emission data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Source</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Electricity</TableCell>
                        <TableCell>1,250 kWh</TableCell>
                        <TableCell>2023-06-15</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Company Vehicles</TableCell>
                        <TableCell>320 liters</TableCell>
                        <TableCell>2023-06-12</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Business Travel</TableCell>
                        <TableCell>4,500 miles</TableCell>
                        <TableCell>2023-06-08</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Natural Gas</TableCell>
                        <TableCell>800 m³</TableCell>
                        <TableCell>2023-06-05</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                
                <div className="mt-6">
                  <Button variant="outline" className="w-full gap-2">
                    <Plus className="h-4 w-4" />
                    View All Entries
                  </Button>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <h3 className="text-sm font-medium mb-4">Data Quality</h3>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Scope 1</span>
                        <span className="font-medium text-green-600">High</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: "92%" }}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Scope 2</span>
                        <span className="font-medium text-green-600">High</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Scope 3</span>
                        <span className="font-medium text-yellow-600">Medium</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-500 rounded-full" style={{ width: "58%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DataInput;
