import MainBannerContent from "./MainBannerContent";
import { Link } from "react-router-dom";

function ImageBox(props) {


    let content = {
        EN: {
          BUTTON2: "Round Tables",
          BUTTON3: "Read Green Book",
          BANNERTITLE: "OUTAOUAIS",
          BANNERADJ: "green",
          BANNERFULLADJ: "green and prosperous"
    
        },
    
        FR: {
            BUTTON2: "Tables Rondes",
            BUTTON3: "Lire le livre vert",
            BANNERTITLE: "OUTAOUAIS",
            BANNERADJ: "vert",
            BANNERFULLADJ: "vert et prospère"
    
        }
      }

      props.language === "FR"
      ? (content = content.FR)
      : (content = content.EN)

    return (
        <div className="MainPageImageContainer">
            <div className="MainImageBanner">
                <MainBannerContent language = {props.language} bannerTitle = {content.BANNERTITLE} bannerFullAdj = {content.BANNERFULLADJ} bannerAdj = {content.BANNERADJ}/>

            </div>
            <div id='ContainerBoutons'>
                    <Link to="/Consultation" className='HomeLink'> <p className='HomeButton'>{content.BUTTON2}</p></Link>
                    <Link to="/greenBook" className='HomeLink'><p className='HomeButton'>{content.BUTTON3}</p></Link>

            </div>
            
        </div>
    )
}

export default ImageBox
