import React from 'react'

export default function CardFront(props) {
  return (
    <>
      <p>{props.cardNumber ? props.cardNumber : '0000 0000 0000 0000'}</p>
      <p>{props.cardName ? props.cardName : 'JANE APPLESEED'}</p>
      <p>
        <span>{props.cardM ? props.cardM : '00'}</span>
        /
        <span>{props.cardY ? props.cardY : '00'}</span>
      </p>
    </>
  )
}
