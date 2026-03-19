import { User, BookOpen, ChefHat, Award } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-lg mx-auto px-4 pt-6">
        <h1 className="text-2xl font-serif text-foreground mb-6">Profile</h1>

        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h2 className="font-semibold text-foreground">Alex Chen</h2>
            <p className="text-sm text-muted-foreground">Home cook · Since Jan 2026</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { icon: BookOpen, label: "Recipes", value: "6" },
            { icon: ChefHat, label: "Collections", value: "5" },
            { icon: Award, label: "Streak", value: "12 days" },
          ].map((stat) => (
            <div key={stat.label} className="bg-card rounded-2xl p-4 text-center border border-border/50">
              <stat.icon className="w-5 h-5 text-primary mx-auto mb-1" />
              <div className="text-lg font-bold text-foreground">{stat.value}</div>
              <div className="text-[10px] text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          {["Settings", "Dietary Preferences", "Export Recipes", "Help & Support"].map((item) => (
            <button
              key={item}
              className="w-full text-left px-4 py-3 rounded-xl bg-card border border-border/50 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default ProfilePage;
