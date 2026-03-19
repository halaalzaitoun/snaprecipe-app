const filters = ["All", "High Protein", "Dinner", "Dessert", "Quick Meal", "Breakfast", "Healthy"];

interface TagFilterProps {
  active: string;
  onSelect: (tag: string) => void;
}

const TagFilter = ({ active, onSelect }: TagFilterProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onSelect(f)}
          className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
            active === f
              ? "bg-primary text-primary-foreground shadow-sm"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;
