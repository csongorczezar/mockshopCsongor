import { AppBar, IconButton, InputBase, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

function NavBar() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton>
                        
                    </IconButton>
                    <Typography>
                        Czezar's Mart
                    </Typography>
                    <div>
                        <div>

                        </div>
                        <InputBase/>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar