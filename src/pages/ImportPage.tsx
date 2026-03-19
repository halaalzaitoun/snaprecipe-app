import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Camera, Instagram, Type, PenLine, ArrowLeft, Upload, Sparkles, ChevronRight } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const importOptions = [
  {
    id: "screenshot",
    icon: Camera,
    title: "Upload Screenshot",
    desc: "Snap or upload a photo of any recipe",
    emoji: "📸",
  },
  {
    id: "instagram",
    icon: Instagram,
    title: "Instagram Link",
    desc: "Paste a link from Instagram",
    emoji: "🔗",
  },
  {
    id: "caption",
    icon: Type,
    title: "Paste Recipe Text",
    desc: "Copy-paste a caption or recipe",
    emoji: "📝",
  },
  {
    id: "manual",
    icon: PenLine,
    title: "Add Manually",
    desc: "Type your recipe from scratch",
    emoji: "✍️",
  },
];

const ImportPage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");

  const handleImport = () => {
    navigate("/parse-review", { state: { source: selectedOption } });
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-2xl mx-auto px-5 pt-8">
        {/* Header */}
        <button onClick={() => navigate(-1)} className="flex items-center gap-1.5 text-muted-foreground mb-6 hover:text-foreground transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back</span>
        </button>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-serif text-foreground">Import Recipe</h1>
              <p className="text-sm text-muted-foreground">We'll extract and organize it for you</p>
            </div>
          </div>
        </div>

        {/* Import options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {importOptions.map((opt, i) => (
            <button
              key={opt.id}
              onClick={() => setSelectedOption(opt.id)}
              className={`relative flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-200 text-left animate-fade-in ${
                selectedOption === opt.id
                  ? "border-primary bg-primary/5 shadow-warm"
                  : "border-transparent bg-card shadow-card hover:shadow-card-hover hover:border-border"
              }`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="text-2xl">{opt.emoji}</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm text-foreground">{opt.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{opt.desc}</p>
              </div>
              <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-colors ${selectedOption === opt.id ? "text-primary" : "text-muted-foreground/40"}`} />
            </button>
          ))}
        </div>

        {/* Input area */}
        {selectedOption && (
          <div className="animate-fade-in-up space-y-4">
            <div className="h-px bg-border/60" />
            
            {selectedOption === "screenshot" && (
              <label className="block cursor-pointer">
                <div className="border-2 border-dashed border-border hover:border-primary/40 rounded-2xl p-10 text-center transition-colors bg-warm-surface/50">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 mx-auto mb-3 flex items-center justify-center">
                    <Upload className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">Tap to upload a screenshot</p>
                  <p className="text-xs text-muted-foreground mt-1">JPG, PNG up to 10MB</p>
                </div>
              </label>
            )}

            {selectedOption === "instagram" && (
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Instagram URL
                </label>
                <input
                  placeholder="https://www.instagram.com/p/..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-card text-foreground placeholder:text-muted-foreground text-sm border border-border/60 shadow-soft focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                />
              </div>
            )}

            {selectedOption === "caption" && (
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Recipe Text
                </label>
                <textarea
                  placeholder="Paste the recipe caption or text here..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full p-4 rounded-2xl bg-card text-foreground placeholder:text-muted-foreground text-sm border border-border/60 shadow-soft focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 min-h-[140px] resize-none transition-all"
                />
              </div>
            )}

            {selectedOption === "manual" && (
              <div className="bg-warm-surface/50 rounded-2xl p-5 text-center">
                <p className="text-sm text-muted-foreground">You'll be able to fill in all recipe details on the next screen</p>
              </div>
            )}

            <button
              onClick={handleImport}
              className="w-full py-3.5 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm shadow-warm hover:shadow-lg hover:opacity-95 transition-all active:scale-[0.98]"
            >
              Parse Recipe →
            </button>
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  );
};

export default ImportPage;
