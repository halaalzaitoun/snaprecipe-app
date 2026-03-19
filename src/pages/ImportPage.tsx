import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Camera, Instagram, Type, PenLine, ArrowLeft, Upload } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const importOptions = [
  {
    id: "screenshot",
    icon: Camera,
    title: "Upload Screenshot",
    desc: "Snap or upload a photo of a recipe",
    color: "bg-primary/10 text-primary",
  },
  {
    id: "instagram",
    icon: Instagram,
    title: "Paste Instagram Link",
    desc: "Import from an Instagram post or reel",
    color: "bg-tag-dessert/10 text-tag-dessert",
  },
  {
    id: "caption",
    icon: Type,
    title: "Paste Recipe Text",
    desc: "Copy-paste a caption or recipe text",
    color: "bg-tag-dinner/10 text-tag-dinner",
  },
  {
    id: "manual",
    icon: PenLine,
    title: "Add Manually",
    desc: "Type your own recipe from scratch",
    color: "bg-accent/10 text-accent",
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
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-lg mx-auto px-4 pt-6">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-muted-foreground mb-4">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back</span>
        </button>

        <h1 className="text-2xl font-serif text-foreground mb-1">Import Recipe</h1>
        <p className="text-sm text-muted-foreground mb-6">Choose how to add your recipe</p>

        <div className="space-y-3">
          {importOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelectedOption(opt.id)}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition-all text-left ${
                selectedOption === opt.id
                  ? "border-primary bg-primary/5 shadow-sm"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${opt.color}`}>
                <opt.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-foreground">{opt.title}</h3>
                <p className="text-xs text-muted-foreground">{opt.desc}</p>
              </div>
            </button>
          ))}
        </div>

        {selectedOption && (
          <div className="mt-6 animate-fade-in">
            {selectedOption === "screenshot" && (
              <div className="border-2 border-dashed border-border rounded-2xl p-8 text-center">
                <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Tap to upload a screenshot</p>
                <p className="text-xs text-muted-foreground mt-1">JPG, PNG up to 10MB</p>
              </div>
            )}
            {(selectedOption === "instagram" || selectedOption === "caption") && (
              <textarea
                placeholder={
                  selectedOption === "instagram"
                    ? "Paste Instagram link here..."
                    : "Paste recipe text or caption here..."
                }
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full p-4 rounded-2xl bg-secondary text-foreground placeholder:text-muted-foreground text-sm border-0 focus:outline-none focus:ring-2 focus:ring-primary/30 min-h-[120px] resize-none"
              />
            )}

            <button
              onClick={handleImport}
              className="w-full mt-4 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-sm hover:opacity-90 transition-opacity"
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
