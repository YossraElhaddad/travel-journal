import React from 'react';
import Card from './components/Card';
import Navbar from './components/Navbar';
import data from './data';

export default function App(){

    const cards = data.map((item)=>{
      return(
      <Card
      key = {item.id}
      {...item}
      //This is equivalent to

      /*id = {item.id}
      title = {item.title}
      description = {item.description}
      imageUrl = {item.imageUrl}
      location = {item.location}
      startDate = {item.startDate}
      endDate = {item.endDate}
      googleMapsUrl = {item.googleMapsUrl}*/
        />);
    });

    return(
     <div className='App'>
       <Navbar />
       {cards}
     </div>
    );
}