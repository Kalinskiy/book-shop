import axios from 'axios'



export const booksAPI = {
    getBooks() {
        return axios.get('http://localhost:3000/books.json').then(res=>res.data)
    },

}

