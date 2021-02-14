import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, CircularProgress, Grid, makeStyles, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../actions/setCategoryAction';
import { setActivePage } from '../actions/setActivePage';


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
        margin:50 
    },
    text: {
        textTransform: "capitalize"
    }
})


function CategoriesList() {
    
    const classes = useStyles()
    const products = useSelector(state=>state.products.productsGrouped)
    const dispatch = useDispatch()

    return (
        <div>
            <h1 className={classes.title}>Welcome to Czezar's Mart</h1>
            <Grid
                container
                direction="row"
                justify="center"
            >
            {products?Object.keys(products).map((item,index)=>(
                <Card className={classes.card} key={index}>
                    <CardActionArea onClick={()=>{dispatch(setCategory(item)); dispatch(setActivePage("category"))}}>
                        <CardMedia
                            className= {classes.media}
                            image = {products[item][0].image}
                            title = {products[item][0].title}
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
        </div>
    )
}

export default CategoriesList