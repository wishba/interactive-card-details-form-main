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

  function handleSubmit(e) {
    e.preventDefault();
    document.getElementById('form').style.display = 'none';
    document.getElementById('formSubmitted').style.display = 'block';
  }

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

      <section className='form' id='form'>
        {/* <form> */}
        {/* <form onSubmit={(e) => { e.preventDefault(); }}> */}
        <form onSubmit={handleSubmit}>
          <label>CARDHOLDER NAME</label>
          <div className="form__input" id='inputName'>
            <input type="text"
              placeholder="e.g. Jane Appleseed"
              required

              onChange={(e) => { setCardName(e.target.value); }}

              onBlur={(e) => {
                if (e.target.value === '') {
                  document.getElementById('errorName').innerHTML = `Can't be blank`;
                  document.getElementById('errorName').classList.add('form__message-error');
                  document.getElementById('inputName').classList.add('form__input-error');
                } else {
                  document.getElementById('errorName').innerHTML = 'Correct format';
                  document.getElementById('errorName').classList.remove('form__message-error');
                  document.getElementById('inputName').classList.remove('form__input-error');
                }
              }}
            />
          </div>
          <p className='form__message' id='errorName'>error message</p>

          <label>CARD NUMBER</label>
          <div className="form__input" id='inputNumber'>
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
                  document.getElementById('errorNumber').classList.add('form__message-error');
                  document.getElementById('inputNumber').classList.add('form__input-error');
                } else if (e.target.value.match(/[^0-9\s]/)) {
                  document.getElementById('errorNumber').innerHTML = 'Wrong format, numbers only';
                  document.getElementById('errorNumber').classList.add('form__message-error');
                  document.getElementById('inputNumber').classList.add('form__input-error');
                } else {
                  document.getElementById('errorNumber').innerHTML = 'Correct format';
                  document.getElementById('errorNumber').classList.remove('form__message-error');
                  document.getElementById('inputNumber').classList.remove('form__input-error');
                }
              }}
            />
          </div>
          <p className='form__message' id="errorNumber">error message</p>

          <label>EXP. DATE (MM/YY)</label>
          <div className="form__flex">
            <div className="form__flex-date">
              <div className="form__input" id='inputMM'>
                <input type="text"
                  placeholder="MM"
                  required
                  maxLength={2}
                  pattern="[0-9]{2}"

                  onChange={(e) => { setCardM(e.target.value); }}

                  onBlur={(e) => {
                    if (e.target.value === '') {
                      document.getElementById('errorMM').innerHTML = `Can't be blank`;
                      document.getElementById('inputMM').classList.add('form__message-error');
                      document.getElementById('inputMM').classList.add('form__input-error');
                    } else if (e.target.value.match(/\D/)) {
                      document.getElementById('errorMM').innerHTML = 'Wrong format, numbers only';
                      document.getElementById('errorMM').classList.add('form__message-error');
                      document.getElementById('inputMM').classList.add('form__input-error');
                    } else {
                      document.getElementById('errorMM').innerHTML = 'Correct format';
                      document.getElementById('errorMM').classList.remove('form__message-error');
                      document.getElementById('inputMM').classList.remove('form__input-error');
                    }
                  }}
                />
              </div>
              {/* <p className='form__message' id="errorMM">error message</p> */}
              <div className="form__input" id='inputYY'>
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
                      document.getElementById('errorYY').classList.add('form__message-error');
                      document.getElementById('inputYY').classList.add('form__input-error');
                    } else if (e.target.value.match(/\D/)) {
                      document.getElementById('errorYY').innerHTML = 'Wrong format, numbers only';
                      document.getElementById('errorYY').classList.add('form__message-error');
                      document.getElementById('inputYY').classList.add('form__input-error');
                    } else {
                      document.getElementById('errorYY').innerHTML = 'Correct format';
                      document.getElementById('errorYY').classList.remove('form__message-error');
                      document.getElementById('inputYY').classList.remove('form__input-error');
                    }
                  }}
                />
              </div>
              {/* <p className='form__message' id="errorYY">error message</p> */}
            </div>

            <div className="form__flex-cvc">
              {/* <label>CVC</label> */}
              <div className="form__input" id='inputCVC'>
                <input type="text"
                  placeholder="e.g. 123"
                  required
                  maxLength={3}
                  pattern="[0-9]{3}"

                  onChange={(e) => { setCardCVC(e.target.value); }}

                  onBlur={(e) => {
                    if (e.target.value === '') {
                      document.getElementById('errorCVC').innerHTML = `Can't be blank`;
                      document.getElementById('errorCVC').classList.add('form__message-error');
                      document.getElementById('inputCVC').classList.add('form__input-error');
                    } else if (e.target.value.match(/\D/)) {
                      document.getElementById('errorCVC').innerHTML = 'Wrong format, numbers only';
                      document.getElementById('errorCVC').classList.add('form__message-error');
                      document.getElementById('inputCVC').classList.add('form__input-error');
                    } else {
                      document.getElementById('errorCVC').innerHTML = 'Correct format';
                      document.getElementById('errorCVC').classList.remove('form__message-error');
                      document.getElementById('inputCVC').classList.remove('form__input-error');
                    }
                  }}
                />
              </div>
              {/* <p className='form__message' id="errorCVC">error message</p> */}
            </div>
          </div>

          <button type="submit">Confirm</button>
        </form>
      </section>

      <section id='formSubmitted' className='form__submitted'>
        <FormSubmitted />
      </section>
    </main>
  )
}

export default App
