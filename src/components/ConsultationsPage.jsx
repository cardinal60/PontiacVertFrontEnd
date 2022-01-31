import ImageBanner from "./ImageBanner"
import httpService from "../services/http.service"
import { useState, useEffect } from "react"
import ConsultationBox from "./ConsultationBox";
import { Link } from "react-router-dom";

function ConsultationsPage(props) {

    const [consultations, setConsultations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(async () => {
        setConsultations(await httpService.fetchAllConsultations());
        setIsLoading(false);
      }, []);


    let content = {
        EN: {
            T1: "Consultation Process",
            P1: "The purpose of the consultation process is to tap the ingenuity and expertise of top civic leaders, entrepreneurs and community organizations. We will assemble round tables through 2022 around themes ranging from green energy to health care, public transportation and nature preservation; interlinked components of sustainable prosperity. It takes a village to build a better future. Therefore, you are asked to participate via the Cocoriko platform either by commenting or introducing your own innovative proposals.",
            BUTTON: "Return to Home Page",
            T2: "List of Consultations"
    
        },
    
        FR: {
            T1: "Processus de Consultation",
            P1: "L'objectif du processus de consultation est d'exploiter l'ingéniosité et l'expertise des principaux dirigeants, entrepreneurs et organismes communautaires. Nous organiserons des tables rondes au cours de 2022 autour de thèmes allant des énergies vertes aux soins de santé, en passant par les transports collectifs ou actifs, et la préservation de la nature ; tous essentiels à une prospérité durable. Il faut tout un village pour construire un avenir meilleur. Par conséquent, vous êtes invités à participer via la plateforme Cocoriko, soit en commentant, soit en présentant vos propres propositions innovantes.",
            BUTTON: "Retourner à la Page d'acceuil",
            T2: "Listes des Consultations"
            
        }
      }

      props.language === "EN"
      ? (content = content.EN)
      : (content = content.FR)
    return (
        <main className="MainSecondaryContent">
            
            <ImageBanner title="CONSULTATIONS"/>
            <div className="secPageContent">
                <div className="marginConsultationContent">
                    <h2>{content.T1}</h2>
                    <p>{content.P1}</p>
                    <h2>{content.T2}</h2>
                    <div className="ConsultationsContainer">
                    {isLoading ? (
                <div className='loaderContainer'>
                    <p>Loading...</p>
                </div>
                    ) : (
                    consultations.map((consultation) => <ConsultationBox className="ConsultationBox" key = {consultation.id} consultation= {consultation} language= {props.language}/>)
                    )}
                        
                    </div>
                </div>

                <Link to="/" className="ReturnButton"><p className='HomeButton'>{content.BUTTON}</p></Link>
            </div>

        </main>
    )
}

export default ConsultationsPage
