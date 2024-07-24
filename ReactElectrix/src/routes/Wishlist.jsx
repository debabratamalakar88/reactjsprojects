import WishlistItem from "../components/WishlistItem";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const itemIndex = wishlistItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <main>
     
      {finalItems.length > 0 &&
      <div className="items-container">
          {finalItems.map((item) => (
            <WishlistItem key={item.id} item={item} />
          ))}
        
        </div>
      }

    {finalItems.length === 0 &&
      <div className="items-container">  
          <center className="emptyBag"><h1>Your Wishlist is Empty..</h1></center>  
       
        </div>
      }

    </main>
  );
};

export default Wishlist;
