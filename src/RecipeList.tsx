import Recipe from './Recipe';

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

interface IRecipeListProps {
    recipes: IRecipe[];
    onBack: () => void;
}

const RecipeList: React.FC<IRecipeListProps> = ({ recipes, onBack }) => {
    return (
        <div>
            <button onClick={onBack}>Back to Tags</button>
            <h2>Recipes</h2>
            <div>
                {recipes.map((recipe) => (
                    <Recipe key={recipe.id} recipeData={recipe} />
                ))}
            </div>
        </div>
    );
};

export default RecipeList;
