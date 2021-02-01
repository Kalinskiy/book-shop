import {booksAPI} from "../api/api";



const initialState = {
    isLoaded: false,
    books: null,
}

export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BOOKS': {
            return {
                ...state,
                books: action.payload,
                isLoaded: true,
            }
        }
        case 'SET_IS_READY': {
            return {
                ...state, isLoaded: action.payload.isLoaded
            }
        }


        default:
            return state;
    }
}

//actions

export const setBooksAC = (items) => ({
    type: 'SET_BOOKS',
    payload: items
})


//thunks

export const setBooks = () => async (dispatch) => {
    const response = await booksAPI.getBooks()
    try {
        dispatch(setBooksAC(response))
    } catch (e) {
        console.log(e)
    }
}

