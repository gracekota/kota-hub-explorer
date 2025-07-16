import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { countries } from "@/data/countries";
import kotaLogo from "/lovable-uploads/622d98ad-c491-4b82-84cf-25e56f7668e5.png";

const CountryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const country = countries.find(c => c.slug === slug);

  if (!country) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <h1 className="text-2xl font-bold text-foreground mb-4">Country not found</h1>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Hub
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-4">
            <Link to="/" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to The Kota Hub
            </Link>
            <img 
              src={kotaLogo} 
              alt="Kota Logo" 
              className="h-8 w-auto"
            />
          </div>
          <div className="flex items-center space-x-4 animate-fade-in">
            <span className="text-4xl">{country.flag}</span>
            <div>
              <h1 className="text-3xl font-bold">{country.name}</h1>
              <p className="text-primary-foreground/80 text-lg">Insurance plans and information</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="plans" className="animate-fade-in">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="plans">Plan Details</TabsTrigger>
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
            <TabsTrigger value="onboarding">Onboarding Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="plans" className="space-y-8">
            {/* UK-specific content with providers side by side */}
            {country.slug === 'uk' ? (
              <div className="grid gap-8 lg:grid-cols-2">
                {/* Allianz Section */}
                <div className="space-y-6">
                  <div className="text-center space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">Allianz International Care</h2>
                    <p className="text-muted-foreground">
                      Comprehensive international health insurance with global coverage and peace of mind.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    {country.plans.filter(plan => plan.id.includes('allianz')).map((plan) => (
                      <Card key={plan.id} className="group hover:shadow-card-hover transition-all duration-300">
                        <CardHeader className="pb-3">
                          <div className="flex items-center space-x-3">
                            <span className="text-xl">{plan.logo}</span>
                            <div>
                              <CardTitle className="text-lg group-hover:text-primary transition-colors">{plan.name}</CardTitle>
                              <CardDescription className="text-sm">{plan.description}</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <Button 
                            className="w-full"
                            onClick={() => window.open(plan.quoteUrl, '_blank')}
                          >
                            Get a Quote
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Card className="bg-muted/50">
                    <CardHeader>
                      <CardTitle className="text-lg">Plan Details</CardTitle>
                      <CardDescription>
                        Below is an overview of the plan; please ensure you review the full plan details before making a decision.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center space-x-3 p-3 bg-background rounded-lg border">
                          <div className="p-2 bg-red-100 rounded-lg">
                            <span className="text-red-600 font-bold">£</span>
                          </div>
                          <div>
                            <h4 className="font-semibold">Deductible</h4>
                            <p className="text-sm text-muted-foreground">View deductible options</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3 p-3 bg-background rounded-lg border">
                          <div className="p-2 bg-purple-100 rounded-lg">
                            <span className="text-purple-600 font-bold">📋</span>
                          </div>
                          <div>
                            <h4 className="font-semibold">Full plan details</h4>
                            <p className="text-sm text-muted-foreground">Complete plan information</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3 p-3 bg-background rounded-lg border">
                          <div className="p-2 bg-teal-100 rounded-lg">
                            <span className="text-teal-600 font-bold">📊</span>
                          </div>
                          <div>
                            <h4 className="font-semibold">Table of benefits: Glossary</h4>
                            <p className="text-sm text-muted-foreground">Benefits breakdown</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3 p-3 bg-background rounded-lg border">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <span className="text-blue-600 font-bold">🕐</span>
                          </div>
                          <div>
                            <h4 className="font-semibold">Waiting periods</h4>
                            <p className="text-sm text-muted-foreground">Coverage waiting times</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Vitality Section */}
                <div className="space-y-6">
                  <div className="text-center space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">Vitality Health Insurance</h2>
                    <p className="text-muted-foreground">
                      Innovative health insurance that rewards healthy living with comprehensive coverage.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    {country.plans.filter(plan => plan.id.includes('vitality')).map((plan) => (
                      <Card key={plan.id} className="group hover:shadow-card-hover transition-all duration-300">
                        <CardHeader className="pb-3">
                          <div className="flex items-center space-x-3">
                            <span className="text-xl">{plan.logo}</span>
                            <div>
                              <CardTitle className="text-lg group-hover:text-primary transition-colors">{plan.name}</CardTitle>
                              <CardDescription className="text-sm">{plan.description}</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <Button 
                            className="w-full"
                            onClick={() => window.open(plan.quoteUrl, '_blank')}
                          >
                            Get a Quote
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Card className="bg-muted/50">
                    <CardHeader>
                      <CardTitle className="text-lg">Why Choose Vitality?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Unique wellness rewards program</li>
                        <li>• Discounts on gym memberships & healthy food</li>
                        <li>• Fast access to private medical care</li>
                        <li>• Mental health support programs</li>
                        <li>• Flexible coverage for individuals & families</li>
                        <li>• Health tracking through app & wearables</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ) : (
              // Default layout for other countries
              <div className="grid gap-6 md:grid-cols-2">
                {country.plans.map((plan) => (
                  <Card key={plan.id} className="group hover:shadow-card-hover transition-all duration-300 animate-scale-in">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{plan.logo}</span>
                        <div>
                          <CardTitle className="group-hover:text-primary transition-colors">{plan.name}</CardTitle>
                          <CardDescription>{plan.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        className="w-full group-hover:bg-primary-hover transition-colors"
                        onClick={() => window.open(plan.quoteUrl, '_blank')}
                      >
                        Get a Quote
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="faqs" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>
                  Common questions about insurance in {country.name}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-2">
                  {country.faqs.map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id} className="border border-border rounded-lg px-4">
                      <AccordionTrigger className="hover:text-primary transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="onboarding" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Onboarding Resources</CardTitle>
                <CardDescription>
                  Helpful resources to get started with healthcare in {country.name}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {country.onboardingLinks.map((link) => (
                    <div key={link.id} className="p-4 border border-border rounded-lg hover:shadow-card transition-all duration-300 group">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold group-hover:text-primary transition-colors">{link.title}</h3>
                          <p className="text-sm text-muted-foreground">{link.description}</p>
                        </div>
                        <Button variant="outline" size="sm" onClick={() => window.open(link.url, '_blank')}>
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CountryPage;