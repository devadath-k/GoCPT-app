import Navbar from "../Components/Dashboard/Navbar";
import Button from "../Components/ui/Button";
import DashboardCard from "../Components/ui/DashboardCard";
import ThemeToggle from "../Components/ui/ThemeToggle";
import AdminLayout from "../layouts/AdminLayout";

function Dashboard() {
  return (
    <div>
      <AdminLayout/>
      <div className="w-full bg-white dark:bg-black h-screen overflow-hidden">
        <Navbar/>
        <div className="hidden sm:block z-[1] absolute top-[70px] xl:top-[85px] right-2">
            <ThemeToggle/>
        </div>
        <div className="my-[20px] px-[30px] flex flex-col justify-between h-[calc(100%-110px)]">
          <div className="h-fit w-full max-w-[900px] mx-auto ">
              <DashboardCard>
                  <h1 className="text-center font-jura font-[400] text-[30px] xl:text-[40px] text-black dark:text-white">
                    Upload Your Note
                  </h1>
                  <p className="text-center font-jura font-[400] text-[10px] xl:text-[20px] text-black dark:text-white">
                    (It may take 30-90 seconds to generate report)
                  </p>
                  <div className="mt-[20px] w-full bg-[#0000004D] dark:bg-[#FFFFFF4D] rounded-[15px]">
                      <p className="py-[30px] text-center font-jura font-[400] text-[20px] xl:text-[32px] text-white">
                        Click to upload a Note (pdf or doc file)
                      </p>
                  </div>
                  <div className="w-full max-w-[580px]">
                      <Button link="" text="Generate CPT code Based upon Medical Decision Making Model"/>
                  </div>
              </DashboardCard>
          </div>
          <div className="h-fit  w-full max-w-[900px] mx-auto ">
              <DashboardCard>
                Hii
              </DashboardCard>
          </div>
        </div>
        
    </div>
    </div>
    
  )
}

export default Dashboard
