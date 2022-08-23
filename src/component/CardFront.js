import React from 'react'

export default function CardFront(props) {
  return (
    <section>
      <p>{props.cardNumber}</p>
      <p>Jane Appleseed</p>
      <p>00/00</p>
    </section>
  )
}
