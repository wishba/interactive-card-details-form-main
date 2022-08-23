import React from 'react'

export default function CardFront(props) {
  return (
    <section>
      <p>{props.cardNumber ? props.cardNumber : '0000 0000 0000 0000'}</p>
      <p>{props.cardName ? props.cardName : 'Jane Appleseed'}</p>
      <p>
        <span>{props.cardM ? props.cardM : '00'}</span>
        /
        <span>{props.cardY ? props.cardY : '00'}</span>
      </p>
    </section>
  )
}
