import about from '../../assets/about.svg';
import Button from '../ui/Button';

function AboutUs() {
  return (
    <div id="about" className='px-[30px] pb-[100px] bg-gradient-to-b from-[#5B6AAA00] to-[#00000000] via-[#2F375870]'>
        <div className="max-w-[1700px] mx-auto flex flex-col-reverse lg:flex-row">
            <div className="lg:w-[35%] flex flex-col-reverse mx-auto">
                <img src={about} alt="" className='w-[300px] md:w-[500px] xl:w-[700px]'/>
            </div>
            <div className="lg:w-[55%] text-right">
                <div className='font-jura font-[400] text-[35px] md:text-[60px] 2xl:text-[70px] text-white underline decoration-[1.5px] pb-[20px] md:pb-[30px]'>
                    About Us
                </div>
                <div className='font-jura font-[400] text-[25px] md:text-[40px] 2xl:text-[45px] text-white pb-[20px] md:pb-[30px]'>
                    Empowering Mental Health Professionals with Simplified CPT Coding
                </div>
                <div className='max-w-[850px] float-end'>
                    <div className='font-jura font-[400] text-[15px] md:text-[25px] 2xl:text-[32px] text-[#FEDBFF]'>
                        Welcome to goCPT, where the journey of revolutionizing the medical coding and billing landscape began with a single idea - to make mental health care more accessible to everyone.
                        <br/>
                        <br/>
                        Join us on this transformative journey as we continue to innovate and evolve, breaking down barriers and making mental health care accessible to all. Together, we can shape a future where healthcare providers are empowered, and quality mental health care knows no boundaries.
                    </div>
                </div>
                
            </div>
        </div>
        <div className='max-w-[600px] w-auto mt-[100px] mx-auto'>
            <Button link='/register' text='Sign Up Today!' whiteShadow={true}/>
        </div>
    </div>
    
  )
}

export default AboutUs
