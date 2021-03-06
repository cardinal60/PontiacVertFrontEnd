

function SpecialText(props) {
    
    return (
        <div className="noSpace">
            <p className= "AvenirFont">{props.bannerTitle}</p>
            <div className="noSpace">
                <p className="smallerAvenirFont">{props.bannerFullAdj}</p>
                <p className= "customShadow">{props.bannerAdj}</p>
            </div>
        </div>
    )
}

export default SpecialText
