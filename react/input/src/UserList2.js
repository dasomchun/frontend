import React, { useEffect } from 'react'
import User from './User'
export default function UserList2({users,onRemove,onToggle}) {
  
  
  return (
    <div>
        {/* <User user={users[0]}/>
        <User user={users[1]}/>
        <User user={users[2]}/> */}
        {users.map(user=>(
            <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
        ))}
        
    </div>
  )
}
