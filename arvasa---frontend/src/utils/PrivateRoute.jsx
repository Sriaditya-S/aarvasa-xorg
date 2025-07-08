// utils/PrivateRoute.jsx
import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { useContext } from 'react';

const PrivateRoute = () => {
  const {user, fetchUser, loading } = useContext(AuthContext);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    fetchUser();
  }, [])

  if(loading){
    return <h1>Loading...</h1>
  }
   return user ? <Outlet /> : <Navigate to="/signin" />;



};

export default PrivateRoute;
