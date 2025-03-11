
import React from "react";
import TitleSection from "./TitleSection";
import TabsControl from "./TabsControl";
import ActionButtons from "./ActionButtons";
import KpiCards from "./KpiCards";
import EmissionsChart from "@/components/EmissionsChart";
import CarbonBreakdown from "./CarbonBreakdown";
import SuggestedActions from "./SuggestedActions";
import EmissionsTable from "@/components/EmissionsTable";

const DashboardLayout = () => {
  return (
    <main className="container px-4 md:px-6 lg:px-8 pt-24 pb-16">
      <TitleSection 
        title="Tableau de Bord" 
        description="Surveillez, analysez et réduisez vos émissions carbone" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
        <div className="md:col-span-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            <div className="flex items-center">
              <TabsControl />
            </div>
            
            <ActionButtons />
          </div>
          
          <KpiCards />
          
          <EmissionsChart />
        </div>
        
        <div className="md:col-span-4">
          <CarbonBreakdown />
          <SuggestedActions />
        </div>
      </div>
      
      <EmissionsTable />
    </main>
  );
};

export default DashboardLayout;
