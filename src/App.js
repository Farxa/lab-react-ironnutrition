import './App.css';
import { useState } from 'react';
import foodsArr from "./foods.json";
import FoodBox from './componants/FoodBox';
import AddFoodForm from './componants/AddFoodForm';
import { Divider } from "antd";


function App() {

  const [foods, setFoods] = useState(foodsArr);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleSubmit = e => {
    // to prevent form submission when a button is clicked
    //https://stackoverflow.com/questions/39809943/react-preventing-form-submission
    e.preventDefault();
    const addedFood = { name, image, calories, servings };
    setFoods(foods => [addedFood, ...foods])
  }

  const handleNameChange = event => {
    setName(event.target.value)
  }

  const handleImgChange = event => {
    setImage(event.target.value)
  }

  const handleCalChange = event => {
    setCalories(event.target.value)
  }

  const handleServingsChange = event => {
    setServings(event.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
        IronNutrition
        </h1>
      </header>
      <div>
        
        <Divider>Add Food Entry</Divider>
          <AddFoodForm name={name} image={image} calories={calories} servings={servings} 
            handleSubmit={handleSubmit} handleNameChange={handleNameChange} 
            handleImgChange={handleImgChange} handleCalChange={handleCalChange} 
            handleServingsChange={handleServingsChange}/>

        <Divider>Food List</Divider>
        <FoodBox foods={foods}/>
      </div>  
    </div>
  );
}

export default App;
