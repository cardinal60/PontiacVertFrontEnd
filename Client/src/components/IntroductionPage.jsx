import ImageBanner from "./ImageBanner"
import { Link } from "react-router-dom"

function IntroductionPage(props) {
    let content = {
        EN: {
            T1: "Introduction of the initiative",
            P1: "CD monitores, inclusos tegumenta laptop, optime currunt ad solutionem nativam. Monitorem tuum non debes in hoc proposito currere, sed solet commendari ut textum acutissimum et imagines possibiles curare videas. Monitores LCD plerumque veniunt in duabus formis: vexillum proportio latitudinis ad altitudinem 4:3, vel amplitudinis proportio XVI: 9 vel 16:10. Monitor in widescreen utrumque latiore shsimiae et constantiae quam norma ratio monitoris.",
            T2: "Why this Initiative from Pontiac Representatives?",
            P2: "CD monitores, inclusos tegumenta laptop, optime currunt ad solutionem nativam. Monitorem tuum non debes in hoc proposito currere, sed solet commendari ut textum acutissimum et imagines possibiles curare videas. Monitores LCD plerumque veniunt in duabus formis: vexillum proportio latitudinis ad altitudinem 4:3, vel amplitudinis proportio XVI: 9 vel 16:10. Monitor in widescreen utrumque latiore shsimiae et constantiae quam norma ratio monitoris.",
            T3: "Objectives",
            P3: "CD monitores, inclusos tegumenta laptop, optime currunt ad solutionem nativam. Monitorem tuum non debes in hoc proposito currere, sed solet commendari ut textum acutissimum et imagines possibiles curare videas. Monitores LCD plerumque veniunt in duabus formis: vexillum proportio latitudinis ad altitudinem 4:3, vel amplitudinis proportio XVI: 9 vel 16:10. Monitor in widescreen utrumque latiore shsimiae et constantiae quam norma ratio monitoris.",
            T4: "Expected Results",
            P4: "CD monitores, inclusos tegumenta laptop, optime currunt ad solutionem nativam. Monitorem tuum non debes in hoc proposito currere, sed solet commendari ut textum acutissimum et imagines possibiles curare videas. Monitores LCD plerumque veniunt in duabus formis: vexillum proportio latitudinis ad altitudinem 4:3, vel amplitudinis proportio XVI: 9 vel 16:10. Monitor in widescreen utrumque latiore shsimiae et constantiae quam norma ratio monitoris.",
            BUTTON: "Return to Home Page"
    
        },
    
        FR: {
            T1: "Introduction de l’initiative",
            P1: "CD monitores, inclusos tegumenta laptop, optime currunt ad solutionem nativam. Monitorem tuum non debes in hoc proposito currere, sed solet commendari ut textum acutissimum et imagines possibiles curare videas. Monitores LCD plerumque veniunt in duabus formis: vexillum proportio latitudinis ad altitudinem 4:3, vel amplitudinis proportio XVI: 9 vel 16:10. Monitor in widescreen utrumque latiore shsimiae et constantiae quam norma ratio monitoris.",
            T2: "Pourquoi cette initiative des élus du Pontiac ?",
            P2: "CD monitores, inclusos tegumenta laptop, optime currunt ad solutionem nativam. Monitorem tuum non debes in hoc proposito currere, sed solet commendari ut textum acutissimum et imagines possibiles curare videas. Monitores LCD plerumque veniunt in duabus formis: vexillum proportio latitudinis ad altitudinem 4:3, vel amplitudinis proportio XVI: 9 vel 16:10. Monitor in widescreen utrumque latiore shsimiae et constantiae quam norma ratio monitoris.",
            T3: "Objectifs",
            P3: "CD monitores, inclusos tegumenta laptop, optime currunt ad solutionem nativam. Monitorem tuum non debes in hoc proposito currere, sed solet commendari ut textum acutissimum et imagines possibiles curare videas. Monitores LCD plerumque veniunt in duabus formis: vexillum proportio latitudinis ad altitudinem 4:3, vel amplitudinis proportio XVI: 9 vel 16:10. Monitor in widescreen utrumque latiore shsimiae et constantiae quam norma ratio monitoris.",
            T4: "Résultat escomptés (livre virtuel vert)",
            P4: "CD monitores, inclusos tegumenta laptop, optime currunt ad solutionem nativam. Monitorem tuum non debes in hoc proposito currere, sed solet commendari ut textum acutissimum et imagines possibiles curare videas. Monitores LCD plerumque veniunt in duabus formis: vexillum proportio latitudinis ad altitudinem 4:3, vel amplitudinis proportio XVI: 9 vel 16:10. Monitor in widescreen utrumque latiore shsimiae et constantiae quam norma ratio monitoris.",
            BUTTON: "Retourner à la Page d'acceuil"
        }
      }

      props.language === "EN"
      ? (content = content.EN)
      : (content = content.FR)
    return (
        <main className="MainContent">
            <ImageBanner title= "Introduction"/>
            <div className="IntroductionContent">
                
                <h2>{content.T1}</h2>
                <p className="IntroductionParagraph">{content.P1}</p>
                
                <h2>{content.T2}</h2>
                
                <p className="IntroductionParagraph">{content.P2}</p>

                <h2>{content.T3}</h2>

                <p className="IntroductionParagraph">{content.P3}</p>

                <h2>{content.T4}</h2>

                <p className="IntroductionParagraph">{content.P4}</p>


            </div>

            <Link to="/" className="HomeLink ReturnButton"><p className='HomeButton'>{content.BUTTON}</p></Link>


        </main>
    )
}

export default IntroductionPage
