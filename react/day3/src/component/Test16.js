import React, { useState } from 'react';
import Test16Animal from './Test16Animal';
import Test16Display from './Test16Display';
import Test16Name from './Test16Name';

const Test16 = () => {
    const [name, setName]=useState('');
    const [animal, setAnimal]=useState('');

    const onName=(e)=>{
        const {value}=e.target;
        setName(value);
    }

    const onAnimal=(e)=>{
        const {value}=e.target;
        setAnimal(value);
    }


    return (
        <div>
            <Test16Name name={name} onName={onName}/>
            <hr/>
            <Test16Animal animal={animal} onAnimal={onAnimal}/>
            <hr/>
            <Test16Display name={name} animal={animal}/>
        </div>
    );
};

export default Test16;