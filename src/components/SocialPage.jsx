import SocialContent from './SocialContent'

function SocialPage(props) {
    return (
        <main className="MainContent">
            <SocialContent language = {props.language}/>
        </main>
    )
}

export default SocialPage
