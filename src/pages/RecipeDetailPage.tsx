import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Users, Flame, Bookmark, Share2 } from "lucide-react";
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
    <div className="min-h-screen bg-background pb-24">
      {/* Hero */}
      <div className="relative">
        <img src={recipe.image} alt={recipe.title} className="w-full aspect-[16/10] sm:aspect-[16/8] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-foreground/10 to-transparent" />
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-md flex items-center justify-center shadow-soft hover:bg-card transition-colors"
          >
            <ArrowLeft className="w-[18px] h-[18px] text-foreground" />
          </button>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-md flex items-center justify-center shadow-soft hover:bg-card transition-colors">
              <Share2 className="w-[18px] h-[18px] text-foreground" />
            </button>
            <button className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-md flex items-center justify-center shadow-soft hover:bg-card transition-colors">
              <Bookmark className="w-[18px] h-[18px] text-foreground" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-5 -mt-10 relative z-10">
        <div className="bg-card rounded-3xl p-6 shadow-card border border-border/40 animate-fade-in-up">
          {/* Title & Tags */}
          <h1 className="text-2xl font-serif text-foreground mb-3 leading-tight">{recipe.title}</h1>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {recipe.tags.map((tag) => (
              <span
                key={tag}
                className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${tagColors[tag] || "bg-muted text-muted-foreground"}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Meta row */}
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            {[
              { icon: Clock, text: `${recipe.prepTime} prep` },
              { icon: Clock, text: `${recipe.cookTime} cook` },
              { icon: Users, text: `${recipe.servings} servings` },
            ].map((m, i) => (
              <div key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary rounded-full px-3 py-1.5">
                <m.icon className="w-3.5 h-3.5" />
                <span className="font-medium">{m.text}</span>
              </div>
            ))}
          </div>

          {/* Source */}
          <div className="text-xs text-muted-foreground bg-warm-surface rounded-xl px-4 py-2.5 mb-5 font-medium">
            📌 Source: {recipe.sourceLabel}
          </div>

          {/* Nutrition grid */}
          <div className="grid grid-cols-4 gap-2 mb-6">
            {[
              { label: "Calories", value: recipe.calories, color: "text-primary" },
              { label: "Protein", value: `${recipe.protein}g`, color: "text-tag-protein" },
              { label: "Carbs", value: `${recipe.carbs}g`, color: "text-tag-quick" },
              { label: "Fat", value: `${recipe.fat}g`, color: "text-tag-dessert" },
            ].map((n) => (
              <div key={n.label} className="bg-secondary rounded-2xl p-3 text-center">
                <div className={`text-lg font-bold ${n.color}`}>{n.value}</div>
                <div className="text-[10px] font-medium text-muted-foreground mt-0.5">{n.label}</div>
              </div>
            ))}
          </div>

          {/* Ingredients */}
          <h2 className="text-xl font-serif text-foreground mb-3">Ingredients</h2>
          <div className="bg-warm-surface rounded-2xl p-4 mb-6">
            <ul className="space-y-2.5">
              {recipe.ingredients.map((ing, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary/50 mt-1.5 flex-shrink-0" />
                  <span className="leading-relaxed">{ing}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <h2 className="text-xl font-serif text-foreground mb-3">Instructions</h2>
          <ol className="space-y-3">
            {recipe.instructions.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm text-foreground">
                <span className="w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="leading-relaxed pt-1">{step}</span>
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
