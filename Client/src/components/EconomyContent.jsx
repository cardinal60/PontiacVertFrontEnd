import { Link } from "react-router-dom"
import httpService from "../services/http.service"
import { useState, useEffect } from "react";


function EconomyContent(props) {
    
    const [chapters, setChapters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(async () => {
        setChapters(await httpService.getChaptersByCategory("Economy"));
        setIsLoading(false);
      }, []);
      
    let content = {
        EN: {
          TITLE: "Economy section",
          DESCRIPTION: "Platform Clima municipalis est instrumentum quo municipia dat ut clima uniat dum actionem collectivam committit ad pugnandum et ad mutationem climatis accommodandam.Platform Clima municipalis est instrumentum quo municipia dat ut clima uniat dum actionem collectivam committit ad pugnandum et ad mutationem climatis accommodandam.",
          TITLE2: "List of chapters",
          BUTTON1: "Return to Green Book",

    
        },
    
        FR: {
            TITLE: "Volet Economique",
            DESCRIPTION: "Platform Clima municipalis est instrumentum quo municipia dat ut clima uniat dum actionem collectivam committit ad pugnandum et ad mutationem climatis accommodandam.Platform Clima municipalis est instrumentum quo municipia dat ut clima uniat dum actionem collectivam committit ad pugnandum et ad mutationem climatis accommodandam.",
            TITLE2: "liste des chapitres",
            BUTTON1: "Retourner au livre Vert",

    
        }
      }

      props.language === "FR"
      ? (content = content.FR)
      : (content = content.EN)

    return (
        <div className="GreenBookPageImageContainer ImageEconomy">
            <div className="GreenBookImageBanner">
                <div className="GreenBookContent">
                    <h2 className="centered">{content.TITLE}</h2>
                    <p className="justified">{content.DESCRIPTION}</p>
                    <h2>{content.TITLE2}</h2>

                    

                    <div className='ChapterContainer'>
                    {isLoading ? (
                            <div className='loaderContainer'>
                                <p>Loading...</p>
                            </div>
                            ) : (
                        chapters.map((chapter) =>{
                            if(props.language === "FR"){
                                return (<a key={chapter.id} href={chapter.FR.url} className='HomeLink '> <p className='HomeButton'>{chapter.FR.name}</p></a>)
                            }

                            else{
                                return(<a key={chapter.id} href={chapter.EN.url} className='HomeLink '> <p className='HomeButton'>{chapter.EN.name}</p></a>)
                            }

                            })
                        )}
                    </div>
                    <Link to="/greenBook" className="ReturnButton smallTopMargin"><p className='HomeButton'>{content.BUTTON1}</p></Link>
                </div>
            </div>
            
        </div>
    )
}

export default EconomyContent
