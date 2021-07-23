import React from 'react';
import './cart-table.scss';
import { cartDeleteOfOrder } from '../../actions'
import { useDispatch, useSelector } from 'react-redux';

const CartTable = () => {

    const orders = useSelector(({ orderList : { orders } }) => orders)
    const dispatch = useDispatch()

    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    orders.map(value => {
                        const {url,title,id,price} = value

                        return (
                            <div className="cart__item" key = {id} >
                                <img src={url} alt="Cesar salad" className = "order__image"></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div className="cart__close" onClick = {() => dispatch(cartDeleteOfOrder(id)) }>&times;</div>
                             </div>
                        )
                    })
                }
            </div>
        </>
    );
};



export default CartTable;