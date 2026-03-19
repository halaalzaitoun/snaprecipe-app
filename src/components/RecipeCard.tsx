import { Flame, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Recipe, tagColors } from "@/data/mockRecipes";

interface RecipeCardProps {
  recipe: Recipe;
  index?: number;
}

const RecipeCard = ({ recipe, index = 0 }: RecipeCardProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/recipe/${recipe.id}`)}
      className="group w-full text-left bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/40 hover:border-primary/20 animate-fade-in"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-2.5 left-2.5">
          <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-card/85 backdrop-blur-sm text-foreground shadow-soft">
            {recipe.prepTime}
          </span>
        </div>
        <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1 bg-card/85 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-soft">
          <Flame className="w-3 h-3 text-primary" />
          <span className="text-[11px] font-bold text-foreground">{recipe.calories}</span>
          <span className="text-[10px] text-muted-foreground">cal</span>
        </div>
      </div>
      <div className="p-3.5">
        <h3 className="font-semibold text-[13px] text-foreground leading-snug line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {recipe.title}
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {recipe.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${tagColors[tag] || "bg-muted text-muted-foreground"}`}
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
