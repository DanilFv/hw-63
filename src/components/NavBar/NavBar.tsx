import {AppBar, Box, Button, Toolbar, Typography} from '@mui/material';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <Typography
                    variant="h6"
                    component={NavLink} to='/'
                    sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}
                >
                    My Blog
                </Typography>

                <Button color="inherit" component={NavLink} to='/'>Home</Button>
                <Button color="inherit" component={NavLink} to='/new-post'>New post</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;