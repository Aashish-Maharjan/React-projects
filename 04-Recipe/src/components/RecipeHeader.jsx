import RecipeNutritionalFact from "../components/RecipeNutritionalFact";
import {AiOutlineFire} from "react-icons/ai"
import {CiWheat} from "react-icons/ci"
import {BiCheese,BiCake} from "react-icons/bi"
import { GiRoastChicken } from "react-icons/gi";

export default function RecipeHeader(nutritionalFacts){
    const nutiritionalFactsArray=[
        {
            id:1,
            amount:nutritionalFacts.calories,
            category:"calories",
            Icon:AiOutlineFire
        },
        {
            id:2,
            amount:nutritionalFacts.carbohydrates,
            category:"carbs",
            Icon:CiWheat
        },
        {
            id:3,
            amount:nutritionalFacts.fats,
            category:"fats",
            Icon:BiCheese
        },
        {
            id:4,
            amount:nutritionalFacts.protines,
            category:"protines",
            Icon:GiRoastChicken
        },
        {
            id:5,
            amount:nutritionalFacts.sugar,
            category:"sugar",
            Icon:BiCake
        }
    ]
    return(
        <div className="recipe-header">
        <h1>asdhasdahvbsd</h1>
        <div className="nutritional-facts-container">
        {nutiritionalFactsArray.map(({Icon,id,amount,category})=>(
        <RecipeNutritionalFact fact={{amount,category}} key={id}>
            <Icon/>
        </RecipeNutritionalFact>
        ))}
        </div>
    </div>
    );
}