import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, AlertCircle, Sparkles, ChefHat } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const parsedRecipe = {
  title: "Spicy Thai Basil Noodles",
  confidence: 94,
  ingredients: [
    "200g rice noodles",
    "2 tbsp soy sauce",
    "1 tbsp sriracha",
    "1 tbsp sesame oil",
    "2 cloves garlic, minced",
    "1 cup Thai basil leaves",
    "1 red bell pepper, sliced",
    "2 green onions, chopped",
  ],
  instructions: [
    "Cook rice noodles per package directions. Drain and set aside.",
    "Heat sesame oil in a wok over high heat.",
    "Add garlic and bell pepper, stir-fry for 2 minutes.",
    "Add noodles, soy sauce, and sriracha. Toss to combine.",
    "Remove from heat and fold in Thai basil and green onions.",
  ],
  nutrition: { calories: 380, protein: 12, carbs: 54, fat: 14 },
};

const nutritionItems = [
  { key: "calories", label: "Calories", value: parsedRecipe.nutrition.calories, unit: "kcal", color: "text-primary" },
  { key: "protein", label: "Protein", value: parsedRecipe.nutrition.protein, unit: "g", color: "text-tag-protein" },
  { key: "carbs", label: "Carbs", value: parsedRecipe.nutrition.carbs, unit: "g", color: "text-tag-quick" },
  { key: "fat", label: "Fat", value: parsedRecipe.nutrition.fat, unit: "g", color: "text-tag-dessert" },
];

const ParseReviewPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(parsedRecipe.title);
  const [ingredients, setIngredients] = useState(parsedRecipe.ingredients);
  const [instructions, setInstructions] = useState(parsedRecipe.instructions);
  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => navigate("/"), 1200);
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-2xl mx-auto px-5 pt-8">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1.5 text-muted-foreground mb-6 hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back</span>
        </button>

        {/* Header with confidence */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-accent/10 flex items-center justify-center">
              <ChefHat className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h1 className="text-2xl font-serif text-foreground">Review Recipe</h1>
              <p className="text-sm text-muted-foreground">Edit fields before saving</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10">
            <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs font-bold text-accent">{parsedRecipe.confidence}%</span>
          </div>
        </div>

        {/* Title */}
        <div className="mb-5">
          <label className="block text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-2">
            Recipe Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl bg-card text-foreground text-sm font-medium border border-border/60 shadow-soft focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
          />
        </div>

        {/* Nutrition */}
        <div className="mb-5">
          <label className="block text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-2">
            Estimated Nutrition
          </label>
          <div className="grid grid-cols-4 gap-2">
            {nutritionItems.map((n) => (
              <div key={n.key} className="bg-card rounded-2xl p-3 text-center border border-border/40 shadow-soft">
                <div className={`text-xl font-bold ${n.color}`}>{n.value}</div>
                <div className="text-[10px] font-medium text-muted-foreground mt-0.5">{n.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Ingredients */}
        <div className="mb-5">
          <label className="block text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-2">
            Ingredients ({ingredients.length})
          </label>
          <div className="bg-card rounded-2xl border border-border/40 shadow-soft overflow-hidden divide-y divide-border/40">
            {ingredients.map((ing, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-2.5">
                <div className="w-2 h-2 rounded-full bg-primary/60 flex-shrink-0" />
                <input
                  value={ing}
                  onChange={(e) => {
                    const updated = [...ingredients];
                    updated[i] = e.target.value;
                    setIngredients(updated);
                  }}
                  className="flex-1 bg-transparent text-foreground text-sm focus:outline-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="mb-8">
          <label className="block text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-2">
            Instructions ({instructions.length} steps)
          </label>
          <div className="space-y-2">
            {instructions.map((step, i) => (
              <div key={i} className="flex gap-3 bg-card rounded-2xl border border-border/40 shadow-soft p-3.5">
                <span className="w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                <textarea
                  value={step}
                  onChange={(e) => {
                    const updated = [...instructions];
                    updated[i] = e.target.value;
                    setInstructions(updated);
                  }}
                  rows={2}
                  className="flex-1 bg-transparent text-foreground text-sm focus:outline-none resize-none leading-relaxed"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Save */}
        <div className="sticky bottom-20 bg-background/80 backdrop-blur-md py-4 -mx-5 px-5 border-t border-border/40">
          <button
            onClick={handleSave}
            disabled={saving}
            className="w-full py-3.5 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm shadow-warm hover:shadow-lg hover:opacity-95 transition-all active:scale-[0.98] disabled:opacity-60"
          >
            {saving ? (
              <span className="animate-pulse-soft">Saving to library...</span>
            ) : (
              "Confirm & Save to Library ✓"
            )}
          </button>
          <div className="flex items-center justify-center gap-1.5 mt-2.5">
            <AlertCircle className="w-3 h-3 text-muted-foreground" />
            <span className="text-[11px] text-muted-foreground">Nutrition values are AI estimates</span>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default ParseReviewPage;
