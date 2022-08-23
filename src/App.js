import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <section>
          <p>0000 0000 0000 0000</p>
          <p>Jane Appleseed</p>
          <p>00/00</p>
        </section>

        <section>
          <p>000</p>
        </section>

        <section>
          <form>
            <label>Cardholder Name</label>
            <input type="text" placeholder="e.g. Jane Appleseed" />
            <label>Card Number</label>
            <input type="text" placeholder="e.g. 1234 5678 9123 0000" />
            <label>Exp. Date (MM/YY)</label>
            <input type="text" placeholder="MM" />
            <input type="text" placeholder="YY" />
            <label>CVC</label>
            <input type="text" placeholder="e.g. 123" />
            <input type="submit" value="Confirm" />
          </form>
        </section>
      </main>
      {/* <footer>
        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#">Your Name Here</a>.
        </div>
      </footer> */}
    </div>
  );
}

export default App;
