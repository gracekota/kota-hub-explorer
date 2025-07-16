import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface CountryCardProps {
  name: string;
  slug: string;
  flag: string;
}

export const CountryCard = ({ name, slug, flag }: CountryCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/country/${slug}`);
  };

  return (
    <Card 
      className="group p-6 cursor-pointer border-border hover:border-primary/20 transition-all duration-300 hover:shadow-card-hover hover:scale-105"
      onClick={handleClick}
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
          {flag}
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
        </div>
      </div>
    </Card>
  );
};