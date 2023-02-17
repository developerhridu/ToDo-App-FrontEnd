import React, {useRef} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {decrement, increment, setCustom} from "../../redux/state/counter/counterSlice";

const Counter = () => {
    const myNum = useRef();

    const count = useSelector((state) => state.counter.value)  //store -> counter -> value
    const dispatch = useDispatch();
    return (
        <div className="card">
            <div className="card-header bg-secondary">
                <h4>My Counter</h4>

            </div>
            <div className="card-body">
                <h4>{count}</h4>
                <div className="my-4">
                    <button onClick={ () => {dispatch(increment())}} className="btn btn-success">Increase</button>
                    <button onClick={ () => {dispatch(decrement())}} className="btn mx-5 btn-primary">Decrease</button>
                </div>
                <div className="my-4">
                    <input ref={myNum} className="form-control w-50 my-2" type="number"/>
                    <button onClick={ () => {dispatch(setCustom(myNum.current.value))}} className="btn mx-5 btn-danger">Set</button>
                </div>

            </div>

        </div>
    );
};

export default Counter;