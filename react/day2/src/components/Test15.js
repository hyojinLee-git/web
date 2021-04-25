import React, { Component } from 'react';

class Test15 extends Component {
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

    click1=()=>{
        this.setState({
            data: this.state.data.filter( item => item.no !== 1)    //나머지만 가져다
        })
    }
    click2=()=>{
        const {data}=this.state;
        this.setState({
            data:data.filter(item=> item.no !== 2)
        })
    }
    click3=()=>{
        const {data}=this.state;
        this.setState({
            data:data.filter(item=>item.no !== 4)
        })
    }
    click4=(num)=>{
        const {data}=this.state;
        this.setState({
            data:data.filter(item=>item.no !== num)
        })
    }

    //값 수정
    click5=()=>{
        const {data}=this.state;
        this.setState({
            data:data.map( item => {
                if(item.no===1){
                    return {
                        ...item,
                    }
                } else{
                    return item;
                }
            })
        })
    }
    click6=()=>{}
    click7=()=>{
        const {data}=this.state;
        this.setState({
            data:data.map(item=>item.no===5? 
                {
                    ...item,name:'이수군',age:30,addr:'인천'
                }:item)
        })
    }

    click8=(num)=>{
        const {data}=this.state;
        this.setState({
            data:data.map(item=>item.no===num? 
                {
                    ...item,name:'이수군',age:30,addr:'인천'
                }:item)
        })
    }

    render() {
        const {data}=this.state
        return (
            <div>
                <h1>삭제, 수정</h1>
                <p>
                    <button onClick={this.click1}>삭제1</button>
                    <button onClick={this.click2}>삭제2</button>
                    <button onClick={this.click3}>삭제3</button>
                </p>
                <hr></hr>
                <p>
                    <button onClick={()=>{this.click4(3)}}>삭제1</button>
                    <button onClick={()=>{this.click4(5)}}>삭제2</button>
                    <button onClick={()=>{this.click4(4)}}>삭제3</button>
                </p>

                <p>
                    <button onClick={()=>{this.click5()}}>수정1</button>
                    <button onClick={()=>{this.click7()}}>수정2</button>
                </p>

                <p>
                    <button onClick={()=>{this.click8(3)}}>수정1</button>
                    <button onClick={()=>{this.click8(7)}}>수정2</button>
                </p>

                <ul>
                    {
                        data.map(item=><li key={item.no}>
                            {item.no}/{item.name}/{item.age}/{item.addr}/{item.isActive? '참여':'미참여'}
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}

export default Test15;