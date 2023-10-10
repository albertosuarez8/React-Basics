import React from 'react';

const name = 'Han Solo';
const num1 = 1;
const num2 = 2;

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="p-5 mb-4 bg-light">
          {/* JavaScript expressions can be escaped inside of curly braces */}

          <h1>With JSX we can do the following:</h1>
          <hr />
          <h2>We can do math: {num1 + num2}.</h2>
          <h2>
            We can generate random numbers: {Math.floor(Math.random() * 10) + 1},
            {Math.floor(Math.random() * 10) + 1},
            {Math.floor(Math.random() * 10) + 1}.
            </h2>
          <h2>We can even reverse names: {name.split('').reverse()}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
