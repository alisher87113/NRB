import React from 'react';
import icon from '../../img/XMLID 888 (1).png';
import './Thirdection.css';

const ThridSection = () => {
  return (
    <div className="container">
      <h1>Наши услуги</h1>
      <div className="grid">
        <div>
          <img alt="" src={icon} />
          <p>
            Бесплатные консультации <br />
            во всех областях права
          </p>
        </div>
        <div>
          <img alt="" src={icon} />
          <p>Уголовное право и процесс</p>
        </div>
        <div>
          <img alt="" src={icon} />
          <p>
            Консалтинг и аутсорсинг <br />
            управления пректами{' '}
          </p>
        </div>
        <div>
          <img alt="" src={icon} />
          <p>Трудовое право</p>
        </div>
        <div>
          <img alt="" src={icon} />
          <p>Интеллектуальное право</p>
        </div>
        <div>
          <p>Гражданское право и процесс</p>
        </div>
        <div>
          <img alt="" src={icon} />
          <p>Нотариальные услуги </p>
        </div>
        <div>
          <img alt="" src={icon} />
          <p>Спичрайтинг</p>
        </div>
        <div>
          <img alt="" src={icon} />
          <p>Корпоративное право</p>
        </div>
        <div>
          <img alt="" src={icon} />
          <p>Иммиграционное право</p>
        </div>
        <div>
          <img alt="" src={icon} />
          <p>Административное право и процесс</p>
        </div>
        <div>
          <img alt="" src={icon} />
          <p>Коллекторские услуги </p>
        </div>
        <div>
          <img alt="" src={icon} />
          <p>Налоговое право</p>
        </div>
        <div>
          <img alt="" src={icon} />
          <p>Договорное прво</p>
        </div>
      </div>
    </div>
  );
};

export default ThridSection;
