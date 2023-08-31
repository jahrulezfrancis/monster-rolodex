import './monster.css'
import { Monsters } from '../../App';


type CardProps = {
    monster: Monsters;
}


export default function Card({ monster }: CardProps) {
    const { id, email, name } = monster
    return (
        <div className='card-container'>
            <img src={`http://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
            <h2>{name}</h2>
            <h3>{email}</h3>
        </div>
    )
}