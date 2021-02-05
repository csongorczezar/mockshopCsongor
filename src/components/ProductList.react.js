import { Box, Button, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Grid, makeStyles, Typography } from "@material-ui/core";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../actions/setCategoryAction";

const useStyles = makeStyles({
    card: {
        minWidth:250,
        maxWidth:250,
        maxHeight:500,
        margin:20
    },
    media: {
        height:270
    },
    title: {
        textTransform: "capitalize",
        textAlign: 'center',
        margin:50 
    },
    text: {
        textTransform: "capitalize",
        height:30,
        overflow:"hidden"
    },
    price: {
        marginTop: 15,
        fontWeight: "bold"
    },
    button: {
        textAlign: "center",
        marginTop: 50
    }
})


function ProductList({selectedCategory}) {
    
    const productCatalog = useSelector(state=>state.products.productsGrouped)
    const classes = useStyles()
    const dispatch = useDispatch()
    
    return (
        <div>
            <h1 className={`${classes.title}`} >{selectedCategory}</h1>
            {productCatalog ? <Grid
                container
                direction="row"
                justify="center"
            >
                {productCatalog[selectedCategory].map((item,index)=>(
                    <Card key={item.id} className={classes.card} >
                        <CardActionArea>
                            <CardMedia
                                className= {classes.media}
                                image = {item.image}
                                title = {item.title}
                            />
                            <CardContent>
                                <Typography variant="h5" component="h2" className={classes.text}>
                                    {item.title}
                                </Typography>
                                <Typography variant="h5" component="h3" className={classes.price}>
                                    Price: $ {item.price}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Grid> : <Box className={classes.button}><CircularProgress disableShrink/></Box>}
            <Box className={classes.button}>
                <Button variant="contained" color="primary" onClick={()=>dispatch(setCategory(null))} >Back</Button>
            </Box>  
        </div>
        
    )
}

export default ProductList