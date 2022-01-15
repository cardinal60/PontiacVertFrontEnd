import MainBannerContent from "./MainBannerContent";
import { Link } from "react-router-dom";

function ImageBox(props) {

    let content = {
        EN: {
          BUTTON1: "Participate to round tables",
          BUTTON2: "Consult the consultations",
          BUTTON3: "Read Green Book",
          BANNERTITLE: "GREEN",
          BANNERADJ: "outaouais"
    
        },
    
        FR: {
            BUTTON1: "Participer aux tables rondes",
            BUTTON2: "Consulter les consultations",
            BUTTON3: "Lire le livre vert",
            BANNERTITLE: "OUTAOUAIS",
            BANNERADJ: "vert"
    
        }
      }

      props.language === "FR"
      ? (content = content.FR)
      : (content = content.EN)

    return (
        <div className="MainPageImageContainer">
            <div className="MainImageBanner">
                <MainBannerContent language = {props.language} bannerTitle = {content.BANNERTITLE} bannerAdj = {content.BANNERADJ}/>

                <div id='ContainerBoutons'>
                
                    <a href="https://demo.cocoriko.org/groups/pour-un-pontiac-vert-et-prospere?setLng=en-CA" className='HomeLink'><p className='HomeButton'>{content.BUTTON1}</p></a>
                    <Link to="/Consultation" className='HomeLink'> <p className='HomeButton'>{content.BUTTON2}</p></Link>
                    <Link to="/greenBook" className='HomeLink'><p className='HomeButton'>{content.BUTTON3}</p></Link>

                </div>
            </div>
            
        </div>
    )
}

export default ImageBox
