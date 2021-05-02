import React, { useRef } from 'react';

const Test9 = () => {

    const idRef=useRef(null);
    const pwRef=useRef(null);

    const click=()=>{
        const data={
            id:idRef.current.value,
            pw:pwRef.current.value,
        }
        const json=JSON.stringify(data,null,5);
        console.log(json)
    }

    return (
        <div>
            {/* useRef 설명용, 실제 예제로는 적합하지 않다. 수업용 */}
            <input type="text"  ref={idRef}/>
           <input type="password" ref={pwRef}/>
           <button onClick={click}>확인</button>
        </div>
    );
};

export default Test9;