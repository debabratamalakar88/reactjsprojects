function ErrorMessage(props) {  
  return  <>
  {(props.foodItems).length===0 && <h3>I am Empty</h3>}
  </>
  }
  
  export default ErrorMessage;