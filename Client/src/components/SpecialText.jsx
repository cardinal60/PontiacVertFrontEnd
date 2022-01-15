

function SpecialText(props) {
    
    return (
        <div className="noSpace">
            <p className= "AvenirFont">{props.bannerTitle}</p>
            <div className="noSpace">
                <p className="AvenirFont">{props.bannerAdj}</p>
                <p className= "customShadow">{props.bannerAdj}</p>
            </div>
        </div>
    )
}

export default SpecialText
