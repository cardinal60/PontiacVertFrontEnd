import { Link } from "react-router-dom"

function SocialContent(props) {
    let content = {
        EN: {
          TITLE: "Social section",
          DESCRIPTION: "Platform Clima municipalis est instrumentum quo municipia dat ut clima uniat dum actionem collectivam committit ad pugnandum et ad mutationem climatis accommodandam.Platform Clima municipalis est instrumentum quo municipia dat ut clima uniat dum actionem collectivam committit ad pugnandum et ad mutationem climatis accommodandam.",
          TITLE2: "List of chapters",
          BUTTON1: "Return to the Green Book",
          CHAPTERS: [{id: 1, name:"chapter1"},{id: 2, name:"chapter2"},{id: 3, name:"chapter3"},{id: 4, name:"chapter4"},{id: 5, name:"chapter6"},{id: 7, name:"chapter7"}]

    
        },
    
        FR: {
            TITLE: "Volet Social",
            DESCRIPTION: "Platform Clima municipalis est instrumentum quo municipia dat ut clima uniat dum actionem collectivam committit ad pugnandum et ad mutationem climatis accommodandam.Platform Clima municipalis est instrumentum quo municipia dat ut clima uniat dum actionem collectivam committit ad pugnandum et ad mutationem climatis accommodandam.",
            TITLE2: "liste des chapitres",
            BUTTON1: "Retourner au Livre Vert",
            CHAPTERS: [{id: 1, name:"chapter1"},{id: 2, name:"chapter2"},{id: 3, name:"chapter3"},{id: 4, name:"chapter4"},{id: 5, name:"chapter6"},{id: 7, name:"chapter7"}]

    
        }
      }

      props.language === "FR"
      ? (content = content.FR)
      : (content = content.EN)

    return (
        <div className="GreenBookPageImageContainer ImageSocial">
            <div className="GreenBookImageBanner">
                <div className="GreenBookContent">
                    <h2 className="centered">{content.TITLE}</h2>
                    <p className="justified">{content.DESCRIPTION}</p>
                    <h2>{content.TITLE2}</h2>

                    

                    <div className='ChapterContainer'>
                        {content.CHAPTERS.map((chapter) => <a key={chapter.id} href="https//www.google.com" className='HomeLink '> <p className='HomeButton'>{chapter.name}</p></a>)}
                    </div>
                    <Link to="/greenBook" className="HomeLink ReturnButton smallTopMargin"><p className='HomeButton'>{content.BUTTON1}</p></Link>
                </div>
            </div>
            
        </div>
    )
}

export default SocialContent
