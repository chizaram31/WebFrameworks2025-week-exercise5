

interface IRecipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
}

interface IRecipeTagListProps {
    tagList: string[];
    onSelectTag: (tagName: string) => void;
}

interface IRecipeTagProps {
    tagName: string;
    onSelectTag: (tagName: string) => void;
}

interface IRecipeListProps {
    recipes: IRecipe[];
}

interface IRecipeProps {
    recipeData: IRecipe;
}

export type { IRecipe, IRecipeTagListProps, IRecipeTagProps, IRecipeListProps, IRecipeProps };