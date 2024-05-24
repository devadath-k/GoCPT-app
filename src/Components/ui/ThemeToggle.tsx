"use client";
import { useState, useEffect } from "react";

function ThemeToggle() {
    const [darkMode, setDarkMode]= useState(false);

    useEffect(()=>{
        const theme = localStorage.getItem("theme");
        if(theme ==="dark") setDarkMode(true);
    },[]);

    useEffect(()=>{
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme", "dark");
        }
        else{
            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme", "light");
        }
    }, [darkMode])
  return (
    <div>
        <div 
            className="relative w-16 h-8 flex item-center rounded-full border border-[#F197F4] p-1 cursor-pointer bg-[#0000001A] shadow-[0px_0px_5px_rgba(0, 0, 0, 0.55)]"
            onClick={()=>setDarkMode(!darkMode)}
        >
            <div 
                className="absolute bg-white w-6 h-6 rounded-full shadow-md trasform transition-transform duration-300"
                style = {darkMode ? {right:"3px"}: {left:"3px"}}
            ></div>
    </div>
    </div>
    
  )
}

export default ThemeToggle;
