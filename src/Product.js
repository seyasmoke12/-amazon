import React from 'react'
import "./Product.css"
import Air from "./Haimag/air.png"
import { useStateValue } from './StateProvider'
function Product({id,title,image,rating,price}) {
    const [{ basket },dispatch] = useStateValue()
    // console.log('this is the basket',(basket))
    const addToBasket = () =>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        })
    }
return (
    <div className='product'>
        <div className='product_info'>
            <p>{title}</p>
            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product_rating'>
                {Array(rating)
                .fill()
                .map(()=>{
                return <p>⭐</p>
                })
                }
            </div>
        </div>
        <img src={image}/>
        <button onClick={addToBasket}>add to basket</button>
    </div>
)
}

export default Product