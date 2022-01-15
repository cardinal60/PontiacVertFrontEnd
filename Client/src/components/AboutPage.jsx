import ImageBanner from "./ImageBanner"
import { Link } from "react-router-dom"

function AboutPage(props) {
    let content = {
        EN: {
          TITLE: "About",
          T2: "Description of the initiative",
          P1: "",
          T3: "Consult the White Book",
          T4: "The Cost of Inaction",
          BUTTON1: "Consult",
          BUTTON2: "Return to Home Page",
          URL: "https://sophiechatel.libparl.ca/2021/11/21/47/"
    
        },
    
        FR: {
          TITLE: "À Propos",
          T2: "Description de l’initiative",
          P1: "CD monitores, inclusos tegumenta laptop, optime currunt ad solutionem nativam. Monitorem tuum non debes in hoc proposito currere, sed solet commendari ut textum acutissimum et imagines possibiles curare videas. Monitores LCD plerumque veniunt in duabus formis: vexillum proportio latitudinis ad altitudinem 4:3, vel amplitudinis proportio XVI: 9 vel 16:10. Monitor in widescreen utrumque latiore shsimiae et constantiae quam norma ratio monitoris. CD monitores, inclusos tegumenta laptop, optime currunt ad solutionem nativam. Monitorem tuum non debes in hoc proposito currere, sed solet commendari ut textum acutissimum et imagines possibiles curare videas. Monitores LCD plerumque veniunt in duabus formis: vexillum proportio latitudinis ad altitudinem 4:3, vel amplitudinis proportio XVI: 9 vel 16:10. Monitor in widescreen utrumque latiore shsimiae et constantiae quam norma ratio monitoris.",
          T3: "Consulter le Livre Blanc",
          T4: "Le Coût de l'inaction",
          BUTTON1: "Consulter",
          BUTTON2: "Retourner à la page d'acceuil",
          URL: "https://sophiechatel.libparl.ca/2021/11/21/42/?lang=en"
    
        }
      }

      props.language === "FR"
      ? (content = content.FR)
      : (content = content.EN)

    return (
        <main className="MainContent">
            <ImageBanner title= {content.TITLE}/>
            <div className="AboutContainer">
                <h2>{content.T2}</h2>
                <p>{content.P1}</p>
                <h2>{content.T4}</h2>
                <a href={content.URL} className='HomeLink'><p className='HomeButton'>{content.BUTTON1}</p></a>
                <h2>{content.T3}</h2>
                <a href={content.URL} className='HomeLink'><p className='HomeButton'>{content.BUTTON1}</p></a>

            </div>
            <Link to="/" className="HomeLink ReturnButton"><p className='HomeButton'>{content.BUTTON2}</p></Link>
        </main>
    )
}

export default AboutPage
