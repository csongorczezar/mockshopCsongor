import { Box, Button, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Grid, makeStyles, Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
// import { useHistory, useParams } from "react-router-dom";

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
    // const {category} = useParams()
    const productCatalog = useSelector(state=>state.products.productsGrouped)
    const classes = useStyles()
    // const history = useHistory()
    // const goBack = () => history.push("/")
    
 
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
                <Button variant="contained" color="primary" startIcon={<ArrowBack/>} onClick={()=>window.history.back(-1)} >Back</Button>
            </Box>  
        </div>
        
    )
}

export default ProductList