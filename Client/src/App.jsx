import Header from "./components/Header.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import Footer from "./components/Footer.jsx";
import ContactPage from "./components/ContactPage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import ConsultationsPage from "./components/ConsultationsPage.jsx";
import GreenBookPage from "./components/GreenBookPage.jsx";
import React, { useState, useEffect } from "react";
import Partners from "./components/Partners.jsx";
import EnvironmentalSection from "./components/EnvironmentalSection.jsx";
import SocialPage from "./components/SocialPage.jsx";
import EconomyPage from "./components/EconomyPage.jsx";
import httpService from "./services/http.service.js";
const App = () => {
    
    const [language, setLanguage] = useState("FR");
    /*const [validIP, setIP] = useState(false);
    const [isLoading, setLoad] = useState(true);*/
    const [IP, SETIP] = useState("");

    useEffect(async () => {
        const ip = await httpService.getIp();
        /*
        if(ip.ip ==="173.177.110.10" || ip.ip === "52.60.169.78"){
            setIP(true);
        }
        setLoad(false);
        */
        SETIP(ip.ip);
      }, []);

    const switchLanguage = () =>{
        if(language === "EN")
            setLanguage("FR");
        else
            setLanguage("EN");
    }
    
        return (

            <div className = "body_container">
                <Router >
                    <div className= "BodyContent">
                        <Header language = {language} switchLanguage= {switchLanguage}/>
                        <div className= "PageContent">
                        <Routes >
                                <Route exact path="/" element= {<HomePage language = {language}/>}/>
                                <Route exact path="/contact" element= {<ContactPage language = {language}/>}/> 
                                <Route path="/about" element= {<AboutPage language = {language}/>}/>
                                <Route path="/consultation" element= {<ConsultationsPage language = {language}/>}/>
                                <Route path="/greenBook" element= {<GreenBookPage language = {language}/>}/>
                                <Route path="/partners" element= {<Partners language = {language}/>}/>
                                <Route path="/greenBook/environment" element= {<EnvironmentalSection language = {language}/>}/>
                                <Route path="/greenBook/social" element= {<SocialPage language = {language}/>}/>
                                <Route path="/greenBook/economy" element= {<EconomyPage language = {language}/>}/>
                                
                            </Routes>
                        </div>
                        <Footer className="Footer" language = {language}/>
                    </div>
                </Router>
                
            </div>
    
            
        )
    
}


export default App
