import GreenBookBanner from "./GreenBookBanner"
import { Link } from "react-router-dom"

function GreenBookImageBox(props) {
    let content = {
        EN: {
          BUTTON1: "Environmental Section",
          BUTTON2: "Economy Section",
          BUTTON3: "Social Section"
    
        },
    
        FR: {
          BUTTON1: "Volet Environmental",
          BUTTON2: "Volet Économique",
          BUTTON3: "Volet Social"
    
        }
      }

      props.language === "FR"
      ? (content = content.FR)
      : (content = content.EN)

    return (
        <div className="GreenBookPageImageContainer ImageGreenBook">
            <div className="GreenMainImageBanner">
                <GreenBookBanner language = {props.language}/>

                
            </div>
            <div id='GreenContainerBoutons'>
              <Link to="/greenBook/environment" className='HomeLink'> <p className='HomeButton'>{content.BUTTON1}</p></Link>
              <Link to="/greenBook/economy" className='HomeLink'> <p className='HomeButton'>{content.BUTTON2}</p></Link>
              <Link to="/greenBook/social" className='HomeLink'><p className='HomeButton'>{content.BUTTON3}</p></Link>

            </div>
            
        </div>
    )
}

export default GreenBookImageBox
