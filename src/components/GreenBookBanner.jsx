import SpecialText from "./SpecialText"

function GreenBookBanner(props) {
    let content = {
        EN: {
          TEXTE: "A “green book” will encapsulate our discussions and discoveries, and serve as a practical guide to our local leaders in drafting integrated plans to put their communities on the pathway to net-zero and seize opportunities for growth, while ensuring the welfare for all. This green book will also be the voice of citizens and local leaders on Outaouais major issues, which the MPs will bring to the Parliament of Canada.",
          LIEN: "More on the subject...",
          BANNERTITLE: "GREEN",
          BANNERADJ: "book",
          BANNERFULLADJ: "book"
    
        },
    
        FR: {
            TEXTE: "Un « livre vert » résumera nos discussions et nos découvertes, et servira de guide pratique à nos dirigeants locaux dans la rédaction de leurs plans intégrés pour mettre nos communautés sur la voie du net-zéro, tout en saisissant les opportunités de croissance et en assurant le bien-être de tous. Ce livre vert sera aussi la voix des citoyens et leaders locaux sur les grands enjeux de l'Outaouais que les députés porteront avec eux au Parlement du Canada.",
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
            <SpecialText className= "marginRight" bannerTitle = {content.BANNERTITLE} bannerAdj = {content.BANNERADJ} bannerFullAdj = {content.BANNERFULLADJ}/>
                
            <div className='DescriptionContainer'>
                <p className= "DescriptionSite">{content.TEXTE}</p>
            </div>
        </div>
    )
}

export default GreenBookBanner
