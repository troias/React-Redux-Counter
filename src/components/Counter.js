import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import {counterActions} from  "../store/index"

console.log("counterActions", counterActions)
const Counter = () => {

  const counter = useSelector(state => state.counter.counter) 
  const showCounter = useSelector(state => state.counter.showCounter)
  

  const dispatch = useDispatch()
 

  
  console.log("counter", counter)

  const toggleCounterHandler = () => {
    dispatch(
      counterActions.toggleCounter(), 
    )
  };

  const incrementHandler = () => {
    dispatch(
      counterActions.increment(), 
    )
  }

  const incrementByAmountHandler = (amount) => {
    dispatch(
      counterActions.increase(amount), 
    )
  }

  const decrementHandler = () => {
    dispatch(
      counterActions.decrement(),
    )
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
