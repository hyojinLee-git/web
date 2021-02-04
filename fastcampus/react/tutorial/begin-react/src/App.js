//import './App.css';
import React from 'react';
import Hello from './hello';
import Wrapper from './Wrapper';

function App() {
  {/*
  const name='react';
  const style={
    backgroundColor:'black',
    color:'aqua',
    fontSize:24,
    padding:'1rem'
  }
*/}
  return (
    <Wrapper>
      <Hello name='react' color="red"/>
      <Hello color="pink"/>
      {/* <div style={style}>{name}</div>
      <div className="gray-box"></div> */}
    </Wrapper>
  );
}

export default App;
