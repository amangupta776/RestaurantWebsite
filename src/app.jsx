import React from 'react';
import './app.css'

export default function App({ menu }) {
  return (
    
        <div className="card-container">
      {menu.map((current) => (
        <div className="card" style={{ width: '18rem' }}>
          <img className="card-img-top" src={current.Image} alt="Card image cap"  />
          <div className="card-body">
            <h5 className="card-title">{current.title}</h5>
           <p className="card-title">{current.price}</p>
            <p className="card-text">{current.discription}</p>
            {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
      ))}
      </div>
    
    
  );
}