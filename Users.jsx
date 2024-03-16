import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { userdelete } from '../store/reducers/UserReducer'

function Users() {
   const {users}= useSelector((state)=>state.UserReducer)
   const dispatch=useDispatch();
  const Deletehandler=(index)=>{
       dispatch(userdelete(index))
  }
  return (
    <>
    
   <div className='m-auto containe p-10 mt-5 bg-red-100'>
    <h1 className='text-2xl font-bold text-red-900'>User List</h1>
   <ul>

    {users.map((user,index)=>{
      return(<li key={user.id}> {user.name} <span onClick={()=>Deletehandler(index)} className='text-red-500 font-black cursor-pointer'>X</span></li>)
    })}
   </ul>
   </div>
    </>
  )
}

export default Users
