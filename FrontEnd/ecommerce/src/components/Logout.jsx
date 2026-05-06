import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

  const [currentUserDetails,setCurrentUserDetails]=useState({})

  useEffect(()=>{
        
  },[])


  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[350px] text-center">

        {/* Avatar */}
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-400 to-red-600 flex items-center justify-center text-white text-2xl font-bold">
          {user?.name?.charAt(0) || "U"}
        </div>

        {/* User Info */}
        <h2 className="text-xl font-semibold text-gray-800">
          {user?.name || "User"}
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          {user?.email || "No email"}
        </p>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white py-2 rounded-lg font-medium hover:bg-red-600 transition duration-300 shadow-md"
        >
          Logout
        </button>

      </div>
    </div>
  );
}

export default Logout;