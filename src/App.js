import './App.css';
import { useState } from 'react'

import Map from './components/Map'

function App() {

  const [center, setCenter] = useState([44.47, -73.213])

  return (
    <div>
      <Map center={center} />
    </div>
  );
}

export default App;
