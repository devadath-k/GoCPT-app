import logout from '../../assets/logout.svg';
import profile from '../../assets/profile.svg';
import Logo from '../ui/Logo';
import { useAuth } from '../../contexts/AuthContext';

function Navbar() {
  const auth = useAuth();
  const handleClick = ()=>{
    auth.logOut();
  }
  return (
    <div className="z-[1] backdrop-blur flex justify-between w-full h-[60px] xl:h-[75px] bg-[rgba(255,255,255,0.1)] border border-[#FFFFFF26] shadow-navbar">
        <div className='relative w-[50px] bottom-[-10px] xl:bottom-[-15px]' onClick={handleClick}>
            <img src={logout}/>
        </div>
        <div className='relative bottom-[-10px] xl:bottom-[-20px]'>
            <Logo/>
        </div>
        <div className='relative w-[50px] bottom-[-5px] xl:bottom-[-15px]'>
          <img src={profile}/>
        </div>
    </div>
  )
}

export default Navbar
