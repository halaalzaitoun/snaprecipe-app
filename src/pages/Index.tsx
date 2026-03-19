import { useState } from "react";
import { Search } from "lucide-react";
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
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-lg mx-auto px-4 pt-6">
        {/* Header */}
        <div className="mb-5">
          <h1 className="text-2xl font-serif text-foreground">SnapRecipe</h1>
          <p className="text-sm text-muted-foreground mt-0.5">Your recipe library</p>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search recipes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground text-sm border-0 focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>

        {/* Filters */}
        <div className="mb-5">
          <TagFilter active={activeFilter} onSelect={setActiveFilter} />
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-2 gap-3">
          {filtered.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p className="text-sm">No recipes found</p>
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  );
};

export default Home;
