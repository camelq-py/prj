import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@mui/material";

function Logout({ setIsLoggedIn }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        axios.post("http://localhost:3001/logout", {}, { withCredentials: true })
            .then(response => {
                if (response.status === 200) {
                    setIsLoggedIn(false);
                    navigate("/login");
                }
            })
            .catch(error => {
                console.error("Error logging out:", error);
            });
    };
    const button={marginRight:'10px', fontSize:'14px', fontWeight:'500', padding:'6px'}
    return (
        <Button variant="contained" color="error" style={button} onClick={handleLogout}>
            Logout
        </Button>
    );
}

export default Logout;