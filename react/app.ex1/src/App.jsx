import React from 'react'
import Hello from './hello'
import Wrapper from './Wrapper'
export default function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true}/>
      {/* isSpecial={true} isSpecial */}
      {/* true , false는 자바스크립트의 값이므로 중괄호 */}
     {/* Hello 컴포넌트 사용 할 때 name이라는 값을 전달하고 싶다고 가정 */}
      <Hello color="pink"/>
     </Wrapper>
    
  )
}
