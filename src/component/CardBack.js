import React from 'react'

export default function CardBack(props) {
  return (
    <div className='card__back'>
      <div className="card__back-bg"></div>
      <p className='card__back-text'>{props.cardCVC ? props.cardCVC : '000'}</p>
    </div>
  )
}
