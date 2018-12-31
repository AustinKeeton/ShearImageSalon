import * as React from 'react';
import { render } from 'react-dom';

import Book from './book';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <a href="#">Home</a>
          <a href="#">Portfolio</a>
          <a href="#">Services</a>
          <a href="#">Stylists</a>
          <a href="#">Contact Us</a>

          <a href="#">Book an Appointment</a>
        </nav>
      </header>

      <Book />
    </div>
  );
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
