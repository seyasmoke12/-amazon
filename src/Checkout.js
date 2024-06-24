import React from 'react'
import "./Checkout.css"
import CheckoutAd from "./checkout/chackout.png"
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
function Checkout() {

const [{basket},dispatch] = useStateValue()

return (
    <div className='chackout'>
        <div className='chackout_left'>
            <img className='chackout_ad' src="https://th.bing.com/th/id/R.efcbf4793c44eea364530be36932ee37?rik=WbzulJR4KShtsw&pid=ImgRaw&r=0" alt=""/>
            <h3>Hello,</h3>
            <h2 className='chackout_title'>Your Shoping Basket</h2>
            
            {basket.map((item)=>(
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                
            />
            ))}
            
        </div>
        <div className='chackout_right'>
            <Subtotal/>
        </div>
    </div>
)
}

export default Checkout
