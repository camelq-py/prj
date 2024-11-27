import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logout from './Logout';

export const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    const button={marginRight:'10px', fontSize:'14px', fontWeight:'500', padding:'6px'}
    return (
            <AppBar sx={{ bgcolor: 'transparent', borderBottom:"solid #ca0ee8 1px" }}>
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1, color:'white', fontFamily:"Roboto", fontWeight:"700" }}>
                        Code Yourself
                    </Typography>
                    {!isLoggedIn ? (
                        <>
                            <Button variant="contained" style={button} color="error" component={Link} to="/login">
                                Login 
                            </Button>

                            <Button variant="contained" style={button} color="success" component={Link} to="/signup">
                                Signup
                            </Button>
                        </>
                    ) : (
                        <Logout setIsLoggedIn={setIsLoggedIn} />
                    )}
                </Toolbar>
            </AppBar>
    );
};