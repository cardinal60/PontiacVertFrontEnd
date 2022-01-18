import SpecialText from "./SpecialText"

function GreenBookBanner(props) {
    let content = {
        EN: {
          TEXTE: "Platform Clima municipalis est instrumentum quo municipia dat ut clima uniat dum actionem collectivam committit ad pugnandum et ad mutationem climatis accommodandam.Platform Clima municipalis est instrumentum quo municipia dat ut clima uniat dum actionem collectivam committit ad pugnandum et ad mutationem climatis accommodandam.",
          LIEN: "More on the subject...",
          BANNERTITLE: "GREEN",
          BANNERADJ: "book",
          BANNERFULLADJ: "book"
    
        },
    
        FR: {
            TEXTE: "Platforme Climatique municipale est instrumentale pour que la mnuicipalite soit dat ut clima uniat dum actionem collectivam committit ad pugnandum et ad mutationem climatis accommodandam.Platform Clima municipalis est instrumentum quo municipia dat ut clima uniat dum actionem collectivam committit ad pugnandum et ad mutationem climatis accommodandam.",
            LIEN: "En savoir plus...",
            BANNERTITLE: "LIVRE",
            BANNERADJ: "vert",
            BANNERFULLADJ: "vert"
    
        }
      }

      props.language === "EN"
      ? (content = content.EN)
      : (content = content.FR)

    return (
        <div className="ContentContainer">
            <SpecialText bannerTitle = {content.BANNERTITLE} bannerAdj = {content.BANNERADJ} bannerFullAdj = {content.BANNERFULLADJ}/>
                
            <div className='DescriptionContainer'>
                <p className= "DescriptionSite">{content.TEXTE}</p>
            </div>
        </div>
    )
}

export default GreenBookBanner
