import React, { useState } from 'react'
import Loading from './components/Loading'
import Data from './components/Data'
import Error from './components/Error'
import './App.css'

function App() {

  return (
  <>
    <Loading />
    <Data />
    <Error />
  </>
  );
}

export default App
