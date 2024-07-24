import Item from './Item'
import { useState } from "react";

//function FoodItems(props) {

  const FoodItems = ({ foodItems }) => {
    let [activeItems, setActiveItems] = useState([]);
  
    let onBuyButton = (item, event) => {
      let newItems = [...activeItems, item];
      setActiveItems(newItems);
    };

  return  <>
  <ul className="list-group">
    {(foodItems).map((item) => (
       <Item
       key={item}
       foodItem={item}
       bought={activeItems.includes(item)}
       handleBuyButton={(event) => onBuyButton(item, event)}
     ></Item>
    ))}
   
  </ul>
  </>
  }
  
  export default FoodItems;