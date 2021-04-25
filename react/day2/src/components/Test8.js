import React, { Component } from 'react';

class Test8 extends Component {
    //클래스 영역
    handleClick1=()=>{
        alert('practice1')
    }
    handleClick2=()=>{
        alert('practice2')
    }
    handleClick3=()=>{
        alert('practice3')
    }

    handleClick4=(num)=>{
        alert(num)
    }
    render() {
        return (
            <div>
                {/* 클래스 영역의 값을 출력할 경우 this */}
                <button onClick={this.handleClick1}>클릭1</button>
                <button onClick={this.handleClick2}>클릭2</button>
                <button onClick={this.handleClick3}>클릭3</button>
                <button onClick={()=>alert('practice4')}>클릭4</button>
                <br></br>
                <br></br>
                {/* this.함수명(값)-> 바로 실행 */}
                {/* 값이 전달될 경우는 반드시 함수로 한번 묶어준다: onclick={()=>{this.함수명(값)}} */}
                <button onClick={()=>{this.handleClick4(100)}}>값 전달</button>
                <button onClick={()=>{this.handleClick4(200)}}>값 전달</button>
                <button onClick={()=>{this.handleClick4(300)}}>값 전달</button>
            </div>
        );
    }
}

export default Test8;