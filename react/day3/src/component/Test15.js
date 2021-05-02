import React, { useState } from 'react';

const Name = () => {
    const [ name, setName ]=useState('');

    return (
        <div>
            <h3>Name 컴포넌트</h3>
            <p>
                <label htmlFor="name">이름: </label>
                <input 
                    type="text" 
                    id="name" 
                    onChange={e=>setName(e.target.value)} 
                    value={name}
                />
                <span style={{marginLeft:15}}>
                    {name}
                </span>
            </p>
        </div>
    );
};

const Animal = ({animal, onAnimal}) => {
    return (
        <div>
            <h3>좋아하는 동물</h3>
            <p>
                <label htmlFor="animal">동물: </label>
                <input type="text" value={animal} onChange={onAnimal}/>
                <span style={{marginLeft:15}}>

                </span>
            </p>
        </div>
    );
};

const Display = ({animal}) => {
    return (
        <div>
            <h3>좋아하는 동물 받아서 출력하기</h3>
            <h2>내가 좋아하는 동물은 {animal} 입니다.</h2>
            <h2>
                {`내가 좋아하는 동물은 ${animal} 입니다.`}
            </h2>
        </div>
    );
};

const Test15 = () => {
    const [animal, setAnimal]=useState('고양이');

    const onAnimal=(e)=>{
        const {value}=e.target;
        setAnimal(value);
    }

    return (
        <div>
            <h2>컴포넌트 분리, props 값 전달</h2>
            <Name/>
            <hr/>
            <Animal animal={animal} onAnimal={onAnimal} />
            <hr/>
            <Display animal={animal} />
        </div>
    );
};

export default Test15;