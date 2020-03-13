import React, { useEffect } from 'react';
import Header from './Header';
import Slider from './Slider';
import Content from './Content';
import Footer from './Footer';
import './App.css';

function App() {

  useEffect(() => {
    console.log('react render');
    window.initialize();
  }, []);

  return (
    <div id="wrapper" className="clearfix">
      <Header />
      <Slider />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
