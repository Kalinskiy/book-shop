import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import s from './Filter.module.css'
import {setBooks, setBooksAC} from "../../reducers/books-reducer";
import {useDispatch, useSelector} from "react-redux";
import orderBy from 'lodash/orderBy'
import {setFilterAC, setQuery, setSearchedBooksAC} from "../../reducers/filter-reducer";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@material-ui/icons/Search';
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',

    },
    paper: {
        marginRight: theme.spacing(2),
    },
}));


function Filter() {
    const dispatch = useDispatch()
    const classes = useStyles();

    let books = useSelector(state => state.books.books)
    const filter = useSelector(state => state.filter.filterBy)
    const searchQuery = useSelector(state => state.filter.searchQuery)



    const onChangeSearchHandler = (e) => {
        const searchQuery = e.currentTarget.value
        dispatch(setQuery(searchQuery))
            let result = books.filter(book => {
                return book.title.toLowerCase().indexOf(searchQuery) >= 0 || book.author.toLowerCase().indexOf(searchQuery) >= 0
            })
            dispatch(setSearchedBooksAC(result))
    }

    // useEffect(() => {
    //     dispatch(setBooksAC(books))
    // }, [searchQuery])

    const sortPrice = (type, method) => {
        return orderBy(books, type, method)
    }
    function handleItemClick(filter, type, method) {
        if (type === undefined) {
            dispatch(setBooks())
        }
        dispatch(setFilterAC(filter))
        dispatch(setBooksAC(sortPrice(type, method)))
    }

    return (

        <Container>
            <form className={s.search} noValidate autoComplete="off">
                <TextField
                    value={searchQuery}
                    onChange={onChangeSearchHandler}
                    placeholder={'Search...'}
                    variant="standard"
                    color="primary"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment>
                                <SearchIcon style={{fontSize: '1.1em'}}/>
                            </InputAdornment>
                        )
                    }}
                />
            </form>
            <div className={s.filter}>

                <Button
                    onClick={() => handleItemClick('all')}
                    className={filter === 'all' ? `${s.active} ${s.item}` : s.item}>
                    All
                </Button>
                <Button
                    onClick={() => handleItemClick('popular', 'rating', 'desc')}
                    className={filter === 'popular' ? `${s.active} ${s.item}` : s.item}>
                    Popular
                </Button>
                <Button
                    onClick={() => handleItemClick('author', 'author', 'asc')}
                    className={filter === 'author' ? `${s.active} ${s.item}` : s.item}>
                    By author
                </Button>
                <Button
                    onClick={() => handleItemClick('low', 'price', 'asc')}
                    className={filter === 'low' ? `${s.active} ${s.item}` : s.item}>
                    Low price
                </Button>
                <Button
                    onClick={() => handleItemClick('high', 'price', 'desc')}
                    className={filter === 'high' ? `${s.active} ${s.item}` : s.item}>
                    High price
                </Button>


            </div>


        </Container>
    );
}

export default Filter;