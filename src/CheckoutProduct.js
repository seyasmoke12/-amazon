import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'


function CheckoutProduct({id,image,price,rating,title}) {
const [{basket},dispatch] = useStateValue()

const removeFromBaket = () =>{
    dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id,
    })
}
return (
    <div className='checkout_product'>
        <img className='checkout_image' src={image}/>

    <div className='chackoutproduct_info'>
        <p className="chackoutProduct_title">{title}</p>
        <p className='chackoutProduct_price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='chackoutProduct_rating'>
            {Array(rating)
            .fill()
            .map((_, i)=>(
                <p>⭐</p>
            ))
            }
        </div>
        <button onClick={removeFromBaket}>remove from basket</button>
    </div>
    </div>
)

}
export default CheckoutProduct
