import './App.css';
import { useState } from 'react';
import foodsArr from "./foods.json";
import { v4 as uuid } from 'uuid';


function App() {

  const [foods, setFoods] = useState(foodsArr);

  const foodsList = foods.map(food => {
    return (
      <div key={ uuid()}>
        <p>{food.name}</p>
        <img src={food.image} width={80} />
      </div>
    )
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>
        IronNutrition
        </h1>
      </header>
      <div>
        <h3>Food List</h3>
        {foodsList}
      </div>  
    </div>
  );
}

export default App;
