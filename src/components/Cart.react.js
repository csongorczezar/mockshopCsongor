import { Box, Button, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart } from '../actions/emptyCart';

const useStyles = makeStyles((theme)=>({
    container: {
        marginTop:100,
        height:'100vh'
    }
}))

function Cart() {
    const classes = useStyles()
    const {itemsInCart} = useSelector(state=>state.cart)
    const {productsById} = useSelector(state=>state.products)
    const dispatch = useDispatch()

    return(
        <Grid container className={classes.container} direction="column" alignItems="center">
            <Grid item lg={10}>
                {itemsInCart?Object.keys(itemsInCart).map(item=>(
                <h1>{productsById[item.match(/(\d+)/)[0]].title}</h1>
                )):'Cart is empty'}
            </Grid>
            <Grid item lg={2}>
                <Box className={classes.button}>
                    <Button variant="contained" color="primary" onClick={()=>dispatch(emptyCart())}>Checkout</Button>
                </Box> 
            </Grid>
        </Grid>
    )
}

export default Cart