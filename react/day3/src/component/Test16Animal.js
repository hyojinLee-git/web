import React from 'react';

const Test16Animal = ({animal, onAnimal}) => {
    return (
        <div> 동물: 
            <input type="text" value={animal} onChange={onAnimal}/>
        </div>
    );
};

export default Test16Animal;