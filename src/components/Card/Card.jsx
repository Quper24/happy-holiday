import CardBG from '../../img/card-bg.jpg';
import Image from '../Image/Image';
import Felicitation from '../Felicitation/Felicitation';
import style from './Card.module.css';

const Card = () => (
  <div className={style.card}>
    <div className={style.wrapper}>
      <div className={style.image}>
      <Image img={CardBG} />
      <Felicitation />
      </div>
    </div>
  </div>
);

export default Card;
