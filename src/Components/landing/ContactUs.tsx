import Button from "../ui/Button"

function ContactUs() {
  return (
    <div id="contact" className="px-[30px] py-[50px] 2xl:py-[150px] bg-[#252525]">
        <div className="max-w-[1700px] mx-auto pb-[10px] bg-[#00000033] border border-[#00000033] shadow-contact rounded-[30px]">
            <h1 className="text-center font-jura font-[400] text-[35px] md:text-[48px] text-white underline decoration-[1.5px]">
                CONTACT US
            </h1>
            <div className="flex flex-wrap-reverse justify-center pt-5">
                <div className="w-full md:w-[50%]">
                    <img src="/src/assets/contact.png" alt="contact us" className="w-full"/>
                </div>
                <form className="w-full md:w-[50%] px-[30px] flex flex-col gap-5">
                    <input 
                        type="text" 
                        className="text-white w-full max-w-[700px] p-[10px] rounded-[15px] bg-[#00000080] border border-white font-jura font-[400] text-[16px] lg:text-[24px]" 
                        placeholder="Company Name"
                    />
                    <input 
                        type="email" 
                        className="text-white w-full max-w-[700px] p-[10px] rounded-[15px] bg-[#00000080] border border-white font-jura font-[400] text-[16px] lg:text-[24px]" 
                        placeholder="E-Mail Address"
                    />
                    <input 
                        type="text" 
                        className="text-white w-full max-w-[700px] p-[10px] rounded-[15px] bg-[#00000080] border border-white font-jura font-[400] text-[16px] lg:text-[24px]" 
                        placeholder="Company's Address"
                    />
                    <textarea 
                        className="text-white w-full max-w-[700px] h-[250px] p-[10px] rounded-[15px] bg-[#00000080] border border-white font-jura font-[400] text-[16px] lg:text-[24px]" 
                        placeholder="Message"
                    />
                    <div className="w-[200px] md:w-[275px] mx-auto">
                        <Button link="" text="SUBMIT"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactUs
