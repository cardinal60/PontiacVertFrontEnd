import SpecialText from "./SpecialText";

function MainBannerContent(props) {
    let content = {
        EN: {
          TEXTE: "Welcome to the Green Outaouais website! I launched the initiative For a green and prosperous Outaouais in 2021, and consulted other Outaouais elected officials, associations of sustainable development, farmers and entrepreneurs, community organizations, experts and engaged citizens to propose solutions and create, together, a green and prosperous Outaouais by 2040. It's an ambitious initiative, but to quote Nelson Mandela: ''it seems impossible until it's done!''.",
          LIEN: "More on the subject...",
          REPTITLE: "       |       MEMBER OF PARLIAMENT FOR PONTIAC"
    
        },
    
        FR: {
            TEXTE: "Bienvenue sur le site Outaouais vert! L’initiative Pour un Outaouais vert et prospère est une initiative de votre députée fédérale qui a consulté les élus de l’Outaouais, associations de développement durable, d’agriculteurs, d’entrepreneurs, des organismes communautaires, des experts et des citoyens engagés, afin de proposer des solutions et créer, ensemble, un Outaouais vert et prospère. C’est une initiative ambitieuse, mais comme le disait si bien Nelson Mandela « ça semble impossible jusqu’à ce soit fait ! ».",
            LIEN: "En savoir plus...",
            REPTITLE: "       |       DÉPUTÉE DE PONTIAC"
    
        }
      }

      props.language === "FR"
      ? (content = content.FR)
      : (content = content.EN)

    return (
        <div className="ContentContainer">
            <SpecialText className= "marginTop" bannerTitle = {props.bannerTitle} bannerFullAdj = {props.bannerFullAdj} bannerAdj = {props.bannerAdj}/>
                
            <div className='DescriptionContainer'>
                <p className= "DescriptionSite">{content.TEXTE}</p>
                <span className= "SignatureContainer">
                     <span className= "RepSignature">Sophie Chatel</span>
                     <span className= "RepTitle">{content.REPTITLE}</span>
                </span>
            </div>
        </div>
    )
}

export default MainBannerContent
