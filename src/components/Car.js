import React from 'react';
import data from './data'

const Car = ({ Data }) => {
  return (
    <div className="car">
      <img src={Data.path} alt={Data.nama} />
      <h3>{Data.nama}</h3>
      <p>Merk: {Data.merek}</p>
      <p>Warna: {Data.warna}</p>
      <p>Tipe: {Data.tipe}</p>
    </div>
  );
};

export default Car;