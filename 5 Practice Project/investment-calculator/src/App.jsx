import { useState } from 'react';
import Header from './components/Header'
import Results from './components/Results'
import InputLabel from './components/InputLabel'
import { calculateInvestmentResults, formatter } from './util/investment';

let investmentArray = {
  initialInvestment: 10000,
  annualInvestment: 300,
  expectedReturn: 5.5,
  duration: 12
}

let defaultInvestmemts = calculateInvestmentResults(investmentArray);
let defaultFormattedInvestments = { ...investmentArray, investments: defaultInvestmemts };

function App() {
  const [currentInvestment, setCurrentInvestment] = useState(defaultFormattedInvestments);

  function handleChange(investmentType) {
    let currentValue = event.target.value;

    setCurrentInvestment((prevInvestment) => {
      let updatedObj = { ...prevInvestment };
      updatedObj[investmentType] = Number(currentValue);

      console.log(updatedObj);

      let updatedInvestments = calculateInvestmentResults(updatedObj);
      let formattedInvestments = { ...updatedObj, investments: updatedInvestments };
      console.log(formattedInvestments);
      return formattedInvestments;
    });
  }
  return (
    <>
      <Header />
      <div id="user-input" >
        <div className="input-group">
          <InputLabel label="Initial Investment" onSelect={() => handleChange("initialInvestment")} investmentType={"initialInvestment"} investmentValue={currentInvestment.initialInvestment} />
          <InputLabel label="Annual Investment" onSelect={() => handleChange("annualInvestment")} investmentType={"annualInvestment"} investmentValue={currentInvestment.annualInvestment} />
        </div>
        <div className="input-group">
          <InputLabel label="Expected Returns" onSelect={() => handleChange("expectedReturn")} investmentType={"expectedReturn"} investmentValue={currentInvestment.expectedReturn} />
          <InputLabel label="Duration" onSelect={() => handleChange("duration")} investmentType={"duration"} investmentValue={currentInvestment.duration} />
        </div>
      </div>
      { currentInvestment.duration > 0 && currentInvestment.investments.length > 0 && <Results investments={currentInvestment.investments} /> }
    </>
  )
}

export default App
