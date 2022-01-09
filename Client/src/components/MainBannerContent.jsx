import { Link } from "react-router-dom";

function MainBannerContent(props) {
    let content = {
        EN: {
          TEXTE: "Platform Clima municipalis est instrumentum quo municipia dat ut clima uniat dum actionem collectivam committit ad pugnandum et ad mutationem climatis accommodandam.Platform Clima municipalis est instrumentum quo municipia dat ut clima uniat dum actionem collectivam committit ad pugnandum et ad mutationem climatis accommodandam.",
          LIEN: "More on the subject...",
    
        },
    
        FR: {
            TEXTE: "Platforme Climatique municipale est instrumentale pour que la mnuicipalite soit dat ut clima uniat dum actionem collectivam committit ad pugnandum et ad mutationem climatis accommodandam.Platform Clima municipalis est instrumentum quo municipia dat ut clima uniat dum actionem collectivam committit ad pugnandum et ad mutationem climatis accommodandam.",
            LIEN: "En savoir plus..."
    
        }
      }

      props.language === "EN"
      ? (content = content.EN)
      : (content = content.FR)

    return (
        <div className="ContentContainer">
            <img src="../../images/Typo_livre_vert.png" alt=""/>
                
            <div className='DescriptionContainer'>
                <p className= "DescriptionSite">{content.TEXTE}</p>
                <Link to="/introduction" className="IntroductionLink">{content.LIEN}</Link>
            </div>
        </div>
    )
}

export default MainBannerContent
