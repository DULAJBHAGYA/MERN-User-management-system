import React from "react";
import '../Home/Home.css';
import HomeImg from '../../Assets/Images/HomeImg.png';
import Header from "../../components/header/Header";

const Home=()=>{
    return(
        <>
        
        <div>
       
        <div className="home-content">
        <Header/>
        </div>
        <div className="home-img">
        <img src={HomeImg} alt="Homeimage" />
        </div>
        <div className="home-body">

        <h1>Welcome</h1>
        <h2 className="home-sub">To UserUnity</h2>
        <h2 className="home-sub-head">Official web page of UserUnity user management system</h2>
        </div>

        <div className="home-bottom">
            <p style={{color:'#0A244B'}}>Effortlessly manage user accounts, streamline access control, and enhance security<br/> with our user-friendly user management system interface.</p>
        </div>
        <div className="home-button">
      
</div>

    </div>
        </>
    )
}

export default Home;