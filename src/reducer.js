export const initialState = {
    cart : [

    ],
    product : null
}

export function claculatePrice(product){
    const discount = 0.3 * product.price;
    let totalPrice = product.price - discount;
    totalPrice = totalPrice.toFixed(2);
    return totalPrice
}

const reducer = (state, action) => {
    switch(action.type) {
        case "storeProduct" :
            return {
                ...state,
                product : action.productDetails
            }
        case "ADD_TO_Cart" : 
            return {
                ...state,
                cart : [...state.cart, action.newCartItem]
            }

        case "REMOVE_FROM_CART" : 
            const newCart = state.cart;
            const index = state.cart.findIndex((item) => (
                item.id === action.removedItem
            ))
            if(index >= 0){
                newCart.splice(index,1);
            }
            else{
                console.log('cant remove the item');
            }

            return {
                ...state,
                cart : newCart
            }
    }
}


export {reducer}