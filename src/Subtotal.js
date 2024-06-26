import React from 'react';
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider';
import { useNavigate } from 'react-router-dom';
import './Subtotal.css'
function Subtotal() {
    const [{ basket }] = useStateValue();
    const history = useNavigate()
    const getBasketTotal = (basket) =>
        basket?.reduce((amount, item) => item.price + amount, 0);


    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <div>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className='subtotal_git'>
                            <input type="checkbox" />
                            This order contains a gift
                        </small>
                    </div>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={(e) => history('/payment')}>
                Proceed to checkout
            </button>
        </div>
    );
}

export default Subtotal;