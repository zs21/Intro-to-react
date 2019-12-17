import React from 'react';
import Select from 'react-select';

import Header from '../../components/Header';

import './Home.scss';

const Home = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'Suoka', label: 'Suoka' },
  ];

  return (
    <div className='home'>
      <Header title="Suoka">
        <Select options={options} />
      </Header>
    </div>
  );
}



export default Home;