
import React from "react";
import { useSignIn, useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { User, Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import AuthButtons from "./auth/AuthButtons";

const NavbarActions = () => {
  const { isSignedIn, user } = useUser();
  const { toast } = useToast();

  const handleNotificationClick = () => {
    toast({
      title: "Notifications",
      description: "Vous n'avez pas de nouvelles notifications."
    });
  };

  if (!isSignedIn) {
    return <AuthButtons />;
  }

  return (
    <div className="flex items-center gap-4">
      <Button 
        variant="ghost" 
        size="icon" 
        className="relative"
        onClick={handleNotificationClick}
      >
        <Bell className="h-5 w-5" />
        <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px]">2</Badge>
      </Button>
      
      <div className="flex items-center gap-2">
        <div className="hidden md:block text-right">
          <p className="text-sm font-medium leading-none">{user?.firstName} {user?.lastName}</p>
          <p className="text-xs text-muted-foreground">{user?.primaryEmailAddress?.emailAddress}</p>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full bg-primary/10">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default NavbarActions;
