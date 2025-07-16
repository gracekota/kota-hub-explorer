import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AllianzStandardPage = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link to={`/country/${slug}`}>
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to {slug?.charAt(0).toUpperCase() + slug?.slice(1)} Hub
            </Button>
          </Link>

          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Allianz International Care - Standard</h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive international health insurance coverage
            </p>
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
                <div className="col-span-2">
                  <div className="flex items-center space-x-3 p-3 bg-background rounded-lg border mb-4">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <span className="text-red-600 font-bold">£</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Deductible</h4>
                      <p className="text-sm text-muted-foreground">View deductible options</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
                    <div>
                      <h5 className="font-semibold mb-2">What is a deductible?</h5>
                      <p className="text-sm text-muted-foreground">
                        A deductible on a health plan is the amount your employee will need to pay for their treatment, before the cover kicks in from the employer. This can apply to inpatient, outpatient and day-to-day expenses.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold mb-2">Video Explanation</h5>
                      <div className="bg-background border-2 border-dashed border-muted-foreground/30 rounded-lg p-8 text-center">
                        <div className="text-muted-foreground">
                          <div className="text-4xl mb-2">📹</div>
                          <p className="text-sm">Video embed placeholder</p>
                          <p className="text-xs text-muted-foreground/70 mt-1">
                            Replace this section with your video embed code
                          </p>
                        </div>
                      </div>
                    </div>
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
      </div>
    </div>
  );
};

export default AllianzStandardPage;