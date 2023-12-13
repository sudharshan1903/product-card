import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import Section from './section/Section';

function App() {
  const [cartSize, setCartSize] = useState(0);
  console.log(cartSize,"carsize app");
    return (
    <div className="App">
        <Section setCartSize={setCartSize} />
    </div>
  );
}

export default App;
