import React from 'react'

export default function CardFront(props) {
  return (
    <div className='card__front'>
      <div className="card__front-contain">
        <p className='card__number'>{props.cardNumber ? props.cardNumber : '0000 0000 0000 0000'}</p>
        <p className='card__name'>
          {props.cardName ? props.cardName : 'JANE APPLESEED'}
          <span className="card__date">
            {props.cardM ? props.cardM : '00'}
            /
            {props.cardY ? props.cardY : '00'}
          </span>
        </p>
      </div>
    </div>
  )
}
