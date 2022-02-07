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
import { Helmet } from "react-helmet";
import languageService from "./services/language.service.js";
import AgricultureConsultation from "./components/AgricultureConsultation.jsx";
const App = () => {
    
    const [language, setLanguage] = useState(languageService.findUserLanguage().toUpperCase());
    /*const [validIP, setIP] = useState(false);
    const [isLoading, setLoad] = useState(true);*/

    let content = {
        EN: {
          DESCRIPTION: "Welcome to the Green Outaouais website! The initiative For a green and prosperous Outaouais that I launched in 2021 has turned into a collective effort of your Outaouais elected officials (federal, provincial, MRC and municipal), the CREDDO, association of farmers and entrepreneurs, community organizations, experts and engaged citizens to propose solutions and create, together, a green and prosperous Outaouais by 2040. It's an ambitious initiative, but to quote Nelson Mandela:''it seems impossible until it's done!''.",
          TITLE: "Green and Prosperous Outaouais"
    
        },
    
        FR: {
            DESCRIPTION: "Bienvenue sur le site Outaouais vert! L’initiative Pour un Outaouais vert et prospère est un effort collectif de vos élus de l’Outaouais (fédéraux, provinciaux, MRC et municipaux) et du CREDDO, ainsi que des associations d’agriculteurs et d’entrepreneurs, des organismes communautaires, des experts et des citoyens engagés, afin de proposer des solutions et créer, ensemble, un Outaouais vert et prospère d'ici 2040. C’est une initiative ambitieuse, mais comme le disait si bien Nelson Mandela « ça semble impossible jusqu’à ce soit fait ! ».",
            TITLE: "Outaouais Vert et Prospere",
        }
      }

    useEffect( () => {

        async function setIP(){
         await httpService.getIp();
        }
        setIP();
      }, []);


    const switchLanguage = () =>{
        if(language === "EN")
            setLanguage("FR");
        else
            setLanguage("EN");
    }

    language === "FR"
    ? (content = content.FR)
    : (content = content.EN)
    
        return (

            <div className = "body_container">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{content.TITLE}</title>
                    <link rel="canonical" href="https://www.outaouaisvert.ca/" />
                    {/*<meta name= "description" content= {content.DESCRIPTION}></meta>*/}
                </Helmet>
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
                                <Route path="/participants" element= {<Partners language = {language}/>}/>
                                <Route path="/greenBook/environment" element= {<EnvironmentalSection language = {language}/>}/>
                                <Route path="/greenBook/social" element= {<SocialPage language = {language}/>}/>
                                <Route path="/greenBook/economy" element= {<EconomyPage language = {language}/>}/>
                                <Route path= "/consultation/durableAgriculture" element= {<AgricultureConsultation language = {language} />}/>
                                
                            </Routes>
                        </div>
                        <Footer className="Footer" language = {language}/>
                    </div>
                </Router>
                
            </div>
    
            
        )
    
}


export default App
