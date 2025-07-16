import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface CountryCardProps {
  name: string;
  slug: string;
  flag: string;
  image: string;
}

export const CountryCard = ({ name, slug, flag, image }: CountryCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/country/${slug}`);
  };

  return (
    <Card 
      className="group overflow-hidden cursor-pointer border-border hover:border-primary/20 transition-all duration-300 hover:shadow-card-hover hover:scale-105"
      onClick={handleClick}
    >
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={image} 
          alt={`${name} landscape`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
      </div>
    </Card>
  );
};