import Card from '../Card/MonsterCard';
import './Card-list.style.css';
import { Monsters } from '../../App';

type CardListProps = {
  monsters: Monsters[];
};

const CardList = ({ monsters }: CardListProps) => (
  <div className='card-list'>
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;