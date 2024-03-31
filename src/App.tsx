import { useState } from 'react'
import Navbar from "./components/Navbar"
import Carousel from "./components/Carousel"
import CondensedNavbar from "./components/CondensedNavbar"

function App() {

  const [condensedNavbarVisible, setCondensedNavbarVisible] = useState(false);

  let sections = ["Home", "About", "Stats", "Contact us"]
  let images = [
    "./src/assets/img/goat_image.jpg",
    "./src/assets/img/messi_home.jpg",
    "./src/assets/img/ronaldo_home.jpg"
  ]

  return (
    <>
    <div className="sticky-top">
    <Navbar sections={sections} onOpen={() => {
      condensedNavbarVisible === false ? setCondensedNavbarVisible(true) : setCondensedNavbarVisible(false)
    }}/>
    {condensedNavbarVisible && <CondensedNavbar sections={sections} />}
    </div>
    <section id="Home">
    <Carousel images={images} />
    </section>
    </>
  )
}

export default App
