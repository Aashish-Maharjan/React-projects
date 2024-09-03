import{useParams} from"react-router-dom";
//import { recipe } from "./CardList";

export default function RecipePage(){
    const {id}=useParams();
   // const recipe=recipe.find((r)=>r.id== parseInt(id));
    return(
        <div>
            {/*<h1>{recipe.name}</h1>*/}
        </div>
    );
}   