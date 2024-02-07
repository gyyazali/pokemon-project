import React from 'react';
import './index.css';

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr.results);
      });
  }, []);

  console.log(items);

  return (
    <div className="container">
      <main className="main">
        <h1>Pokemons</h1>
        <div className="items">
          {items.map((obj, i) => (
            <div key={i} className="item">
              <img src={obj.url} alt="poke-img" />
              <img src={obj.url} alt="" />
              <p>{obj.name}</p>
            </div>
          ))}
        </div>
        количество: {items.length}
      </main>
    </div>
  );
}

export default App;
