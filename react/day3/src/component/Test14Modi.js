import React, { useRef, useState } from 'react';

const Test14 = () => {
    const unameRef=useRef(null);
    //상태 초기값: 숫자, 문자, [], {}, bool
    const [form, setForm]=useState({
        uname:'',
        pw:'',
        email:'',
    });
    //비구조할당
    const {uname, pw, email}=form;


    const change=(e)=>{
        const {value, name}=e.target;
        console.log(name)
        setForm({...form, [name]: value});
    }
    /*
    const change2=(e)=>{
        const {value, name}=e.target;
        //setForm({...form, pw: value});
        setForm({...form, [name]: value});
    }
    const change3=(e)=>{
        const {value, name}=e.target;
        //setForm({...form, email: value});
        setForm({...form, [name]: value});
    }
    */
    const onReset=()=>{
        setForm({
            uname:'', pw:'', email:''
        });
        unameRef.current.focus();
    }
    return (
        <div>
            <h2>input 여러개 관리</h2>
            <p>
                {/* name: state의 키값과 똑같이 써야함 */}
                <input type="text" onChange={change} value={uname} ref={unameRef} name="uname"/>
                <input type="text" onChange={change} value={pw} name="pw"/>
                <input type="text" onChange={change} value={email} name="email"/>
                <button onClick={onReset}>초기화</button>
            </p>
            <h4>이름:{uname} </h4>
            <h4>비번:{pw} </h4>
            <h4>이메일:{email} </h4>
        </div>
    );
};

export default Test14;

/*
const Test14 = () => {
    const unameRef=useRef(null);
    const [uname, setUname]=useState('');
    const [pw, setPw]=useState('');
    const [email, setEmail]=useState('');

    const change1=(e)=>{
        const {value}=e.target;
        setUname(value);
    }
    const change2=(e)=>{
        const {value}=e.target;
        setPw(value)
    }
    const change3=(e)=>{
        const {value}=e.target;
        setEmail(value);
    }
    const onReset=()=>{
        setUname('');
        setPw('');
        setEmail('');
        unameRef.current.focus();
    }
    return (
        <div>
            <h2>input 여러개 관리</h2>
            <p>
                <input type="text" onChange={change1} value={uname} ref={unameRef}/>
                <input type="text" onChange={change2} value={pw}/>
                <input type="text" onChange={change3} value={email}/>
                <button onClick={onReset}>초기화</button>
            </p>
            <h4>이름:{uname} </h4>
            <h4>비번:{pw} </h4>
            <h4>이메일:{email} </h4>
        </div>
    );
};
*/