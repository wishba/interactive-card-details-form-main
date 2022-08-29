import React from 'react'

export default function CardFront(props) {
  return (
    <div className='card__front'>
      <p>{props.cardNumber ? props.cardNumber : '0000 0000 0000 0000'}</p>
      <p>
        {props.cardName ? props.cardName : 'JANE APPLESEED'}
        {/* </p> */}
        {/* <p> */}
        {props.cardM ? props.cardM : '00'}
        /
        {props.cardY ? props.cardY : '00'}
      </p>

    </div>
  )
}
