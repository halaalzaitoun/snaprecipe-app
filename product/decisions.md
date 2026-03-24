# Product Decisions and Tradeoffs

This document outlines the key product decisions made while building SnapRecipe, including tradeoffs, assumptions, and areas intentionally deferred.

---

## 1. Focus on Structuring Recipes Instead of Full Meal Planning

### Decision
Prioritized transforming unstructured recipe content into structured data rather than building full meal planning features in the MVP.

### Rationale
The core problem is not planning meals — it is that users cannot effectively use the recipes they already save.

Without structured, usable recipes:
- meal planning becomes difficult
- search and organization are limited
- users lose trust in their saved content

### Tradeoff
- Delayed higher-value features like meal planning and grocery lists
- Focused on solving the foundational problem first

---

## 2. Support Multiple Input Types (Image, Link, Text)

### Decision
Allowed users to import recipes from screenshots, links, or manual input.

### Rationale
Recipes come from many sources, especially:
- screenshots (social media)
- links (blogs)
- copied text

Supporting multiple inputs reduces friction and aligns with real user behavior.

### Tradeoff
- Increased complexity in parsing logic
- Inconsistent input quality

---

## 3. Include a Review and Edit Step

### Decision
Users review and edit parsed recipes before saving.

### Rationale
Parsing unstructured content is inherently imperfect.

Allowing edits:
- builds trust in the system
- ensures accuracy
- gives users control over their data

### Tradeoff
- Adds an extra step in the flow
- Slightly increases friction

---

## 4. Prioritize Speed Over Perfect Parsing Accuracy

### Decision
Used simplified parsing logic to prioritize responsiveness and usability.

### Rationale
Users value:
- quick results
- immediate feedback

Perfect parsing would require:
- more complex models
- longer processing times

### Tradeoff
- Some inaccuracies in extracted data
- Reliance on user correction

---

## 5. Include Nutrition as an Estimate (Not Fully Accurate)

### Decision
Added a lightweight nutrition summary instead of a fully accurate system.

### Rationale
Nutrition is valuable for:
- decision making
- health-conscious users

However, full accuracy requires:
- detailed ingredient data
- external integrations
- significant complexity

### Tradeoff
- Nutrition values are approximate
- Accuracy is not guaranteed in MVP

---

## 6. Enable Search and Organization as Core Value

### Decision
Focused on making recipes searchable and organized rather than just stored.

### Rationale
The key value of structuring recipes is enabling:
- fast retrieval
- filtering by tags or ingredients
- real-world usability while cooking

### Tradeoff
- Requires consistent data structure
- Dependent on parsing quality

---

## 7. Defer Advanced AI Features

### Decision
Did not include advanced AI features (e.g., recommendations, substitutions, planning) in the MVP.

### Rationale
These features depend on:
- high-quality structured data
- user behavior signals

Building them too early would reduce effectiveness.

### Tradeoff
- Less personalization in early versions
- Focus remains on core functionality

---

## 8. Keep Scope Focused on Individual Use (Not Social)

### Decision
Did not include social or sharing features in the MVP.

### Rationale
The problem being solved is personal:
- saving recipes
- organizing them
- actually using them

Adding social features would increase scope without addressing the core issue.

### Tradeoff
- No community or discovery layer
- Limited network effects

---

## Key Assumptions

- Users already save recipes but do not use them effectively  
- Reducing friction between saving and cooking increases usage  
- Structured data enables search, filtering, and long-term value  
- Users are willing to correct imperfect data if the value is clear  

---

## Future Considerations

As the product evolves, the following areas become important:

- Meal planning based on goals and preferences  
- Personalized recommendations  
- Ingredient-level intelligence and substitutions  
- Improved parsing using AI models  
- Nutrition accuracy through ingredient-level data  

These depend on building a strong foundation of structured, reliable recipe data.
