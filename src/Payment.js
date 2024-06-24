import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CheckoutProduct from './CheckoutProduct'
import "./Payment.css"
import { useStateValue } from './StateProvider'
import { CardElement,useStripe,useElements} from "@stripe/react-stripe-js"
import CurrencyFormat from 'react-currency-format'




function Payment() {
    const [{basket,user}, dispache] = useStateValue()
    const stripe = useStripe()
    const elements = useElements()
    const [error,setError] = useState(null)
    const [disabled,setDisabled] = useState(true)
    const history = useNavigate()
    const getBasketTotal = (basket) =>
        basket?.reduce((amount, item) => item.price + amount, 0);

        const [processing,setProcessing] = useState("")
        const [succeeded,setSucceeded] = useState(false)
        const [ClientSecret,setClientSecret] = useState(true)
        const handleSubmit = async (event) => {
            event.preventDefault();
            setProcessing(true)
            
        
        }
        const payload = () =>{
                setProcessing(false)
                setError(null)
                setSucceeded(true)
            }
        const handleChange = (event) =>{
            setDisabled(event.empty)
            setError(event.error ? event.error.message: '')
        }

        
return (
    <div className="payment">
        <div className="payment_container">
            <h1>
                Checkout (<Link to="/chackout">{basket?.length} items</Link>)
            </h1>
            <div className="payment_section">
                <div className='payment_title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment_address'>
                    <p>{user?.email}</p>
                    <p>123  React Lane</p>
                    <p> chicago, iL</p>
                </div>
            </div>
            <div className="payment_section">
                <div className='payment_title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payment_items">
                {basket?.map((item)=>(
                    
                    <CheckoutProduct
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
            </div>
            </div>
            
            <div className='payment_section'>
            <div className='payment_title'>
                <h3>payment Method</h3>
            </div>
            <div className='payment_details'>
                <form onSubmit={handleSubmit}>
                    <CardElement onChange={handleChange}/>
                    <div className='payment_priceContainer'>
                        <CurrencyFormat
                renderText={(value) => <h3>Order Total:{value}</h3>}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={"$"}
                        />
                        <button onClick={payload}>
                            <span>{processing ? <p>Processing</p> : "Buy now"}</span>
                        </button>
                    </div>
                    {error && <div>{error}</div>}
                </form>
            </div>
        </div>
        </div>
    </div>
)
}

export default Payment