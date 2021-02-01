import React from 'react';
import Books from "../Books/Books";
import Filter from "../Filter/Filter";
import s from './Container.module.css'

const Content = () => {
    return (
        <div className={s.container}>

            <div className={s.col1}>
                <Filter/>
                <Books/>
            </div>
        </div>
    );
};

export default Content;