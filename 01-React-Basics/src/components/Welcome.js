import React from 'react';
// React components are isolated parts of an application that help organize and isolate different parts of the program into smaller chunks
// We can pass data to these components and even render other components inside other components.
// The `Welcome` component is a child of our `App` component and is responsible for rendering the "Welcome" header.


export default function Welcome() {
  const message = 'Hello MSI!'
  // All functional components must have a return method that contains JSX.
  // The return statement contains something called "JSX"
  // JSX is a syntax extension to Javascript that allows us to write HTML inside Javascript
  // Expressions in JSX should be placed in curly braces {}
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="container">
      <h1>{message}</h1>
      <p>Today we will be learning about the following:</p>
      <ul className="parent">
        <li>React</li>
        <li>Components</li>
        <li>Props</li>
        <li>JSX</li>
      </ul>
    </div>
  );
}
