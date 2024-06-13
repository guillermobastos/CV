import React from 'react';
import MyComponent from '../components/MyComponent';
import RainbowText from '@/components/RainbowText';

const Home: React.FC = () => {
  return (
    <div>
      {/* <RainbowText text={['GUILLERMO BASTOS', 'DATA SCIENCE 🤖']} /> */}
      <RainbowText text='GUILLERMO BASTOS - DATA SCIENCE/analyst' />
      <MyComponent />
    </div>
  );
};

export default Home;

