
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import DataCard from "@/components/DataCard";
import EmissionsChart from "@/components/EmissionsChart";
import EmissionsTable from "@/components/EmissionsTable";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Leaf,
  TrendingDown,
  Globe,
  CloudRain,
  Factory,
  Download,
  AlertTriangle,
  BarChart,
  FileText,
} from "lucide-react";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container px-4 md:px-6 lg:px-8 pt-24 pb-16">
        <div className="mb-8 pt-4">
          <h1 className="text-3xl font-bold tracking-tight animate-slide-down">Dashboard</h1>
          <p className="text-muted-foreground mt-1 animate-slide-down animation-delay-100">
            Monitor, analyze, and reduce your carbon emissions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
          <div className="md:col-span-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
              <div className="flex items-center">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="bg-muted/50">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="reports">Reports</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              
              <div className="flex items-center gap-2 w-full md:w-auto">
                <Button variant="outline" size="sm" className="gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Last 30 Days</span>
                </Button>
                <Button variant="outline" size="sm" className="gap-1">
                  <Download className="h-4 w-4" />
                  <span className="hidden md:inline">Export</span>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <DataCard
                title="Total Carbon Footprint"
                value="456.2 tCO₂e"
                description="Year-to-date emissions"
                icon={<Leaf className="h-5 w-5" />}
                trend={{ value: 8.4, isPositive: false }}
                className="animate-slide-up"
              />
              <DataCard
                title="Reduction Target"
                value="25%"
                description="by 2025 from 2019 baseline"
                icon={<TrendingDown className="h-5 w-5" />}
                className="animate-slide-up animation-delay-100"
              />
              <DataCard
                title="Carbon Intensity"
                value="18.7"
                description="tCO₂e per $1M revenue"
                icon={<BarChart className="h-5 w-5" />}
                trend={{ value: 5.2, isPositive: false }}
                className="animate-slide-up animation-delay-200"
              />
            </div>
            
            <EmissionsChart />
          </div>
          
          <div className="md:col-span-4">
            <div className="glass-card p-6 mb-6 animate-slide-in-right">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-medium">Carbon Breakdown</h3>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <FileText className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-teal-400"></span>
                      <span>Scope 1 (Direct)</span>
                    </div>
                    <span className="font-medium">98.5 tCO₂e</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-teal-400 rounded-full" style={{ width: "25%" }}></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-blue-400"></span>
                      <span>Scope 2 (Indirect)</span>
                    </div>
                    <span className="font-medium">142.8 tCO₂e</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-blue-400 rounded-full" style={{ width: "35%" }}></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-orange-400"></span>
                      <span>Scope 3 (Value Chain)</span>
                    </div>
                    <span className="font-medium">214.9 tCO₂e</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-orange-400 rounded-full" style={{ width: "40%" }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="text-sm font-medium mb-4">Top Emission Sources</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Factory className="h-4 w-4 text-muted-foreground" />
                      <span>Manufacturing</span>
                    </div>
                    <span>32%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <CloudRain className="h-4 w-4 text-muted-foreground" />
                      <span>Energy Usage</span>
                    </div>
                    <span>28%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <span>Transportation</span>
                    </div>
                    <span>18%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 animate-slide-in-right animation-delay-200">
              <div className="flex items-center gap-3 text-amber-500 bg-amber-100/50 dark:bg-amber-900/20 p-3 rounded-lg mb-4">
                <AlertTriangle className="h-5 w-5 flex-shrink-0" />
                <p className="text-sm">Your Q2 emissions report is due in 15 days.</p>
              </div>
              
              <h3 className="font-medium mb-4">Suggested Actions</h3>
              <div className="space-y-3">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <h4 className="text-sm font-medium">Switch to renewable energy</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Could reduce Scope 2 emissions by up to 45%
                  </p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <h4 className="text-sm font-medium">Optimize logistics routes</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Potential 12% reduction in transportation emissions
                  </p>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <h4 className="text-sm font-medium">Update supplier requirements</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Address 30% of your Scope 3 emissions
                  </p>
                </div>
              </div>
              
              <Button className="w-full mt-4">View All Recommendations</Button>
            </div>
          </div>
        </div>
        
        <EmissionsTable />
      </main>
    </div>
  );
};

export default Dashboard;
