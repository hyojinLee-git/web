
import React from 'react';
import Test2Sub from './Test2Sub';


const Test2 = () => {
    //함수 영역

    return (
        <div>
            {/* jsx 영역 */}
            <h2>함수형 컴포넌트, props</h2>
            <Test2Sub
                name="홍길동" 
                age={30}
                addr="서울"
                tel="010-1111-2222"
                sex="남자"
                color="skyblue"
                done={ true }
            />
            <Test2Sub
                name="강호동"
                tel="010-2222-3333"
                color="pink"
            />
            <Test2Sub/>
        </div>
    );
};

export default Test2;