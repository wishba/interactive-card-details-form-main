import { useState } from 'react';
import CardBack from './CardBack';
import CardFront from './CardFront';

export default function CardForm() {
  const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000');
  const [cardName, setCardName] = useState('Jane Appleseed');
  const [cardM, setCardM] = useState('00');
  const [cardY, setCardY] = useState('00');
  const [cardCVC, setCardCVC] = useState('000');
  return (
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

      <div id='fillForm'>
        <input
          type="text"
          placeholder="e.g. Jane Appleseed"
          onChange={(e) => {
            setCardName(e.target.value);
          }}
        />
        <input
          type='text'
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={(e) => {
            setCardNumber(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="MM"
          onChange={(e) => {
            setCardM(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="YY"
          onChange={(e) => {
            setCardY(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="e.g. 123"
          onChange={(e) => {
            setCardCVC(e.target.value);
          }}
        />
      </div>

      <button
        id='confirmButton'
        type="submit"
        onClick={() => {
          document.getElementById('fillForm').style.display = 'none';
          document.getElementById('confirmButton').style.display = 'none';
          document.getElementById('completedForm').style.display = 'block';
        }}
      >Confirm</button>

      <div id='completedForm'>
        <p>thamk</p>
        <button
          id='continueButton'
          onClick={() => {
            document.getElementById('fillForm').style.display = 'block';
            document.getElementById('confirmButton').style.display = 'block';
            document.getElementById('completedForm').style.display = 'none';
          }}
        >Continue</button>
      </div>

      {/* <form>
        <label>Cardholder Name</label>
        <label>Card Number</label>
        <label>Exp. Date (MM/YY)</label>
        <input
          type="text"
          placeholder="MM"
        />
        <label>CVC</label>
        <input
          type="submit"
          value="Confirm"
        />
      </form> */}
    </section>
  )
}
