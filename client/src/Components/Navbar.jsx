import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logout from './Logout';

export const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    const login_button={marginRight:'10px', fontSize:'14px', fontWeight:'500', padding:'6px', backgroundColor:"deeppink"}
    const signup_button={marginRight:'10px', fontSize:'14px', fontWeight:'500', padding:'6px', backgroundColor:"#7819d1"}

    return (
            <AppBar sx={{ bgcolor: 'transparent' }}>
                <Toolbar>
                    <Typography style={{textShadow:"0 0 5px black, 0 0 10px deeppink, 0 0 15px deeppink, 0 0 20px black" }} variant="h4" component="div" sx={{ flexGrow: 1, color:'white', fontFamily:"Roboto", fontWeight:"700" }}>
                        Code Yourself
                    </Typography>
                    {!isLoggedIn ? (
                        <>
                            <Button variant="contained" style={login_button} component={Link} to="/login">
                                Login 
                            </Button>

                            <Button variant="contained" style={signup_button} color="primary" component={Link} to="/signup">
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