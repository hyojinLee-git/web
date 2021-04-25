import React, { Component } from 'react';

class Test12 extends Component {
    render() {
        const title="언더커버 출연진"
        const data=[
            {no:1, name:"지진희", age:40, addr:"서울", isActive:false},
            {no:2, name:"김현주", age:34, addr:"인천", isActive:false},
            {no:3, name:"허준호", age:45, addr:"대전", isActive:false},
            {no:4, name:"정만식", age:23, addr:"부산", isActive:false},
            {no:5, name:"이승준", age:33, addr:"전주", isActive:false},
        ]
        return (
            <div>
                <h1>{title}</h1>
                <p>
                    {data[0].no}/
                    {data[0].name}/
                    {data[0].age}/
                    {data[0].addr}/
                    {data[0].isActive? '참여':'미참여'}
                </p>
                <hr></hr>
                {
                    data.map((item=>{
                        return(
                            <p key={item.no}>
                                {item.no}/{item.name}/{item.age}/{item.age}/{item.isActive? '참여':'미참여'}
                            </p>
                        )
                    }))
                }
            </div>
        );
    }
}

export default Test12;