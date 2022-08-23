import { useState } from 'react';
import CardFront from './CardFront';

export default function CardForm() {
  const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000');
  return (
    <section>
      <CardFront cardNumber={cardNumber} />
      <input
        type='text'
        placeholder="e.g. 1234 5678 9123 0000"
        onChange={(e) => {
          setCardNumber(e.target.value);
        }}
      />
      {/* <form>
        <label>Cardholder Name</label>
        <input
          type="text"
          placeholder="e.g. Jane Appleseed"
        />
        <label>Card Number</label>
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
    </section>
  )
}
