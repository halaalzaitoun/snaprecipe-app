import { User, BookOpen, ChefHat, Award, ChevronRight, Settings, Heart, Download, HelpCircle } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const stats = [
  { icon: BookOpen, label: "Recipes", value: "6" },
  { icon: ChefHat, label: "Collections", value: "5" },
  { icon: Award, label: "Streak", value: "12d" },
];

const menuItems = [
  { icon: Settings, label: "Settings" },
  { icon: Heart, label: "Dietary Preferences" },
  { icon: Download, label: "Export Recipes" },
  { icon: HelpCircle, label: "Help & Support" },
];

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-2xl mx-auto px-5 pt-8">
        <h1 className="text-3xl font-serif text-foreground mb-8">Profile</h1>

        {/* Avatar card */}
        <div className="flex items-center gap-4 p-5 bg-card rounded-2xl border border-border/40 shadow-card mb-6 animate-fade-in">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
            <User className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h2 className="font-bold text-lg text-foreground">Alex Chen</h2>
            <p className="text-sm text-muted-foreground">Home cook · Since Jan 2026</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {stats.map((stat, i) => (
            <div key={stat.label} className="bg-card rounded-2xl p-4 text-center border border-border/40 shadow-soft animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
              <stat.icon className="w-5 h-5 text-primary mx-auto mb-1.5" />
              <div className="text-xl font-bold text-foreground">{stat.value}</div>
              <div className="text-[10px] font-medium text-muted-foreground mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Menu */}
        <div className="bg-card rounded-2xl border border-border/40 shadow-soft overflow-hidden divide-y divide-border/40">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-warm-surface transition-colors group"
            >
              <item.icon className="w-[18px] h-[18px] text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="flex-1 text-sm font-medium text-foreground">{item.label}</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground/40" />
            </button>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default ProfilePage;
