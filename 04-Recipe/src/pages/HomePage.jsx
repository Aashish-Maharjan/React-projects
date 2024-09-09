import Header from "../components/header";
import CardList from "../components/CardList";
import useFetchRecipes from "../hooks/useFetchRecipes";
import Loading from "../components/Loading";
import { useEffect } from "react";



export default function HomePage(){
  const[fetchRecipes,{data,loading,error}]=useFetchRecipes();
  useEffect(()=>{
		fetchRecipes();
  },[]);
  
  const handleSearch=(searchTerm)=>{
    console.log("called",searchTerm);
    if(searchTerm){
      fetchRecipes(searchTerm);
    }
  };

    return (
        <>
          <Header handleSearch={handleSearch}/>
          {loading && <Loading />}
          {data && <CardList recipes={recipes}/>}
          {error && <p>{error}</p>}
        </>
        );
}