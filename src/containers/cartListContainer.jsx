import React,{ useEffect } from 'react'
import Spinner from '../components/spinner'
import Error from '../components/error'
import MenuListPresentation  from '../components/menu-list'
import { useDispatch,useSelector } from 'react-redux';
import { cartLoad,cartAddToOrder } from '../actions';
import { bindActionCreators } from 'redux';

const MenuListContainer = () => {
   const dispatch = useDispatch()
   const cartList = useSelector(({ cartList }) => cartList)
   
   const { onAddToOrder } = bindActionCreators({
        onAddToOrder : cartAddToOrder
   },dispatch)

    useEffect(() => {
        dispatch(cartLoad())
    },[ dispatch ])

   
   const { carts, loading , error } = cartList


   if(loading) {
        return <Spinner/>
    }

   if(error) {
        return <Error/>
    }

    return <MenuListPresentation carts = {carts} onAddOrder = {id =>onAddToOrder(id)}/>

}


export default MenuListContainer