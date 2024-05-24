import Button from "../ui/Button"
import Card from "../ui/Card"

function Contribute() {
  return (
    <div className="w-full p-[20px] bg-[#FFFFFF0D] border border-[#FFFFFF26] shadow-contribute">
        <h1 className="text-center font-Jura font-[400] text-white text-[40px] sm:text-[48px]">
            How Can You Contribute?
        </h1>
        <div className="py-[40px] px-[30px] flex flex-wrap gap-[100px] justify-center">
            <Card 
                title="Sign Up and Use goCPT Beta" 
                body="Dive into the beta version by signing up here!. Explore its features and discover first hand how GoCPT can simplify your CPT coding processes"
            />
            <Card 
                title="Share Your Feedback" 
                body="Your experiences and insights matter. Utilize the feedback mechanism within the app to share your thoughts, suggestions, and any issues you encounter. Your feedback guides our ongoing improvements."
            />
        </div>
        <h1 className="text-center font-Jura font-[400] text-white text-[30px] sm:text-[48px] mb-[30px]">
            Join GOCPT on this Journey!
        </h1>
        <p className="max-w-[1450px] mx-auto text-center font-Jura font-[400] text-white text-[16px] md:text-[20px]">
            By participating in the goCPT Beta, you’re not just a user; you’re a vital part of our community shaping the future of mental health billing. Together, we can create an app that truly meets your needs and exceeds your expectations.
        </p>
        <div className="w-fit mx-auto mt-[50px] mb-[10px]">
            <Button link="/register" text="Sign Up Today!" whiteShadow={true}/>
        </div>
    </div>
  )
}

export default Contribute
