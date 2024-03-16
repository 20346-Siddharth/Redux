import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncGetProducts } from '../store/actions/ProductActions'
import { getProducts } from '../store/reducers/ProductReducer'

function Products() {
    const {products} =useSelector((state)=>state.ProductReducer)
    // console.log(products)
    const dispatch=useDispatch()
    useEffect(()=>{
       dispatch(asyncGetProducts())
    },[])
  return (
    <div>
        <div className='m-auto containe p-10 mt-5 bg-red-100'>
    <h1 className='text-2xl font-bold text-red-900'>Product List</h1>
    <ul>

    {products &&products.map((prod,index)=>{
      return(<li key={prod.id}> {prod.title} <span onClick={()=>Deletehandler(index)} className='text-red-500 font-black cursor-pointer'>X</span></li>)
    })}
   </ul>
   </div>
    </div>
  )
}

export default Products
