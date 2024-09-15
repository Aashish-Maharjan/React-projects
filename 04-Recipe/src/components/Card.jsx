import { useNavigate } from "react-router-dom";

export default function Card({recipe}){
    const {thumbnail_url,name,topics,total_time_minutes,id,prep_time_minutes}=recipe;
    const navigate=useNavigate();
    const navigateToRecipePage=()=>{
        navigate(`/recipe/${id}`);
    }
    return(
        <div className="card" onClick={navigateToRecipePage}>
           
            <img src={thumbnail_url} alt=""/>
            <div className="card-content">
                <h3>{name}</h3>
                <div className="card-info">
                    <div className="tag">
                        {topics.length>0 ?<p>{topics[0].name}</p>:null}
                    </div>
                    <p className="time-text">{prep_time_minutes}mins</p>
                    {total_time_minutes?(
                        <p className="time-text">{total_time_minutes}mins</p>
                    ):null}
                </div>
            </div>        
        </div>
    ); 
}
