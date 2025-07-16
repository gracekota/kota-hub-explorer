import { useState, useMemo } from "react";
import { CountryCard } from "@/components/CountryCard";
import { SearchBar } from "@/components/SearchBar";
import { countries } from "@/data/countries";
import kotaLogo from "@/assets/kota-logo.png";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = useMemo(() => {
    if (!searchTerm) return countries;
    
    return countries.filter(country =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.slug.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-6 py-16 text-center">
          <div className="animate-fade-in">
            <div className="mb-6">
              <img 
                src={kotaLogo} 
                alt="Kota Logo" 
                className="mx-auto h-12 w-auto mb-4"
              />
            </div>
            <h1 className="text-5xl font-bold mb-4">The Kota Hub</h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Get region-specific benefits & insurance info
            </p>
            <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
              Your comprehensive guide to healthcare and insurance across Europe. 
              Find country-specific information, compare plans, and get expert guidance for your healthcare journey.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Countries Section */}
      <div className="container mx-auto px-6 py-12">
        {/* Search Bar */}
        <div className="mb-12 animate-fade-in">
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search countries..."
          />
        </div>

        {/* Countries Grid */}
        <div className="animate-fade-in">
          {filteredCountries.length > 0 ? (
            <>
              <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
                {searchTerm ? `Search Results (${filteredCountries.length})` : 'Select Your Country'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredCountries.map((country, index) => (
                  <div 
                    key={country.slug}
                    className="animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CountryCard
                      name={country.name}
                      slug={country.slug}
                      flag={country.flag}
                      image={country.image}
                    />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No countries found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search term or{" "}
                <button 
                  onClick={() => setSearchTerm("")}
                  className="text-primary hover:underline"
                >
                  clear the search
                </button>
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-muted border-t border-border">
        <div className="container mx-auto px-6 py-8 text-center">
          <p className="text-muted-foreground">
            © 2024 The Kota Hub. Powered by{" "}
            <a 
              href="https://www.kota.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Kota
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
