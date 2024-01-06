import React from "react";
import "../src/index.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";
const App = () => {
  const count = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1 className="heading">Increment/Decrement counter</h1>
        <p className="below">Using React and Redux</p>
        <div className="btns">
          <button className="btn" onClick={() => dispatch(incNumber())}>
            Increment
          </button>
          <input type="number" className="count" value={count} />
          <button className="btn" onClick={() => dispatch(decNumber())}>
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
