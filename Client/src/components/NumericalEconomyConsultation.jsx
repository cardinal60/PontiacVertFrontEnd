import ImageBanner from "./ImageBanner"
import { Link } from "react-router-dom"

function NumericalEconomyConsultation(props) {
    let content = {
        EN: {
            TITLE: "ÉCONOMIE NUMÉRIQUE ET NOUVELLES TECHNOLOGIES ",
          
            P1: "Lors de nos tables rondes sur l’économie verte et numérique en avril dernier, nous étions plus de 115 entrepreneurs, élus, organisations de développement économique et de développement durable à s’être projetés dans l’avenir pour prospérer dans l’économie de demain.",
            P2: "Un grand merci pour votre précieuse collaboration qui nous a permis d’extraire les meilleures idées, que nous avons présentés à différents experts à travers le Canada, et le résultat de notre travail est maintenant ci-dessous, sous forme de propositions qui sont maintenant sur notre plateforme de consultation publique : ",
            T1: "Propositions en économie numérique et nouvelles technologies : ",
            LI1: "Bonifier le programme canadien d’adoption du numérique (PCAN)",
            LI2: "Soutenir la création de fonds d’innovation et de développement économique local ",
            LI3: "Améliorer l’accès à la couverture cellulaire dans les communautés rurales  ",
            LI4: "Faire la promotion des programmes en numérisation ",
            LI5: "Soutenir l’acquisition de compétences numériques des gestionnaires ",
            LI6: "Soutenir les activités d’information et de formation auprès des PME",
            T2: "DOCUMENTS :",
            BUTTON3: "Return to home page",


         
    
        },
    
        FR: {
          TITLE: "ÉCONOMIE NUMÉRIQUE ET NOUVELLES TECHNOLOGIES ",
          
          P1: "Lors de nos tables rondes sur l’économie verte et numérique en avril dernier, nous étions plus de 115 entrepreneurs, élus, organisations de développement économique et de développement durable à s’être projetés dans l’avenir pour prospérer dans l’économie de demain.",
          P2: "Un grand merci pour votre précieuse collaboration qui nous a permis d’extraire les meilleures idées, que nous avons présentés à différents experts à travers le Canada, et le résultat de notre travail est maintenant ci-dessous, sous forme de propositions qui sont maintenant sur notre plateforme de consultation publique : ",
          T1: "Propositions en économie numérique et nouvelles technologies : ",
          LI1: "Bonifier le programme canadien d’adoption du numérique (PCAN)",
          LI2: "Soutenir la création de fonds d’innovation et de développement économique local ",
          LI3: "Améliorer l’accès à la couverture cellulaire dans les communautés rurales  ",
          LI4: "Faire la promotion des programmes en numérisation ",
          LI5: "Soutenir l’acquisition de compétences numériques des gestionnaires ",
          LI6: "Soutenir les activités d’information et de formation auprès des PME",
          T2: "DOCUMENTS :",
          BUTTON3: "Retourner à la page d'acceuil",

         
    
        }
      }

      props.language === "FR"
      ? (content = content.FR)
      : (content = content.EN)

    return ( 
        <main className="MainSecondaryContent">
            <ImageBanner className= "noMargin" title= {content.TITLE}/>
            <div className="secPageContent">
            <div className="AboutContainer">
                <p>{content.P1}</p>
                <p>{content.P2}</p>
                <h4>{content.T1}</h4>
                <ol>
                    <li>{content.LI1}</li>
                    <li>{content.LI2}</li>
                    <li>{content.LI3}</li>
                    <li>{content.LI4}</li>
                    <li>{content.LI5}</li>
                    <li>{content.LI6}</li>
                </ol>
                <h2>{content.T2}</h2>
            </div>
            <Link to="/" className="HomeLink ReturnButton"><p className='HomeButton'>{content.BUTTON3}</p></Link>
        </div>
    </main>
    )

}

export default NumericalEconomyConsultation
