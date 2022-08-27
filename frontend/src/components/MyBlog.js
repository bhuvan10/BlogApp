import React, { useContext, useEffect } from 'react'
import BlogContext from '../Context/BlogContext'
import BlogCard from './BlogCard'
export default function MyBlog() {
  const context = useContext(BlogContext);
  const{blogs,getMyBlogs}=context;
  useEffect(()=>{
    getMyBlogs();
  },[])
  return (
    <>
    <h1 className='text-center text-5xl mt-5 '>All Blogs</h1>
    <div className="m-4 grid lg:grid-cols-3 lg:gap-3 md:grid-cols-2 md:gap-2 sm:grid-cols-1 place-items-center">
    {blogs.length===0&&"No Blogs to display"}
    {
          blogs.map((blog)=>{
          return(<BlogCard blog={blog}  key={blog.id}/>)
          })}

    </div>
    </>

  )
}
