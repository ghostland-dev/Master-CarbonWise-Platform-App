
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler le temps de chargement
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <DashboardLayout />
    </div>
  );
};

export default Dashboard;
