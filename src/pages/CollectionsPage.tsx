import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { mockCollections, mockRecipes } from "@/data/mockRecipes";
import BottomNav from "@/components/BottomNav";

const CollectionsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-lg mx-auto px-4 pt-6">
        <h1 className="text-2xl font-serif text-foreground mb-1">Collections</h1>
        <p className="text-sm text-muted-foreground mb-6">Organize your saved recipes</p>

        <div className="space-y-3">
          {mockCollections.map((col) => {
            const recipes = mockRecipes.filter((r) => r.collections.includes(col.id));
            return (
              <div
                key={col.id}
                className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border/50 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-2xl">
                  {col.emoji}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-sm text-foreground">{col.name}</h3>
                  <p className="text-xs text-muted-foreground">{recipes.length} recipes</p>
                </div>
                {recipes[0] && (
                  <img
                    src={recipes[0].image}
                    alt=""
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default CollectionsPage;
