import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Grid2, Link, Button, Paper, TextField, Typography, colors } from "@mui/material";

function Login({ setIsLoggedIn, isLoggedIn }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/login", { email, password }, { withCredentials: true })
            .then(result => {
                if (result.data === "Success") {
                    axios.get('http://localhost:3001/user', { withCredentials: true })
                        .then(response => {
                            if (response.data.user) {
                                setIsLoggedIn(true);
                                navigate("/home", { state: { user: response.data.user } });
                            }
                        });
                } else {
                    alert("Invlid Username or password");
                }
            })
            .catch(err => console.log(err));
    };

    const paperStyle = {
        backgroundColor: "transparent",
        padding: "20px",
        margin: "100px auto",
        borderRadius: "20px",
        border: "1px solid #ca0ee8"
    };
    const heading = {
        fontSize: "40px",
        fontWeight: "600",
        color: "white" 
    };
    const row = { 
        display: "flex",
        marginTop: "20px" 
    };
    const btnStyle = { 
        marginTop: "12px", 
        fontSize: "16px", 
        fontWeight: "700", 
        backgroundColor: "transparent", 
        borderRadius: "10px", 
        border: "solid white 1px"
    };
    const label = { backgroundColor:"white"  };

    return (
        <div>
            <Grid2 align="center" className="wrapper">
                <Paper style={paperStyle} sx={{ width: { xs: '80vw', sm: '50vw', md: '40vw', lg: '30vw', xl: '20vw' }, height: { lg: '50vh' } }}>
                    <Typography component="h1" variant="h5" style={heading}>Login</Typography>
                    <form onSubmit={handleLogin}>
                        <span style={row}>
                            <TextField sx={{ label: { fontWeight: '100', fontSize: "16px", color:"grey" },'& .MuiInputBase-root': {color:"blue", fontWeight:"bold" , backgroundColor: 'white',borderRadius: '20px'} }} label="Email" fullWidth type="email" placeholder="Enter Email" name="email" onChange={(e) => setEmail(e.target.value)} />
                        </span>
                        <span style={row}>
                            <TextField sx={{ label: { fontWeight: '100', fontSize: "16px", color:"grey" },'& .MuiInputBase-root': {color:"blue", fontWeight:"bold" ,backgroundColor: 'white',borderRadius: '20px'} }} label="Password" fullWidth type="password" placeholder="Enter Password" name="password" onChange={(e) => setPassword(e.target.value)} />
                        </span>
                        <Button style={btnStyle} variant="contained" type="submit">Login</Button>
                    </form>
                    <p style={{ color: "white" }}>Don't have an account? <Link style={{ color: "#47f55b", fontWeight: "bold", textDecoration: "none" }} href="/signup">SignUp</Link></p>
                </Paper>
            </Grid2>
        </div>
    );
}

export default Login;