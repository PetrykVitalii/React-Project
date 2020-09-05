import React from 'react';
import './App.css';
import Header from './mainComponents/header/Header';
import Main from './mainComponents/main/Main';
import Footer from './mainComponents/footer/Footer';

function App() {
  return (
    <div className='container'>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}


export default App;
