const filters = ["All", "High Protein", "Dinner", "Dessert", "Quick Meal", "Breakfast", "Healthy"];

interface TagFilterProps {
  active: string;
  onSelect: (tag: string) => void;
}

const TagFilter = ({ active, onSelect }: TagFilterProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onSelect(f)}
          className={`whitespace-nowrap px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 ${
            active === f
              ? "bg-primary text-primary-foreground shadow-warm"
              : "bg-card text-secondary-foreground border border-border/60 hover:border-primary/30 hover:bg-warm-surface"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;
