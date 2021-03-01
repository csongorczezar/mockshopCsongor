import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, CircularProgress, Grid, makeStyles, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../actions/setCategoryAction';
import { setActivePage } from '../actions/setActivePage';
import { Pages } from '../reducers/appReducer';

const useStyles = makeStyles({
    card: {
        minWidth:250,
        maxWidth:250,
        maxHeight:345,
        margin:20
    },
    media: {
        height:270
    },
    title: {
        textAlign: 'center',
        margin:50,
        marginTop:100  
    },
    text: {
        textTransform: "capitalize"
    }
})


function CategoriesList() {
    
    const classes = useStyles()
    const {productsGrouped} = useSelector(state=>state.products)
    const dispatch = useDispatch()

    return (
        <>
            <h1 className={classes.title}>Welcome to Czezar's Mart</h1>
            <Grid
                container
                direction="row"
                justify="center"
            >
            {productsGrouped?Object.keys(productsGrouped).map((item,index)=>(
                <Card className={classes.card} key={index}>
                    <CardActionArea onClick={()=>{dispatch(setCategory(item)); dispatch(setActivePage(Pages.category))}}>
                        <CardMedia
                            className= {classes.media}
                            image = {productsGrouped[item][0].image}
                            title = {productsGrouped[item][0].title}
                        />
                        <CardContent>
                            <Typography variant="h5" component="h2" className={classes.text}>
                                {item} 
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            )):<CircularProgress disableShrink />}
            </Grid>
        </>
    )
}

export default CategoriesList