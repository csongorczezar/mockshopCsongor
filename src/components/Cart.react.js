import { Box, Button, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart } from '../actions/emptyCart';
import { removeFromCart } from '../actions/removeFromCart';
import { setActivePage } from '../actions/setActivePage';
import { setSelectedProductId } from '../actions/setSelectedProductId';
import { Pages } from '../reducers/appReducer';

const useStyles = makeStyles((theme)=>({
    container: {
        marginTop:100,
        height:'100vh'
    },
    media: {
        maxWidth:80,
        maxHeight:80,
        marginRight:50
    },
    cartItem: {
        marginBottom:50
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
                {itemsInCart?Object.entries(itemsInCart).map(item=>(
                <Grid 
                    container 
                    direction="row"  
                    justify="space-around" 
                    alignItems="center" 
                    className= {classes.cartItem}
                    onClick={()=>{dispatch(setSelectedProductId(item[0].match(/(\d+)/)[0])); dispatch(setActivePage(Pages.product))}} 
                >
                    <Grid item lg={4}>
                        <img src={productsById[item[0].match(/(\d+)/)[0]].image} alt={productsById[item[0].match(/(\d+)/)[0]].title} className= {classes.media}/>
                    </Grid>    
                    <Grid item lg={8}>
                        <Grid item>
                            <p className= {classes.text}>{item[1]}*{productsById[item[0].match(/(\d+)/)[0]].title.slice(0, 16)}...</p>
                        </Grid>
                        {productsById[item[0].match(/(\d+)/)[0]].category === "men clothing" ||
                         productsById[item[0].match(/(\d+)/)[0]].category === "women clothing" 
                        ?<Grid item>
                            <p className= {classes.text}>Size: {item[0].match(/[a-zA-Z]/)} </p>
                        </Grid>:null}
                        <Grid item>
                            <Box className={classes.button}>
                                <Button variant="contained" color="primary" onClick={()=>dispatch(removeFromCart(item[0]))}>Remove</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
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