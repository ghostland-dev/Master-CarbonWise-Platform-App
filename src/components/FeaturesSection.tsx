
import { BarChart3, Cloud, Database, FileText, Leaf, LineChart, Shield, Zap } from "lucide-react";
import Feature from "./Feature";

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container px-4 md:px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
            <span>Powerful capabilities</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            All the tools you need to manage your 
            <span className="text-gradient"> environmental impact</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our comprehensive platform helps you track, report, and reduce your carbon emissions with powerful, easy-to-use tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature 
            icon={<BarChart3 className="h-6 w-6" />}
            title="Emissions Tracking"
            description="Accurately measure your Scope 1, 2, and 3 GHG emissions with industry-standard methodologies and custom factors."
          />
          <Feature 
            icon={<Database className="h-6 w-6" />}
            title="Data Management"
            description="Easily collect and organize your environmental data through intuitive interfaces and automated imports."
          />
          <Feature 
            icon={<LineChart className="h-6 w-6" />}
            title="Analytics Dashboard"
            description="Visualize your progress with interactive charts and gain actionable insights to improve performance."
          />
          <Feature 
            icon={<FileText className="h-6 w-6" />}
            title="Compliance Reporting"
            description="Generate ready-to-submit reports that meet CSRD, GHG Protocol, and other regulatory requirements."
          />
          <Feature 
            icon={<Zap className="h-6 w-6" />}
            title="Reduction Strategies"
            description="Create and track emission reduction targets with AI-powered recommendations for improvement."
          />
          <Feature 
            icon={<Cloud className="h-6 w-6" />}
            title="Secure Cloud Platform"
            description="Access your data anytime, anywhere with our scalable cloud solution and enterprise-grade security."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
