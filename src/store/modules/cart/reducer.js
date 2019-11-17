export default function cart(state=[], action){
    switch (action.type) {
        case 'ADD_TO_CART':
            let index = state.findIndex(el=>el.id === action.product.id)
            return index === -1 ? 
                [...state, {...action.product, amount: 1}] : 
                [...state.slice(0,index), {...action.product, amount: state[index].amount + 1}, ...state.slice(index+1)]
        case 'REMOVE_FROM_CART':
            let deleteIndex = state.findIndex(el=>el.id === action.id)
            return deleteIndex === -1 ? state : [...state.slice(0,deleteIndex), ...state.slice(deleteIndex+1)]
        default: 
            return state
    }
}