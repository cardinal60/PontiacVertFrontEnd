import React from 'react'
import EnvironmentalSection from './EnvironmentalSection'

function EnvironmentPage(props) {
    return (
        <main className="MainContent">
            <EnvironmentalSection language = {props.language}/>
        </main>
    )
}

export default EnvironmentPage
