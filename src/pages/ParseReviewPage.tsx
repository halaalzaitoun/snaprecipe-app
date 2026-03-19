import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
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

const ParseReviewPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(parsedRecipe.title);
  const [ingredients, setIngredients] = useState(parsedRecipe.ingredients);
  const [instructions, setInstructions] = useState(parsedRecipe.instructions);
  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      navigate("/");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-lg mx-auto px-4 pt-6">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-muted-foreground mb-4">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back</span>
        </button>

        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="w-5 h-5 text-primary" />
          <h1 className="text-2xl font-serif text-foreground">Review Recipe</h1>
        </div>
        <p className="text-sm text-muted-foreground mb-5">Edit any fields before saving</p>

        {/* Confidence */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-accent/10 mb-5">
          <CheckCircle2 className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-accent">
            {parsedRecipe.confidence}% parsing confidence
          </span>
        </div>

        {/* Title */}
        <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
          Recipe Title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 rounded-xl bg-secondary text-foreground text-sm border-0 focus:outline-none focus:ring-2 focus:ring-primary/30 mb-5"
        />

        {/* Nutrition */}
        <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
          Estimated Nutrition
        </label>
        <div className="grid grid-cols-4 gap-2 mb-5">
          {[
            { label: "Calories", value: parsedRecipe.nutrition.calories, unit: "kcal" },
            { label: "Protein", value: parsedRecipe.nutrition.protein, unit: "g" },
            { label: "Carbs", value: parsedRecipe.nutrition.carbs, unit: "g" },
            { label: "Fat", value: parsedRecipe.nutrition.fat, unit: "g" },
          ].map((n) => (
            <div key={n.label} className="bg-secondary rounded-xl p-3 text-center">
              <div className="text-lg font-bold text-foreground">{n.value}</div>
              <div className="text-[10px] text-muted-foreground">{n.label}</div>
            </div>
          ))}
        </div>

        {/* Ingredients */}
        <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
          Ingredients
        </label>
        <div className="space-y-2 mb-5">
          {ingredients.map((ing, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <input
                value={ing}
                onChange={(e) => {
                  const updated = [...ingredients];
                  updated[i] = e.target.value;
                  setIngredients(updated);
                }}
                className="flex-1 p-2 rounded-lg bg-secondary text-foreground text-sm border-0 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          ))}
        </div>

        {/* Instructions */}
        <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1.5">
          Instructions
        </label>
        <div className="space-y-2 mb-6">
          {instructions.map((step, i) => (
            <div key={i} className="flex gap-2">
              <span className="text-xs font-bold text-primary mt-2.5 flex-shrink-0 w-5">{i + 1}.</span>
              <textarea
                value={step}
                onChange={(e) => {
                  const updated = [...instructions];
                  updated[i] = e.target.value;
                  setInstructions(updated);
                }}
                rows={2}
                className="flex-1 p-2 rounded-lg bg-secondary text-foreground text-sm border-0 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              />
            </div>
          ))}
        </div>

        {/* Save */}
        <button
          onClick={handleSave}
          disabled={saving}
          className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-sm hover:opacity-90 transition-all disabled:opacity-60"
        >
          {saving ? (
            <span className="flex items-center justify-center gap-2">
              <span className="animate-pulse-soft">Saving...</span>
            </span>
          ) : (
            "Confirm & Save to Library ✓"
          )}
        </button>

        <div className="flex items-center justify-center gap-1.5 mt-3 mb-4">
          <AlertCircle className="w-3 h-3 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">Nutrition values are AI estimates</span>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default ParseReviewPage;
