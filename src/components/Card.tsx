import React from 'react'

type cardProps = {
  cardImg: string,
  location: string,
  link: string,
  title: string,
  date: string,
  description: string,
}

const Card = (props:cardProps): any => {
  return (
    <div className='card--container'>
      <img src={props.cardImg} />
      <img className='card--pin' src="/pin.svg" alt="Ubication Pin" />
      <span>{props.location}</span>
      <a href={props.link}>View on Google Maps</a>
      <h1>{props.title}</h1>
      <h3>{props.date}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
