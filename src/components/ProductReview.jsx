import React from 'react'
import ProductReviewCard from '../components/ProductReviewCard.jsx'
import "../styles/ProductReview.css"

const ProductReview = ({productReview}) => {
  return (
    <div className='ProductReviews'>
    
    {productReview.map((item, index)=>(
        <ProductReviewCard image = {item.image} name={item.name} price = {item.price} index ={index} key = {item.image} review = {item.review}  />
    ))}

    </div>
  )
}

export default ProductReview