import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const BenefitsGlossaryPage = () => {
  const { slug } = useParams();

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
              Comprehensive breakdown of benefits and coverage explanations
            </p>
          </div>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg">Benefits Breakdown</CardTitle>
              <CardDescription>
                Detailed explanation of all benefits included in your plan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <p className="text-muted-foreground mb-4">
                  This section will contain a detailed table of benefits with explanations of terms and coverage limits for each benefit category.
                </p>
                
                <div className="bg-background p-4 rounded-lg border">
                  <h3 className="font-semibold mb-2">📊 Benefits Table</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive benefits table with coverage limits and glossary of terms will be displayed here.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BenefitsGlossaryPage;