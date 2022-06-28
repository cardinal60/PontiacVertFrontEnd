import ImageBanner from "./ImageBanner"
import { Link } from "react-router-dom"

function GreenEconomyConsultation(props) {
    let content = {
        EN: {
            TITLE: "ÉCONOMIE VERTE ET CIRCULAIRE",
          
            P1: "Lors de nos tables rondes sur l’économie verte et numérique en avril dernier, nous étions plus de 115 entrepreneurs, élus, organisations de développement économique et de développement durable à s’être projetés dans l’avenir pour prospérer dans l’économie de demain. ",
            P2: "Un grand merci pour votre précieuse collaboration qui nous a permis d’extraire les meilleures idées, que nous avons présentés à différents experts à travers le Canada, et le résultat de notre travail est maintenant ci-dessous, sous forme de propositions qui sont maintenant sur notre plateforme de consultation publique :",
            T1: "Propositions en économie verte et circulaire : ",
            LI1: "Créer un fonds vert pour les PME",
            LI2: "Soutenir la création d’ateliers de design thinking",
            LI3: "Appuyer l’organisation d’une série d’événements régionaux Dans l’œil du Dragon",
            LI4: "Offrir plus de programmes de financement pour la transition verte ",
            LI5: "Financer la mise à jour de Mon GPS pour mettre en valeur l’économie verte ",
            LI6: "Inclure des indicateurs de développement durable dans les programmes ",
            LI7: "Soutenir les activités de formations destinées aux conseillers économiques",
            T2: "LEXIQUE :",
            T3: "DOCUMENTS :",
            P3: "Économie verte : L’économie verte est une économie qui entraîne une amélioration du bien-être humain et de l’équité sociale, tout en réduisant de manière significative les risques environnementaux et la pénurie des ressources (2021, Gouvernement du Québec). ",
            P4: "Économie circulaire : Économie circulaire - Système de production, d’échange et de consommation visant à optimiser l’utilisation des ressources à toutes les étapes du cycle de vie d’un bien ou d’un service, dans une logique circulaire, tout en réduisant l’empreinte environnementale et en contribuant au bien-être des individus et des collectivités (S.d., Pôle québécois de concertation sur l’économie circulaire).",
            BUTTON3: "Retourner à la page d'acceuil",
    


         
    
        },
    
        FR: {
          TITLE: "ÉCONOMIE VERTE ET CIRCULAIRE",
          
          P1: "Lors de nos tables rondes sur l’économie verte et numérique en avril dernier, nous étions plus de 115 entrepreneurs, élus, organisations de développement économique et de développement durable à s’être projetés dans l’avenir pour prospérer dans l’économie de demain. ",
          P2: "Un grand merci pour votre précieuse collaboration qui nous a permis d’extraire les meilleures idées, que nous avons présentés à différents experts à travers le Canada, et le résultat de notre travail est maintenant ci-dessous, sous forme de propositions qui sont maintenant sur notre plateforme de consultation publique :",
          T1: "Propositions en économie verte et circulaire : ",
          LI1: "Créer un fonds vert pour les PME",
          LI2: "Soutenir la création d’ateliers de design thinking",
          LI3: "Appuyer l’organisation d’une série d’événements régionaux Dans l’œil du Dragon",
          LI4: "Offrir plus de programmes de financement pour la transition verte ",
          LI5: "Financer la mise à jour de Mon GPS pour mettre en valeur l’économie verte ",
          LI6: "Inclure des indicateurs de développement durable dans les programmes ",
          LI7: "Soutenir les activités de formations destinées aux conseillers économiques",
          T2: "LEXIQUE :",
          T3: "DOCUMENTS :",
          P3: "Économie verte : L’économie verte est une économie qui entraîne une amélioration du bien-être humain et de l’équité sociale, tout en réduisant de manière significative les risques environnementaux et la pénurie des ressources (2021, Gouvernement du Québec). ",
          P4: "Économie circulaire : Économie circulaire - Système de production, d’échange et de consommation visant à optimiser l’utilisation des ressources à toutes les étapes du cycle de vie d’un bien ou d’un service, dans une logique circulaire, tout en réduisant l’empreinte environnementale et en contribuant au bien-être des individus et des collectivités (S.d., Pôle québécois de concertation sur l’économie circulaire).",
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
                    <li>{content.LI7}</li>
                </ol>
                <h2>{content.T2}</h2>
                <p>{content.P3}</p>
                <p>{content.P4}</p>
                <h2>{content.T3}</h2>
            </div>
            <Link to="/" className="HomeLink ReturnButton"><p className='HomeButton'>{content.BUTTON3}</p></Link>
        </div>
    </main>
    )

}

export default GreenEconomyConsultation
