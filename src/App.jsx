import { useState } from "react";

import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Result from './components/Result.jsx';

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValidInput = userInput.duration >= 1;

  function handleInputChange(inputIdentifier, newValue) {
    setUserInput((preInput) => {
      return {
        ...preInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleInputChange} />
      {!isValidInput && <p className="center">Please enter a duration greater than Zero.</p>}
      {isValidInput && <Result input={userInput}/>}
    </>
  );
}

export default App
