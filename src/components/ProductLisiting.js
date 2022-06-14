import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import { setProducts,fetchProducts } from "../redux/action/productActions";
import   axios from "axios";

function ProductLisiting() {
    const products = useSelector((state)=>state)
    const dispatch = useDispatch();
    console.log(products)

    // const fetchProducts = async() =>{
    //     const response = await axios.get('https://fakestoreapi.com/products')
    //     .catch((err)=>{console.log("error", err)})
    //     dispatch(setProducts(response.data))
    // }

    useEffect(()=>{
       dispatch(fetchProducts());
    },[])
  return (
    <div className='ui four column grid'>
      <div className='row'>

      <ProductComponent />
      </div>
    </div>
  )
}

export default ProductLisiting
