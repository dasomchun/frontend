import React, { useState,useRef } from 'react'

export default function Inputsample2() {
    
    const [inputs,setInputs] = useState({
        name:"",
        nickname:"",

    });

    const nameInput = useRef();
    
    const {name, nickname} = inputs; //비구조화 할당을 통해 값 추출

    const onChange = (e) => {      
        const {value , name} = e.target; //e.target 에서 name과 value 를 추출  
        setInputs({
            ...inputs,//기존의 input 객체를 복사한 뒤
            [name] : value //name키(nickname)를 가지 값을 value 로 설정

        });
    };
    const onReset = () => {
        setInputs({
            name:"",
            nickname:""
        });
    // 리액트에서 객체를 업데이트 할떄 기존 객체를 직접 수정하면 안되고,
    // 새로운 객체를 만들어서 , 새 객체에 변화를 주어야한다.
         nameInput.current.focus(); 
    };
  return (
    <div>
        <input name='name' placeholder='이름' onChange={onChange} value={name} ref={nameInput}/>
        <input name='nickname' placeholder='닉네임'onChange={onChange} value={nickname}/>
        <button onClick={onReset}>초기화</button>
        <div>
            <b>값: </b>
            {name} ({nickname})
        </div>

    </div>
  )
}
// useRef() 를 사용해서 Ref객체를 만들고
// 이객체를 우리가 선택하고 싶은 Dom(첫번째 인풋창) ref값으로 설정
// 그러면 .current 값은 우리가 원하는 Dom을 가르키게 된다.