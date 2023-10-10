import React from 'react';
// We import our Welcome component from our components folder so that we can eventually return it.
import Welcome from './components/Welcome';

// React apps typically have a single App component at the very top that can reference other React components.
// This component, `App`, is our main component that is importing `Welcome` and rendering it in the return method.
// Inside our App component, we have a return method that contains all the JSX we want to render to the screen.
// In this example, we have a parent `div` that references the Welcome component that we imported at the top.

export default function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}
