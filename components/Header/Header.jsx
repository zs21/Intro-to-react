import React from 'react';

import './Header.scss';

const Header = ({ title, children }) => {
  return(
    <header className='header'>
      <h1 className='header__title'>{title}</h1>
      <div className="header__content">{children}</div>
    </header>
  );
}

export default Header;
