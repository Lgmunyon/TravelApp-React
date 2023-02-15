import React from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data"

export default function App(){
    const dataElements = data.map(object => {
        return <Card
                    object={object}
                />
    })
    
    return (
        <div>
            <Header />
            {dataElements}
        </div>
    )
}