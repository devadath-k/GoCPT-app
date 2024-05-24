import Button from "../ui/Button"
import ThemeToggle from "../ui/ThemeToggle"


function Home() {
  return (
    <div id="home" className="pt-[60px] pb-[120px] bg-gradient-home dark:bg-none">
        <div className="absolute top-[20px] sm:top-[70px] right-2">
            <ThemeToggle/>
        </div>
        <div className="p-[30px] lg:pl-[100px] lg:pt-[80px]">
        <div className="max-w-[775px]" >
            <div id="introText">
                <div id="introHead">
                    <h1 className="font-jura text-[25px] sm:text-[48px] sm:leading-[56.78px] font-[400] text-white">
                        Welcome to 
                        <span className="text-[#F197F4]"> Go</span>
                        <span className="text-[#2B3A63]">CPT</span> BETA <br/>
                        Your Path to Effortless CPT Coding!
                    </h1>
                </div>
                <div id="introBody" className="py-[30px]">
                    <p className="font-jura text-[18px] sm:text-[30px] sm:leading-[35.49px] font-[400] text-white">
                        We’re excited to introduce you to<br/> 
                        the BETA version of GoCPT Your free pass to <br/> 
                        a simplified and efficient CPT coding experience <br/> 
                        designed exclusively for <br/> 
                        mental health professionals like you.
                    </p>
                </div>
            </div>
            <div id="startButton" className="max-w-[375px] mt-[40px]">
                <Button text="Start Testing" link=''/>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default Home
