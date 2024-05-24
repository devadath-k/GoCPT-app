import Card from "../ui/Card"

function OurStory() {
  return (
    <div className=" w-full max-w-[1700px] px-[30px] mx-auto">
        <div className="font-jura font-[400] text-left">
            <h1 className="text-white text-[50px] underline decoration-[1.5px]">
                Our Story
            </h1>
            <p className="text-[#FEDBFF] text-[20px] py-[40px]">
                GoCPT was conceived by a passionate psychiatric nurse practitioner who, as a new graduate, felt overwhelmed by the complexities of CPT coding. Faced with the daunting task of mastering medical coding while juggling the demands of patient care, it became clear that a solution was needed to bridge the gap between clinical expertise and administrative challenges. Time constraints 
                and the intricate nature of CPT coding posed significant hurdles for healthcare 
                providers looking to venture into private practice. Recognizing that coding 
                and billing are formidable obstacles standing in the way of many 
                talented providers, the idea for goCPT was born.
            </p>
        </div>
        <div className="relative h-[1100px] sm:h-[900px] lg:h-[600px]">
            <div className="lg:absolute mx-auto mb-[20px] bottom-0 left-0 max-w-[500px] lg:w-[400px] xl:w-[500px] 2xl:w-[600px] 2xl:max-w-[600px]">
                <Card title="Our Mission" body="At goCPT, our mission is simple yet profound - to empower mental health professionals and remove the barriers that hinder them from providing quality care and pursuing their dreams of private practice. We believe that every individual should have access to exceptional mental health care, and that starts with simplifying the coding and billing process."/>
            </div>
            <div className="lg:absolute mx-auto top-0 right-0 max-w-[500px] lg:w-[400px] xl:w-[500px] 2xl:w-[600px] 2xl:max-w-[600px]">
                <Card title="Our Vision" body="We envision a future where mental health care is more accessible, where providers can focus on what they do best - helping individuals on their path to wellness. By harnessing the power of technology, we aim to streamline the complexities of CPT coding, enabling providers to dedicate more time to patient care and less to administrative burdens."/>
            </div>
        </div>
        
    </div>
  )
}

export default OurStory
