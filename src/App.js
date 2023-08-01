import { useState, useEffect } from 'react';
import './App.css';
import MonsterCardComp from './Components/Monsters/Monster.component';
import Picture from "./Media/J5P.png"

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => { setMonsters(users) })
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value.toLocaleLowerCase())
  }
  return (
    <div className="App">
      <input onChange={handleChange} style={{ height: '35px' }} type='search' placeholder='Search Monsters' />

      <MonsterCardComp searchTerm={searchTerm} monsters={monsters} />
      {/* <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", }}>
        {
          monsters.map((monst) => {
            return (
              <div style={{ display: "inline" }} key={monst.id}>
                {(monst.name.toLocaleLowerCase().includes(searchTerm)) ?
                  <div style={{ display: "flex" }}>
                    <MonsterCardComp monsterQuote={monst.company.catchPhrase} monsterEmail={monst.email} monsterImage={Picture} monsterName={monst.name} />
                  </div>
                  :
                  ""
                }
              </div>
            )
          })
        }
      </div> */}

    </div >
  );
}

export default App;
