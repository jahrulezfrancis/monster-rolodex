import { useState, useEffect, ChangeEvent } from 'react';
import './App.css';
import fetchData from './Utils/getData';
import SearchBar from './Components/Search-box/Search-box';
import CardList from './Components/Card-list/CardList';

export type Monsters = {
  id: string;
  name: string;
  email: string;
};

function App(): JSX.Element {
  const [monsters, setMonsters] = useState<Monsters[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    async function fetchUsers() {
      const user = await fetchData<Monsters[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(user);
    }
    fetchUsers();
  }, [monsters, searchTerm]);


  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchTerm);
    });

    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchTerm]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchTerm(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rholodex</h1>
      <SearchBar className='' placeholder='Search for Robo mons...' onChange={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;