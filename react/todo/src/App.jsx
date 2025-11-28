import React, { useState ,useRef} from 'react'
import './App.css';
import Header from './component/header.jsx';
import TodoEditor from './component/TodoEditor.jsx';
import Todolist from './component/Todolist.jsx';
const mockTodo = [
  {
    id:0,
    isDone : false,
    content:"react 공부하기",
    createdDate : new Date().getTime(),
    },

      {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },


]


export default function App() {
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(3);
  const onCreate = (content) => {

      const newItem ={
      id:idRef.current,
      content,
      isDone: false,
      createdDate: new Date().getTime(),
  }
      setTodo([newItem, ...todo]);
      idRef.current += 1;

  };
  const onUpdate = (targetId) => {
    // target Id는 클릭된 Todo 고유 id로 전달
      setTodo(todo.map((it)=>{
        // if(it.id===targetId){  //순회 기존 it.id 와 targetId가 같은지 확인
          // return {...it, //전개연산자 기존다른속성(content,date,createdDate)등은 유지
            // isDone:!it.idDone} //isDone  값을 반전(false->true, true->false)
        // }else{
          // return it;
        // }
        // (id:1, content:"빨래하기".isDone.false) //기존
        // (id:1, content:"빨래하기".isDone.true) //onUpdate 실행되면  true로 변경
        return it.id === targetId ? {...it, isDone : !it.isDone} : it


      }))
  }
   const onDelete = (targetId) => {
      setTodo(todo.filter((it)=> it.id !== targetId))
   };

  return (
    <div className='App'>
        <Header/>
        <TodoEditor onCreate={onCreate}/>
        <Todolist todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
        
    </div>
  )
}
