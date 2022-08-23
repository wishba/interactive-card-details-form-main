import { useState } from 'react';
import CardFront from './CardFront';

export default function CardForm() {
  const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000');
  return (
    <section>
      <CardFront cardNumber={cardNumber} />
      {/* <form>
        <label>Cardholder Name</label>
        <input
          type="text"
          placeholder="e.g. Jane Appleseed"
        />
        <label>Card Number</label>
        <input
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          onChange={(e) => {
            console.log(e.target.value);
            setCardNumber(e.target.value);
          }}
        />
        <label>Exp. Date (MM/YY)</label>
        <input
          type="text"
          placeholder="MM"
        />
        <input
          type="text"
          placeholder="YY"
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
      <input
        type='text'
        onChange={(e) => {
          console.log(e.target.value);
          setCardNumber(e.target.value);
        }}
      />
    </section>
  )
}
