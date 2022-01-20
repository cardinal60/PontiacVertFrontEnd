import SpecialText from "./SpecialText";

function MainBannerContent(props) {
    let content = {
        EN: {
          TEXTE: "Welcome to the Green Outaouais website! The initiative For a green and prosperous Outaouais (Pontiac) that I launched in 2021 has turned into a collective effort of your Outaouais elected officials (federal, provincial, MRC and municipal), the CREDDO, association of farmers and entrepreneurs, community organizations, experts and engaged citizens to propose solutions and create, together, a green and prosperous Outaouais by 2040. It's an ambitious initiative, but to quote Nelson Mandela:''it seems impossible until it's done!''.",
          LIEN: "More on the subject...",
          REPTITLE: "       |       MEMBER OF PARLIAMENT FOR PONTIAC"
    
        },
    
        FR: {
            TEXTE: "Bienvenue sur le site Outaouais vert! L’initiative Pour un Outaouais (Pontiac) vert et prospère que j’ai lancée en 2021 s’est transformée en un effort collectif de vos élus de l’Outaouais (fédéraux, provinciaux, MRC et municipaux), le CREDDO, associations d’agriculteurs et d’entrepreneurs, organismes communautaires, experts et citoyens engagés, afin de proposer des solutions et créer, ensemble, un Outaouais vert et prospère d'ici 2040. C’est une initiative ambitieuse, mais comme le disait si bien Nelson Mandela « ça semble impossible jusqu’à ce soit fait ! ». ",
            LIEN: "En savoir plus...",
            REPTITLE: "       |       DÉPUTÉE DE PONTIAC"
    
        }
      }

      props.language === "EN"
      ? (content = content.EN)
      : (content = content.FR)

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
