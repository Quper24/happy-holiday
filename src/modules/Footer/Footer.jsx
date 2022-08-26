import { ReactComponent as VKIcon } from '../../img/vk.svg';
import { ReactComponent as TGIcon } from '../../img/tg.svg';
import { ReactComponent as StumbleuponIcon } from '../../img/stumbleupon.svg';
import { ReactComponent as PinterestIcon } from '../../img/pinterest.svg';

const Footer = () => (
  <footer className='footer'>
    <div className='container footer__container'>
      <div className='footer__contacts'>
        <p>Design: Anastasia Ilina</p>
        <p>Сoder: Maksim Leskin</p>
        <p>© HBCard, 2022</p>
      </div>

      <ul className='footer__social'>
        <li className='footer__item'>
          <a href='https://vk.com/methed' className='footer__link'>
            <VKIcon />
          </a>
        </li>
        <li className='footer__item'>
          <a href='https://t.me/methed_chat_frontend' className='footer__link'>
            <TGIcon />
          </a>
        </li>
        <li className='footer__item'>
          <a href='https://pinterest.com/' className='footer__link'>
            <PinterestIcon />
          </a>
        </li>
        <li className='footer__item'>
          <a href='https://www.stumbleupon.com/' className='footer__link'>
            <StumbleuponIcon />
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
