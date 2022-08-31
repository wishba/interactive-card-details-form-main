import React from 'react'

export default function FormSubmitted() {
  return (
    <>
      <p className='form__submitted-head'>THANK YOU!</p>
      <p className='form__submitted-body'>We've added your card details</p>
      <button onClick={() => window.location.reload(false)}>Continue</button>
    </>
  )
}
