import React from 'react'
import Card from './Card'
import './Body.css'

const Body = () => {
  return (
    <div className='body--container' >
      <Card 
      cardImg='/mountain.png'
      location='JAPAN'
      link=''
      title='Mount Fuji'
      date='12 Jan, 2021 - 24 Jan, 2021'
      description='Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.'
      />
      <Card 
      cardImg='/bridge.png'
      location='AUSTRALIA'
      link=''
      title='Sydney Opera  House'
      date='27 May, 2021 - 8 Jun, 2021'
      description="The Sydney Opera is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings. "
      />
      <Card 
      cardImg='/river.png'
      location='NORWAY'
      link=''
      title='Geirangerfjord'
      date='01 Oct, 2021 - 18 Nov, 2021'
      description='The Geiranger Fjord is a fjord in the Sunnmore region of More og Romsdal  county, Norway. It is located entirely in the Stranda Municipality.'
      />
    </div>
  )
}

export default Body
