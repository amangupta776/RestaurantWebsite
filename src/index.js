import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import MenuApi from './menuApi';

const AppWrapper = () => {
  const [menu, setMenu] = useState(MenuApi);
  const [originalMenu, setOriginalMenu] = useState(MenuApi);

  const Fillerdata = (category) => {
    if (category === "All") {
      setMenu(originalMenu);
    } else {
      const updatedList = originalMenu.filter((currC) => currC.category === category);
      setMenu(updatedList);
    }
  };

  return (
    <>
      <br />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary" onClick={() => Fillerdata("Beverage")}>Beverage</button>
          <button type="button" className="btn btn-primary" onClick={() => Fillerdata("Lunch")}>Lunch</button>
          <button type="button" className="btn btn-primary" onClick={() => Fillerdata("Dinner")}>Dinner</button>
          <button type="button" className="btn btn-primary" onClick={() => Fillerdata("All")}>All</button>
        </div>
      </div>
      <br />
      <App menu={menu} />
    </>
  );
};

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
