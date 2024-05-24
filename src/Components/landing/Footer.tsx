import Logo from "../ui/Logo";
import {Link} from 'react-scroll';

function Footer() {
  return (
    <div className="bg-[#252525]">
        <div 
            className="w-full px-[30px] py-[50px] bg-footer border border-[#000000]"
        >
            <div className="max-w-[1700px] mx-auto flex flex-wrap-reverse justify-between items-center">
                <div className="max-w-[500px] flex flex-col gap-10 mx-auto md:mx-0 w-full md:w-fit text-center md:text-left">
                    <Logo/>
                    <p className="text-white font-jura font-[400] text-[20px] leading-[23px]">
                        We are not here to sell you products, we sell value through our expertise.
                    </p>
                    <p className="text-white font-jura font-[400] text-[20px] leading-[23px]">
                        Email: <a href= "mailto: info@gocpt.ai" className="text-[#373799] underline">info@gocpt.ai</a>
                    </p>
                    <p className="text-white font-jura font-[400] text-[20px] leading-[23px]">
                        © 2024 All rights reserved gocpt.ai
                    </p>
                </div>
                <div className="text-white pb-[30px] w-full md:w-fit">
                    <ul className="font-jura flex flex-col gap-4 font-[400] text-[20px] text-center md:text-right">
                        <Link 
                            to="home" 
                            spy={true} 
                            smooth={true} 
                            offset={0} 
                            duration={2000}
                            className='cursor-pointer' 
                        >Home</Link >
                        <Link 
                            to="features" 
                            spy={true} 
                            smooth={true} 
                            offset={-100} 
                            duration={1500}
                            className='cursor-pointer' 
                        >Features</Link >
                        <Link 
                            to="about" 
                            spy={true} 
                            smooth={true} 
                            offset={0} 
                            duration={1000}
                            className='cursor-pointer'  
                        >About Us</Link >
                        <Link 
                            to="contact" 
                            spy={true} 
                            smooth={true} 
                            offset={50} 
                            duration={500}
                            className='cursor-pointer' 
                        >Contact Us</Link >
                        <Link 
                            to="test1" 
                            spy={true} 
                            smooth={true} 
                            offset={50} 
                            duration={1500} 
                            className='cursor-pointer' 
                        >Terms & Conditions</Link >
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Footer
