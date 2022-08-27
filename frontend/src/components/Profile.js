import React, { useEffect, useState } from 'react'

export default function Profile() {
  const[profile,setprofile]=useState({});
 
  const getprofile = async () => {
    const response = await fetch("http://localhost:5000/auth/getuser", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "auth-token": localStorage.getItem("token"),
        },
    });
    const json = await response.json()
    console.log(json);
    setprofile(json);
}
useEffect(()=>{
  getprofile()
 },[])
  return (
    <div>
        <div className="flex items-center h-screen w-full justify-center">
  <div className="max-w-xs">
    <div className="bg-white shadow-xl rounded-lg py-3">
      <div className="photo-wrapper p-2">
        <img
          className="w-32 h-32 rounded-full mx-auto"
          src="https://tse4.mm.bing.net/th?id=OIP.wRtvON_8JKRQghdROw5QvQHaHa&pid=Api&P=0"
          alt="John Doe"
        />
      </div>
      <div className="p-2">
        <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
          {profile.username}
        </h3>
        <table className="text-xs my-3">
          <tbody>
            
            <tr>
              <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
              <td className="px-2 py-2">{profile.email}</td>
            </tr>
            
          </tbody>
        </table>
        
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
