export default function cart(state=[], action){
    switch (action.type) {
        case '@cart/ADD_SUCCESS':
            return [...state, action.product]
        case '@cart/REMOVE':
            const deleteIndex = state.findIndex(el=>el.id === action.id)
            return deleteIndex === -1 ? state : [...state.slice(0,deleteIndex), ...state.slice(deleteIndex+1)]
        case '@cart/UPDATE_AMOUNT_SUCCESS':
            const productIndex = state.findIndex(el=>el.id === action.id)
            return productIndex === -1 ? state : [...state.slice(0,productIndex),{...state[productIndex], amount: Number(action.amount)}, ...state.slice(productIndex+1)]
        default: 
            return state
    }
}