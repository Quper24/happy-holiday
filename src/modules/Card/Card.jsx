import CardBG from '../../img/card-bg.jpg';

const Card = () => (
  <div className='card'>
    <div className='container card__container'>
      <div className='card__wrapper'>
        <img
          className='card__image'
          src={CardBG}
          alt='фон открытки'
          width='840'
          height='520'
        />
        <p className='card__text'>
          Поздравляю с днем рожденья!
          <br />
          Пусть будет жизнь полна веселья,
          <br />
          Не будет грусти и хлопот,
          <br />
          А только счастье круглый год!
          <br />
          <br />
          Желаю творческих успехов,
          <br />
          Прекрасных дней, улыбок, смеха.
          <br />
          Любви, душевного тепла,
          <br />
          Как сказка, чтобы жизнь была!
          <br />
        </p>
      </div>
    </div>
  </div>
);

export default Card;
