import '../style.css';
import CalcBtns from './CalculatorBtn';

function Calculator() {
  return (
    <div className="calc__grid">
      <div className="output">
        <div className="previous__num">354 +</div>
        <div className="current__num">521,879</div>
      </div>
      <CalcBtns />
    </div>
  );
}

export default Calculator;
