import { ArrowLeft, Users, Building2, Stethoscope, Plane, Heart, Scan, Baby, Shield, Eye, Smile } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const BenefitsGlossaryPage = () => {
  const { slug } = useParams();

  const glossaryItems = [
    {
      icon: Building2,
      title: "Inpatient Coverage",
      description: "The first section in the table of benefits is your employees inpatient care. This is what your employees will be covered for if they are admitted into hospital.",
      details: [
        "Room type they are covered for",
        "Inpatient care costs like surgical fees, prescription costs and scan costs covered"
      ]
    },
    {
      icon: Stethoscope,
      title: "Day-care Treatment",
      description: "This section of the table of benefits shows the clinical care that does not require an overnight stay.",
      details: []
    },
    {
      icon: Heart,
      title: "Outpatient Surgery",
      description: "This area of the table of benefits shows the cover for surgical care that does not require an overnight stay.",
      details: []
    },
    {
      icon: Plane,
      title: "Emergency Treatment Outside Area of Cover",
      description: "This section of the table of benefits shows the amount of cover one has when they are outside their area (usually outside their country of residence).",
      details: []
    },
    {
      icon: Plane,
      title: "Medical Evacuation",
      description: "Where necessary treatment is not available locally, Allianz will evacuate the insured person to the nearest appropriate medical centre. This area of the table of benefits shows the cover for medical evacuations.",
      details: []
    },
    {
      icon: Scan,
      title: "Scan Cover",
      description: "Scan cover is important. This area of the table of benefits shows the cover for CT, MRI, PET and CT PET scans.",
      details: []
    },
    {
      icon: Baby,
      title: "Maternity",
      description: "This section looks at the coverage for Maternity medical costs, whether inpatient or outpatient.",
      details: []
    },
    {
      icon: Shield,
      title: "Additional Core Plan Services",
      description: "This section of the table looks at what is covered in the core plan as standard:",
      details: [
        "Employee Assistance Programme",
        "Travel Security Services",
        "MyHealth Digital Services",
        "Health & Wellness Support Program",
        "Second Medical Opinion Service"
      ]
    },
    {
      icon: Users,
      title: "Outpatient Plan",
      description: "This area of the benefits table outlines the level of cover for outpatients.",
      details: [
        "Medical practitioner fees",
        "Diagnostic tests",
        "Physiotherapy",
        "Health and wellbeing checks",
        "Cancer screening",
        "Dietician",
        "Infertility treatment",
        "Psychiatry and Psychotherapy"
      ]
    },
    {
      icon: Eye,
      title: "Optional Vision Insurance",
      description: "This section of the table of benefits shows the level of cover for Vision care, in case it was selected to be added to the plan.",
      details: []
    },
    {
      icon: Smile,
      title: "Optional Dental Insurance",
      description: "This section of the table of benefits shows the level of cover for Dental care, in case it was selected to be added to the plan.",
      details: []
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link to={`/country/${slug}/allianz-standard`}>
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Plan Details
            </Button>
          </Link>

          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Table of Benefits: Glossary</h1>
            <p className="text-lg text-muted-foreground">
              Understanding the table of benefits can be daunting, but don't worry, this section will guide you through all you need to know.
            </p>
          </div>

          <Card className="bg-muted/50 mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Benefits Breakdown</CardTitle>
              <CardDescription>
                Detailed explanation of all benefits included in your Allianz plan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="multiple" className="w-full">
                {glossaryItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-4 h-4 text-primary" />
                          </div>
                          <span className="font-semibold">{item.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pt-4 pl-11">
                          <p className="text-muted-foreground mb-4">
                            {item.description}
                          </p>
                          {item.details.length > 0 && (
                            <div className="bg-background p-4 rounded-lg border">
                              <h4 className="font-medium mb-3">What's included:</h4>
                              <ul className="list-disc list-inside space-y-1 text-sm">
                                {item.details.map((detail, detailIndex) => (
                                  <li key={detailIndex} className="text-muted-foreground">
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BenefitsGlossaryPage;