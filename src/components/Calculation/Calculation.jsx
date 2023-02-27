import React from 'react'

export default function Calculation({products}) {
  return (
    <div>
        <p>Basket</p>
        <p>ИТОГО: {products.length}</p>
        <p>ОБЩАЯ СТОИМОСТЬ: {products.reduce((previousValue, currentValue) =>  previousValue + currentValue.price,0)}</p>
        <p>ОБЩАЯ СТОИМОСТЬ СО СКИДКОЙ: {products.reduce((previousValue, currentValue) =>  previousValue + currentValue.priceDiscount,0).toFixed(2)}</p>
        
    </div>
  )
}
