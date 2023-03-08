import React, { useState, useRef, useMemo, useCallback } from 'react';

// const fib = (n) => {
//   if(n===1 || n===2) {
//     return 1;
//   }
//   return fib(n-1) + fib(n-2);
// }

export const Counter = () => {
  console.log("Render Counter");
  const [number, setNumber] = useState(40);
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

  const fibFx = useCallback(function fib (n) {
    if(n===1 || n===2) {
      return 1;
    }
    return fib(n-1) + fib(n-2);
  }, []);
  

  const fibMemoized = useMemo(() => {
    return fibFx(number);
  }, [number, fibFx]);

  return (
    <>
    <h1>{number} | {fibMemoized}</h1>
    <button onClick={handleClick}>Add</button>
    </>
  )
}
