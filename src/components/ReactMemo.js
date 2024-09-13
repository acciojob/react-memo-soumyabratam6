import React from 'react'

const ReactMemo = ({tasks}) => {
  return (
    <div>
        <ul>
            {
                tasks.map((task,index)=>(
                    <li key={index} id={`todo-${index}`}>{task}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default ReactMemo