import React from 'react';

function Hello(props){   //컴포넌트는 대문자로
    return <div style={{
        color:props.color
    }}>안녕하세요{props.name}</div>;
}

Hello.defaultProps={
    name:"이름 없음"
}

export default Hello;