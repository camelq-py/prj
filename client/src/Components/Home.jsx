import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

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
        return<h1>Loading...</h1>;
    }

    return (
        <div>
            <h1 style={{ color: "white", fontSize: "40px", marginTop: "60px", textAlign:"center" }}>Welcome <span style={{ color: "white", fontSize: "40px", fontWeight: "bold" }}>{user.name}</span>!</h1>
            <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-evenly"}}>
                <div style={{ margin:"20px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <img style={{ borderRadius: "60px" }} width="200px" height="200px" src="https://ih1.redbubble.net/image.1637718590.1604/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="" />
                    <p style={{ color: "white", marginTop: "2px", fontWeight: "bold", fontSize: "20px" }}>Node JS</p>
                </div>
                <div style={{ margin:"20px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <img style={{ borderRadius: "60px" }} width="200px" height="200px" src="https://static-00.iconduck.com/assets.00/react-icon-2048x2048-o8k3ymqa.png" alt="" />
                    <p style={{ color: "white", marginTop: "2px", fontWeight: "bold", fontSize: "20px" }}>React JS</p>
                </div>
                <div style={{ margin:"20px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <img style={{ borderRadius: "60px" }} width="200px" height="200px" src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg" alt="" />
                    <p style={{ color: "white", marginTop: "2px", fontWeight: "bold", fontSize: "20px" }}>Mongo DB</p>
                </div>
            </div>
        </div>

    );
}

export default Home;