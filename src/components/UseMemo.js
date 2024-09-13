import React, { useMemo } from 'react'

const UseMemo = ({ counter }) => {
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
        <h2>Memoized Value: {memoizedValue}</h2>
    </div>
  )
}

export default UseMemo