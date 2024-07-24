import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import { useSelector } from "react-redux";

const Bag = () => {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <main>
      

      {finalItems.length > 0 &&
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item) => (
            <BagItem item={item} />
          ))}
        </div>
        <BagSummary />
        </div>
      }

    {finalItems.length === 0 &&
      <div className="bag-page">       
          <center className="emptyBag"><h1>Your Cart is Empty..</h1></center>   
       
        </div>
      }
    
      
    </main>
  );
};

export default Bag;
