import './App.css'
import CustomCarousel from './components/CustomCarousel/CustomCarousel'
import VideoSection from './components/VideoSection/VideoSection'
import Navbar from './components/header/Navbar'
import SubNavbar from './components/header/SubNavbar'


function App() {

  return (
    <div className='mainBox'>
      <div className='sectionOne'>
        <Navbar />
        <SubNavbar />
        <CustomCarousel />
      </div>


      <div className="sectionTwo">
        <VideoSection />
      </div>

    </div>
  )
}

export default App
