function Card({recepies}){
    const {image,name,tag,numberOfMinutes}=recepies;
    return(
        <div className="card">
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