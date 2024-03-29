import { useState } from 'react'
import Navbar from "./components/Navbar"

function App() {
  let sections = ["Home", "About", "Stats", "Contact us"]
  return (
    <Navbar sections={sections} />
  )
}

export default App
