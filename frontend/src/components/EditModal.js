import React, { useContext,useState } from "react";
import BlogContext from "../Context/BlogContext";
import axios from "axios"
export default function EditModal({ setModalOn, setChoice, blog1 }) {
  const {editBlog}=useContext(BlogContext);
  const [file, setFile] = useState(null);
  const [blog,setblog] = useState({title:blog1.title,description:blog1.description});
  const onChange = (e)=>{
    setblog({...blog,[e.target.name]:e.target.value})
}
  const handleOKClick = async (e) => {
    e.preventDefault()
    let imageurl = blog1.imageurl;
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      try {
        await axios.post("/upload", data);
        imageurl = filename;
      } catch (err) {
      }
    }
    editBlog(blog1.id,blog.title,blog.description,imageurl);

    setChoice(true);
    setModalOn(false);
  };
  const handleCancelClick = () => {
    setChoice(false);
    setModalOn(false);
  };

  return (
    <div className="   bg-zinc-200 opacity-80 fixed inset-0 z-50   ">
      <div className="flex h-screen justify-center items-center ">
        <div className="flex-col justify-center  bg-white py-36 px-24 border-4 border-sky-500 rounded-xl ">
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
              name="title"
              value={blog.title}
              onChange={onChange}
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
              name="description"
              value={blog.description}
              onChange={onChange}

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

          <div className="flex">
            <button
              onClick={handleOKClick}
              className=" rounded px-4 py-2 text-white  bg-green-400 "
            >
              Yes
            </button>
            <button
              onClick={handleCancelClick}
              className="rounded px-4 py-2 ml-4 text-white bg-blue-500 "
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
