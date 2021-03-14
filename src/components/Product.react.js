import { Box, Button, FormControl, Grid, Input, InputLabel, makeStyles, MenuItem, Select, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/addToCart";
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
        marginTop: 25,
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

export const Sizes = {extraSmall:"X",small:"S",medium:"M",large:"L"}

function Product() {
    const {selectedProductId} = useSelector(state=>state.app)
    const {productsById} = useSelector(state=>state.products)
    const classes = useStyles()
    const dispatch = useDispatch()
    const [itemSize, setItemSize] = useState('')
    const [itemQuantity, setItemQuantity] = useState('')

    const itemInCart = `${selectedProductId}_${itemSize}`

    return (
        <>
            {productsById && selectedProductId?<Grid
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
                                MenuProps={{ disableScrollLock: true}}
                                labelId="select-size"
                                id="size"
                                value={itemSize}
                                onChange={event=>setItemSize(event.target.value)}
                            >
                                {Object.keys(Sizes).map((item, index)=>(
                                   <MenuItem key={index} value={Sizes[item]}>{Sizes[item]}</MenuItem> 
                                ))}
                            </Select>
                        </FormControl>}
                        <FormControl className= {classes.formControlQuantity}>
                            <InputLabel htmlFor='quantity'>Quantity</InputLabel>
                            <Input id='quantity' type='number' value={itemQuantity} inputProps={{ min: 0, max: 100000}}
                                onChange={event=>setItemQuantity(event.target.value)}/>
                        </FormControl>

                    </Grid>
                    <Box className={classes.buttonCart}>
                        <Button variant="contained" color="primary" size="large" onClick={()=>dispatch(addToCart({[itemInCart]:parseInt(itemQuantity)}))}>
                            ADD TO CART
                        </Button>
                    </Box> 
                </Grid>
            </Grid>:null}
            <Box className={classes.button}>
                <Button variant="contained" color="primary" onClick={()=>dispatch(setActivePage(Pages.category))} >Back</Button>
            </Box> 
        </>
    )
}

export default Product