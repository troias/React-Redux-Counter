import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector(state =>  state.counter) 
  const showCounter = useSelector(state => state.showCounter)
  const overallState = useSelector(state => state)
  const dispatch = useDispatch()
 
  console.log("showCounter", overallState)
  
  console.log(counter)
  const toggleCounterHandler = () => {
    dispatch({
      type: "TOGGLE", 
    })
  };

  const incrementHandler = () => {
    dispatch({
      type: "INCREMENT", 
    })
  }

  const incrementByAmountHandler = (amount) => {
    dispatch({
      type: "INCREMENT_BY_AMOUNT", 
      payload: amount,
    })
  }

  const decrementHandler = () => {
    dispatch({
      type: "DECREMENT",
    })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div hidden={showCounter} className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
        <button onClick={incrementHandler}>INCREMENT</button>  
        <button onClick={() => incrementByAmountHandler(2)}>INCREMENT by 5</button>  
         <button onClick={decrementHandler}>DECREMENT</button>
      </div>
      <div>
      
      </div>
    </main>
  );
};

export default Counter;
