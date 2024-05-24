
function DashboardCard({children}:{
    children:React.ReactNode
}) {
  return (
    <div className="w-full h-full bg-[#FFFFFF1A] border border-[#FFFFFF33] shadow-dashCard rounded-[30px] backdrop-blur px-[10px] md:px-[30px] py-[10px]">
        {children}
    </div>
  )
}

export default DashboardCard
