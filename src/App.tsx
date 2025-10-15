import { useState, useEffect } from 'react';
import RecipeTagList from './RecipeTagList';
import RecipeList from './RecipeList';

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

function App() {
    const [tags, setTags] = useState<string[]>([]);
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [recipes, setRecipes] = useState<IRecipe[]>([]);

    // Fetch recipe tags on component mount
    useEffect(() => {
        fetch('https://dummyjson.com/recipes/tags')
            .then((res) => res.json())
            .then((data) => setTags(data));
    }, []);

    // Fetch recipes when a tag is selected
    useEffect(() => {
        if (selectedTag) {
            fetch(`https://dummyjson.com/recipes/tag/${selectedTag}`)
                .then((res) => res.json())
                .then((data) => setRecipes(data.recipes));
        }
    }, [selectedTag]);

    return (
        <div>
            <h1>ACME Recipe O'Master</h1>
            {!selectedTag ? (
                <RecipeTagList tagList={tags} onSelectTag={setSelectedTag} />
            ) : (
                <RecipeList recipes={recipes} onBack={() => setSelectedTag(null)} />
            )}
        </div>
    );
}

export default App;
