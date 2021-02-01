import React, {useEffect, useState} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import Typography from "@material-ui/core/Typography";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import s from './Header.module.css'
import {useDispatch, useSelector} from "react-redux";
import Preloader from "../Preloader/Preloader";
import {removeBookAC, setTotalPriceAC} from "../../reducers/cart-reducer";
import Badge from '@material-ui/core/Badge';
import DeleteIcon from '@material-ui/icons/Delete';
import {setBooks} from "../../reducers/books-reducer";
import {setFilterAC} from "../../reducers/filter-reducer";
import {Divider} from '@material-ui/core';
import uniqBy from 'lodash/uniqBy'


const Header = () => {


    const totalPrice = useSelector(state => state.cart.totalPrice)
    const cartItems = useSelector(state => state.cart.items)
    const cartItemsUniq = uniqBy(cartItems, o => o.id)

    const isLoaded = useSelector(state => state.books.isLoaded)

    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(setTotalPriceAC(totalPrice))
    // }, [cartItems.length])

    const [isCartOpen, setIsCartOpen] = useState(false)


    const toggleCartMenu = () => {
        setIsCartOpen(!isCartOpen)
    }


    const toHomePageClick = () => {
        dispatch(setBooks())
        dispatch(setFilterAC('all'))
    }
    return (
        <div>
            <AppBar position={'relative'}>
                <Toolbar className={s.appBar}>

                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={toHomePageClick}
                    >
                        <LibraryBooksIcon/>
                        <Typography variant="h6" noWrap>
                            BookToBuy
                        </Typography>
                    </IconButton>
                    <div className={s.cart}>
                        <IconButton style={{marginRight: '10px'}} onClick={toggleCartMenu}>
                            <Badge badgeContent={cartItems.length} color="secondary">
                                <ShoppingCartOutlinedIcon style={{color: 'white'}}/>
                            </Badge>
                            <span className={s.total}> {totalPrice} ₽ </span>
                        </IconButton>
                    </div>

                    {
                        isCartOpen
                        &&
                        <div className={s.menu}>
                            {cartItemsUniq.map((item) => {
                                return <>

                                    <div className={s.itemCartMenu}>
                                        <img src={item.image}/>
                                        <span className={s.title}>
                                        {item.title.length > 25 ? item.title.slice(0, 25) + '...' : item.title}
                                    </span>
                                        <IconButton className={s.deleteButton}>
                                            <DeleteIcon onClick={()=>dispatch(removeBookAC(item.id))}/>
                                        </IconButton>
                                    </div>
                                    <Divider/>
                                </>
                            })
                            }


                        </div>}

                </Toolbar>

            </AppBar>
            {
                !isLoaded && <Preloader/>
            }
        </div>


    );

};

export default Header;