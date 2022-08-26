import Button from '../Button/Button';
import Choices from '../Choices/Choices';

const Header = () => (
  <header className='header'>
    <div className='container header__container'>
      <div className='header__button-wrapper'>
        <Button text={'Поменять поздравление'} />

        <Button text={'Поменять фон'} />
      </div>

      <Choices />
    </div>
  </header>
);

export default Header;
