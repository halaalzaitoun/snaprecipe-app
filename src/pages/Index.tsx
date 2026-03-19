import { useState } from "react";
import { Search, Sparkles } from "lucide-react";
import RecipeCard from "@/components/RecipeCard";
import TagFilter from "@/components/TagFilter";
import BottomNav from "@/components/BottomNav";
import { mockRecipes } from "@/data/mockRecipes";

const Home = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = mockRecipes.filter((r) => {
    const matchesSearch = r.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      activeFilter === "All" || r.tags.some((t) => t.toLowerCase() === activeFilter.toLowerCase());
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-2xl mx-auto px-5 pt-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">SnapRecipe</span>
            </div>
            <h1 className="text-3xl font-serif text-foreground leading-tight">Your Recipes</h1>
          </div>
          <div className="text-right">
            <span className="text-2xl font-bold text-foreground">{mockRecipes.length}</span>
            <p className="text-xs text-muted-foreground">saved</p>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-5">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-muted-foreground" />
          <input
            type="text"
            placeholder="Search your recipes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-card text-foreground placeholder:text-muted-foreground text-sm border border-border/60 shadow-soft focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
          />
        </div>

        {/* Filters */}
        <div className="mb-6">
          <TagFilter active={activeFilter} onSelect={setActiveFilter} />
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {filtered.map((recipe, i) => (
            <RecipeCard key={recipe.id} recipe={recipe} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-warm-glow mx-auto mb-4 flex items-center justify-center">
              <Search className="w-6 h-6 text-muted-foreground" />
            </div>
            <p className="text-sm font-medium text-muted-foreground">No recipes found</p>
            <p className="text-xs text-muted-foreground mt-1">Try a different search or filter</p>
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  );
};

export default Home;
