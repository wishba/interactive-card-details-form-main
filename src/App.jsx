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
      <section className='card'>
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
                }

                if (e.target.value.match(/\D/)) {
                  document.getElementById('errorNumber').innerHTML = 'Wrong format, numbers only';
                  document.getElementById('errorNumber').classList.add('form__message-error');
                  document.getElementById('inputNumber').classList.add('form__input-error');
                }

                // if (e.target.value.match(/\d/)) {
                if (e.target.value.match(/\d{4}\s\d{4}\s\d{4}\s\d{4}/)) {
                  document.getElementById('errorNumber').innerHTML = 'Correct format';
                  document.getElementById('errorNumber').classList.remove('form__message-error');
                  document.getElementById('inputNumber').classList.remove('form__input-error');
                }
              }}
            />
          </div>
          <p className='form__message' id="errorNumber">error message</p>

          <div className="form__flex">
            <div className="form__flex-left">
              <label>EXP. DATE (MM/YY)</label>
            </div>
            <div className="form__flex-right">
              <label>CVC</label>
            </div>
          </div>

          <div className="form__flex">
            <div className="form__flex-left">
              <div className="form__input" id='inputMM'>
                <input type="text"
                  placeholder="MM"
                  required
                  maxLength={2}
                  pattern="[0-9]{2}"

                  onChange={(e) => { setCardM(e.target.value); }}

                  onBlur={(e) => {
                    if (e.target.value === '') {
                      document.getElementById('errorDate').innerHTML = `Can't be blank`;
                      document.getElementById('errorDate').classList.add('form__message-error');
                      document.getElementById('inputMM').classList.add('form__input-error');
                    }

                    if (e.target.value.match(/\D/)) {
                      document.getElementById('errorDate').innerHTML = 'Wrong format, numbers only';
                      document.getElementById('errorDate').classList.add('form__message-error');
                      document.getElementById('inputMM').classList.add('form__input-error');
                    }

                    if (e.target.value.match(/\d/) && document.getElementById('inputYY').classList == ('form__input-error')) {
                      document.getElementById('errorDate').innerHTML = 'Correct format';
                      document.getElementById('errorDate').classList.remove('form__message-error');
                      document.getElementById('inputMM').classList.remove('form__input-error');
                    }
                  }}
                />
              </div>
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
                      document.getElementById('errorDate').innerHTML = `Can't be blank`;
                      document.getElementById('errorDate').classList.add('form__message-error');
                      document.getElementById('inputYY').classList.add('form__input-error');
                    }

                    if (e.target.value.match(/\D/)) {
                      document.getElementById('errorDate').innerHTML = 'Wrong format, numbers only';
                      document.getElementById('errorDate').classList.add('form__message-error');
                      document.getElementById('inputYY').classList.add('form__input-error');
                    }

                    if (e.target.value.match(/\d/) && document.getElementById('inputMM').classList == ('form__input-error')) {
                      document.getElementById('errorDate').innerHTML = 'Correct format';
                      document.getElementById('errorDate').classList.remove('form__message-error');
                      document.getElementById('inputYY').classList.remove('form__input-error');
                    }
                  }}
                />
              </div>
            </div>

            {/* kosong bener = kosong */}
            {/* non    bener = non */}
            {/* bener  bener = boner */}

            <div className="form__flex-right">
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
            </div>
          </div>

          <div className="form__flex">
            <div className="form__flex-left">
              {/* <p className='form__message' id="errorMM">error message</p>
              <p className='form__message' id="errorYY">error message</p>
              <p className='form__message' id="errorMM"></p>
              <p className='form__message' id="errorYY"></p> */}
              <p className='form__message' id="errorDate">error message</p>
            </div>
            <div className="form__flex-right">
              <p className='form__message' id="errorCVC">error message</p>
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
