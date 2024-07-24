import ErrorMessage from './ErrorMessage'
import FoodItems from './FoodItems'
import FoodInput from "./FoodInput";
import { useState } from "react"


function ProductAllList() {

  //let foodItems = ["Dal","Roti","Milk","Rice","Ghee"];

  let [foodItems, setFoodItems] = useState(["Dal","Roti","Milk","Rice","Ghee"]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return  <>
  <h3>Healthy Food</h3>
  <FoodInput handleKeyDown={onKeyDown}></FoodInput>
  <ErrorMessage foodItems={foodItems}/>
  <FoodItems  foodItems={foodItems}/>  
  </>
  }
  
  export default ProductAllList;