import beats from '../assets/beats.svg';

function Beats({top1, top2}:{
    top1:string,
    top2:string
}) {
  return (
    <div className={`absolute top-[${top1}] md:top-[${top2}]`}>
        <img src={beats} className='w-auto h-auto'/>
    </div>
  )
}

export default Beats
