// import { useState } from 'react'

import './App.css';
import React from 'react';
import TopButtons from './Components/TopButtons';
import Input from './Components/Input';
import TimeandLocation from './Components/TimeandLocation';
import TemperatureAndDeatils from './Components/TemperatureAndDeatils';

function App() {
  

  return (
    <>
      <div className='mx-auto max-w-screen mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
        <TopButtons/>
        <Input/>
        <TimeandLocation/>
        <TemperatureAndDeatils/>
      </div>
    </>
  )
}

export default App
