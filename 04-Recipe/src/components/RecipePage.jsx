import{useParams} from"react-router-dom";
import { recepies } from "./CardList";
/*
 */
export default function RecipePage(){
    const {id}=useParams();
    const recipe=recepies.find((r)=>r.id== parseInt(id));
    return(
        <div>
            <h1>{recipe.name}</h1>
        </div>
    )
}   