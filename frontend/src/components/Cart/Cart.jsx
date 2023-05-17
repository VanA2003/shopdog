import React, { useContext } from 'react'
import { CartContext } from '../../Contexts/CartContext'
import "./cart.css"
import { useNavigate } from 'react-router-dom'
export default function Cart() {
    const {myCart,total, addToCart, setTotal} = useContext(CartContext)
    const navigate = useNavigate()
    const handleCheckOut = () => {
        setTotal(0)
        addToCart([])
    }
    const handleHome = () => {
        navigate("/")
    }
    return (
        <>
        <section className="cart-container">
            <div className="cart-header">CHECKOUT: </div>
            <div className="cart-items">
                {myCart.map((item,index) => {
                    return (
                        <div key={index} className='cart-item'>
                            <img className='cart-item-img' src={item.imageUrl} alt=''/>
                            {item.name} : {item.price}$
                        </div>
                    )
                })}
                <div className="cart-total">TOTAL: {total} $</div>
            </div>
            <button className="cart-checkout" onClick={handleCheckOut}>DONE</button>
            <button className="cart-gohome" onClick={handleHome}>RETURN HOME</button>
        </section>
        </>
    )
}
