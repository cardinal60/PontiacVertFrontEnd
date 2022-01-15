import ImageBanner from "./ImageBanner"
import { Link } from "react-router-dom"


function Partners(props) {

    let content = {
        EN: {
          TITLE: "Partners",
          T1: "An initiative from the regional representatives",
          BUTTON2: "Return to Home Page",
    
        },
    
        FR: {
          TITLE: "Partenaires",
          T1: "Une initiative des élus et représentants régionaux :",
          BUTTON2: "Retourner à la page d'acceuil"
         
    
        }
      }

      props.language === "FR"
      ? (content = content.FR)
      : (content = content.EN)

    

    return (
        <main className="MainContent">
            <ImageBanner title= {content.TITLE}/>
            <div className="AboutContainer">
                <h2>{content.T1}</h2>
                <ul className="RepresentativeContainer">
                    <li>Sophie Chatel</li>
                    <li>Sophie Chatel</li>
                    <li>Sophie Chatel</li>
                    <li>Sophie Chatel</li>
                    <li>Sophie Chatel</li>
                    <li>Sophie Chatel</li>
                    <li>Sophie Chatel</li>
                    <li>Sophie Chatel</li>
                    <li>Sophie Chatel</li>
                    <li>Sophie Chatel</li>
                    <li>Sophie Chatel</li>
                    <li>Sophie Chatel</li>
                    <li>Sophie Chatel</li>
                    <li>Sophie Chatel</li>
                    <li>Sophie Chatel</li>
                </ul>
                <Link to="/" className="HomeLink ReturnButton"><p className='HomeButton'>{content.BUTTON2}</p></Link>
            </div>
            
        </main>
    )
}

export default Partners