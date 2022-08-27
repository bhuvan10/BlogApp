import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";


const BlogState = (props) => {
  const host = "http://localhost:5000"
  const blogsInitial = []
  const [blogs, setBlogs] = useState(blogsInitial)

  // Get all Notes
  const getAllBlogs = async () => {
    // API Call 
    const response = await fetch(`${host}/blog/allblogs`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        
      }
    });
    const json = await response.json() 
    setBlogs(json.blogs)
  }
  const getMyBlogs = async () => {
    // API Call 
    const response = await fetch(`${host}/blog/myblogs`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token")
      }
    });
    const json = await response.json() 
    setBlogs(json.blogs)
  }
  const getBlogByid = async (id) => {
    // API Call 
    const response = await fetch(`${host}/blog/blogbyid`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "id":id     
      },
    });
    const json = await response.json() 
    console.log(json);
    setBlogs([json.blogs])
  }
  const addBlog = async (title, description, imageurl) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/blog/addblog`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token")
      },
      body: JSON.stringify({title, description, imageurl})
    });

    const blog = await response.json();
    setBlogs(blogs.concat(blog))
  }
  const deleteBlog = async (id) => {
    // API Call
    const response = await fetch(`${host}/blog/deleteblog`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token"),
        "id":id
      }
    });
    const json = response.json(); 
    console.log(json);
    const newBlogs = blogs.filter((blog) => { return blog.id !== id })
    setBlogs(newBlogs)
  }
  const editBlog = async (id, title, description, imageurl) => {
    // API Call 
    const response = await fetch(`${host}/blog/editblog`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token")
      },
      body: JSON.stringify({id,title, description, imageurl})
    });
    const json = await response.json(); 
    console.log(json);

     let newBlogs = JSON.parse(JSON.stringify(blogs))
    // Logic to edit in client
    for (let index = 0; index < newBlogs.length; index++) {
      const element = newBlogs[index];
      if (element.id === id) {
        newBlogs[index].title = title;
        newBlogs[index].description = description;
        newBlogs[index].imageurl = imageurl; 
        break; 
      }
    }  
    setBlogs(newBlogs);
  }
  return (
    <UserContext.Provider value={{blogs,editBlog,addBlog,deleteBlog,getAllBlogs,getMyBlogs,getBlogByid}}>
    {props.children}
    </UserContext.Provider>
  )
}

export default BlogState