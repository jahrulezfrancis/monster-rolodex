import './monster.css'


export default function MonsterCardComp(props) {
    const { monsterImage, monsterName, monsterQuote, monsterEmail, monsters, searchTerm } = props;
    return (monsters.map((monster) => {
        return (
            (monster.name.toLocaleLowerCase().includes(searchTerm)) ?
                <div className="monster-card-container">
                    < img src={monsterImage} alt="monster" />
                    <h2>{monster.name}</h2>
                    <h3>{monster.email}</h3>
                    <p>{monster.company.catchPhrase}</p>
                </div>

                : ""
        )
    })
    )
}