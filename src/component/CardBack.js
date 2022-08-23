import React from 'react'

export default function CardBack(props) {
  return (
    <section>
      <p>{props.cardCVC ? props.cardCVC : '000'}</p>
    </section>
  )
}
