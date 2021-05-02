import React, { useState } from 'react';

const Test8 = () => {

    const [userid, setUserId]=useState('');
    const [userpw, setUserpw]=useState('');

    const change1=(e)=>{
        const {value}=e.target
        setUserId(value)
    }
    const change2=(e)=>{
        const {value}=e.target
        setUserpw(value)
    }
    const onReset=()=>{
        setUserId('');
        setUserpw('');
    }
    return (
        <div>
           <input type="text" onChange={change1} value={userid}/>
           <input type="password" onChange={change2} value={userpw}/>
           <button onClick={onReset}>초기화</button>
           <h2>id:{userid} /pw:{userpw} </h2>
        </div>
    );
};

export default Test8;
