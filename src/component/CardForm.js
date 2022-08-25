import { useState } from 'react';
import CardBack from './CardBack';
import CardFront from './CardFront';

export default function CardForm() {
  const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000');
  const [cardName, setCardName] = useState('JANE APPLESEED');
  const [cardM, setCardM] = useState('00');
  const [cardY, setCardY] = useState('00');
  const [cardCVC, setCardCVC] = useState('000');
  return (
    <>
      <section>
        <div className="card__background"></div>
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

      <section className='form'>
        <div id='fillForm'>
          <label className='form__name'>CARDHOLDER NAME</label>
          <input className='form__name-in' type="text"
            placeholder="e.g. Jane Appleseed"
            onChange={(e) => {
              setCardName(e.target.value);
            }}
          />
          <label className='form__number'>CARD NUMBER</label>
          <input className='form__number-in' type='text'
            placeholder="e.g. 1234 5678 9123 0000"
            onChange={(e) => {
              setCardNumber(e.target.value);
            }}
          />
          <label className='form__exp'>EXP. DATE (MM/YY)</label>
          <input className='form__mm-in' type="text"
            placeholder="MM"
            onChange={(e) => {
              setCardM(e.target.value);
            }}
          />
          <input className='form__yy-in' type="text"
            placeholder="YY"
            onChange={(e) => {
              setCardY(e.target.value);
            }}
          />
          <label className='form__cvc'>CVC</label>
          <input className='form__cvc-in' type="text"
            placeholder="e.g. 123"
            onChange={(e) => {
              setCardCVC(e.target.value);
            }}
          />
        </div>

        <button id='confirmButton'
          type="submit"
          onClick={() => {
            document.getElementById('fillForm').style.display = 'none';
            document.getElementById('confirmButton').style.display = 'none';
            document.getElementById('completedForm').style.display = 'block';
          }}
        >Confirm</button>
      </section>

      <section id='completedForm'>
        <div className="complete__icon"></div>
        <h1>THANK YOU!</h1>
        <p>We've added your card details</p>
        <button id='continueButton'
          onClick={() => {
            document.getElementById('fillForm').style.display = 'grid';
            document.getElementById('confirmButton').style.display = 'grid';
            document.getElementById('completedForm').style.display = 'none';
          }}
        >Continue</button>
      </section>
    </>
  )
}
