import { useState, useEffect } from 'react';
import './App.css';
import MonsterCardComp from './Components/Monsters/Monster.component';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((monstList) => { setMonsters(monstList) })
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value.toLocaleLowerCase())
  }
  return (
    <div className="App">
      <input className='search-box' onChange={handleChange} style={{ height: '35px' }} type='search' placeholder='Search Monsters' />
      <MonsterCardComp searchTerm={searchTerm} monsters={monsters} />
    </div >
  );
}

export default App;
