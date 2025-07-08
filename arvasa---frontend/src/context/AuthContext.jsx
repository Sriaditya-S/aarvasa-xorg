// context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if(!token){
         setUser(null);
         setLoading(false);
      return; 
    }

      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/auth/profile`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });

      setUser(res.data.user);
    } catch (error) {
      // console.error("Failed to fetch user:", error);
      console.log(error);
      localStorage.removeItem("accessToken");
      setUser(null);
    }
    finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser, fetchUser, loading}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
