import Header from "../components/header";
import CardList from "../components/CardList";
import useFetchRecipes from "../hooks/useFetchRecipes";
import Loading from "../components/Loading";
import { useEffect } from "react";



export default function HomePage(){
  const[fetchRecipes,{recipes,loading,error}]=useFetchRecipes();
  
  useEffect(()=>{
		fetchRecipes();
  },[]);

  useEffect(()=>{
		
  },[recipes]);

  const handleSearch=(searchTerm)=>{
    
    if(searchTerm){
      fetchRecipes(searchTerm);
    }
  };

    return (
        <>
          <Header handleSearch={handleSearch}/>
          {loading && <Loading />}
          {recipes && <CardList recipes={recipes}/>}
          {error && <p>{error}</p>}
        </>
        );
}