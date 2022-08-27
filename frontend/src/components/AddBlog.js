import React, { useContext, useState,useEffect } from 'react'
import BlogContext from '../Context/BlogContext'
import { useNavigate } from 'react-router-dom'

export default function AddBlog() {
  const navigate = useNavigate();
  useEffect(() => {
    // eslint-disable-next-line
    if(!localStorage.getItem("token"))
     navigate('/')
     console.log(localStorage.getItem("token"));
    
}, [])
  const context=useContext(BlogContext);
  const {addBlog} = context;
  const [blog,setblog] = useState({title:"",description:""});
  const [file, setFile] = useState(null);

  const onChange = (e)=>{
    setblog({...blog,[e.target.name]:e.target.value})
}
const HandleClick =(e)=>{
  e.preventDefault();
  console.log(file);
  addBlog(blog.title,blog.description,file);
  setblog({title:"",description:""});

}
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-6 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-md">
    <img
      className="mx-auto h-12 w-auto"
      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
      alt="Workflow"
    />
    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
      Create Blog
    </h2>
    <p className="mt-2 text-center text-sm text-gray-600 max-w">
      A Blog is message is a bottle, both in purpose and likely readership
      
    </p>
  </div>
  <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
    {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="mb-0 space-y-6" action="#" method="POST">
      <div className="mb-3 xl:w-96">
  <label
    htmlFor="title"
    className="form-label inline-block mb-2 text-gray-700"
  >
    Title
  </label>
  <input
    type="text"
    className="
  form-control
  block
  w-full
  px-3
  py-1.5
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
"   
name='title'
onChange={onChange}
value={blog.title}
    id="title"
    placeholder="title"
  />
</div>
<div className="mb-3 xl:w-96">
  <label
    htmlFor="description"
    className="form-label inline-block mb-2 text-gray-700"
  >
    description
  </label>
  <textarea
    type="text"
    className="
  form-control
  block
  w-full
  px-3
  py-1.5
  text-base
  font-normal
  text-gray-700
  bg-white bg-clip-padding
  border border-solid border-gray-300
  rounded
  transition
  ease-in-out
  m-0
  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
" 
name='description'
onChange={onChange}
value={blog.description}
    id="description"
    placeholder="description"
  />
</div>
<div className="mb-3 xl:w-96">
 
  <input
    type="file"
  
name='file'
onChange={(e) => setFile(e.target.files[0])}
id="fileInput"
  />
</div>
        
        
          
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={HandleClick}>
            Add Blog
          </button>
        </div>
      </form>
    </div>
  </div>
</div>


  )
}
