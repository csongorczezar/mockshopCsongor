import { Box, Button, FormControl, Grid, InputLabel, makeStyles, MenuItem, Select, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage } from "../actions/setActivePage";

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
    selectorContainer: {
        marginBottom:30
    }
})

function Product() {
    const selectedProductId = useSelector(state=>state.app.selectedProductId)
    const productsById = useSelector(state=>state.products.productsById)
    const classes = useStyles()
    const dispatch = useDispatch()

    return (
        <div>
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
                            >
                                <MenuItem value={"xs"}>XS</MenuItem>
                                <MenuItem value={"s"}>S</MenuItem>
                                <MenuItem value={"m"}>M</MenuItem>
                                <MenuItem value={"lg"}>LG</MenuItem>
                            </Select>
                        </FormControl>}
                        <TextField
                            id="standard-number"
                            label="Quantity"
                            type="number"
                            style={{ width: 90 }}
                        />

                    </Grid>
                    <Box className={classes.buttonCart}>
                        <Button variant="contained" color="primary" size="large" >ADD TO CART</Button>
                    </Box> 
                </Grid>
            </Grid>
            <Box className={classes.button}>
                <Button variant="contained" color="primary" onClick={()=>dispatch(setActivePage("category"))} >Back</Button>
            </Box> 
        </div>
    )
}

export default Product