import React from 'react';
import Data from './Data.jsx';
import './style.css';

export default function App() {
    return (
      <div>
        <div id='header'>

          <h1>Timezone Calculator!</h1>
          <h3>Please enter latitude and longitude below</h3>

        </div>
        <Data/>
      </div>
    )
  }

