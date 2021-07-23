
const inititalCartState = {
    loading : true,
    error : null,
    carts : []
}

const cartListReducer = (state = inititalCartState, action) => {
    switch (action.type) {
        case 'FETCH_CART_LOAD' : 
            return {
                ...state,
                loading : true,
                error : null,
            }
        case 'FETCH_CART_SUCCESS' :
            return {
                loading : false,
                error : null,
                carts : action.payload
            }
        case 'FETCH_CART_FAILURE' : 
            return {
                ...state.cartList,
                loading : false,
                error : action.payload
            }
        default : 
            return state
    }
}

export default cartListReducer