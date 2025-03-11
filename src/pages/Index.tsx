
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  BarChart3,
  Globe,
  ClipboardCheck,
  FileText,
  Building2,
  DollarSign,
  Leaf,
  ArrowRight,
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-soft-pattern opacity-30 dark:opacity-10 z-0"></div>
        
        <div className="container relative px-4 md:px-6 lg:px-8 z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary animate-fade-in">
              <span>Fonctionnalités Clés</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 animate-slide-up">
              Tout ce dont vous avez besoin pour gérer vos
              <span className="text-gradient"> émissions carbone</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up animation-delay-100">
              Notre plateforme complète fournit tous les outils nécessaires pour suivre, analyser
              et réduire efficacement votre impact environnemental.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="animate-slide-up animation-delay-100">
              <Feature
                icon={<LineChart size={24} />}
                title="Suivi des Émissions"
                description="Calculez et suivez avec précision vos émissions carbone sur les Scopes 1, 2 et 3 avec une surveillance et une analyse en temps réel."
              />
            </div>
            <div className="animate-slide-up animation-delay-200">
              <Feature
                icon={<BarChart3 size={24} />}
                title="Visualisation des Données"
                description="Transformez des données complexes en visuels faciles à comprendre avec des tableaux de bord interactifs et des rapports détaillés."
              />
            </div>
            <div className="animate-slide-up animation-delay-300">
              <Feature
                icon={<Globe size={24} />}
                title="Planification de Réduction"
                description="Créez des stratégies efficaces de réduction de carbone avec des objectifs fondés sur la science et des recommandations pratiques."
              />
            </div>
            <div className="animate-slide-up animation-delay-400">
              <Feature
                icon={<ClipboardCheck size={24} />}
                title="Rapports de Conformité"
                description="Générez des rapports conformes pour CSRD, le Protocole GES et d'autres cadres réglementaires."
              />
            </div>
            <div className="animate-slide-up animation-delay-500">
              <Feature
                icon={<FileText size={24} />}
                title="Intégration ESG"
                description="Intégrez parfaitement les données environnementales dans vos rapports ESG pour une gestion complète de la durabilité."
              />
            </div>
            <div className="animate-slide-up animation-delay-600">
              <Feature
                icon={<Building2 size={24} />}
                title="Analyse de la Chaîne d'Approvisionnement"
                description="Étendez vos efforts de durabilité à l'ensemble de votre chaîne d'approvisionnement avec un suivi détaillé des émissions de scope 3."
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-100/80 to-blue-100/80 dark:from-teal-900/20 dark:to-blue-900/20 z-0"></div>
        
        <div className="container relative px-4 md:px-6 lg:px-8 z-10">
          <div className="glass-card max-w-5xl mx-auto overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
                  <span>Commencez Aujourd'hui</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                  Prêt à réduire votre impact environnemental ?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Rejoignez des milliers d'entreprises qui utilisent CarbonWise pour suivre, gérer et réduire
                  leur empreinte carbone. Commencez en quelques minutes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    onClick={() => navigate("/dashboard")}
                  >
                    Essai Gratuit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Réserver une Démo
                  </Button>
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center p-12 bg-gradient-to-br from-teal-100 to-blue-100 dark:from-teal-900/40 dark:to-blue-900/40">
                <div className="relative w-full h-full max-w-md">
                  <div className="absolute top-4 -left-4 w-24 h-24 bg-teal-300 dark:bg-teal-700 rounded-xl opacity-40 blur-xl"></div>
                  <div className="absolute bottom-8 -right-8 w-32 h-32 bg-blue-300 dark:bg-blue-700 rounded-xl opacity-40 blur-xl"></div>
                  
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-6 w-20 h-20 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg">
                        <Leaf className="h-10 w-10 text-teal-500" />
                      </div>
                      <div className="space-y-1 mb-6">
                        <div className="bg-white dark:bg-gray-800 h-4 w-20 rounded-full shadow-sm"></div>
                        <div className="bg-white dark:bg-gray-800 h-4 w-32 rounded-full shadow-sm"></div>
                        <div className="bg-white dark:bg-gray-800 h-4 w-24 rounded-full shadow-sm"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 w-full">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex flex-col items-center">
                          <DollarSign className="h-6 w-6 text-blue-500 mb-2" />
                          <div className="h-2 w-16 bg-blue-100 dark:bg-blue-900/50 rounded-full"></div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex flex-col items-center">
                          <Leaf className="h-6 w-6 text-green-500 mb-2" />
                          <div className="h-2 w-16 bg-green-100 dark:bg-green-900/50 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-white dark:bg-gray-950 border-t border-border py-12">
        <div className="container px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 text-xl font-medium text-foreground mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-400 to-green-400 flex items-center justify-center text-white font-bold">
                  C
                </div>
                <span>CarbonWise</span>
              </div>
              <p className="text-muted-foreground max-w-xs mb-6">
                Aider les entreprises à mesurer, gérer et réduire leur impact environnemental grâce à
                des insights basés sur les données et des solutions concrètes.
              </p>
              <div className="flex items-center gap-4 text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-4">Produit</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Fonctionnalités</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Tarifs</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Intégrations</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Études de Cas</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-foreground mb-4">Entreprise</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">À Propos</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Carrières</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-10 pt-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2023 CarbonWise. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Conditions</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Confidentialité</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
