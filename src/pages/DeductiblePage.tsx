import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DeductiblePage = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link to={`/country/${slug}/allianz-standard`}>
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Allianz Standard Plan
            </Button>
          </Link>

          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <span className="text-red-600 font-bold text-xl">£</span>
              </div>
              <div>
                <h1 className="text-4xl font-bold">Deductible</h1>
                <p className="text-lg text-muted-foreground">
                  Understanding your deductible options
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">What is a deductible?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  A deductible on a health plan is the amount your employee will need to pay for their treatment, before the cover kicks in from the employer. This can apply to inpatient, outpatient and day-to-day expenses.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Video Explanation</CardTitle>
                <CardDescription>
                  Watch this video to better understand how deductibles work
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-background border-2 border-dashed border-muted-foreground/30 rounded-lg p-12 text-center">
                  <div className="text-muted-foreground">
                    <div className="text-6xl mb-4">📹</div>
                    <h3 className="text-lg font-semibold mb-2">Video embed placeholder</h3>
                    <p className="text-sm text-muted-foreground/70">
                      Replace this section with your video embed code
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeductiblePage;