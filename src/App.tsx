import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CountryPage from "./pages/CountryPage";
import AllianzStandardPage from "./pages/AllianzStandardPage";
import DeductiblePage from "./pages/DeductiblePage";
import FullPlanDetailsPage from "./pages/FullPlanDetailsPage";
import BenefitsGlossaryPage from "./pages/BenefitsGlossaryPage";
import WaitingPeriodsPage from "./pages/WaitingPeriodsPage";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import RegulatoryDisclosures from "./components/RegulatoryDisclosures";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="min-h-screen flex flex-col">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/country/:slug" element={<CountryPage />} />
            <Route path="/country/:slug/allianz-standard" element={<AllianzStandardPage />} />
            <Route path="/country/:slug/allianz-standard/deductible" element={<DeductiblePage />} />
            <Route path="/country/:slug/allianz-standard/full-plan-details" element={<FullPlanDetailsPage />} />
            <Route path="/country/:slug/allianz-standard/benefits-glossary" element={<BenefitsGlossaryPage />} />
            <Route path="/country/:slug/allianz-standard/waiting-periods" element={<WaitingPeriodsPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <RegulatoryDisclosures />
          <Footer />
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
