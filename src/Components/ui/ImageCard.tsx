
function ImageCard({head, body, imgUrl}:{
    head:string,
    body:string,
    imgUrl:string
}) {
  return (
    <div className="w-full sm:w-[400px] p-[10px] md:p-[20px] h-full min-h-[600px] bg-[#FFFFFF1A] border border-[#FFFFFF26] shadow-cardShadow rounded-[15px]">
        <div >
            <img src={imgUrl} alt={head} className="w-full"/>
        </div>
      <div className="text-white text-center font-offside font-[400] text-[24px] mb-4">
        {head}
      </div>
      <div className="w-full mx-auto text-white text-center font-offside font-[400] text-[16px]">
        {body}
      </div>
    </div>
  )
}

export default ImageCard
