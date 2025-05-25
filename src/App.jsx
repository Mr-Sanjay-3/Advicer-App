
import React, {  useEffect, useState } from 'react';
import './App.scss';


import ThreedModel from './Components/ThreedModel';
import Advicer from './Components/Advicer';

function Loader() {
  return (
    <div className="full-page-loader">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
}

export const App = () => {
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => setPageLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (pageLoading) {
    return <Loader />;
  }

  return (

      <main>
        <ThreedModel />
        <Advicer />
      </main>
   
  );
};

export default App;
