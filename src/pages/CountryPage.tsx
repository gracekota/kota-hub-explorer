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
            {/* UK-specific content with provider sections */}
            {country.slug === 'uk' ? (
              <div className="space-y-12">
                {/* Allianz Section */}
                <div className="space-y-6">
                  <div className="text-center space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">Allianz International Care</h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto">
                      Allianz offers comprehensive international health insurance with global coverage, 
                      providing peace of mind for individuals and families living abroad or seeking 
                      worldwide medical protection.
                    </p>
                  </div>
                  
                  <div className="grid gap-6 md:grid-cols-2">
                    {country.plans.filter(plan => plan.id.includes('allianz')).map((plan) => (
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

                  <Card className="bg-muted/50">
                    <CardHeader>
                      <CardTitle>Why Choose Allianz?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Global network of healthcare providers and medical facilities</li>
                        <li>• 24/7 multilingual customer support and emergency assistance</li>
                        <li>• Comprehensive coverage including outpatient, inpatient, and emergency care</li>
                        <li>• Direct billing arrangements with many hospitals worldwide</li>
                        <li>• Flexible plans to suit different budgets and healthcare needs</li>
                        <li>• Trusted brand with decades of experience in international health insurance</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Vitality Section */}
                <div className="space-y-6">
                  <div className="text-center space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">Vitality Health Insurance</h2>
                    <p className="text-muted-foreground max-w-3xl mx-auto">
                      Vitality rewards healthy living with their innovative health insurance plans. 
                      Get comprehensive coverage while earning rewards for staying active and healthy.
                    </p>
                  </div>
                  
                  <div className="grid gap-6 md:grid-cols-3">
                    {country.plans.filter(plan => plan.id.includes('vitality')).map((plan) => (
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

                  <Card className="bg-muted/50">
                    <CardHeader>
                      <CardTitle>Why Choose Vitality?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Unique wellness rewards program that incentivizes healthy living</li>
                        <li>• Discounts on gym memberships, healthy food, and wellness products</li>
                        <li>• Comprehensive private medical insurance with fast access to treatment</li>
                        <li>• Mental health support and employee assistance programs</li>
                        <li>• Flexible coverage options to suit individual and family needs</li>
                        <li>• Innovative health tracking through their app and wearable devices</li>
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