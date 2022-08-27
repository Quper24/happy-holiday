import { ReactComponent as VKIcon } from '../../img/vk.svg';
import { ReactComponent as TGIcon } from '../../img/tg.svg';
import { ReactComponent as StumbleuponIcon } from '../../img/stumbleupon.svg';
import { ReactComponent as PinterestIcon } from '../../img/pinterest.svg';
import Container from '../Container/Container';
import style from './Footer.module.css';

const Footer = () => (
  <footer className={style.footer}>
    <Container>
      <div className={style.wrapper}>
        <div className={style.contacts}>
          <p>
            Design: <a href='https://t.me/Mrshmallowww'>Anastasia Ilina</a>
          </p>
          <p>
            Сoder: <a href='https://t.me/quper24'>Maksim Leskin</a>
          </p>
          <p>© HBCard, 2022</p>
        </div>

        <ul className={style.social}>
          <li className={style.item}>
            <a href='https://vk.com/methed' className={style.link}>
              <VKIcon />
            </a>
          </li>
          <li className={style.item}>
            <a
              href='https://t.me/methed_chat_frontend'
              className={style.link}
            >
              <TGIcon />
            </a>
          </li>
          <li className={style.item}>
            <a href='https://pinterest.com/' className={style.link}>
              <PinterestIcon />
            </a>
          </li>
          <li className={style.item}>
            <a href='https://www.stumbleupon.com/' className={style.link}>
              <StumbleuponIcon />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  </footer>
);

export default Footer;
