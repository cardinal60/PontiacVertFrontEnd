import React from 'react'
import ImageBox from './ImageBox'

function HomePage(props) {
    return (
            <main className="MainContent">
                <ImageBox language = {props.language}/>
            </main>
    )
}

export default HomePage
