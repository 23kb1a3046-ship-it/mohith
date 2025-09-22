import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function CounterButton() {
  // Declare a state variable "count" and initialize it to 0
  const [count, setCount] = useState(0);

  // Function to handle button click
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

ReactDOM.render(<CounterButton />, document.getElementById('root'));
