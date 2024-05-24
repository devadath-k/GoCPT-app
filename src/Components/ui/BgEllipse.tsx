
function BgEllipse({wid, hei, color1}:{
    wid:string,
    hei:string,
    color1:string,
}) {
  return (
    <div className='rounded-full opacity-50'
        style={
            {
                width: wid,
                height: hei,
                background: `linear-gradient(180deg, ${color1} 0%, rgba(170, 206, 209, 0) 100%)`,

            }
        }
    >
    </div>
  )
}

export default BgEllipse
