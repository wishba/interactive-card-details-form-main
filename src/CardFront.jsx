import React from 'react'

export default function CardFront(props) {
  return (
    <div className='card__front'>
      <p className='card__number'>{props.cardNumber ? props.cardNumber : '0000 0000 0000 0000'}</p>
      <div className='card__front-container'>
        <p className='card__name'>
          {props.cardName ? props.cardName : 'JANE APPLESEED'}
        </p>
        <p className='card__date'>
          {props.cardM ? props.cardM : '00'}
          /
          {props.cardY ? props.cardY : '00'}
        </p>
      </div>
    </div>
  )
}
