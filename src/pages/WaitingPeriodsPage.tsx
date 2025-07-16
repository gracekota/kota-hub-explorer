import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const WaitingPeriodsPage = () => {
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
            <h1 className="text-4xl font-bold mb-2">Waiting Periods</h1>
            <p className="text-lg text-muted-foreground">
              Coverage waiting times and when benefits become active
            </p>
          </div>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg">Coverage Waiting Times</CardTitle>
              <CardDescription>
                Information about when different types of coverage become effective
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <p className="text-muted-foreground mb-4">
                  This section will outline the waiting periods for different types of coverage and when benefits become active after enrollment.
                </p>
                
                <div className="bg-background p-4 rounded-lg border">
                  <h3 className="font-semibold mb-2">🕐 Waiting Period Schedule</h3>
                  <p className="text-sm text-muted-foreground">
                    Detailed waiting period information for different benefit categories will be shown here.
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

export default WaitingPeriodsPage;