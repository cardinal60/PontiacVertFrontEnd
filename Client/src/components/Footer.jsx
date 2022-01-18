
import { Link } from "react-router-dom";

function Footer(props) {
    let content = {
        EN: {
         LINK1: "Home",
         LINK2: "About",
         LINK3: "Consultations",
         LINK4: "Contact",
         LINK5: "Green Book",
         LINK6: "Partners",
         PARTNERS: "Partners :"
    
        },
    
        FR: {
            LINK1: "Acceuil",
            LINK2: "À Propos",
            LINK3: "Consultations",
            LINK4: "Contact",
            LINK5: "Livre Vert",
            LINK6: "Partenaires",
            PARTNERS: "Partenaires :"
    
    
        }
      }

      props.language === "FR"
      ? (content = content.FR)
      : (content = content.EN)

    return (
        <div className='FooterContainer'>
            <div className="FooterNavContainer">
                <div className = "SiteLogo"><Link to="/" className = "ReactLink"><img src="../../images/LOGO_OUTAOUAIS_FEUILLE_VERTE.png" className="logo" alt= ""/></Link></div>
                <ul className="FooterLinks">
                    <Link className= "Blue" to="/">{content.LINK1}</Link>
                    <Link className= "Blue" to= "/about">{content.LINK2}</Link>
                    <Link className= "Blue" to= "/consultation">{content.LINK3}</Link>
                    <Link className= "Blue" to= "/contact">{content.LINK4}</Link>
                    <Link className= "Blue" to= "/greenBook">{content.LINK5}</Link>
                    <Link className= "Blue" to= "/partners">{content.LINK6}</Link>
                </ul>
            </div>
            <div className="PartnersContainer">
                <p>{content.PARTNERS}</p>
                <div className="PartnersGrid">
                    <div className = "SiteLogo"><Link to="/" className = "ReactLink">Logo</Link></div>
                    <div className = "SiteLogo"><Link to="/" className = "ReactLink">Logo</Link></div>
                    <div className = "SiteLogo"><Link to="/" className = "ReactLink">Logo</Link></div>
                    <div className = "SiteLogo"><Link to="/" className = "ReactLink">Logo</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Footer
