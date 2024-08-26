import { useNavigate } from "react-router-dom";

function Card({recepies}){
    const {image,name,tag,numberOfMinutes,id}=recepies;
    const navigate=useNavigate()
    const navigateToRecipePage=()=>{
        navigate(`/recipe/${id}`);
    }
    return(
        <div className="card" onClick={navigateToRecipePage}>
          <img src={image} alt=""/>
          <div className="card-content">
            <h3>{name}</h3>
            <div className="card-info">
                <div className="tag">
                    <p>{tag}</p>
                    </div>
                    <p className="time-text">{numberOfMinutes}minutes</p>
                </div>
            </div>        
        </div>
    ); 
}
export default Card;