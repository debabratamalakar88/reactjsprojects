import { useDispatch, useSelector } from "react-redux";
import { wishlistActions } from "../store/wishlistSlice";


const WishlistItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleWishListRemoveItem = () => {
    dispatch(wishlistActions.removeFromWishlist(item.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>

        <button
          type="button"
          className="btn btn-add-bag btn-danger"
          onClick={handleWishListRemoveItem}        >
          Remove From Wishlist
        </button>
      
    </div>
  );
};

export default WishlistItem;
