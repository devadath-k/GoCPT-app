

import { useContext, createContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
    user: {email:string,password:string, userName:string} | null;
    loginAction: (data: {email:string, password:string}) => void;
    logOut: () => void;
    register: (data: {name:string, email:string, password:string}) => void;
    token: string | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider:React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [token, setToken] = useState(localStorage.getItem("site") || "");
  const navigate = useNavigate();
  const loginAction = async (data:{
    email:string,
    password:string
  }) => {
    // try {
    //   const response = await fetch("your-api-endpoint/auth/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });
    //   const res = await response.json();
    //   if (res.data) {
    //     setUser(res.data.user);
    //     setToken(res.token);
    //     localStorage.setItem("site", res.token);
    //     navigate("/dashboard");
    //     return;
    //   }
    //   throw new Error(res.message);
    // } catch (err) {
    //   console.error(err);
    // }
    setUser({userName: "RandomName", email:data.email, password:data.password})
    setToken("1234");
    localStorage.setItem("site", token);
    navigate("/dashboard");
    return
  };

  const register = (data:{
    name:string,
    email:string,
    password:string
  }) => {
    
    setUser({userName: data.name, email:data.email, password:data.password})
    setToken("1234")

    return
    
  }

  const logOut = () => {
    setUser({
        userName: "",
        email: "",
        password: "",
    });
    setToken("");
    localStorage.removeItem("site");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut, register }}>
      {children}
    </AuthContext.Provider>
  );

};



