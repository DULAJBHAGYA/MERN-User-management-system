import React from "react";
import '../Aboutus/Aboutus.css';
import Header from "../../components/header/Header";

const Aboutus=()=>{
    return(
        <>
        <div className="aboutpage">
            <Header/>
            <div className="about_us_body">
                <div className="about_us_body_head">
            <h1>About us</h1>
            </div>
    

            <div className="about_us_body_para1">
            <p>This is the official web page of the User Unity user management system</p>
           </div>
           <div className="about_us_body_para2">
            <p>The aim is to provide you with an easy and efficient user management service. </p>
                </div>
                
                </div>
                <div className="about_us_uspart">
                    <h2>Our team</h2>
                    
                </div>
        </div>
        </>
    )
}

export default Aboutus;