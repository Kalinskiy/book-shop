import React from 'react';
import {useSelector} from "react-redux";
import Book from "./Book/Book";
import Grid from "@material-ui/core/Grid";
import s from './Books.module.css'
import Container from "@material-ui/core/Container";


const Books = () => {
    const allBooks = useSelector(store => store.books.books)
    const searchedBooks = useSelector(state => state.filter.searchedBooks)
    const searchQuery = useSelector(state => state.filter.searchQuery)
    const books = searchQuery.length ? searchedBooks : allBooks
    const isNotFound = searchQuery.length && !searchedBooks.length


    return (
        <div className={s.container}>
            <Container>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                    style={{margin: '0px'}}
                    xl={12}
                >
                    {
                        books
                        &&
                        books.map(book => {
                            return <Book
                                key={book.id}
                                id={book.id}
                                title={book.title}
                                author={book.author}
                                image={book.image}
                                price={book.price}
                                rating={book.rating}
                                book={book}
                            />
                        })
                    }
                    {isNotFound && <span>Sorry we could not find any book</span>}

                </Grid>
            </Container>
        </div>
    );
};

export default Books;