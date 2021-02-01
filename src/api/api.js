import axios from 'axios'



export const booksAPI = {
    getBooks() {
        return axios.get('https://kalinskiy.github.io/book-shop/books.json').then(res=>res.data)
    },

}

