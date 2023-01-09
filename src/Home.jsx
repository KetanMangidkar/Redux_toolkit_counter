import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  const c = useSelector((state) => state.custom.c);

  const addbtn = () => {
    dispatch({
      type: "increment",
    });
  };

  const addbtn5 = () => {
    dispatch({
      type: "incrementByvalue",
      payload: 5,
    });
  };

  const subbtn = () => {
    dispatch({
      type: "decrement",
    });
  };

  return (
    <div>
      <h2>{c}</h2>

      <button onClick={addbtn}>Increment</button>
      <button onClick={addbtn5}>Increment by 5</button>
      <button onClick={subbtn}>Decrement</button>
    </div>
  );
};

export default Home;
