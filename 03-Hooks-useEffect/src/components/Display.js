// Here we import the React, useState, useEffect modules from the 'react' library
import React, { useState, useEffect } from 'react';

export default function Display() {
  const [count, setCount] = useState(0);  // Define a state variable 'count' with an initial value of 0.

  // When the state changes run this callback
  useEffect(() => {
    // Update the localStorage count variable using the setItem method
    localStorage.setItem('myCount', count);  // Whenever 'count' changes, update 'myCount' in localStorage with its current value.
  });

  const handleIncrease = () => {
    setCount(count + 1);  // A function to increment the 'count' value when a button is clicked.
  };

  return (
    <div>
      <p>You clicked {count} times</p> 
      <code>check localStorage in developer console</code> 
      <hr /> 
      <button type="button" onClick={handleIncrease}> 
        Click me
      </button>
    </div>
  );
}
