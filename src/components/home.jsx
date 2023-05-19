import React from "react";
import {useState} from "react";
import '../App.css';
import { carsData } from "./database";

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const filteredCars = carsData.filter((car) => {
      return car.nama.toLowerCase().includes(searchTerm.toLowerCase());
    });
  
  return (
    <div>
      <div className="card-search">
        <h2 className="text-card-search">Cari Mobil Impian Anda</h2>
        <input className="input-card-search" placeholder="Search" 
        value={searchTerm}
        onChange={handleSearch}
        />
      </div>
      <div className="card-product">
      {filteredCars.map((car) => (
          <div key={car.id} className="product-item">
            <img className="img" src={require(`../images/${car.path}`)} alt={car.nama}/>
            <div >
            <h4>{car.nama}</h4>
            <p><b>Merek: </b>{car.merek}</p>
            <p><b>Warna: </b>{car.warna}</p>
            <p><b>Tipe:  </b> {car.tipe}</p>
            <button className="button">LIHAT DETAIL</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

