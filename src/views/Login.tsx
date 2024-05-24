import Button from "../Components/ui/Button"
import Input from "../Components/ui/Input"
import Label from "../Components/ui/Label"
import Logo from "../Components/ui/Logo"
import Beats from "../layouts/Beats"
import { motion } from "framer-motion"
import {useState} from 'react'
import { useAuth } from "../contexts/AuthContext"

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const auth = useAuth();

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.email !== "" && input.password !== "") {
      auth.loginAction(input);
      return;
    }
    alert("please provide a valid input");
  };

  const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <motion.div 
      className="w-full h-screen overflow-hidden bg-black"
      initial={{
        x:"-100%",
      }}
      animate={{
        x:0,
        transition: {type:'ease-in-out',duration: 0.5}
      }}
      exit={{
        x: "-100%",
        transition: {type:'ease-in-out',duration: 0.5}
      }}
    >
        <div className="relative">
          <Beats top1="0" top2="0"/>
        </div>
        <div className="flex flex-col md:flex-row h-full justify-between">
          
          <div className="w-full md:w-[80%] text-center p-[20px]">
              <Logo/>
              <div className="flex flex-col justify-center md:min-h-[500px] mx-auto mt-[30px] max-w-[500px] h-fit border border-[#FFFFFF40] w-full bg-[#FFFFFF05] backdrop-blur rounded-[50px] shadow-login py-[30px] md:py-[50px] px-[30px]">
                  <h1 className="font-jura text-white text-center text-[30px] lg:text-[50px] font-[400]">
                    LOG IN
                  </h1>
                  <form className="w-full flex flex-col justify-between gap-5" onSubmit={handleSubmit}>
                      <div>
                        <Label text="Email"/>
                        <Input type="email" placeholder="Email" name="email" id="email" handleInput={handleInput}/>
                      </div>
                      <div>
                        <Label text="Password"/>
                        <Input type="password" placeholder="Password" name="password" id="password" handleInput={handleInput}/>
                      </div>
                      <div className="w-fit mx-auto">
                        <Button type="submit" link="" text="Log In"/>
                      </div>
                      
                  </form>
              </div>
          </div>
          <div className="flex flex-col justify-center w-full md:w-[20%] bg-[#FFFFFF1A] md:h-screen backdrop-blur md:rounded-l-[30px] px-[10px]">
            <div className="h-fit w-fit py-[20px] mx-auto">
                <h1 className="font-jura text-white text-center text-[16px] md:text-[30px] font-[400] mb-[10px] md:mb-[40px]">
                  Dont have an account?
                </h1>
                <div className="w-fit mx-auto">
                  <Button link="../register" text="Sign Up"/>
                </div>
            </div>
          </div>
        </div>
        
    </motion.div>
  )
}

export default Login
