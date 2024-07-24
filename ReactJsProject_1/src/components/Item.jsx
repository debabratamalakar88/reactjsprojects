import ItemStyle from './Item.module.css'

//function Item({foodItem}) {
const Item = ({ foodItem, bought, handleBuyButton }) => {
  
  return  <>      
       <li className={`list-group-item ${ItemStyle['bg_list']} ${bought && "active"}`}>{foodItem}   
       <button
        className={`${ItemStyle.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
      </li> 
  </>
  }
  
  export default Item;