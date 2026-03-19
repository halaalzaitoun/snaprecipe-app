import { Flame } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Recipe, tagColors } from "@/data/mockRecipes";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/recipe/${recipe.id}`)}
      className="w-full text-left bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all animate-fade-in border border-border/50"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-card/90 backdrop-blur-sm rounded-full px-2 py-1">
          <Flame className="w-3 h-3 text-primary" />
          <span className="text-xs font-semibold text-foreground">{recipe.calories} cal</span>
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-sm text-foreground leading-tight line-clamp-2">
          {recipe.title}
        </h3>
        <div className="flex flex-wrap gap-1 mt-2">
          {recipe.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${tagColors[tag] || "bg-muted text-muted-foreground"}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
};

export default RecipeCard;
