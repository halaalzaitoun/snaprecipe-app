import { useNavigate } from "react-router-dom";
import { Plus, ChevronRight } from "lucide-react";
import { mockCollections, mockRecipes } from "@/data/mockRecipes";
import BottomNav from "@/components/BottomNav";

const CollectionsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-2xl mx-auto px-5 pt-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h1 className="text-3xl font-serif text-foreground">Collections</h1>
            <p className="text-sm text-muted-foreground mt-0.5">Organize your saved recipes</p>
          </div>
          <button className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
            <Plus className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3">
          {mockCollections.map((col, i) => {
            const recipes = mockRecipes.filter((r) => r.collections.includes(col.id));
            return (
              <div
                key={col.id}
                className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border/40 shadow-card hover:shadow-card-hover transition-all cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-warm-surface flex items-center justify-center text-2xl shadow-soft">
                  {col.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{col.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{recipes.length} recipe{recipes.length !== 1 ? "s" : ""}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {recipes.slice(0, 3).map((r) => (
                      <img
                        key={r.id}
                        src={r.image}
                        alt=""
                        className="w-8 h-8 rounded-lg object-cover border-2 border-card"
                      />
                    ))}
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors" />
                </div>
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
