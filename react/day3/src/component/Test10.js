import React, { useRef } from 'react';

const Test10 = () => {
    const colorRef=useRef(null);
    const onSelect=()=>{
        const data={
            color:colorRef.current.value
        }
        const json=JSON.stringify(data,null,5);
        console.log(json)
    }
    return (
        <div>
            <h2>컬러 선택</h2>
            <select ref={colorRef}>
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

export default Test10;