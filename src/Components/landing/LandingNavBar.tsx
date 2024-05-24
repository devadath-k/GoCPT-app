import {useState} from 'react'
import Logo from '../ui/Logo'
import Button from '../ui/Button';
import {Link} from 'react-scroll';

function LandingNavBar() {

    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
      setDrawerOpen(!drawerOpen);
    };

    const navMenu = [
        {
            text: 'HOME',
            link: 'home',
            offset: 0,
        },
        {
            text: 'FAQ',
            link: '',
            offset: 0,
        },
        {
            text: 'FEATURES',
            link: 'features',
            offset: -100,
        },
        {
            text: 'ABOUT US',
            link: 'about',
            offset: 0,
        },
        {
            text: 'CONTACT US',
            link: 'contact',
            offset: 50,
        }
    ];

    const MobileNavMenu = (navMenu: {
        text:string,
        link: string,
        offset: number,
    }[])=>{
        return (
            <ul className="mt-[20px] px-[20px] w-full mx-auto flex flex-col gap-[10px]">
                {navMenu.map((item: {
                    text: string,
                    link: string,
                    offset: number,
                }, index:number)=>(
                    <Link to={item.link}
                    spy={true} 
                    smooth={true} 
                    offset={item.offset} 
                    duration={500*(index)}
                    className='cursor-pointer w-full  font-normal font-jura text-[22px] xl:text-[25px] text-center leading-[43px] hover:bg-[#2B3A63] hover:text-white rounded-[10px]' key={item.text}>{item.text}</Link>
                ))}
            </ul>
        )
    }

    const NavMenu = (navMenu: {
        text: string,
        link: string,
        offset: number,
    }[])=>{
        return (
            <ul className="w-fit mx-auto h-[100%] hidden lg:flex justify-center gap-[30px] items-center">
                {navMenu.map((item: {
                    text: string,
                    link: string,
                    offset: number,
                }, index:number)=>(
                    <Link to={item.link}
                    spy={true} 
                    smooth={true} 
                    offset={item.offset} 
                    duration={500*(index)} 
                    className='cursor-pointer font-normal font-jura text-[22px] xl:text-[25px] text-[#FFFFFF] leading-[43px]' key={item.text}>{item.text}</Link>
                ))}
            </ul>
        )
    }
  return (
    <div className="absolute w-[100%] h-[60px] bg-[#2B3A6340]/25 px-[25px]">
        <div className="lg:hidden">
          <button 
            className="text-white focus:outline-none" 
            onClick={toggleDrawer}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-14">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

          </button>
        </div>
        <div className='absolute left-[80px] lg:left-[1.3%] bottom-[0%]'>
            <Logo/>
        </div>
        {NavMenu(navMenu)}
        <div className='hidden absolute sm:flex gap-3 right-[1.3%] bottom-3'>
            <Button text= "Log In" link= '/login' topToBottom={true} />
            <Button text= "Sign Up" link= '/register' topToBottom={false} />
        </div>
        <div 
            className={`z-[2] lg:hidden dark:bg-[#181f31] bg-white dark:text-white text-[#2B3A63] py-4 px-4 fixed w-[300px] h-[100vh] top-0 left-0 ${drawerOpen ? 'transition-all duration-300 ease-out transform translate-y-0 opacity-100' : 'transition-all duration-300 ease-in transform -translate-y-full opacity-0 hidden'}`}
        >
            <div className='absolute right-3' onClick={()=>setDrawerOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
            <div className= "mt-5">
                <Logo/>
            </div>
            {
                MobileNavMenu(navMenu)
            }
            <hr className='my-5'/>
            <div className='flex flex-col mt-[30px] gap-[20px] px-[20px] w-full sm:hidden'>
                <Button text='Log In' link='/login' topToBottom={true} />
                <Button text='Sign Up' link='/register' topToBottom={false} />
            </div>
        </div>
            
    </div>
  )
}

export default LandingNavBar
