import pastaImg from "@/assets/recipe-pasta.jpg";
import pokebowlImg from "@/assets/recipe-pokebowl.jpg";
import browniesImg from "@/assets/recipe-brownies.jpg";
import chickenImg from "@/assets/recipe-chicken.jpg";
import smoothieImg from "@/assets/recipe-smoothie.jpg";
import avotoastImg from "@/assets/recipe-avotoast.jpg";

export interface Recipe {
  id: string;
  title: string;
  image: string;
  tags: string[];
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  prepTime: string;
  cookTime: string;
  servings: number;
  source: "screenshot" | "instagram" | "link" | "manual";
  sourceLabel: string;
  ingredients: string[];
  instructions: string[];
  collections: string[];
}

export interface Collection {
  id: string;
  name: string;
  emoji: string;
  count: number;
  color: string;
}

export const mockRecipes: Recipe[] = [
  {
    id: "1",
    title: "Cherry Tomato Basil Pasta",
    image: pastaImg,
    tags: ["dinner", "quick meal", "vegetarian"],
    calories: 420,
    protein: 14,
    carbs: 58,
    fat: 16,
    prepTime: "10 min",
    cookTime: "15 min",
    servings: 4,
    source: "instagram",
    sourceLabel: "@healthyeats",
    ingredients: [
      "400g spaghetti",
      "2 cups cherry tomatoes, halved",
      "4 cloves garlic, minced",
      "1/4 cup fresh basil leaves",
      "1/4 cup parmesan cheese, grated",
      "3 tbsp olive oil",
      "Salt and pepper to taste",
      "Red pepper flakes (optional)",
    ],
    instructions: [
      "Cook spaghetti according to package directions. Reserve 1 cup pasta water.",
      "Heat olive oil in a large pan over medium heat. Add garlic and cook 1 minute.",
      "Add cherry tomatoes and cook 5-7 minutes until softened and bursting.",
      "Toss in cooked pasta with a splash of pasta water. Stir to combine.",
      "Top with fresh basil, parmesan, and red pepper flakes.",
    ],
    collections: ["weeknight-dinners", "favorites"],
  },
  {
    id: "2",
    title: "Salmon Poke Bowl",
    image: pokebowlImg,
    tags: ["high protein", "dinner", "healthy"],
    calories: 510,
    protein: 38,
    carbs: 52,
    fat: 18,
    prepTime: "20 min",
    cookTime: "15 min",
    servings: 2,
    source: "screenshot",
    sourceLabel: "Saved from TikTok",
    ingredients: [
      "300g sushi-grade salmon, cubed",
      "2 cups cooked sushi rice",
      "1 avocado, sliced",
      "1/2 cup edamame",
      "2 tbsp soy sauce",
      "1 tbsp sesame oil",
      "1 tsp rice vinegar",
      "Sesame seeds and nori for garnish",
    ],
    instructions: [
      "Marinate salmon cubes in soy sauce, sesame oil, and rice vinegar for 10 min.",
      "Divide sushi rice between two bowls.",
      "Arrange salmon, avocado, and edamame on top of rice.",
      "Drizzle remaining marinade over bowls.",
      "Garnish with sesame seeds and nori strips.",
    ],
    collections: ["high-protein", "meal-prep"],
  },
  {
    id: "3",
    title: "Fudgy Chocolate Brownies",
    image: browniesImg,
    tags: ["dessert", "baking"],
    calories: 280,
    protein: 4,
    carbs: 34,
    fat: 16,
    prepTime: "15 min",
    cookTime: "25 min",
    servings: 12,
    source: "link",
    sourceLabel: "sallybakingaddiction.com",
    ingredients: [
      "1/2 cup butter, melted",
      "1 cup sugar",
      "2 eggs",
      "1 tsp vanilla extract",
      "1/3 cup cocoa powder",
      "1/2 cup all-purpose flour",
      "1/4 tsp salt",
      "1/4 tsp baking powder",
      "1/2 cup chocolate chips",
    ],
    instructions: [
      "Preheat oven to 350°F. Line an 8x8 pan with parchment paper.",
      "Mix melted butter with sugar, eggs, and vanilla.",
      "Stir in cocoa, flour, salt, and baking powder until combined.",
      "Fold in chocolate chips. Pour batter into prepared pan.",
      "Bake 25 minutes. Cool completely before cutting.",
    ],
    collections: ["desserts"],
  },
  {
    id: "4",
    title: "Herb Grilled Chicken & Veggies",
    image: chickenImg,
    tags: ["high protein", "dinner", "meal prep"],
    calories: 380,
    protein: 42,
    carbs: 18,
    fat: 14,
    prepTime: "15 min",
    cookTime: "25 min",
    servings: 4,
    source: "manual",
    sourceLabel: "Added manually",
    ingredients: [
      "4 chicken breasts",
      "2 cups butternut squash, cubed",
      "1 cup cherry tomatoes",
      "2 tbsp olive oil",
      "2 tsp dried rosemary",
      "1 tsp garlic powder",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Preheat grill or oven to 400°F.",
      "Season chicken with rosemary, garlic powder, salt, and pepper.",
      "Toss vegetables with olive oil and seasoning.",
      "Grill chicken 6-7 min per side until internal temp reaches 165°F.",
      "Roast vegetables alongside for 20-25 minutes until tender.",
    ],
    collections: ["high-protein", "meal-prep", "weeknight-dinners"],
  },
  {
    id: "5",
    title: "Green Smoothie Bowl",
    image: smoothieImg,
    tags: ["breakfast", "healthy", "quick meal"],
    calories: 310,
    protein: 12,
    carbs: 48,
    fat: 8,
    prepTime: "5 min",
    cookTime: "0 min",
    servings: 1,
    source: "instagram",
    sourceLabel: "@smoothiequeen",
    ingredients: [
      "1 frozen banana",
      "1 cup spinach",
      "1/2 cup frozen mango",
      "1/2 cup almond milk",
      "1 tbsp chia seeds",
      "Granola, berries, banana slices for topping",
    ],
    instructions: [
      "Blend frozen banana, spinach, mango, and almond milk until thick and smooth.",
      "Pour into a bowl.",
      "Top with granola, fresh berries, banana slices, and chia seeds.",
    ],
    collections: ["favorites"],
  },
  {
    id: "6",
    title: "Avocado Toast with Poached Eggs",
    image: avotoastImg,
    tags: ["breakfast", "high protein", "quick meal"],
    calories: 340,
    protein: 18,
    carbs: 28,
    fat: 20,
    prepTime: "5 min",
    cookTime: "5 min",
    servings: 1,
    source: "screenshot",
    sourceLabel: "Saved from Pinterest",
    ingredients: [
      "2 slices sourdough bread",
      "1 ripe avocado",
      "2 eggs",
      "1 tbsp white vinegar",
      "Chili flakes, microgreens, salt",
    ],
    instructions: [
      "Toast sourdough slices until golden.",
      "Mash avocado with a pinch of salt and spread on toast.",
      "Bring water to a gentle simmer, add vinegar. Swirl and drop eggs in for 3-4 min.",
      "Place poached eggs on avocado toast. Top with chili flakes and microgreens.",
    ],
    collections: ["favorites", "high-protein"],
  },
];

export const mockCollections: Collection[] = [
  { id: "weeknight-dinners", name: "Weeknight Dinners", emoji: "🍽️", count: 3, color: "tag-dinner" },
  { id: "meal-prep", name: "Meal Prep", emoji: "📦", count: 2, color: "tag-quick" },
  { id: "high-protein", name: "High Protein", emoji: "💪", count: 3, color: "tag-protein" },
  { id: "desserts", name: "Desserts", emoji: "🍫", count: 1, color: "tag-dessert" },
  { id: "favorites", name: "Favorites", emoji: "❤️", count: 3, color: "primary" },
];

export const tagColors: Record<string, string> = {
  "high protein": "bg-tag-protein/15 text-tag-protein",
  dinner: "bg-tag-dinner/15 text-tag-dinner",
  dessert: "bg-tag-dessert/15 text-tag-dessert",
  "quick meal": "bg-tag-quick/15 text-tag-quick",
  breakfast: "bg-tag-breakfast/15 text-tag-breakfast",
  baking: "bg-tag-dessert/15 text-tag-dessert",
  healthy: "bg-accent/15 text-accent",
  vegetarian: "bg-accent/15 text-accent",
  "meal prep": "bg-tag-quick/15 text-tag-quick",
  snack: "bg-tag-snack/15 text-tag-snack",
};
