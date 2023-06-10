/* eslint-disable react/no-unescaped-entities */
import '../style.css';
import CalcBtns from './CalculatorBtn';

function Calculator() {
  return (
    <div className="calc__grid">
      <h1>Let's Do Some math!</h1>
      <CalcBtns />
    </div>
  );
}

export default Calculator;
