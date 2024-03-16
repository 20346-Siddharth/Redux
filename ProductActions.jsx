import axios from "axios";
import { getProducts } from "../reducers/ProductReducer";

export const asyncGetProducts=()=>async(dispatch,getState)=>{
     console.log(getState)
    try{
     const response=await axios.get("https://fakestoreapi.com/products")
     console.log(response.data)

     dispatch(getProducts(response.data));
    }
    catch(err){console.log(err)}
 
}