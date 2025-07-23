import { Link } from "react-router-dom";
import { SearchResult } from "@/data/searchIndex";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, HelpCircle, FileText, Settings } from "lucide-react";

interface SearchResultsProps {
  results: SearchResult[];
  searchTerm: string;
  onResultClick?: () => void;
}

const getTypeIcon = (type: SearchResult['type']) => {
  switch (type) {
    case 'country':
      return <MapPin className="h-4 w-4" />;
    case 'faq':
      return <HelpCircle className="h-4 w-4" />;
    case 'page':
      return <FileText className="h-4 w-4" />;
    case 'plan':
    case 'feature':
      return <Settings className="h-4 w-4" />;
    default:
      return <FileText className="h-4 w-4" />;
  }
};

const getTypeLabel = (type: SearchResult['type']) => {
  switch (type) {
    case 'country':
      return 'Country';
    case 'faq':
      return 'FAQ';
    case 'page':
      return 'Page';
    case 'plan':
      return 'Insurance Plan';
    case 'feature':
      return 'Feature';
    default:
      return 'Page';
  }
};

const getTypeColor = (type: SearchResult['type']) => {
  switch (type) {
    case 'country':
      return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
    case 'faq':
      return 'bg-green-100 text-green-800 hover:bg-green-200';
    case 'page':
      return 'bg-purple-100 text-purple-800 hover:bg-purple-200';
    case 'plan':
      return 'bg-orange-100 text-orange-800 hover:bg-orange-200';
    case 'feature':
      return 'bg-pink-100 text-pink-800 hover:bg-pink-200';
    default:
      return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
  }
};

export const SearchResults = ({ results, searchTerm, onResultClick }: SearchResultsProps) => {
  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-4xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold text-foreground mb-2">No results found</h3>
        <p className="text-muted-foreground">
          Try searching for countries, insurance plans, benefits, or healthcare topics
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          Search Results for "{searchTerm}"
        </h2>
        <p className="text-muted-foreground">
          Found {results.length} result{results.length !== 1 ? 's' : ''} across the hub
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {results.map((result) => (
          <Link
            key={result.id}
            to={result.url}
            onClick={onResultClick}
            className="block group"
          >
            <Card className="h-full hover:shadow-md transition-all duration-200 group-hover:border-primary/50">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {getTypeIcon(result.type)}
                    <Badge 
                      variant="secondary" 
                      className={`text-xs ${getTypeColor(result.type)}`}
                    >
                      {getTypeLabel(result.type)}
                    </Badge>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                  {result.title}
                </CardTitle>
                {result.country && (
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {result.country}
                  </div>
                )}
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="line-clamp-3">
                  {result.description}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};