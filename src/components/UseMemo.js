import React, { useMemo } from 'react'

const UseMemo = ({ counter,handleIncrement }) => {
    const computeExpensiveValue = (num)=>{
        console.log("Computing expensive value...");
        for (let index = 0; index < 1000000000; index++) {
            return num*2
        }
    }
    const memoizedValue = useMemo(()=>{
        computeExpensiveValue(counter)
    },[counter])
  return (
    <div>
        
        Count:<button onClick={handleIncrement} id='incr-cnt'>+</button>{counter}
      
        <h2>Expensive Calculation: {memoizedValue}</h2>
    </div>
  )
}

export default UseMemo