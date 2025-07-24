import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { countries } from "@/data/countries";
import kotaLogo from "/lovable-uploads/622d98ad-c491-4b82-84cf-25e56f7668e5.png";
import remoteLogo from "@/assets/remote-logo.svg";
import allianzLogo from "/lovable-uploads/4ea41930-dc74-46d1-ba35-de66c0890f02.png";
import vitalityLogo from "/lovable-uploads/76278ac1-b610-4a59-9eda-a816e35b05f5.png";

const CountryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const country = countries.find(c => c.slug === slug);
  const [showPricing, setShowPricing] = useState<Record<string, boolean>>({});

  const togglePricing = (planId: string) => {
    setShowPricing(prev => ({
      ...prev,
      [planId]: !prev[planId]
    }));
  };

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
            <div className="flex items-center space-x-3">
              <img 
                src={kotaLogo} 
                alt="Kota Logo" 
                className="h-8 w-auto"
              />
              <span className="text-primary-foreground/60 text-sm font-medium">x</span>
              <img 
                src={remoteLogo} 
                alt="Remote Logo" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
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
            {/* UK and France-specific content with providers side by side */}
            {(country.slug === 'uk' || country.slug === 'france') ? (
              <div className={country.slug === 'uk' ? 'grid gap-8 lg:grid-cols-2' : 'space-y-8'}>
                {/* Allianz Section */}
                <div className="space-y-6">
                   <div className="text-center space-y-4">
                     <div className="flex items-center justify-center gap-3">
                       <img 
                         src={allianzLogo} 
                         alt="Allianz Logo" 
                         className="h-8 w-auto object-contain"
                       />
                       <h2 className="text-2xl font-bold text-foreground">Allianz International Care</h2>
                     </div>
                    <p className="text-muted-foreground">
                      Comprehensive international health insurance with global coverage and peace of mind.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    {country.plans.filter(plan => plan.id.includes('allianz')).map((plan) => (
                      <div key={plan.id}>
                        <Card className="group hover:shadow-card-hover transition-all duration-300">
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
                            {/* View Pricing Button */}
                            {!showPricing[plan.id] && (
                              <Button 
                                className="w-full mb-3 bg-purple-600 hover:bg-purple-700 text-white"
                                onClick={() => togglePricing(plan.id)}
                              >
                                View Pricing
                              </Button>
                            )}
                            
                            {/* Pricing Display */}
                            {showPricing[plan.id] && (
                              <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg p-6 mb-4 text-white">
                                <div className="flex items-center justify-between mb-6">
                                  <div>
                                    <span className="text-lg font-bold">{plan.name}</span>
                                    <div className="text-purple-200 text-sm mt-1">Annual pricing</div>
                                  </div>
                                  <button 
                                    onClick={() => togglePricing(plan.id)}
                                    className="text-purple-200 hover:text-white text-sm"
                                  >
                                    ✕
                                  </button>
                                </div>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                    <div className="text-purple-200 text-sm font-medium mb-3">Per Adult</div>
                                    <div className="text-xl font-bold">
                                      €{plan.id.includes('premium') ? '1729.23' : '1356.03'}
                                    </div>
                                    <div className="text-xl font-bold mt-1">
                                      £{plan.id.includes('premium') ? '1470.77' : '1153.21'}
                                    </div>
                                  </div>
                                  
                                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                    <div className="text-purple-200 text-sm font-medium mb-3">Per Child</div>
                                    <div className="text-xl font-bold">
                                      €{plan.id.includes('premium') ? '1383.85' : '1084.82'}
                                    </div>
                                    <div className="text-xl font-bold mt-1">
                                      £{plan.id.includes('premium') ? '1176.39' : '922.56'}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                            
                            {/* Action Buttons */}
                            <div className="flex space-x-2 mb-3">
                              {country.slug === 'uk' && (
                                <Link to={`/country/${slug}/allianz-${plan.id.includes('premium') ? 'premium' : 'standard'}`} className="flex-1">
                                  <Button variant="outline" className="w-full" onClick={() => console.log('View Details clicked for plan:', plan.name, 'Route:', `/country/${slug}/allianz-${plan.id.includes('premium') ? 'premium' : 'standard'}`)}>
                                    View Details
                                  </Button>
                                </Link>
                              )}
                            </div>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" className="w-full">
                                  Watch {plan.name} Video
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-4xl">
                                <DialogHeader>
                                  <DialogTitle>{plan.name} Overview</DialogTitle>
                                </DialogHeader>
                                <div className="aspect-video">
                                  <iframe
                                    src="https://player.vimeo.com/video/YOUR_VIDEO_ID_HERE"
                                    className="w-full h-full rounded-lg"
                                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                    allowFullScreen
                                    title={`${plan.name} Video`}
                                  />
                                </div>
                              </DialogContent>
                            </Dialog>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>

                  {/* Why Choose Allianz - France only */}
                  {country.slug === 'france' && (
                    <Card className="bg-muted/50">
                      <CardHeader>
                        <CardTitle className="text-lg">Why Choose Allianz?</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" className="w-full">
                              Discover Allianz International Care
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>Why Choose Allianz International Care?</DialogTitle>
                            </DialogHeader>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
                              {/* Icons Grid - Left Side */}
                              <div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  <div className="bg-card p-4 rounded-lg border">
                                    <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mb-3">
                                      <span className="text-pink-600 text-lg">👤</span>
                                    </div>
                                    <h4 className="font-semibold text-sm mb-2">Customer-Centric Offerings</h4>
                                    <p className="text-muted-foreground text-xs">
                                      Coverage tailored to meet real customer needs with protection they want.
                                    </p>
                                  </div>
                                  
                                  <div className="bg-card p-4 rounded-lg border">
                                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                                      <span className="text-purple-600 text-lg">☂️</span>
                                    </div>
                                    <h4 className="font-semibold text-sm mb-2">Simple and Safe Coverage</h4>
                                    <p className="text-muted-foreground text-xs">
                                      Easy to understand health insurance with safety and simplicity prioritized.
                                    </p>
                                  </div>
                                  
                                  <div className="bg-card p-4 rounded-lg border">
                                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                                      <span className="text-green-600 text-lg">🔍</span>
                                    </div>
                                    <h4 className="font-semibold text-sm mb-2">Top Financial Rating</h4>
                                    <p className="text-muted-foreground text-xs">
                                      AA+ rating from Standard & Poor's and Fitch for financial stability.
                                    </p>
                                  </div>
                                  
                                  <div className="bg-card p-4 rounded-lg border">
                                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                                      <span className="text-purple-600 text-lg">📚</span>
                                    </div>
                                    <h4 className="font-semibold text-sm mb-2">Long-Standing Expertise</h4>
                                    <p className="text-muted-foreground text-xs">
                                      Founded in 1890, bringing deep trust and reliability as one of the world's oldest insurers.
                                    </p>
                                  </div>
                                  
                                  <div className="bg-card p-4 rounded-lg border">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                                      <span className="text-blue-600 text-lg">📊</span>
                                    </div>
                                    <h4 className="font-semibold text-sm mb-2">Improving Quality of Life</h4>
                                    <p className="text-muted-foreground text-xs">
                                      Focused on enhancing customer quality of life by simplifying healthcare complexities.
                                    </p>
                                  </div>
                                  
                                  <div className="bg-card p-4 rounded-lg border">
                                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                                      <span className="text-green-600 text-lg">🌍</span>
                                    </div>
                                    <h4 className="font-semibold text-sm mb-2">Global Presence</h4>
                                    <p className="text-muted-foreground text-xs">
                                      Serving 122+ million customers across 70 countries with global healthcare navigation.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Video Section - Right Side */}
                              <div>
                                <div style={{padding: '56.25% 0 0 0', position: 'relative'}}>
                                  <iframe 
                                    src="https://player.vimeo.com/video/1046828149?badge=0&autopause=0&player_id=0&app_id=58479" 
                                    frameBorder="0" 
                                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                                    style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} 
                                    title="why_allianz_ (1080p)"
                                  />
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </CardContent>
                    </Card>
                  )}
                </div>

                {/* Vitality Section - UK only */}
                {country.slug === 'uk' && (
                <div className="space-y-6">
                   <div className="text-center space-y-4">
                     <div className="flex items-center justify-center gap-3">
                       <img 
                         src={vitalityLogo} 
                         alt="Vitality Logo" 
                         className="h-8 w-auto object-contain"
                       />
                       <h2 className="text-2xl font-bold text-foreground">Vitality Health Insurance</h2>
                     </div>
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
                          <div className="flex space-x-2 mb-3">
                            <Button 
                              className="flex-1"
                              onClick={() => window.open('https://kota-hub-quote-generator.lovable.app/', '_blank')}
                            >
                              Get a Quote
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" className="w-full">
                                Watch {plan.name} Video
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl">
                              <DialogHeader>
                                <DialogTitle>{plan.name} Overview</DialogTitle>
                              </DialogHeader>
                              <div className="aspect-video">
                                <iframe
                                  src="https://player.vimeo.com/video/YOUR_VIDEO_ID_HERE"
                                  className="w-full h-full rounded-lg"
                                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                  allowFullScreen
                                  title={`${plan.name} Video`}
                                />
                              </div>
                            </DialogContent>
                          </Dialog>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Card className="bg-muted/50">
                    <CardHeader>
                      <CardTitle className="text-lg">Why Choose Vitality?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="w-full">
                            Watch Vitality Overview Video
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <DialogHeader>
                            <DialogTitle>Discover Vitality Health Insurance</DialogTitle>
                          </DialogHeader>
                          <div className="aspect-video">
                            <iframe
                              src="https://player.vimeo.com/video/1045155143?badge=0&autopause=0&player_id=0&app_id=58479"
                              className="w-full h-full rounded-lg"
                              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                              allowFullScreen
                              title="Why Vitality"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                </div>
                )}
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