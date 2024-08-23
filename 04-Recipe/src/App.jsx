
import './App.css'

function App() {
  return (
   <div className="App">
     <main className="main_container">
     <header className="main_header">
        <div className="text-container">
          <h1 className="header-title">
            Look for <span>Banger</span>Food 
          </h1>
          <p className="header-description">
          aisyhbdfawrejknafoqanweodlamsd,eqficmkals,dx
          </p>
          <div className="header-input-container">
          <input type="text" placeholder="Find a recipe."/>
          <button>Search</button>
          </div>
        </div>
        <div>
          <img src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg"
          alt=""className="main_img"/>
        </div>
     </header>
     <section className="cards">
      <div className="card">
        <img src="https://img.delicious.com.au/nnzbvV91/w1200/del/2018/05/green-and-gold-rice-bowls-80254-2.jpg" alt=""/>
        <div className="card-content">
          <h3>Food Bowl</h3>
          <div className="card-info">
          <div className="tag">
          <p>dinner</p>
          </div>
          <p className="time-text">60mins</p>
        </div>
        </div>        
      </div>
    
     </section>
     </main>
   </div> 
  )
}

export default App
