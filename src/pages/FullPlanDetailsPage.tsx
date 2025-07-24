
import { ArrowLeft } from "lucide-react";
import { Link, useParams, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FullPlanDetailsPage = () => {
  const { slug } = useParams();
  const location = useLocation();
  const isPremium = location.pathname.includes('/allianz-premium');
  const planType = isPremium ? 'Premium' : 'Standard';
  const planTypeTitle = isPremium ? 'Premium' : 'Standard';
  
  console.log('FullPlanDetailsPage - pathname:', location.pathname, 'isPremium:', isPremium, 'planType:', planType);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link to={`/country/${slug}/allianz-${isPremium ? 'premium' : 'standard'}`}>
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Plan Details
            </Button>
          </Link>

          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Full Plan Details</h1>
            <p className="text-lg text-muted-foreground">
              Complete information about the Allianz International Care - {planTypeTitle} plan
            </p>
          </div>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg">Complete Plan Information</CardTitle>
              <CardDescription>
                Detailed coverage information and plan specifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <p className="text-muted-foreground mb-4">
                  This section contains comprehensive details about the Allianz International Care - {planTypeTitle} plan including coverage limits, exclusions, and terms and conditions.
                </p>
                
                <div className="bg-background p-4 rounded-lg border">
                  <h3 className="font-semibold mb-4">📋 {planTypeTitle} Plan Documentation</h3>
                  <div className="w-full border rounded-lg p-4">
                    <a 
                      href={isPremium ? "/Allianz%20Standard%20Table%20of%20Benefits.pdf" : "/Allianz%20Standard%20Table%20of%20Benefits.pdf"}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      View Allianz {planTypeTitle} Benefits PDF
                    </a>
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

export default FullPlanDetailsPage;
