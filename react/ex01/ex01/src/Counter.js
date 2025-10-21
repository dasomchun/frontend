import React, { useState } from 'react'

export default function Counter() {

    const[number,setNumber] = useState(0);
    //state 상태를 관리하는 useState
    //setNumber = 값을 지정하거나 수정할수 있음.
    //number 현재값
    const onIncrease=() =>{
        // setNumber(number +1);
        // setNumber(number +1); 
        // 상태 업데이트가 연속으로 일어나는 경우 , 비동기적으로 업데이트 되면 예기치 않는 값이 나올수 있음.
        setNumber(prevNumber => prevNumber +1);
        }
    const onDecrease=() =>{
        // setNumber(number -1);
        // setNumber(number -1);
        // 함수형 업데이트
        setNumber(prevNumber => prevNumber -1);
        }
  return (
    <div>
        <h1>{number}</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
    </div>
  )
}
