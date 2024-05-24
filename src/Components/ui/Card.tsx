
function Card({title, body}:{
    title:string,
    body:string,
}) {
  return (
    <div className="max-w-[740px] p-[10px] md:p-[20px] h-[520px] sm:h-[400px] bg-[#FFFFFF1A] border border-[#FFFFFF26] shadow-cardShadow rounded-[30px]">
      <div className="text-white text-center font-offside font-[400] text-[25px] md:text-[35px]">
        {title}
      </div>
      <div className="px-[10px] flex min-h-[80%] items-center max-w-[600px] mx-auto text-white text-center font-offside font-[400] text-[15px] md:text-[18px]">
        {body}
      </div>
    </div>
  )
}

export default Card
