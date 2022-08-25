import React from 'react'

export default function CardBack(props) {
  return (
    <div>
      <p>{props.cardCVC ? props.cardCVC : '000'}</p>
    </div>
  )
}
