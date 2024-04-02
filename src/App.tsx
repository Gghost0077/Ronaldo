import { useState } from 'react'
import Navbar from "./components/Navbar"
import Carousel from "./components/Carousel"
import CondensedNavbar from "./components/CondensedNavbar"
import Login from "./components/Login"

function App() {

  const [condensedNavbarVisible, setCondensedNavbarVisible] = useState(false);

  let sections = ["Home", "About", "Stats", "Contact us"]
  let images = [
    "./src/assets/img/goat_image.jpg",
    "./src/assets/img/messi_home.jpg",
    "./src/assets/img/ronaldo_home.jpg"
  ]

  return (
    <body className="bg-dark">
    <header className="bg-dark bg-gradient">
      <div className="mx-3 text-white">
        <h2 className="display-6"><i>The GOAT Debate</i></h2>
      </div>
    </header>
    <div className="sticky-top">

    <Navbar sections={sections} onOpen={() => {
      condensedNavbarVisible === false ? setCondensedNavbarVisible(true) : setCondensedNavbarVisible(false)
    }}/>
    {condensedNavbarVisible && <CondensedNavbar sections={sections} onClick={() => {
      condensedNavbarVisible && setCondensedNavbarVisible(false)
      }}/>
    }

    </div>
    <section id="Home">
    <Carousel images={images} />
    </section>
    </body>
  )
}

export default App
