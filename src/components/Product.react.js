import { Box, Button, FormControl, Grid, Input, InputLabel, makeStyles, MenuItem, Select, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage } from "../actions/setActivePage";
import { Pages } from "../reducers/appReducer";

const useStyles = makeStyles({
    card: {
        minWidth:250,
        maxWidth:250,
        maxHeight:500,
        margin:20
    },
    media: {
        maxWidth:500,
        maxHeight:500,
        marginTop:100
    },
    title: {
        textTransform: "capitalize",
        textAlign: 'center',
        margin:50 
    },
    text: {
        marginBottom:30,
        marginTop:100,
        fontWeight: "bold"
    },
    price: {
        marginTop: 15,
        fontWeight: "bold",
        marginBottom:30
    },
    button: {
        textAlign: "center",
        marginTop: 50,
        marginBottom: 50
    },
    buttonCart: {
        marginBottom: 50
    },
    container: {
        width: 800,
        margin: "auto"
    },
    productTextContainer: {
        maxWidth:1500,
        marginRight:100
    },
    formControl: {
        minWidth:90,
        marginRight:20
    },
    formControlQuantity: {
        maxWidth:90
    },
    selectorContainer: {
        marginBottom:30
    }
})

export const Sizes = {extraSmall:"XS",small:"S",medium:"M",large:"LG"}

function Product() {
    const {selectedProductId} = useSelector(state=>state.app)
    const {productsById} = useSelector(state=>state.products)
    const classes = useStyles()
    const dispatch = useDispatch()

    return (
        <>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}
            >
                <Grid
                    item
                    container
                    justify="center"
                    lg
                >
                    <img src={productsById[selectedProductId].image} alt={productsById[selectedProductId].title} className= {classes.media}/>
                </Grid>
                <Grid
                    item
                    container
                    justify="flex-start"
                    className= {classes.productTextContainer}
                    lg={8}
                >
                    <Typography variant="h2"className= {classes.text}>
                            {productsById[selectedProductId].title}
                    </Typography>
                    <Typography variant="h5">
                            {productsById[selectedProductId].description}
                    </Typography>
                    <Typography variant="h5" className= {classes.price}>
                            Price: ${productsById[selectedProductId].price}
                    </Typography>
                    <Grid
                        container
                        className= {classes.selectorContainer}
                    >
                        {productsById[selectedProductId].category === "electronics" || productsById[selectedProductId].category === "jewelery" 
                        ? null : <FormControl className= {classes.formControl}>
                            <InputLabel id="select-size">Size</InputLabel>
                            <Select
                                labelId="select-size"
                                id="size"
                                value=""
                            >
                                {Object.keys(Sizes).map((item, index)=>(
                                   <MenuItem key={index} value={Sizes[item]}>{Sizes[item]}</MenuItem> 
                                ))}
                            </Select>
                        </FormControl>}
                        <FormControl className= {classes.formControlQuantity}>
                            <InputLabel htmlFor='quantity'>Quantity</InputLabel>
                            <Input id='quantity' type='number'/>
                        </FormControl>

                    </Grid>
                    <Box className={classes.buttonCart}>
                        <Button variant="contained" color="primary" size="large" >ADD TO CART</Button>
                    </Box> 
                </Grid>
            </Grid>
            <Box className={classes.button}>
                <Button variant="contained" color="primary" onClick={()=>dispatch(setActivePage(Pages.category))} >Back</Button>
            </Box> 
        </>
    )
}

export default Product