import './App.css';
import { useState } from 'react';
import foodsArr from "./foods.json";
import FoodBox from './componants/FoodBox';


function App() {

  const [foods, setFoods] = useState(foodsArr);

  

  return (
    <div className="App">
      <header className="App-header">
        <h1>
        IronNutrition
        </h1>
      </header>
      <div>
        <h3>Food List</h3>
        <FoodBox foods={foods}/>
      </div>  
    </div>
  );
}

export default App;
