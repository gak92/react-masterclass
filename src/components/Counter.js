import React, { useState } from 'react';

export const Counter = () => {
  console.log("Render Counter");
  const [number, setNumber] = useState(0);

  const handleClick = (e) => {
    e.stopPropagation();
    // setNumber(number+1);

    // updater styled
    setNumber((num) => num+1);
    console.log(number);
  }

  return (
    <>
    <h1>{number}</h1>
    <button onClick={handleClick}>Add</button>
    </>
  )
}
