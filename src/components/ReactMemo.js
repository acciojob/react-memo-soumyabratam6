import React from 'react'

const ReactMemo = ({tasks}) => {
  return (
    <div>
        <ul>
            {
                tasks.map((task,index)=>(
                    <li key={index} id={index === tasks.length - 1 ? 'item-jumbotron' : `todo-${index}`}>{task}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default ReactMemo