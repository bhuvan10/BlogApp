import React, { useEffect, useState } from 'react'
import {Link, Navigate} from 'react-router-dom'
export default function Navbar() {
  const [token,settoken]=useState(null);
  useEffect(()=>{
    if(localStorage.getItem("token"))
    settoken(localStorage.getItem("token"))
  },[])
  return (
    <>

  {/* navbar goes here */}
  <nav className="bg-gray-100">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between">
        <div className="flex space-x-4">
          {/* logo */}
          <div>
            <Link
              to="/"
              className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
            >
              <svg
                className="h-6 w-6 mr-1 text-blue-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              <span className="font-bold">Blog App</span>
            </Link>
          </div>
          {/* primary nav */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="py-5 px-3 text-gray-700 hover:text-gray-900">
              Home
            </Link>
{  (token!=null)&&          (<Link to="/addblog" className="py-5 px-3 text-gray-700 hover:text-gray-900">
              Add Blog
            </Link>)}
            {(token!=null)&&
               (<Link to="/myblog" className="py-5 px-3 text-gray-700 hover:text-gray-900">
                  My Blogs
                       </Link>)
            }  
            {(token!=null)&&
               (<Link to="/profile" className="py-5 px-3 text-gray-700 hover:text-gray-900">
                  Profile
                       </Link>)
            }       
          </div>
        </div>
        {/* secondary nav */}
        {(token==null)&&(
        <div className="hidden md:flex items-center space-x-1">
          <Link to="/login" className="py-5 px-3">
            Login
          </Link>
          <Link
            to="/signup"
            className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
          >
            Signup
          </Link>
        </div>)}
        {(token!=null)&&(<><button onClick={()=>{localStorage.removeItem("token");localStorage.removeItem("user");     window.location.reload();}}>Logout</button></>)}
        {/* mobile button goes here */}
        <div className="md:hidden flex items-center">
          <button className="mobile-menu-button" onClick={()=>{document.getElementById("bar").classList.toggle("hidden")}}>
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    {/* mobile menu */}
    <div className="mobile-menu hidden md:hidden" id='bar'>
      <Link to="/" className="block py-2 px-4 text-sm hover:bg-gray-200">
        Home
      </Link>
      {(token!=null)&&(<Link to="/addblog" className="block py-2 px-4 text-sm hover:bg-gray-200">
        Add Blog
      </Link>)}
      {(token!=null)&&(<Link to="/myblog" className="block py-2 px-4 text-sm hover:bg-gray-200">
        My Blogs 
      </Link>)}
    </div>
  </nav>
  {/* content goes here */}
  
</>

  
   )
}
