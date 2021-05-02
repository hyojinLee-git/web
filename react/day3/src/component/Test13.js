import React, { useState } from 'react';
import './Test13.css';

const Test13 = () => {
    const [isColor, setIsColor]=useState('false');
    const [age, setAge]=useState('20');

    const onToggle=(e)=>{
        
        setIsColor(!isColor)
    }
    const decrease=()=>{
        setAge(age-1);
    }
    const increase=()=>{
        setAge(age+1);
    }
    return (
        <div className={`wrap ${isColor? 'tomato':'pink'}`}>
            <h2 >background-color: {`${isColor? 'tomato':'pink'}`}</h2>
            <h2>나이: {age}</h2>
            <p>
                <button onClick={onToggle}>배경색 바꾸기</button>
                <button onClick={increase}>나이 증가</button>
                <button onClick={decrease}>나이 감소</button>
            </p>
        </div>
    );
};


export default Test13;