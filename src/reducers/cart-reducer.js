const initialState = {
    items: [],
    totalPrice:null
}


export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BOOK': {
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        }
        case 'REMOVE_BOOK': {
            return {
                ...state,
                items: state.items.filter(book=>book.id !== action.payload)
            }
        }
        case 'TOTAL_PRICE':{
            return {
            ...state,
            totalPrice: [state.items.reduce((total, book)=> total+ book.price, 0)]
            }
        }

        default:
            return state;
    }
}
export const addBookAC = (items) => ({
    type: 'ADD_BOOK',
    payload: items
})
export const removeBookAC = (id) => ({
    type: 'REMOVE_BOOK',
    payload: id
})
export const setTotalPriceAC = (items) => ({
    type: 'TOTAL_PRICE',
    payload: items
})
