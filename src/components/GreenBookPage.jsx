import GreenBookImageBox from "./GreenBookImageBox"


function GreenBookPage(props) {
    return (
        <main className="MainContent">
            <GreenBookImageBox language = {props.language}/>
        </main>
    )
}

export default GreenBookPage
