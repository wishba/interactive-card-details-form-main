import { useState } from 'react'
import CardBack from './CardBack';
import CardFront from './CardFront';
import FormSubmitted from './FormSubmitted';

function App() {
  const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000');
  const [cardName, setCardName] = useState('JANE APPLESEED');
  const [cardM, setCardM] = useState('00');
  const [cardY, setCardY] = useState('00');
  const [cardCVC, setCardCVC] = useState('000');

  /* const handleSubmit = (e) => {
    e.preventDefault();
  } */

  return (
    <main className="App">
      <section>
        <CardFront
          cardNumber={cardNumber}
          cardName={cardName}
          cardM={cardM}
          cardY={cardY}
        />
        <CardBack
          cardCVC={cardCVC}
        />
      </section>

      <section>
        {/* <form onSubmit={handleSubmit}> */}
        <form onSubmit={(e) => { e.preventDefault(); }}>
          <label>CARDHOLDER NAME</label>
          <input type="text"
            placeholder="e.g. Jane Appleseed"
            required

            onChange={(e) => { setCardName(e.target.value); }}

            onBlur={(e) => {
              if (e.target.value === '') {
                document.getElementById('errorName').innerHTML = `Can't be blank`;
              } else {
                document.getElementById('errorName').innerHTML = `Correct format`;
              }
            }}
          />
          <p id='errorName'>error message</p>

          <label>CARD NUMBER</label>
          <input type='text'
            placeholder="e.g. 1234 5678 9123 0000"
            required
            maxLength={16}
            pattern="[0-9 ]{20}"

            onChange={(e) => {
              setCardNumber(e.target.value);
              setCardNumber(e.target.value.replace(/(.{4})/g, '$1 '));
            }}

            onFocus={(e) => {
              e.target.value = e.target.value.replace(/\s/g, '');
            }}

            onBlur={(e) => {
              e.target.value = e.target.value.replace(/(.{4})/g, '$1 ');

              if (e.target.value === '') {
                document.getElementById('errorNumber').innerHTML = `Can't be blank`;
              } else if (e.target.value === ' ' && isNaN(e.target.value)) {
                document.getElementById('errorNumber').innerHTML = `Wrong format, numbers only`;
              } else {
                document.getElementById('errorNumber').innerHTML = `Correct format`;
              }
            }}
          />
          <p id="errorNumber">error message</p>

          <label>EXP. DATE (MM/YY)</label>
          <input type="text"
            placeholder="MM"
            required
            maxLength={2}
            pattern="[0-9]{2}"

            onChange={(e) => { setCardM(e.target.value); }}

            onBlur={(e) => {
              if (e.target.value === '') {
                document.getElementById('errorMM').innerHTML = `Can't be blank`;
              } else if (e.target.value.includes('[a-zA-Z]') || e.target.value.includes(' ') || isNaN(e.target.value)) {
                document.getElementById('errorMM').innerHTML = `Wrong format, numbers only`;
              } else {
                document.getElementById('errorMM').innerHTML = `Correct format`;
              }
            }}
          />
          <input type="text"
            placeholder="YY"
            required
            maxLength={2}
            pattern="[0-9]{2}"
            title='3 number'

            onChange={(e) => { setCardY(e.target.value); }}

            onBlur={(e) => {
              if (e.target.value === '') {
                document.getElementById('errorYY').innerHTML = `Can't be blank`;
              } else if (e.target.value.includes('[a-zA-Z]') || e.target.value.includes(' ') || isNaN(e.target.value)) {
                document.getElementById('errorYY').innerHTML = `Wrong format, numbers only`;
              } else {
                document.getElementById('errorYY').innerHTML = `Correct format`;
              }
            }}
          />
          <p id="errorMM">error message</p>
          <p id="errorYY">error message</p>

          <label>CVC</label>
          <input type="text"
            placeholder="e.g. 123"
            required
            maxLength={3}
            pattern="[0-9]{3}"

            onChange={(e) => { setCardCVC(e.target.value); }}

            onBlur={(e) => {
              if (e.target.value === '') {
                document.getElementById('errorCVC').innerHTML = `Can't be blank`;
              } else if (e.target.value.includes('[a-zA-Z]') || e.target.value.includes(' ') || isNaN(e.target.value)) {
                document.getElementById('errorCVC').innerHTML = `Wrong format, numbers only`;
              } else {
                document.getElementById('errorCVC').innerHTML = `Correct format`;
              }
            }}
          />
          <p id="errorCVC">error message</p>

          <button type="submit">Confirm</button>
        </form>
      </section>

      <section>
        <h1>THANK YOU!</h1>
        <p>We've added your card details</p>
        <button>Continue</button>
      </section>
    </main >
  )
}

export default App
