import React, { useState } from 'react'
import UseMemo from './UseMemo';
import ReactMemo from './ReactMemo';

const App = () => {
   
  return (
    <div id='main'>
       <h1>React.UseMemo</h1>
       <UseMemo />
       <ReactMemo />
    </div>
  )
}

export default App