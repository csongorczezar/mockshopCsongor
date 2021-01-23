import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, CircularProgress, Grid, makeStyles, Typography } from '@material-ui/core';

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


function CategoriesList(props) {
    const classes = useStyles()
    const products = props.data
    console.log(products)
    return (
        <div>
            <h1 className={classes.title}>Welcome to Czezar's Mart</h1>
            <Grid
                container
                direction="row"
                justify="center"
            >
            {products?Object.keys(products).map(item=>(
                <Card className={classes.card}>
                    <CardActionArea>
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