import React from 'react';
import 'antd/dist/antd.css';
import Routes from './router';
import { history } from "./Redux/store";
import './App.css';

function App() {

  return (
      <Routes history={history} />
  );
};

export default App;
