import EconomyContent from "./EconomyContent"

function EconomyPage(props) {
    return (
        <main className="MainContent">
            <EconomyContent language = {props.language}/>
        </main>
    )
}

export default EconomyPage
