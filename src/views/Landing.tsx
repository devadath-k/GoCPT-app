import LandingNavBar from '../Components/landing/LandingNavBar'
import Home from '../Components/landing/Home'
import Features from '../Components/landing/Features'
import Ellipses from '../layouts/Ellipses'
import { useState } from 'react'
import AboutUs from '../Components/landing/AboutUs'
import OurStory from '../Components/landing/OurStory'
import WhyGoCpt from '../Components/landing/WhyGoCpt'
import CodeAccuracy from '../Components/landing/CodeAccuracy'
import Contribute from '../Components/landing/Contribute'
import ContactUs from '../Components/landing/ContactUs'
import Footer from '../Components/landing/Footer'
import Beats from '../layouts/Beats'

function Landing() {
   const [height, setHeight] = useState('screen');
   const heightSetter = (h:string)=>{
    setHeight(h);
   }
  return (
      <div>
          <div className='bg-[#5B6AAA] dark:bg-black min-h-screen'>
            <LandingNavBar/>
            <Home/>
            <Ellipses height={height} top="500px"/>
            <Features heightSetter={heightSetter}/>
            <AboutUs/>
            <OurStory/>
            <div className='bg-[#1C2745] dark:bg-[#1C274540]'>
              <WhyGoCpt/>
                <div className='relative'>
                  <Beats top1='-20px' top2='-100px'/>
                  <div className='z-[1]'>
                    <CodeAccuracy/>
                  </div>  
                </div>
                <Contribute/>
            </div>
          </div>
          <ContactUs/>
          <Footer/>
      </div>
      
    
  )
}

export default Landing
