# SnapRecipe Product Requirements Document (PRD)

---

## 1. Overview

SnapRecipe is a product that transforms unstructured recipe content from screenshots, social media, and notes into a clean, structured, and searchable recipe library.

The product focuses on reducing the gap between saving recipes and actually using them by making content organized, accessible, and actionable.

---

## 2. Problem

Recipes today are scattered across multiple sources:

- Screenshots saved on phones  
- Social media posts (e.g., Instagram reels, captions)  
- Notes and bookmarks  

This creates several challenges:

- Recipes are difficult to find later  
- Content is unstructured and inconsistent  
- Instructions are hard to follow  
- Nutritional information is often missing  

As a result, users save recipes but rarely use them.

---

## 3. Goals

### Primary Goals
- Enable users to convert unstructured recipe content into structured data  
- Make recipes easy to search, organize, and reuse  
- Reduce friction between saving and cooking  

### Success Metrics (MVP)
- % of users successfully importing a recipe  
- % of recipes edited after parsing (engagement with review step)  
- % of users saving recipes to their library  
- Search usage and successful retrieval rate  

---

## 4. Target Users

- Home cooks who frequently save recipes but struggle to reuse them  
- Users who collect recipes from social media  
- Users who want better organization and accessibility  
- Health-conscious users interested in nutritional insights  

---

## 5. Core User Flow

1. User imports a recipe (image, link, or text)  
2. System parses unstructured content into structured fields  
3. User reviews and edits extracted data  
4. Recipe is saved to a personal library  
5. User searches or filters recipes later  
6. User accesses recipe while cooking  

---

## 6. Features (MVP Scope)

### Input and Capture
- Import recipes via image, link, or text  
- Manual entry option  

### Parsing and Structuring
- Extract ingredients and instructions  
- Generate tags and metadata  
- Basic nutrition summary (mock)  

### Review and Editing
- Editable ingredients and instructions  
- User validation before saving  

### Organization and Retrieval
- Recipe library  
- Collections  
- Search and filtering  

---

## 7. Out of Scope (MVP)

- Full meal planning system  
- Grocery list automation  
- Advanced AI recommendations  
- Highly accurate nutrition calculations  
- Social or sharing features  

---

## 8. Key Product Decisions

- Focus on structuring content rather than planning meals  
- Include a review/edit step to ensure accuracy and build trust  
- Prioritize speed over perfect parsing accuracy  
- Treat search and organization as core value, not secondary features  
- Delay advanced AI features until sufficient structured data is available  

---

## 9. Risks and Challenges

- Parsing accuracy for unstructured inputs  
- User trust in extracted data  
- Handling inconsistent formats across sources  
- Balancing automation with user control  
- Ensuring search relevance with imperfect data  

---

## 10. Future Opportunities

- Meal planning based on nutrition goals and preferences  
- Grocery list generation  
- AI-powered ingredient substitutions  
- Personalized recipe recommendations  
- Barcode scanning for ingredient-level nutrition accuracy  
- Improved parsing using AI models  
