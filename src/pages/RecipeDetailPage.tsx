import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Users, Flame, Bookmark } from "lucide-react";
import { mockRecipes, tagColors } from "@/data/mockRecipes";
import BottomNav from "@/components/BottomNav";

const RecipeDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = mockRecipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Recipe not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero */}
      <div className="relative">
        <img src={recipe.image} alt={recipe.title} className="w-full aspect-[4/3] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 w-9 h-9 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center"
        >
          <ArrowLeft className="w-4 h-4 text-foreground" />
        </button>
        <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center">
          <Bookmark className="w-4 h-4 text-foreground" />
        </button>
      </div>

      <div className="max-w-lg mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-card rounded-2xl p-5 shadow-sm border border-border/50">
          <h1 className="text-xl font-serif text-foreground mb-2">{recipe.title}</h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {recipe.tags.map((tag) => (
              <span
                key={tag}
                className={`text-[10px] font-medium px-2.5 py-0.5 rounded-full ${tagColors[tag] || "bg-muted text-muted-foreground"}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{recipe.prepTime} prep</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{recipe.cookTime} cook</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5" />
              <span>{recipe.servings} servings</span>
            </div>
          </div>

          {/* Source */}
          <div className="text-xs text-muted-foreground bg-secondary rounded-lg px-3 py-2 mb-4">
            Source: {recipe.sourceLabel}
          </div>

          {/* Nutrition */}
          <div className="grid grid-cols-4 gap-2 mb-5">
            {[
              { label: "Calories", value: recipe.calories, icon: Flame },
              { label: "Protein", value: `${recipe.protein}g` },
              { label: "Carbs", value: `${recipe.carbs}g` },
              { label: "Fat", value: `${recipe.fat}g` },
            ].map((n) => (
              <div key={n.label} className="bg-secondary rounded-xl p-3 text-center">
                <div className="text-base font-bold text-foreground">{n.value}</div>
                <div className="text-[10px] text-muted-foreground">{n.label}</div>
              </div>
            ))}
          </div>

          {/* Ingredients */}
          <h2 className="text-lg font-serif text-foreground mb-3">Ingredients</h2>
          <ul className="space-y-2 mb-6">
            {recipe.ingredients.map((ing, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                {ing}
              </li>
            ))}
          </ul>

          {/* Instructions */}
          <h2 className="text-lg font-serif text-foreground mb-3">Instructions</h2>
          <ol className="space-y-3 mb-4">
            {recipe.instructions.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm text-foreground">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default RecipeDetailPage;
