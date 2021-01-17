import React from 'react';
import '../css/App.css';
import TotalTrees from '../components/TotalTrees';
import RedeemSelect from '../components/RedeemSelect';
import PointStatus from '../components/PointStatus';

function Home() {
  const points = 29500;

  return (
    <div>
      <PointStatus points={points} />
      <RedeemSelect points={points} />
      <TotalTrees />
    </div>
  );
}

export default Home;
