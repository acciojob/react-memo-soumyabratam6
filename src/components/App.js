import React, { useState } from 'react'
import UseMemo from './UseMemo';
import ReactMemo from './ReactMemo';

const App = () => {
    const[counter,setCounter] = useState(0);
    const[tasks,setTasks] = useState(["New todo"]);
    const[customTask,setCustomTask] = useState([]);
    const handleIncrement = ()=>{
        setCounter(counter+1);
    }
    const addNewTask = ()=>{
        setTasks([...tasks,'New todo'])
    }
    const handleCustomTaskSubmit = ()=>{
        if (customTask.length >5) {
            setTasks([...tasks,customTask]);
            setCustomTask("");
        }
    }
  return (
    <div id='main'>
       <h1>React.UseMemo</h1>
       <h1>My todos</h1>
       <p>{tasks}</p>
      <button onClick={addNewTask} id='add-todo-btn'>Add todo</button>
      <button onClick={handleIncrement} id='incr-cnt'>Increment</button>
      <h2>Counter: {counter}</h2>
      <UseMemo counter={counter} />
      <input
        type="text"
        placeholder="Enter custom task"
        value={customTask}
        onChange={(e) => setCustomTask(e.target.value)}
        id='skill-input'
      />
      <button onClick={handleCustomTaskSubmit} id='skill-btn'>Submit</button>
      <ReactMemo tasks={tasks} />
    </div>
  )
}

export default App