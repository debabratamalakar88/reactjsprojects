import { BsFillPersonFill } from "react-icons/bs";
import { FaFaceGrinHearts, FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Header = () => {
  const bag = useSelector((store) => store.bag);
  const wishlist = useSelector((store) => store.wishlist);
  const pathname = useLocation().pathname;
  
  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="logo"
            src="images/logo.png"
            alt="Myntra Home"
          />
        </Link>
      </div>
     
      <nav className="nav_bar">
        <Link className={`${pathname==='/' && "active"}`}  to="/">Home</Link>
        <a href="#">Men</a>
        <a href="#">Women</a>
      </nav>
      <div className="search_bar">
        
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
        <span className="material-symbols-outlined search_icon">search</span>
      </div>
      <div className="action_bar">
        <div className="action_container">
          <BsFillPersonFill />
          <span className="action_name">Profile</span>
        </div>

        <Link className="action_container" to="/wishlist">
          <FaFaceGrinHearts />
          <span className="action_name">Wishlist</span>
          <span className="bag-item-count">{wishlist.length}</span>
          </Link>

        <Link className="action_container" to="/bag">
          <FaBagShopping />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
