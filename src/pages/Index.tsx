import { CountryCard } from "@/components/CountryCard";
import { SearchBar } from "@/components/SearchBar";
import { SearchResults } from "@/components/SearchResults";
import { useHubSearch } from "@/hooks/useHubSearch";
import { countries } from "@/data/countries";
import kotaLogo from "/lovable-uploads/622d98ad-c491-4b82-84cf-25e56f7668e5.png";
import remoteLogo from "@/assets/remote-logo.svg";

const Index = () => {
  const { searchTerm, setSearchTerm, searchResults, hasResults, hasSearchTerm, clearSearch } = useHubSearch();


  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-6 py-16 text-center">
          <div className="animate-fade-in">
            <div className="mb-6 flex items-center justify-center gap-4">
              <img 
                src={remoteLogo} 
                alt="Remote Logo" 
                className="h-8 w-auto filter brightness-0 invert"
              />
              <span className="text-2xl font-light text-primary-foreground/60">×</span>
              <img 
                src={kotaLogo} 
                alt="Kota Logo" 
                className="h-10 w-auto"
              />
            </div>
            <h1 className="text-5xl font-bold mb-4">The Kota Hub</h1>
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
            placeholder="Search the hub..."
          />
        </div>

        {/* Content Section */}
        <div className="animate-fade-in">
          {hasSearchTerm ? (
            <SearchResults 
              results={searchResults} 
              searchTerm={searchTerm}
            />
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-foreground mb-4 text-center">
                Select Your Country
              </h2>
              <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
                Health plans are country-specific. If you have employees in several countries, you will need to set up a plan for each country.
                Select a country to know more about the available plans and related frequently asked questions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {countries.map((country, index) => (
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
