import React from 'react';
import Datatable from './Datatable';
import './App.css'

function App() {

  const options = {
    paging: false,
  };

  return (
    <div>
      <Datatable></Datatable>
    </div>
  );
}

export default App;
