import React from 'react'

const ReactMemo = ({tasks}) => {
  return (
    <div>
        <ul>
            {
                tasks.map((task,index)=>(
                    <li key={index}>{task}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default ReactMemo