import { useState } from "react";

function Header(handleSearch){
  const [searchTerm,setSearchTerm]=useState("");

  const handleClick=()=>{
    handleSearch=(searchTerm);
    setSearchTerm("");
  }

    return(
        <header className="main_header">
        <div className="text-container">
          <h1 className="header-title">
            Look for <span>Banger</span>Food 
          </h1>

          <p className="header-description">
          aisyhbdfawrejknafoqanweodlamsd,eqficmkals,dx
          </p>

          <div className="header-input-container">

          <input type="text" placeholder="Find a recipe."
          onChange={(e)=>setSearchTerm(e.target.value)}
          value={searchTerm}/>

          <button onClick={handleClick}>Search</button>
          </div>
        </div>
        <div>
          <img src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg"
          alt=""className="main_img"/>
        </div>
     </header>
    )

}

export default Header