import React from 'react'
import Offer from '../components/Offer.jsx';
import '../styles/offers.css';

const Offers = ({offer}) => {
  return (
    <div className='offersSection'> 
    {offer.map((item, index) => (
     <Offer key={item.image} index={index} src={item.image} link={item.url} />
    ))}
     
    </div>
  )
}

export default Offers