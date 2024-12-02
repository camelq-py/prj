import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import backgroundImage from '../assets/background.jpg'; 

function Home() {
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState(location.state?.user);
    const [loading, setLoading] = useState(!user);

    useEffect(() => {
        if (!user) {
            axios.get('http://localhost:3001/user', { withCredentials: true })
                .then(response => {
                    if (response.data.user) {
                        setUser(response.data.user);
                    } else {
                        navigate("/login");
                    }
                })
                .catch(() => navigate("/login"))
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
    }, [user, navigate]);

    if (loading) {
        return <center><h1>Loading...</h1></center>;
    }

    return (
        <div 
            style={{
                position: "relative", // Ensure the container is positioned relative
                height: "350px", // Full height of the viewport
                width: "500px", 
                backgroundSize: "contain", // Ensure background covers the container
                backgroundPosition: "center", // Center the background image
                filter: "blur(1px)",
                backgroundImage: `url(${backgroundImage})`,
                zIndex: 1, // Make sure the image stays above the background     
                display: "flex", // Flex to center content
                justifyContent: "center", // Horizontally center
                alignItems: "center",
                bottom: "20px",
                boxShadow: "0 0 5px #0ff, 0 0 10px black, 0 0 15px black, 0 0 20px pink",               
            }}
        >
            
            <h1
                style={{
                    position: "absolute", // Position the text absolutely within the container
                    bottom: "-130px", // Set the distance from the bottom
                    left: "10%", // Center horizontally
                    
                    color: "yellow",
                    filter:"layer",
                    fontSize: "3.5rem",
                    textShadow: "0 0 5px black, 0 0 10px #0ff, 0 0 15px #0ff, 0 0 20px #0ff",
                }}
            >
                welcome hellooooooooo{user && user.name} !!</h1>
            
        </div>
    );
}

export default Home;