import { useState } from 'react'
import { Route } from 'react-router'
import {TabView} from './components'
import StartView from './components/views/StartView';

function App(props) {
  return (
    <>
     {props.children}
    </>
  )
}

export default App
