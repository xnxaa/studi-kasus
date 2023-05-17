import logo from './logo.png';
// import img from './components/img/'
import './App.css';
import React from 'react';
import Car from './components/Car';

function App() {
  return (
    <div>
      <header>
        <img src={logo} className="uk" alt="logo" />
        <h1 className="judul">
          Zilla Showroom
        </h1>
        <div className="card">
          <p className="cari">
          Cari Mobil Impian Anda
          </p>
          <div className="search">
            <p className="s">Search</p>
          </div>
          
          <div className="cardname">
            
            <p className="card-name"></p>
          </div>
        </div>
        <Car/>
      </header>
  
    </div>
  );
};

export default App;
