import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {setBooks} from "./reducers/books-reducer";
import Header from "./components/Header/Header";
import s from './App.module.css'
import Content from "./components/Content/Content";
import Button from "@material-ui/core/Button";


function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setBooks())
    }, [])

    return (
        <div className={s.container}>
            <Header/>
            <Content/>
        </div>
    );
}


export default App;
