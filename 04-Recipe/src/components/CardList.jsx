import Card from "./Card";

 export default function CardList({recipes}){
     console.log("Recipes:",recipes);
    return(
        <section className="cards">
            {recipes.map((recipe) =>(
                <Card key={recipe.id} recipe={recipe} />
            ))}
       </section>
    );
}
