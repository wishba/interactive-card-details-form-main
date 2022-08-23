import { useState } from 'react';
import CardFront from './CardFront';

export default function CardForm() {
  const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000');
  const [cardName, setCardName] = useState('Jane Appleseed');
  const [cardM, setCardM] = useState('00');
  const [cardY, setCardY] = useState('00');
  return (
    <section>
      <CardFront
        cardNumber={cardNumber}
        cardName={cardName}
        cardM={cardM}
        cardY={cardY}
      />
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
          type="text"
          placeholder="e.g. 123"
        />
        <input
          type="submit"
          value="Confirm"
        />
      </form> */}
    </section>
  )
}
