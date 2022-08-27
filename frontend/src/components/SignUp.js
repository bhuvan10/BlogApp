import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"

export default function SignUp() {
  const navigate = useNavigate();

    const [credentials, setCredentials] = useState({email: "", password: "",username:""}) 

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/auth/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username:credentials.username,email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (response.status===201){
            // Save the auth token and redirect
            localStorage.setItem('token', json.token); 
            localStorage.setItem('user', json.user.username); 

            navigate("/");

        }
        else{
          alert(json.message);
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
  <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
      <h1 className="mb-8 text-3xl text-center">Sign up</h1>
      <input
       value={credentials.username} 
       onChange={onChange}
        type="text"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="username"
        placeholder="Full Name"
      />
      <input
       value={credentials.email} 
       onChange={onChange}
        type="text"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="email"
        placeholder="Email"
      />
      <input
       value={credentials.password} 
       onChange={onChange}
        type="password"
        className="block border border-grey-light w-full p-3 rounded mb-4"
        name="password"
        placeholder="Password"
      />
      
      <button className="bg-blue-400 rounded text-center text-white p-3 w-full" onClick={handleSubmit}>Create Account</button>
      <div className="text-center text-sm text-grey-dark mt-4">
        By signing up, you agree to the
        <a
          className="no-underline border-b border-grey-dark text-grey-dark"
          href="#"
        >
          Terms of Service
        </a>{" "}
        and
        <a
          className="no-underline border-b border-grey-dark text-grey-dark"
          href="#"
        >
          Privacy Policy
        </a>
      </div>
    </div>
    <div className="text-grey-dark mt-6 text-center">
      Already have an account?
      <button className="bg-green-400 rounded text-center text-white p-3 w-full" onClick={()=>{navigate("/login")}}>Login</button>
    </div>
  </div>
</div>


  )
}
