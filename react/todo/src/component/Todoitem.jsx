import React from 'react'
import './Todoitem.css';

export default function Todoitem({id,content,isDone,createdDate,onUpdate,onDelete}) {
// 구조분해 할당 onupdate 추가

  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onClickDelete = () => {
    onDelete(id);
  };
  return (
    <div className='Todoitem'>
       <div className='checkbox_col'> 
            <input type="checkbox" checked={isDone} 
            onChange={onChangeCheckbox}
            // 체크했을때 onChangeCheckbox 는
            // onUpdate 를 호출하고 인수는 현재 클릭한 할일 it id로 전달

            />
       </div>
       <div className='title_col'>{content}</div> 
        <div className='date_col'>{new Date(createdDate).toLocaleDateString()}</div> 
        <div className='btn_col'>
            <button onClick={onClickDelete}>삭제</button>
        </div> 
        
    </div>
  )
}
