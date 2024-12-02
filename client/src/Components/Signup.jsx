import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Grid2, Link, Button, Paper, TextField, Typography } from "@mui/material";


function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const validateForm = () => {
        if (!name || !email || !password) {
            setError("All fields are required");
            return false;
        }
        setError("");
        return true;
    }

    const handleSignup = (e) => {
        e.preventDefault();
        if (validateForm()) {
            axios.post("http://localhost:3001/signup", { name, email, password })
            .then(result => {
                if (result.status === 201) {
                    navigate("/login");
                }
            })
            .catch(err => {
                if (err.response && err.response.status === 400) {
                    window.alert("Email already exists. Please use a different email.");
                } else {
                    console.log(err);
                }
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
        color: "#7819d1"
    }
    const row = {
        display:"flex", 
        marginTop:"20px"
    }
    const btnStyle={
        marginTop: "20px", 
        fontSize: "16px", 
        fontWeight: "700", 
        borderRadius: "10px", 
        border: "solid black 1px"
    };

    return (
        <div>
            <Grid2 align="center" className="wrapper">
                <Paper style={paperStyle} sx={{width: {
                    xs: '90vw',     // 0
                    sm: '50vw',     // 600
                    md: '40vw',     // 900
                    lg: '30vw',     // 1200
                    xl: '30vw',     // 1536 
                },
                height:{
                    lg: '65vh',    // 1200px and up
                }}}>
                    <Typography component="h1" variant="h5" style={heading}> Signup </Typography>
                    <form onSubmit={handleSignup}>
                        <TextField style={row} sx={{ label: { fontWeight: '100', fontSize: "16px", color:"grey" },'& .MuiInputBase-root': {color:"blue", fontWeight:"bold" , backgroundColor: 'white',borderRadius: '20px', border:'1px solid black'} }} fullWidth type="text" label="Enter Name" name="name" onChange={(e)=>setName(e.target.value)}></TextField>
                        <TextField style={row} sx={{ label: { fontWeight: '100', fontSize: "16px", color:"grey" },'& .MuiInputBase-root': {color:"blue", fontWeight:"bold" , backgroundColor: 'white',borderRadius: '20px',  border:'1px solid black'} }} fullWidth label="Email" variant="outlined" type="email" placeholder="Enter Email" name="email" onChange={(e)=>setEmail(e.target.value)}/>                    
                        <TextField style={row} sx={{ label: { fontWeight: '100', fontSize: "16px", color:"grey" },'& .MuiInputBase-root': {color:"blue", fontWeight:"bold" , backgroundColor: 'white',borderRadius: '20px',  border:'1px solid black'} }} fullWidth label="Password" variant="outlined" type="password" placeholder="Enter Password" name="password" onChange={(e)=>setPassword(e.target.value)} />
                        <Button style={btnStyle} variant="contained" type="submit">SignUp</Button>
                    </form>
                    <p style={{  }}>Already have an account?<Link style={{ color: "deeppink", fontWeight: "bold", textDecoration: "none" }} href="/login"> Login</Link></p>
                </Paper>
            </Grid2>
        </div>
    )
}
export default SignUp;