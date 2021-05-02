import React, { useState } from 'react';

const Test17 = () => {
    const [data, setData]=useState([
        {name: '홍길동', age: 20},
        {name: '김철수', age: 10},
        {name: '강호동', age: 23},
        {name: '유재석', age: 25},
        {name: '이수근', age: 53},
    ]);

    return (
        <div>
            {
                // eslint-disable-next-line array-callback-return
                data.map((item, idx)=>{
                    <p key={idx}>
                        {idx}/{item.name}/{item.age}
                    </p>
                })
            }
        </div>
    );
};

export default Test17;