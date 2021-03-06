import { AppBar, fade, IconButton, InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { HomeSharp, SearchSharp, ShoppingCartOutlined, ShoppingCartRounded } from '@material-ui/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActivePage } from '../actions/setActivePage';
import { setSearchTerm } from '../actions/setSearchTerm';
import { toggleCartTab } from '../actions/toggleCartTab';
import { Pages } from '../reducers/appReducer';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
    menuButton: {
        marginRight: theme.spacing(2),
      },
    homeIcon: {
        color:'white'
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
      search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        marginRight: 30,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
      },
      inputRoot: {
        color: 'inherit',
      }
}))

function NavBar() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const {searchTerm} = useSelector(state=>state.app)
    const {itemsInCart} = useSelector(state=>state.cart)
    const searchLength = searchTerm?.split('').length
    const search = searchLength >= 2 ? true : false
    
    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton className={classes.menuButton} onClick={()=>dispatch(setActivePage(Pages.home))}>
                        <HomeSharp className={classes.homeIcon}/>
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Czezar's Mart
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchSharp />
                        </div>
                    <InputBase
                        onChange={(event)=>{dispatch(setSearchTerm(event.target.value)); 
                                            search ? dispatch(setActivePage(Pages.search)) : dispatch(setActivePage(Pages.home))}}
                        value={searchTerm}
                        placeholder="Search…"
                        classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                    </div>
                    <span>{itemsInCart?Object.values(itemsInCart).reduce((a,b) => parseInt(a) + parseInt(b), 0):null}</span>
                    <IconButton onClick={()=>dispatch(toggleCartTab())}>
                      {itemsInCart?<ShoppingCartRounded className={classes.homeIcon}/>:<ShoppingCartOutlined className={classes.homeIcon}/>}
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar