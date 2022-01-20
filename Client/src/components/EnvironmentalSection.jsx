import { Link } from "react-router-dom"
import httpService from "../services/http.service";
import { useState, useEffect } from "react";

function EnvironmentalSection(props) {

    const [chapters, setChapters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(async () => {
        setChapters(await httpService.getChaptersByCategory("Environment"));
        setIsLoading(false);
      }, []);
    let content = {
        EN: {
          TITLE: "Environment section",
          DESCRIPTION: "The Environmental dimension of a green and prosperous future includes initiatives to preserve bio-diversity, to incorporate the ecological perspective into town planning, business and government policy, and adopt technologies and strategies that reduce the carbon footprint associated with human activity.",
          TITLE2: "List of chapters",
          BUTTON1: "Return to Green Book",

    
        },
    
        FR: {
            TITLE: "Volet Environmental",
            DESCRIPTION: "La dimension environnementale d’un avenir vert et prospère signifie explorer et supporter les initiatives visant à préserver la biodiversité et à intégrer la perspective écologique dans l'urbanisme, les décisions d’entreprises, et les politiques gouvernementales, et adopter des stratégies et des technologies qui réduisent l'empreinte carbone associée à l'activité humaine.",
            TITLE2: "liste des chapitres",
            BUTTON1: "Retourner au Livre Vert",

    
        }
      }

      props.language === "FR"
      ? (content = content.FR)
      : (content = content.EN)

    return (
        <div className="GreenBookPageImageContainer ImageEnvironment">
            <div className="GreenBookImageBanner">
                <div className="GreenBookContent">
                    <h2 className="centered">{content.TITLE}</h2>
                    <p className="justified">{content.DESCRIPTION}</p>
                    
                </div>
            </div>
            <div className="GreenBookBottom">
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
    )
}

export default EnvironmentalSection


