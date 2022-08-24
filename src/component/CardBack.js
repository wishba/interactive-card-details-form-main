import React from 'react'

export default function CardBack(props) {
  return (
    <div className='card__back'>
      <p>{props.cardCVC ? props.cardCVC : '000'}</p>
    </div>
  )
}
