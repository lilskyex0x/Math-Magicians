import '../style.css';

function Calculator() {
  return (
    <div className="calc__grid">
      <div className="output">
        <div className="previous__num">354 +</div>
        <div className="current__num">521,879</div>
      </div>
      <button type="submit">AC</button>
      <button type="submit">+/-</button>
      <button type="submit">%</button>
      <button type="submit" className="ops__btn">
        ÷
      </button>
      <button type="submit">7</button>
      <button type="submit">8</button>
      <button type="submit">9</button>
      <button type="submit" className="ops__btn">
        x
      </button>
      <button type="submit">4</button>
      <button type="submit">5</button>
      <button type="submit">6</button>
      <button type="submit" className="ops__btn">
        -
      </button>
      <button type="submit">1</button>
      <button type="submit">2</button>
      <button type="submit">3</button>
      <button type="submit" className="ops__btn">
        +
      </button>
      <button type="submit" className="span__two">
        0
      </button>
      <button type="submit">.</button>
      <button type="submit" className="ops__btn">
        =
      </button>
    </div>
  );
}

export default Calculator;
