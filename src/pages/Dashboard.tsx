
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useToast } from "@/hooks/use-toast";
import { useUser } from "@clerk/clerk-react";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const { user } = useUser();

  useEffect(() => {
    // Simuler le temps de chargement
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Notification de bienvenue
      if (user) {
        toast({
          title: `Bienvenue, ${user.firstName || 'utilisateur'}`,
          description: "Voici votre tableau de bord d'émissions carbone."
        });
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [user, toast]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {isLoading ? (
        <div className="flex h-screen items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
        </div>
      ) : (
        <DashboardLayout />
      )}
    </div>
  );
};

export default Dashboard;
