import React from 'react'

export default function CardFront(props) {
  return (
    <div className='card__front'>
      <div className="card__front-bg"></div>
      <div className="card__front-logo"></div>
      <div className="card__front-text">
        <p>{props.cardNumber ? props.cardNumber : '0000 0000 0000 0000'}</p>
        <p>{props.cardName ? props.cardName : 'JANE APPLESEED'}
          <span className='card__front-date'>
            {props.cardM ? props.cardM : '00'}
            /
            {props.cardY ? props.cardY : '00'}
          </span>
        </p>
      </div>
    </div>
  )
}
