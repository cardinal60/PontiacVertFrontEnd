import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

function ConsultationBox(props) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    let content = {
        EN: {
           NAME: props.consultation.EN.name,
           DESCRIPTION: props.consultation.EN.description,
           ICON: props.consultation.EN.icon,
           URL: props.consultation.EN.url,
           BUTTON: props.consultation.EN.button,
           LINK: props.consultation.EN.link,
           BUTTON2: "To know more"
    
        },
    
        FR: {
            NAME: props.consultation.FR.name,
            DESCRIPTION: props.consultation.FR.description,
            ICON: props.consultation.FR.icon,
            URL: props.consultation.FR.url,
            BUTTON: props.consultation.FR.button,
            LINK: props.consultation.EN.link,
            BUTTON2: "En savoir plus"
            
        }
      }

      props.language === "EN"
      ? (content = content.EN)
      : (content = content.FR)


    if(clicked){
        return(
            <div className="ConsultationBoxContainer">
                <div className='ConsultationBoxTitle' onClick={() => handleClick()}>
                    <p>{props.consultation.id}. {content.NAME}</p>
                    <p className="ArrowDown"></p>
                </div>
                <div className="ConsultationBoxContent">
                    <img src={content.ICON} width={100} height={100} alt="leaf"></img>
                    <div className="ConsultationBoxDescription">
                        <p className='justified'>{content.DESCRIPTION}</p>
                        <Link to={content.LINK} className='ConsultationBoxButton marginBottom'><p className='HomeButton'>{content.BUTTON2}</p></Link>
                        <a href={content.URL} target= "_blank" rel='noreferrer' className='ConsultationBoxButton'><p className='HomeButton'>{content.BUTTON}</p></a>
                    </div>
                </div>
            </div>

        )
    }

    else {
        return (
        <div className="ClosedBoxContainer" onClick={() => handleClick()}>
            <p>{props.consultation.id}. {content.NAME}</p>
            <p className="ArrowUp"></p>
        </div>
        )
    }
}

export default ConsultationBox
