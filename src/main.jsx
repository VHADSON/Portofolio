import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Components/Navbar.jsx'

import 'remixicon/fonts/remixicon.css'
import Footer from './Components/Footer.jsx'
import Preloader from './Components/Preloader.jsx'

import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Preloader/>
    <div className="Container mx-auto px-4">
      <Navbar/>
      <App />
      <Footer/>
    </div>
  </StrictMode>,
)
