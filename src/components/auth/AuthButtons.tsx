
import React from "react";
import { Button } from "@/components/ui/button";
import { useAuth, useSignIn, useSignUp, useUser } from "@clerk/clerk-react";
import { useToast } from "@/hooks/use-toast";

const AuthButtons = () => {
  const { isSignedIn } = useUser();
  const { signOut } = useAuth();
  const { isLoaded: isSignInLoaded, signIn } = useSignIn();
  const { isLoaded: isSignUpLoaded, signUp } = useSignUp();
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

  const handleSignIn = () => {
    if (!isSignInLoaded) return;
    signIn.create({
      identifier: "email",
      redirectUrl: "/dashboard"
    });
  };

  const handleSignUp = () => {
    if (!isSignUpLoaded) return;
    signUp.create({
      redirectUrl: "/dashboard"
    });
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
        onClick={handleSignIn}
        className="text-sm"
      >
        Se connecter
      </Button>
      <Button 
        onClick={handleSignUp}
        className="text-sm"
      >
        S'inscrire
      </Button>
    </div>
  );
};

export default AuthButtons;
