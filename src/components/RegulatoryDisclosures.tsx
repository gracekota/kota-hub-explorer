import { ExternalLink, FileText, Shield, User, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const RegulatoryDisclosures = () => {
  const disclosures = [
    {
      title: "Terms of Business (EEA)",
      icon: FileText,
      description: "European Economic Area terms and conditions",
      link: "#", // Replace with actual PDF link
    },
    {
      title: "Remuneration Document",
      icon: DollarSign,
      description: "Details of our remuneration structure",
      link: "#", // Replace with actual PDF link
    },
    {
      title: "Regulatory Disclosure",
      icon: Shield,
      description: "Required regulatory information",
      link: "#", // Replace with actual PDF link
    },
    {
      title: "Privacy Notice",
      icon: User,
      description: "How we handle your personal data",
      link: "#", // Replace with actual PDF link
    },
  ];

  return (
    <div className="border-t bg-muted/30 py-8">
      <div className="container mx-auto px-4">
        <h3 className="text-lg font-semibold mb-6 text-center">Regulatory Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {disclosures.map((disclosure, index) => {
            const Icon = disclosure.icon;
            return (
              <Card key={index} className="hover:shadow-md transition-shadow border-border/50 bg-background/50">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-md shrink-0">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm leading-tight mb-1">{disclosure.title}</h4>
                      <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{disclosure.description}</p>
                      <a
                        href={disclosure.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs text-primary hover:text-primary/80 transition-colors"
                      >
                        View Document
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RegulatoryDisclosures;