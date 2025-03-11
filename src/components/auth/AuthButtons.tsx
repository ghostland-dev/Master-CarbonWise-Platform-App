
import React from "react";
import { Button } from "@/components/ui/button";
import { useAuth, useSignIn, useSignUp, useUser } from "@clerk/clerk-react";
import { useToast } from "@/hooks/use-toast";

const AuthButtons = () => {
  const { isSignedIn } = useUser();
  const { signOut } = useAuth();
  const { openSignIn } = useSignIn();
  const { openSignUp } = useSignUp();
  const { toast } = useToast();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Déconnexion réussie",
        description: "Vous avez été déconnecté avec succès.",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la déconnexion.",
        variant: "destructive",
      });
    }
  };

  if (isSignedIn) {
    return (
      <Button 
        variant="outline" 
        onClick={handleSignOut}
        className="text-sm"
      >
        Se déconnecter
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Button 
        variant="outline" 
        onClick={() => openSignIn()}
        className="text-sm"
      >
        Se connecter
      </Button>
      <Button 
        onClick={() => openSignUp()}
        className="text-sm"
      >
        S'inscrire
      </Button>
    </div>
  );
};

export default AuthButtons;
