import './App.css'
import NavBar from './Pages/navbar/Navbar'
import Footer from './Pages/footer/Footer'
import Header from './Pages/header/Header'
import Info from './Pages/info/Info'
import Tech from './Pages/tech/Tech'
import Contact from './Pages/contact/Contact'
import Projects from './Pages/projects/Projects'
import { useEffect } from 'react'


function App() {

  const toTheTop = () => {
    window.scrollTo({ top:0, left:0, behavior:'smooth'})
  }

  useEffect(() => {
    
    toTheTop()

  }, [])
  
  return (
    <>
      <NavBar />
        <div className="App" >
          <Header />
          <Info />
          <Tech />
          <Projects />
          <Contact />
          <Footer />
        </div>
    </>
  )
}

export default App
