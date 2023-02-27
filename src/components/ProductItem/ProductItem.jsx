import React from 'react'

export default function ProductItem({id,
    title,
    description,
    price,
    thumbnail,
    priceDiscount, 
    deleteProduct}) {
  return (
    <div>
     <div>
        <img src={thumbnail} alt={title}/>
     </div>
     <div>
        <p>{title}</p>
        <p>{description}</p>
        <div>
            <p>{price}</p>
            <p>{priceDiscount}</p>
        </div>
        
     </div>
     <div>
        <button onClick={() => deleteProduct(id)}>удалить</button>
     </div>
    </div>
  )
}
