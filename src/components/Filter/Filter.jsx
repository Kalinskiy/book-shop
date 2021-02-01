import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {makeStyles} from '@material-ui/core/styles';
import s from './Filter.module.css'
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flex: 0.1,
        height: 'max-content',




    },
    paper: {
        marginRight: theme.spacing(2),




    },
}));

function Filter1() {
    const [value, setValue] = useState(0)

    function clickToGiveProps(value) {
        setValue(value)
    }

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <MenuList style={{padding:0}}>
                    <div className={s.item}>
                    <MenuItem className={value === 1 ? `${s.active} ${s.item}` : s.item}
                              onClick={() => clickToGiveProps(1)}>All</MenuItem>
                    <Divider/>
                    </div>
                    <MenuItem className={value === 2 ? `${s.active} ${s.item}` : s.item}
                              onClick={() => clickToGiveProps(2)}>Popular</MenuItem>
                    <Divider/>
                    <MenuItem className={value === 3 ? `${s.active} ${s.item}` : s.item}
                              onClick={() => clickToGiveProps(3)}>By author</MenuItem>
                    <Divider/>
                    <MenuItem className={value === 4 ? `${s.active} ${s.item}` : s.item}
                              onClick={() => clickToGiveProps(4)}>Low Price</MenuItem>
                    <Divider/>
                    <MenuItem className={value === 5 ? `${s.active} ${s.item}` : s.item}
                              onClick={() => clickToGiveProps(5)}>High Price</MenuItem>
                    <Divider/>


                </MenuList>
            </Paper>
        </div>
    );
}

export default Filter1;