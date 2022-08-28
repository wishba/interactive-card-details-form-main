import React from 'react'

export default function FormSubmitted() {
  return (
    <>
      <h1>THANK YOU!</h1>
      <p>We've added your card details</p>
      <button onClick={() => window.location.reload(false)}>Continue</button>
    </>
  )
}
