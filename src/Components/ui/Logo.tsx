import {Link} from 'react-router-dom';

function Logo() {
  return (
        <Link to="/" className='font-padyakke font-[1000] text-[40px] xl:text-[60px] leading-[50px] drop-shadow-logo'>
            <span className='text-[#F197F4]'>Go</span>
            <span className='text-[#2B3A63]'>CPT</span>
        </Link>
  )
}

export default Logo;