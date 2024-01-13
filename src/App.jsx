import './App.css'
import CustomCarousel from './components/CustomCarousel/CustomCarousel'
import Navbar from './components/header/Navbar'


function App() {

  return (
    <div className='mainBox'>
      <div className='sectionOne'>
        <Navbar />
        <CustomCarousel />
      </div>


      <div className="sectionTwo">

      </div>

    </div>
  )
}

export default App
