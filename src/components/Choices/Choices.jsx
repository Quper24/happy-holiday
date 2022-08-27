import { useState } from 'react';
import style from './Choices.module.css';
import { ReactComponent as MenIcon } from '../../img/men.svg';
import { ReactComponent as WomenIcon } from '../../img/women.svg';

const holidays = {
  newyear: 'Новый год',
  birthdayWomen: 'День рождения',
  birthdayMen: 'День рождения',
  womenday: '8 марта',
  knowledgeday: 'День знаний',
};

const Choices = (props) => {
  const [isOpenChoices, setIsOpenChoices] = useState(false);
  const [holiday, setHoliday] = useState('Выбрать праздник');
  const changeChoices = () => {
    setIsOpenChoices(!isOpenChoices);
  };

  const changeHoliday = (title) => {
    setHoliday(title);
    changeChoices();
  };

  return (
    <div className={style.wrapper}>
      <button className={style.button} onClick={changeChoices}>
        {holiday}
      </button>
      {isOpenChoices && (
        <ul className={style.list}>
          {Object.entries(holidays).map((item) => (
            <li
              className={style.item}
              key={item[0]}
              onClick={() => {
                changeHoliday(item[1]);
              }}
            >
              {item[1]}
              {item[0].includes('Women') ? (
                <WomenIcon />
              ) : (
                item[0].includes('Men') && <MenIcon />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Choices;
