import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar-holders">
      <ul className="contacts">
        <li className="phone">
          <i className="fas fa-phone-alt" />
          +7(7172)25-20-60/ +7(708)425-20-60
        </li>
        <li className="address">
          <i className="fas fa-map-marker-alt" />
          г. Нур-Султан, ул. Ж.Нажимеденова 20
        </li>
        <li className="email">
          <i className="far fa-envelope" />
          info@nrb-consulting.kz
        </li>
      </ul>
      <hr />
      <ul className="menu">
        <li>О компании</li>
        <li>Услуги</li>
        <li>Преимущества</li>
        <li>Контакты</li>
      </ul>
    </div>
  );
};

export default Navbar;
