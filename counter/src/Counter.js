import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { increment, decrement } from "./redux/counterSlice";
import './Counter.css';

export function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return(
        <div className="counter-container">
            <h1 className="counter-title">Counter:{count}</h1>
            <div className="button-container">
                <button
                onClick={() => dispatch(increment())}
                className="button increment"
                >
                    +
                </button>
                <button 
                onClick={() => dispatch(decrement())}
                className="button decrement"
                >
                    -
                </button>
            </div>
        </div>
    );
}