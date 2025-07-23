import { ExternalLink, FileText, Shield, User, DollarSign, MessageSquare } from "lucide-react";
import { useLocation } from "react-router-dom";

const RegulatoryDisclosures = () => {
  const location = useLocation();
  const isUKPage = location.pathname.includes('/uk');
  const isNetherlandsPage = location.pathname.includes('/netherlands');

  const baseDisclosures = [
    {
      title: "Terms of Business (EEA)",
      icon: FileText,
      link: "#", // Replace with actual PDF link
    },
    {
      title: "Remuneration Document",
      icon: DollarSign,
      link: "#", // Replace with actual PDF link
    },
    {
      title: "Regulatory Disclosure",
      icon: Shield,
      link: "#", // Replace with actual PDF link
    },
    {
      title: "Privacy Notice",
      icon: User,
      link: "#", // Replace with actual PDF link
    },
    {
      title: "How to make a complaint",
      icon: MessageSquare,
      link: "#", // Replace with actual PDF link
    },
  ];

  const countrySpecificDisclosures = [];
  
  if (isUKPage) {
    countrySpecificDisclosures.push({
      title: "Terms of Business (UK)",
      icon: FileText,
      link: "#", // Replace with actual PDF link
    });
  }
  
  if (isNetherlandsPage) {
    countrySpecificDisclosures.push({
      title: "Terms of Business (Netherlands)",
      icon: FileText,
      link: "#", // Replace with actual PDF link
    });
  }

  const disclosures = [...baseDisclosures, ...countrySpecificDisclosures];

  return (
    <div className="border-t bg-background/30 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          {disclosures.map((disclosure, index) => {
            const Icon = disclosure.icon;
            return (
              <a
                key={index}
                href={disclosure.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center hover:text-primary transition-colors"
              >
                <Icon className="h-3 w-3 mr-1" />
                {disclosure.title}
                <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RegulatoryDisclosures;