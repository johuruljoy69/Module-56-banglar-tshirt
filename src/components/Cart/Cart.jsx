import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some products</p>
    }
    else{
        message = <div>
            <h2>Rich Man</h2>
            <h4>Thanks for giving your money</h4>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue' : 'red'} >Order Summary:{cart.length} </h2>
            <p className={`bold ${cart.length ===3 ? 'yellow' : 'purple'} `} >SomeThing</p>
            {cart.length > 2 ? <span className='orange'>Aro kino</span> : <span className='red'>fokira</span> }
            {message}
            {
                cart.map(tshirt => <p
                    key={tshirt.id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt._id)} >D</button>
                    
                    </p>)
            }
            {
                cart.length === 2 && <p>Double bonanza!!!!</p>
            }
            {
                cart.length ===3 || <h3>Three hoi nai</h3>
            }
        </div>
    );
};

export default Cart;

/**
 * CONDITIONAL RENDERING
 * 1. use if else to set a variable that will contain an element
 * 2. ternary operator: condition ? 'for true' : 'false'
 * 3. logical &&: (if the condition is true then the next thing will be displayed)
 * 4. logical || (if the condition is false then the next thing will be displayed)
 */
/**
 * CONDITIONAL CSS CLASS
 * 1. use ternary
 * 2. ternary inside template string
 */