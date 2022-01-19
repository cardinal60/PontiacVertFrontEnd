import ImageBanner from "./ImageBanner"
import { Link } from "react-router-dom"

function AboutPage(props) {
    let content = {
        EN: {
          TITLE: "ABOUT",
          T2: "Description of the initiative",
          P2: "For many Canadians, climate change represents not just a concern but a perpetual frustration: What can I do? The prime objective of the project for a green and prosperous Outaouais is to bring us together. Outaouais is blessed with innovators and strong community leaders. What could we achieve if we shared our best ideas and directed our investments towards a common goal?",
          P3: "The prime directive behind this initiative is to bring into focus transformative solutions that will enable us to overcome the challenges of the future. What will it take to create a prosperous Outaouais by 2040? What would we need to do to put ourselves on a pathway for sustainable prosperity?",
          P4: "The purpose of the consultation process is to tap the ingenuity and expertise of top community leaders, entrepreneurs and community organizations. We will assemble round tables through the in 2022 around themes ranging from green energy to health care, public transportation and nature preservation; interlinked components of sustainable prosperity. It takes a village to build a better future. Therefore, you are asked to participate via the Cocoriko platform either by commenting or introducing your own innovative proposals.",
            
          T3: "Consult the White Book",
          T4: "The Cost of Inaction",
          BUTTON1: "Consult",
          BUTTON2: "Return to Home Page",
          URL: "https://sophiechatel.libparl.ca/2021/11/21/47/"
    
        },
    
        FR: {
          TITLE: "À PROPOS",
          T2: "Description de l’initiative",
          T3: "Consulter le Livre Blanc",
          T4: "Le Coût de l'inaction",
          P2: "Pour de nombreux Canadiens, les changements climatiques représentent non seulement une préoccupation, mais une frustration quotidienne : que puis-je faire ? L’objectif premier du projet pour un Pontiac vert et prospère est de nous rassembler. Pontiac a la chance d'avoir des personnes exceptionnelles aux idées innovantes, et des leaders communautaires solides. Que pourrions-nous accomplir si nous réunissions nos meilleures idées et orientions nos investissements vers un objectif commun ?",
          P3: "Ainsi, l’idée principale derrière ce projet est de mettre l'accent sur des solutions innovatrices et porteur de changement qui nous permettront de relever les défis de l'avenir. Que faudra-t-il pour créer un Pontiac prospère d'ici 2040? Que devrions-nous faire pour nous mettre sur la voie d'une prospérité durable ?",
          P4: "L'objectif du processus de consultation est d'exploiter l'ingéniosité et l'expertise des principaux dirigeants, entrepreneurs et organismes communautaires. Nous organiserons des tables rondes au cours du premier semestre 2022 autour de thèmes allant des énergies vertes aux soins de santé, en passant par les transports collectifs ou actifs, et la préservation de la nature ; tous essentiels à une prospérité durable. Il faut tout un village pour construire un avenir meilleur. Par conséquent, vous êtes invités à participer via la plateforme Cocoriko, soit en commentant, soit en présentant vos propres propositions innovantes.",
            
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
                  <p className="IntroductionParagraph">{content.P2}</p>
                  <p className="IntroductionParagraph">{content.P3}</p>
                  <p className="IntroductionParagraph">{content.P4}</p>
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
