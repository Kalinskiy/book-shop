import React from 'react';
import s from './Preloader.module.css'
import LinearProgress from "@material-ui/core/LinearProgress";

const Preloader = () => {
    return (
        <div>
            <LinearProgress color="secondary"/>
        </div>
    );
};

export default Preloader;