import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchRecipe from "../hooks/useFetchRecipe";
import RecipeHeader from "../components/RecipeHeader";
import Loading from "../components/Loading";


export default function RecipePage() {
  const { id } = useParams();
  const [fetchRecipe, { recipe, loading, error }] = useFetchRecipe();

  useEffect(() => {
    fetchRecipe(id);
  }, []);
  if(loading)return <Loading/>
  if(error)return <h1>{error}</h1>
  
  return (
  <div>
    {recipe && (
      <>
        <RecipeHeader nutritionalFacts={recipe.nutrition}/>
      </>
    )
    }
  </div>);
}