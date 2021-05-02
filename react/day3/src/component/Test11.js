import React, { useState } from 'react';

const Test11 = () => {
    const [color, setColor]=useState('');
    const [text,setText]=useState('');

    //왜 한단계 더 거쳐야 하는데?
    const onSelect=()=>{
        setColor(text) 
    }
    const change=(e)=>{
        const {value}=e.target;
        setText(value)
    }
    return (
        <div>
            <h2 style={{color:color}}>컬러 선택</h2>
            <select onChange={change}>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="purple">purple</option>
                <option value="orange">orange</option>
            </select>
            <button onClick={onSelect}>선택</button> 
        </div>
    );
};

export default Test11;