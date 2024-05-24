
import { Link } from 'react-router-dom';

type buttonProps = {
    text: string,
    link: string, 
    topToBottom?: boolean,
    whiteShadow?: boolean,
    type?: "button" | "submit" | "reset",
}
function Button({text, link, topToBottom, whiteShadow, type}: buttonProps) {
    const bg= topToBottom? 'bg-gradient-button1' : 'bg-gradient-button2';
    if(type==="submit"){
        return (
          <button type={type? type : 'button'} className={`${bg} ${whiteShadow ? 'shadow-aboutButton': 'shadow-button' } text-white text-[22px] xl:text-[25px] font-normal font-jura px-2 w-full rounded-[10px] border border-white`}>
            {text}
          </button>
        )
    }
  return ( 
    <Link to={link}>
        <button type={type? type : 'button'} className={`${bg} ${whiteShadow ? 'shadow-aboutButton': 'shadow-button' } text-white text-[22px] xl:text-[25px] font-normal font-jura px-2 w-full rounded-[10px] border border-white`}>
            {text}
        </button>
    </Link>
  )
}

export default Button
