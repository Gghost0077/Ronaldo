import { useState } from 'react'
import Navbar from "./components/Navbar"
import Carousel from "./components/Carousel"

function App() {
  let sections = ["Home", "About", "Stats", "Contact us"]
  let images = [
    "./src/assets/img/goat_image.jpg",
    "./src/assets/img/messi_home.jpg",
    "./src/assets/img/ronaldo_home.jpg"
  ]

  return (
    <>
    <Navbar sections={sections} />
    <Carousel id="Home" images={images} />
    </>
  )
}

export default App
