import { Link } from "react-router-dom"
import httpService from "../services/http.service"
import { useState, useEffect } from "react";

function SocialContent(props) {

    const [chapters, setChapters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        async function getChapter(){
            setChapters(await httpService.getChaptersByCategory("Social"));
            setIsLoading(false);
        }
        getChapter();
        
      }, []);

    let content = {
        EN: {
          TITLE: "Social section",
          DESCRIPTION: "The Social dimension of a green and prosperous future encompasses a framework to ensure that all investments meet the most pressing needs of local communities, that the costs and benefits of future growth are equitably distributed and that the most vulnerable and marginalized enhance their security.",
          TITLE2: "List of chapters",
          BUTTON1: "Return to the Green Book",
    
        },
    
        FR: {
            TITLE: "Volet Social",
            DESCRIPTION: "La dimension sociale d'un avenir vert et prospère englobe un cadre visant à garantir que tous les investissements répondent aux besoins les plus urgents des communautés locales, que les coûts et les avantages de la croissance future sont équitablement répartis et que les plus vulnérables et les plus marginalisés renforcent leur sécurité.",
            TITLE2: "liste des chapitres",
            BUTTON1: "Retourner au Livre Vert",

    
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

export default SocialContent
