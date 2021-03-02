import { Box, Button, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage } from "../actions/setActivePage";
import { setSelectedProductId } from "../actions/setSelectedProductId";
import { Pages } from "../reducers/appReducer";

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
        margin:50,
        marginTop:100 
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
        marginTop: 50,
        marginBottom: 50
    },
    container: {
        width: 800,
        margin: "auto"
    }
})


function ProductList() {
    
    const {productsGrouped} = useSelector(state=>state.products)
    const {selectedCategory} = useSelector(state=>state.app)
    const classes = useStyles()
    const dispatch = useDispatch()
    
    return (
        <>
            <h1 className={`${classes.title}`} >{selectedCategory}</h1>
            {productsGrouped ? <Grid
                container
                spacing={6}
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.container}
            >
                {productsGrouped[selectedCategory].map((item,index)=>(
                    <Grid
                        key={item.id}
                        item
                    >
                        <Card key={item.id} className={classes.card} >
                            <CardActionArea onClick={()=>{dispatch(setSelectedProductId(item.id)); dispatch(setActivePage(Pages.product))}}>
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
                                        Price: ${item.price}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid> : <Box className={classes.button}><CircularProgress disableShrink/></Box>}
            <Box className={classes.button}>
                <Button variant="contained" color="primary" onClick={()=>dispatch(setActivePage(Pages.home))} >Back</Button>
            </Box>  
        </>
        
    )
}

export default ProductList