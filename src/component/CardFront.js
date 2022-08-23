import React from 'react'

export default function CardFront(props) {
  return (
    <section>
      <p>{props.cardNumber ? props.cardNumber : '0000 0000 0000 0000'}</p>
      <p>Jane Appleseed</p>
      <p>00/00</p>
    </section>
  )
}
