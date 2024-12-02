import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Grid2, Link, Button, Paper, TextField, Typography, colors } from "@mui/material";

function Login({ setIsLoggedIn, isLoggedIn }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const validateForm = () => {
        if (!email || !password) {
            setError("Email and password are required");
            // alert("Email and password are required")
            return false;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            // alert("Password must be at least 6 characters");
            return false;
        }
        setError("");
        return true;
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            setIsSubmitting(true);
        axios.post("http://localhost:3001/login", { email, password }, { withCredentials: true })
            .then(result => {
                console.log(result.data);//log response data
                setIsSubmitting(false);
                if (result.data === "Success") {
                    axios.get('http://localhost:3001/user', { withCredentials: true })
                        .then(response => {
                            if (response.data.user) {
                                setIsLoggedIn(true);
                                navigate("/home", '_blank', { state: { user: response.data.user } });
                            }
                        });
                } else {
                    alert("Login Failed")
                }
            })
            .catch(err => {
                setIsSubmitting(false); // Re-enable submit button
                alert("Login failed, please try again later.")
                console.log(err)
            });
        }
    };

    const paperStyle = {
        backgroundColor: "white",
        padding: "20px",
        margin: "100px auto",
        borderRadius: "20px"
    };
    const heading = {
        fontSize: "36px",
        fontWeight: "600",
        color: "deeppink" 
    };
    const row = { 
        display: "flex",
        marginTop: "20px" 
    };
    const btnStyle = { 
        marginTop: "20px", 
        fontSize: "16px", 
        fontWeight: "700",  
        borderRadius: "10px", 
        border: "solid black 1px"
    };

    return (
        <div>
            <Grid2 align="center" className="wrapper">
                <Paper style={paperStyle} sx={{ width: { xs: '80vw', sm: '50vw', md: '40vw', lg: '30vw', xl: '20vw' }, height: { lg: '50vh' } }}>
                    <Typography component="h1" variant="h5" style={heading}>Login</Typography>
                    <form onSubmit={handleLogin}>
                        <span style={row}>
                            <TextField sx={{ label: { fontWeight: '100', fontSize: "16px", color:"grey" },'& .MuiInputBase-root': {color:"blue", fontWeight:"bold" , backgroundColor: 'white',borderRadius: '20px', border:"1px solid black"} }} label="Email" fullWidth type="email" placeholder="Enter Email" name="email" onChange={(e) => setEmail(e.target.value)} />
                        </span>
                        <span style={row}>
                            <TextField sx={{ label: { fontWeight: '100', fontSize: "16px", color:"grey" },'& .MuiInputBase-root': {color:"blue", fontWeight:"bold" ,backgroundColor: 'white',borderRadius: '20px', border:"1px solid black"} }} label="Password" fullWidth type="password" placeholder="Enter Password" name="password" onChange={(e) => setPassword(e.target.value)} />
                        </span>
                        <Button style={btnStyle} variant="contained" type="submit" disabled={isSubmitting}>Login</Button>
                    </form>
                    <p style={{  }}>Don't have an account? <Link style={{ color: "#7819d1", fontWeight: "bold", textDecoration: "none" }} href="/signup">SignUp</Link></p>
                </Paper>
            </Grid2>
        </div>
    );
}

export default Login;