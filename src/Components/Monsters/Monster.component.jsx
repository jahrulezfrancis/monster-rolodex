import './monster.css'


export default function MonsterCardComp(props) {
    const { monsterImage, monsterName, monsterQuote, monsterEmail} = props;
    return (
        <div className="monster-card-container">
            < img src={monsterImage} alt="monster" />
            <h2>{monsterName}</h2>
            <h3>{monsterEmail}</h3>
            <p>{monsterQuote}</p>
        </div>
    )
}