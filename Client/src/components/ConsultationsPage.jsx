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
            P1: "CD monitores, inclusos tegumenta laptop, optime currunt ad solutionem nativam. Monitorem tuum non debes in hoc proposito currere, sed solet commendari ut textum acutissimum et imagines possibiles curare videas. Monitores LCD plerumque veniunt in duabus formis: vexillum proportio latitudinis ad altitudinem 4:3, vel amplitudinis proportio XVI: 9 vel 16:10. Monitor in widescreen utrumque latiore shsimiae et constantiae quam norma ratio monitoris.",
            BUTTON: "Return to Home Page",
            T2: "List of Consultations"
    
        },
    
        FR: {
            T1: "Processus de Consultation",
            P1: "CD monitores, inclusos tegumenta laptop, optime currunt ad solutionem nativam. Monitorem tuum non debes in hoc proposito currere, sed solet commendari ut textum acutissimum et imagines possibiles curare videas. Monitores LCD plerumque veniunt in duabus formis: vexillum proportio latitudinis ad altitudinem 4:3, vel amplitudinis proportio XVI: 9 vel 16:10. Monitor in widescreen utrumque latiore shsimiae et constantiae quam norma ratio monitoris.",
            BUTTON: "Retourner à la Page d'acceuil",
            T2: "Listes des Consultations"
            
        }
      }

      props.language === "EN"
      ? (content = content.EN)
      : (content = content.FR)
    return (
        <main className="MainContent">
            <ImageBanner title="CONSULTATIONS"/>
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

        </main>
    )
}

export default ConsultationsPage
