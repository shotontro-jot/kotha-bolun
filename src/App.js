import React from 'react';
import logo from './logo.svg';
import MyNav from './components/navbar';
import MyTable from './components/table';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <MyNav/>
      <MyTable/>
    </div>
  );
}

export default App;
