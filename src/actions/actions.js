import {
    load,
    success,
    failure,
    addToOrder,
    deteleOfOrder
} from '../constants/'

export const cartLoad = () => (
    {
        type : load
    }
)


export const cartSuccess = (payload) => (
    {
        type : success,
        payload 
    }
)

 export const cartFailure = (payload) => (
    {
        type : failure,
        payload 
    }
)

export const cartAddToOrder = (cartId) =>  (dispatch,getState) => {
    dispatch({
        type : addToOrder,
        payload : cartId,
        cartList : getState().cartList
    })
}

export const cartDeleteOfOrder = (payload) => {
    return {
        type : deteleOfOrder,
        payload,
    }
}

