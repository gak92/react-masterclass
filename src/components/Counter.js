import React, { useState, useRef } from 'react';

export const Counter = () => {
  console.log("Render Counter");
  const [number, setNumber] = useState(0);
  let count = useRef(0);

  const handleClick = (e) => {
    e.stopPropagation();
    // setNumber(number+1);

    // updater styled
    setNumber((num) => num+1);
    setNumber((num) => num+1);
    setNumber((num) => num+1);
    console.log(number);

    count.current++;
    console.log("Count: ", count.current);
  }

  return (
    <>
    <h1>{number}</h1>
    <button onClick={handleClick}>Add</button>
    </>
  )
}
