import { useState } from 'react'
import CardBack from './CardBack';
import CardFront from './CardFront';

function App() {
  const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000');
  const [cardName, setCardName] = useState('JANE APPLESEED');
  const [cardM, setCardM] = useState('00');
  const [cardY, setCardY] = useState('00');
  const [cardCVC, setCardCVC] = useState('000');

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
        <form onSubmit={(e) => { e.preventDefault(); }}>
          <label>CARDHOLDER NAME</label>
          <input type="text"
            placeholder="e.g. Jane Appleseed"
            required
            onChange={(e) => { setCardName(e.target.value); }}
            onBlur={(e) => {
              if (e.target.value === '') {
                document.getElementById('errorName').innerHTML = `Can't be blank`;
              } // else, if input is not a number, not 3 digit, etc etc
            }}
          />
          <p id='errorName'>error message</p>

          <label>CARD NUMBER</label>
          <input type='text'
            placeholder="e.g. 1234 5678 9123 0000"
            required
            onChange={(e) => { setCardNumber(e.target.value); }}
            onBlur={(e) => {
              if (e.target.value === '') {
                document.getElementById('errorNumber').innerHTML = `Can't be blank`;
              } else if (isNaN(e.target.value)) {
                // else, if input is not a number, not 3 digit, etc etc
                document.getElementById('errorNumber').innerHTML = `Wrong format, numbers only`;
              } else {
                document.getElementById('errorNumber').innerHTML = `Wrong format`;
              }
            }}
          />
          <p id="errorNumber">error message</p>

          <label>EXP. DATE (MM/YY)</label>
          <input type="text"
            placeholder="MM"
            onChange={(e) => { setCardM(e.target.value); }}
          />
          <input type="text"
            placeholder="YY"
            onChange={(e) => { setCardY(e.target.value); }}
          />

          <label>CVC</label>
          <input type="text"
            placeholder="e.g. 123"
            onChange={(e) => { setCardCVC(e.target.value); }}
          />

          <button type="submit">Confirm</button>
        </form>
      </section>

      <section>
        <h1>THANK YOU!</h1>
        <p>We've added your card details</p>
        <button>Continue</button>
      </section>
    </main>
  )
}

export default App
