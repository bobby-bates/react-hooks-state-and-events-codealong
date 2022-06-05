import { useState } from "react";

function Toggle() {
  // State variable: isOn
  // NOTE: Always use const for useState, this line isn't being mutated
  const [isOn, setIsOn] = useState(false)

  // NOTE: Toggle logic lives here:
  const handleClick = () => setIsOn(isOn => !isOn)

  const color = isOn ? 'red' : 'white'

  return <button
          style={{background: color}} onClick={handleClick}>
            {isOn ? 'ON' : 'OFF'}
          </button>;
}

export default Toggle;
