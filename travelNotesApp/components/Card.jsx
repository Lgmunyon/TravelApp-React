import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.object.imageUrl} className="card--image"/>
            <div className="info">
                <div className="card--location">
                    <img src="./travelNotesApp/images/location-icon.png" className="maps--icon"/>
                    <h4 className="card--location--name">{props.object.location}</h4>
                    <a href={props.object.googleMapsUrl} className="card--url">View on Google Maps</a>
                </div>
                    <h1>{props.object.title}</h1>
                <div className="card--info">
                    <p>{props.object.startDate} - {props.object.endDate}</p>
                    <p>{props.object.description}</p>
                </div>
            </div>
        </div>
    )
}