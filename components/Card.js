import React from 'react';

export default function Card(props) {
    return (
        <div className='card'>

            <div className='image-container'>
                <img src={props.imageUrl} alt={props.title}></img>
                </div>
                <div className='content'>
                    <i className="fa-solid fa-location-dot"></i>
                    <span className='location'>{[...props.location].map((letter)=>`${letter.toUpperCase() }`).toString().replaceAll(',', ' ')}</span>
                    <span><a href={props.googleMapsUrl} target='_blank'>View on google maps</a></span>
                    <h1>{props.title}</h1>
                    <p className='date'>{props.startDate} - {props.endDate}</p>
                    <p className='description'>{props.description}</p>
                </div>
        </div>
    );
}