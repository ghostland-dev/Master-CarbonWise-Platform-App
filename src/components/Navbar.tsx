
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center gap-2 text-xl font-medium text-foreground"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-400 to-green-400 flex items-center justify-center text-white font-bold">
                C
              </div>
              <span>CarbonWise</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/" ? "text-primary" : "text-foreground/80"
              }`}
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/dashboard" ? "text-primary" : "text-foreground/80"
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/data-input"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/data-input" ? "text-primary" : "text-foreground/80"
              }`}
            >
              Data Input
            </Link>
            <Link
              to="/reports"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/reports" ? "text-primary" : "text-foreground/80"
              }`}
            >
              Reports
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button className="hidden md:inline-flex">Sign In</Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card m-4 animate-fade-in">
          <nav className="flex flex-col p-4 gap-2">
            <Link
              to="/"
              className={`py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                location.pathname === "/" 
                  ? "bg-primary/10 text-primary" 
                  : "hover:bg-muted"
              }`}
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className={`py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                location.pathname === "/dashboard" 
                  ? "bg-primary/10 text-primary" 
                  : "hover:bg-muted"
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/data-input"
              className={`py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                location.pathname === "/data-input" 
                  ? "bg-primary/10 text-primary" 
                  : "hover:bg-muted"
              }`}
            >
              Data Input
            </Link>
            <Link
              to="/reports"
              className={`py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                location.pathname === "/reports" 
                  ? "bg-primary/10 text-primary" 
                  : "hover:bg-muted"
              }`}
            >
              Reports
            </Link>
            <Button className="mt-2 w-full">Sign In</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
