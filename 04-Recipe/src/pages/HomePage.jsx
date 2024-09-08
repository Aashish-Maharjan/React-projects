import Header from "../components/header";
import CardList from "../components/CardList";
import useFetchRecipes from "../hooks/useFetchRecipes";
import Loading from "../components/Loading";



export default function HomePage(){
  const[recipes]=useFetchRecipes();
    return (
        <>
          <Header />
          {/*<CardList recipes={recipes}/>*/}
          <Loading />

        </>
        );
}