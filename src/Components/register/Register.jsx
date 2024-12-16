import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Grid, Link, Button, Paper, TextField, Typography } from "@mui/material";
import "./register.css"


function Register(){
    const handleSignup = (e) => {
        e.preventDefault();

                                                                                                 /* navigate("/home");*/
        window.alert("Successfully registered for webinar");
    };
    const paperStyle = {padding: "1rem", margin: "100px auto", borderRadius:"1rem", boxShadow: "10px 10px 10px", backgroundColor: "white", marginTop:"140px" };
    const heading = {fontSize:"2.5rem", fontWeight:"600",marginTop:"20px"}
    const row = {display:"flex", marginTop:"2rem"}
    const [category, setCategory] = useState('')
    const btnStyle={marginTop:"2rem", fontSize:"1.2rem", fontWeight:"700", backgroundColor:"blue", borderRadius:"0.5rem", marginBottom:"60px"};
    return (
        <div className="register">

            <Grid align="center"  display="flex" justifyContent="center"className="wrapper" >
                <Paper style={paperStyle} sx={{width: {
                    xs: '100vw',     // 0
                    sm: '80vw',     // 600
                    md: '60vw',     // 900
                    lg: '50vw',     // 1300
                    xl: '30vw',     // 1536 
                },
                
                height:{
                    lg: '550px',     // 1200px and up
                }}}>
                    <Typography component="h1" variant="h5" style={heading} color="blueviolet"> Register for the webinar</Typography>
                    <form onSubmit={handleSignup}>
                        <TextField style={row} sx={{label: { fontWeight: '700', fontSize:"1.3rem" }}} fullWidth type="text" label="Enter Name" name="name" required></TextField>
                        <TextField style={row} sx={{label: { fontWeight: '700', fontSize:"1.3rem" }}} fullWidth label="Email"  type="email" placeholder="Enter Email" name="email" required />                    
                        <TextField style={row} sx={{label: { fontWeight: '700', fontSize:"1.3rem" }}} fullWidth label="Password"  type="password" placeholder="Enter Password" name="password" required  />
                       <div className="select-wrapper">
                        <select value={category} onChange={(e) => setCategory(e.target.value)}  required className="select-field">
                            <option value="">Select Course</option>
                            <option value="ds">Data Science</option>
                            <option value="aws">AWS</option>
                            <option value="devops">DevOps</option>
                            <option value="aws">Python</option>
                            <option value="c">C</option>
                            <option value="cpp">C++</option>
                            <option value="java">Core Java</option>
                            <option value="advjava">Adv Java</option>
                            <option value="ws">Web Services</option>
                            <option value="xml">XML</option>
                            <option value="dstr">Data Structure</option>
                        </select> </div>           
                        <Button style={btnStyle} variant="contained" type="submit" >SignUp</Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    )
}
export default Register