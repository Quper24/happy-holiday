import Button from '../Button/Button';
import Choices from '../Choices/Choices';
import Container from '../Container/Container';
import style from './Header.module.css';

const Header = () => (
  <header className={style.header}>
    <Container>
      <div className={style.wrapper}>
        <div className={style.buttons}>
          <Button text={'Поменять поздравление'} />

          <Button text={'Поменять фон'} />
        </div>

        <Choices />
      </div>
    </Container>
  </header>
);

export default Header;
