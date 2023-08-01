import './monster.css'


export default function MonsterCardComp(props) {
    const { monsters, searchTerm } = props;
    // style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", width: '100%' }}
    return (
        <div className='card-list-container'>
            {monsters.map((monster) => {
                return (
                    (monster.name.toLocaleLowerCase().includes(searchTerm)) ?
                        <div className="monster-card-container">
                            <img src={`http://robohash.org/${monster.id}?set=set2&size=180x180`} alt="monster" />
                            <h2>{monster.name}</h2>
                            <h3>{monster.email}</h3>
                            <p>{monster.company.catchPhrase}</p>
                        </div>
                        :
                        null
                )
            })}
        </div>
    )
}