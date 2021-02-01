import React from 'react';
import s from './Book.module.scss'
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import {CardActionArea} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Rating from '@material-ui/lab/Rating';
import Divider from '@material-ui/core/Divider';
import Grid from "@material-ui/core/Grid";
import {useDispatch, useSelector} from "react-redux";
import {addBookAC} from "../../../reducers/cart-reducer";


const Book = ({id, title, author, image, price, rating, book}) => {
    const dispatch = useDispatch()

    const cartItems = useSelector(state => state.cart.items)
    const addedBooks = cartItems.reduce((count, book) => count + (book.id === id ? 1 : 0),0)

    const addBookToCart = () => {
        dispatch(addBookAC(book))
    }

    return (
        <Grid
            item

        >
            <Card
                className={s.book}
            >
                <CardActionArea>

                    <Typography className={s.title}>
                        {title.length > 50 ? `${title.slice(0, 50) + '...'}` : title}
                    </Typography>
                    <div className={s.price}>
                        {price} ₽
                    </div>
                    <div className={s.imageDiv}>
                        <img src={image} className={s.image} alt=""/>
                    </div>
                    <Divider/>
                    <Typography className={s.author}>
                        {author}
                    </Typography>
                    <Rating name="size-medium" defaultValue={rating} size="small" className={s.rating}/>

                </CardActionArea>
                <div className={s.button}>
                    <Button onClick={addBookToCart} variant={"outlined"} size={'small'} color={"secondary"}>
                        ADD TO SHOPPING CART {addedBooks > 0 && `(${addedBooks})`}
                    </Button>
                </div>


            </Card>
        </Grid>
    );
};

export default Book;

 