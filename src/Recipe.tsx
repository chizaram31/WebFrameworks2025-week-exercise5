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

interface IRecipeProps {
    recipeData: IRecipe;
}

const Recipe: React.FC<IRecipeProps> = ({ recipeData }) => {
    return (
        <div className="recipe-box">
            <h3>{recipeData.name}</h3>
            <img src={recipeData.image} alt={recipeData.name} />
            <p>Servings: {recipeData.servings}</p>
            <p>Prep Time: {recipeData.prepTimeMinutes} mins</p>
            <p>Cook Time: {recipeData.cookTimeMinutes} mins</p>
            <p>Difficulty: {recipeData.difficulty}</p>

            <h4>Ingredients:</h4>
            <ul>
                {recipeData.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>

            <h4>Instructions:</h4>
            <ol>
                {recipeData.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ol>
        </div>
    );
};

export default Recipe;
