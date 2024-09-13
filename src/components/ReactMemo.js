import React, { useState } from 'react'

const ReactMemo = () => {
  const[skills,setSkills] = useState([]);
  const[skillinput,setSkillinput] = useState('');

  return (
    <div>
        <h1>React.memo</h1>
        <input id='skill-input' type='text' onChange={(e)=>setSkillinput(e.target.value)}  value={skillinput}/>
        <button id='skil-btn' onClick={()=>setSkills([...skills,skillinput])}>Add Skill</button>
        <ul id='item-jumbotron'>
            {
              skills.map((skill,index)=><li key={index}>{skill}</li>)
            }
        </ul>
    </div>
  )
}

export default ReactMemo