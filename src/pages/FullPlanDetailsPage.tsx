
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FullPlanDetailsPage = () => {
  const { slug } = useParams();
  console.log('FullPlanDetailsPage rendering with slug:', slug);

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
            <h1 className="text-4xl font-bold mb-2">Full Plan Details</h1>
            <p className="text-lg text-muted-foreground">
              Complete information about the Allianz International Care - Standard plan
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
                  This section will contain comprehensive details about the Allianz International Care - Standard plan including coverage limits, exclusions, and terms and conditions.
                </p>
                
                <div className="bg-background p-4 rounded-lg border">
                  <h3 className="font-semibold mb-4">📋 Plan Documentation</h3>
                  <div className="w-full border rounded-lg overflow-hidden">
                    <iframe
                      src="/Create%20Allianz%20Standard%20Table%20of%20Benefits.pdf"
                      width="100%"
                      height="600px">
                    </iframe>
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
