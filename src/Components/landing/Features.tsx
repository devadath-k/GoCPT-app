import { useEffect, useRef } from "react"
import Card from "../ui/Card"

const features = [
    {
        title: 'User Friendly',
        body: 'The goCPT app offers a user-friendly feature for determining CPT codes based on time alone. To utilize this functionality, simply navigate to the designated time button within the app and input the total time spent managing the patient during the encounter. The app will then generate the appropriate CPT code, considering the significant role of time in certain scenarios, such as counseling or coordination of care, in determining the level of service provided',
    },
    {
        title: 'Medical Complexity Assessment',
        body: 'The goCPT app calculates encounters of varying complexity (straightforward/minimal, low, moderate, and high) based on a meticulous assessment of Medical Decision-Making (MDM), taking into account the number of diagnoses, management options, risk of complications or morbidity, and the amount and complexity of data reviewed during the encounter',
    },
    {
        title: 'E&M Code Integration',
        body: 'Seamlessly incorporates the key components influencing E&M code selection, such as History of Present Illness (HPI), Examination, Medical Decision-Making (MDM), and Time considerations',
    },
    {
        title: 'Streamlined Documentation',
        body: 'Facilitates accurate code assignment by providing a user-friendly interface for configuring CPT billing codes directly from your progress notes. The app emphasizes documentation accuracy to capture the true complexity of the services rendered**',
    }
]

function Features({heightSetter}:{
    heightSetter: (h:string)=>void
}) {

    const FeatureCards = features.map((feature)=>(
        <div key={feature.title} className="w-fit">
            <Card title= {feature.title} body={feature.body}/>
        </div>
    ))

    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        heightSetter(ref.current ? String(ref.current.clientHeight+500): "500")
    })

  return (
    <div id="features" className="relative" ref={ref}>
        <div className="px-[30px]">
        <div className="max-w-[1700px] mx-auto relative top-[-80px] w-full bg-gradient-to-b from-[#FFFFFF0D] to-[#FFFFFF00]
            border border-[#FFFFFF33] shadow-featureBox rounded-[30px] backdrop-blur">
            <div id="featureHead" className="pt-[10px]">
                <h1 className="underline decoration-[1.5px] text-center font-jura text-white font-[400] text-[40px]">Key Features of GoCPT BETA</h1>
            </div>
            <div id="featureBody" className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-4 pt-[10px] pb-[30px] px-[30px] w-fit max-w-[1500px] mx-auto">
                {FeatureCards}
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default Features
