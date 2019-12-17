import React from 'react';

import Header from '../../components/Header';

import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Header title="Suoka">
        <input type="text" />
      </Header>
    </div>
  );
}

export default Home;