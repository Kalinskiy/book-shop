const initialState = {
    filterBy: 'all',
    searchQuery:'',
    searchedBooks:[]
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FILTER': {
            return {
                ...state,
                filterBy: action.payload
            }
        }
        case 'SET_QUERY': {
            return {
                ...state,
                searchQuery: action.payload
            }
        }

        case 'SET_SEARCHED_BOOKS': {
            return {
                ...state,
                searchedBooks: action.payload
            }
        }
        default:
            return state;
    }
}

//actions
export const setFilterAC = (filter) => ({
    type: 'SET_FILTER',
    payload: filter
})
export const setQuery = (value) => ({
    type: 'SET_QUERY',
    payload: value
})
export const setSearchedBooksAC = (books) => ({
    type: 'SET_SEARCHED_BOOKS',
    payload: books
})


//thunks
