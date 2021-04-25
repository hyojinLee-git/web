import React, { Component } from 'react';
import './Test13.css';

class Test13 extends Component {
    state={
        data:[
            {no:1, name:'지진희',age:30,addr:'서울', isActive:false},
            {no:2, name:"김현주", age:34, addr:"인천", isActive:false},
            {no:3, name:"허준호", age:45, addr:"대전", isActive:false},
            {no:4, name:"정만식", age:23, addr:"부산", isActive:true},
            {no:5, name:"이승준", age:33, addr:"전주", isActive:false},
            {no:6, name:"김현주", age:34, addr:"인천", isActive:false},
            {no:7, name:"허준호", age:45, addr:"대전", isActive:true},
            {no:8, name:"정만식", age:23, addr:"부산", isActive:true},
            {no:9, name:"이승준", age:33, addr:"전주", isActive:false},
        ]
    }
    render() {
        const {data}=this.state
        return (
            <div className="Test13">
                <h2>언더커버 출연진</h2>
                <table>
                    <colgroup>
                        <col className="w1"/>
                        <col className="w2"/>
                        <col className="w3"/>
                        <col className="w4"/>
                        <col className="w5"/>
                    </colgroup>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>이름</th>
                            <th>나이</th>
                            <th>주소</th>
                            <th>참여 여부</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                data.map((item)=>{
                                    return(
                                    <tr>
                                        <td>{item.no}</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.addr}</td>
                                        <td>{item.isActive? '참여':'미참여'}</td>
                                    </tr>
                                    )
                                })
                            }
                    </tbody>
                </table>
                
            </div>
        );
    }
}

export default Test13;