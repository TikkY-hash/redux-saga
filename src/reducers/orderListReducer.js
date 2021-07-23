
const initialState = () => {
    if(JSON.parse(localStorage.getItem('price'))) {
        return {
            total : JSON.parse(localStorage.getItem('price')),
            orders : JSON.parse(localStorage.getItem('ordersList')),
        }
    }

    return {
        total : 0,
        orders : [],
    }
}


const onAddOrder = (orderId,newCart,orders) => {
    if(orderId === -1) {
        return [
            ...orders,
            newCart
        ]
    }

    return [
        ...orders.slice(0,orderId),
        newCart,
        ...orders.slice(orderId + 1)
    ]

}

const getNewCart = (orderCartInformation,cartInformation) => {
    if(orderCartInformation) {
        return {
            ...orderCartInformation,
            price : orderCartInformation.price + cartInformation.price
        }
    }

    return {
        title : cartInformation.title,
        id : cartInformation.id,
        price : cartInformation.price,
        url : cartInformation.url
    }

}



const orderListReducer = (state = initialState() , action) => {
    switch(action.type) {
        case 'CARTS_ADD_TO_ORDER' :
          
            const cartId = action.payload
            const { carts } = action.cartList
            const {  total, orders  } = state
            const cartInformation = carts.find(value => value.id === cartId)

            const orderId = orders.findIndex(value => value.id === cartId)
            const orderCartInformation = orders[orderId]

            let newCart = getNewCart(orderCartInformation,cartInformation)

            return {
                total : total + cartInformation.price,
                orders : onAddOrder(orderId,newCart,orders)
            }

        case 'CARTS_DELETE_OF_ORDER' : 
            const orderDeleteId = action.payload
            const  { orders : ordersInfo , total : totalPrice } = state

            const orderDeleteIndex = ordersInfo.findIndex(value => value.id === orderDeleteId)
            const orderDeleteInformation = ordersInfo[orderDeleteIndex]

            return {
                total : totalPrice - orderDeleteInformation.price,
                orders : [
                    ...ordersInfo.slice(0,orderDeleteIndex),
                    ...ordersInfo.slice(orderDeleteIndex + 1)
                ]
            }

        default : 
            return state
    }
}

export default orderListReducer