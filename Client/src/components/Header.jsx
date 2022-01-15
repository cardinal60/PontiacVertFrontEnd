import { Link } from "react-router-dom";

const Header = (props) => {

  let content = {
    EN: {
      ABOUT: "ABOUT",
      CONSULTATIONS: "CONSULTATIONS",
      CONTACT: "CONTACT",
      GREENBOOK: "GREENBOOK",
      PARTNERS: "PARTNERS",
      LANG: "En"

    },

    FR: {
      ABOUT: "À PROPOS",
      CONSULTATIONS: "CONSULTATIONS",
      CONTACT: "CONTACT",
      GREENBOOK: "LIVRE VERT",
      PARTNERS: "PARTENAIRES",
      LANG: "Fr"

    }
  }
  let lang = "";

  if(props){
    lang = props.language;
  }

  else{
     lang = "EN";
  }

  lang === "FR"
  ?(content = content.FR)
  : (content = content.EN)
  

  
  return (
    <div className="NavigationContainer">
      <nav className= "NavigationMenu">
        <div className = "SiteLogo"><Link to="/" className = "ReactLink"><img src="../../images/Logo_Pontiac_vert_transparent.png" className="logo" alt= ""/></Link></div>
          <ul className = "NavList">
        
            <li className = "NavLink"><Link to="/about" className = "ReactLink">{content.ABOUT}</Link></li>
            <li className = "NavLink"><Link to="/consultation" className = "ReactLink">{content.CONSULTATIONS}</Link></li>
            <li className = "NavLink"><Link to="/contact" className = "ReactLink">{content.CONTACT}</Link></li>
            <li className = "NavLink"><Link to="/greenBook" className = "ReactLink">{content.GREENBOOK}</Link></li>
            <li className = "NavLink"><Link to="/partners" className = "ReactLink">{content.PARTNERS}</Link></li>
            <li className="LangLink" onClick={e =>props.switchLanguage()}><span className="LanguageButton">{content.LANG}</span></li>
        </ul>
      </nav>
    </div>
  );
};
export default Header
