import BgEllipse from "../Components/ui/BgEllipse";

function Ellipses({height, top}:{
    height:string,
    top: string
}) {
  return (
    <div className="absolute w-full overflow-hidden"
        style={{
            height,
            top,
        }}
    >
        <div className="absolute top-[0px] left-[-100px] w-[2208px] bottom-[-100px]">
            <div className="absolute bottom-[480px] left-[75px]">
                <BgEllipse wid="198px" hei="201px" color1={'#F197F4'}/>
            </div>
            <div className=" absolute top-[180px] right-[200px]">
                <BgEllipse wid="330px" hei="330px" color1={'#F197F4'}/>
            </div>
            <div className=" absolute bottom-[250px] left-[1700px]">
                <BgEllipse wid="483px" hei="491px" color1={'#F197F4'}/>
            </div>
            <div className="absolute top-[200px] left-[0px]">
                <BgEllipse wid="520px" hei="520px" color1={'#B382D3'}/>
            </div>
            <div className="absolute bottom-[630px] left-[1100px]">
                <BgEllipse wid="254px" hei="240px" color1={'#F197F4'}/>
            </div>
            <div className="absolute top-[350px] left-[750px]">
                <BgEllipse wid="190px" hei="190px" color1={'#F197F4'}/>
            </div>
        </div>
        
    </div>
  )
}

export default Ellipses
