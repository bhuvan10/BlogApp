import React from 'react'
import { Link } from 'react-router-dom'
const PF = "http://localhost:5000/images/";

export default function BlogCard(props) {
  return (
   <div className="py-10">
    <div className="rounded overflow-hidden shadow-lg max-w-sm">
        <img src={PF + props.blog.imageurl} alt="" className='w-full' />
        <div className='px-6 py-4'>
            <div className="font-bold text-xl mb-2">{props.blog.title}</div>
            <p className='text-gray-600'>{props.blog.description}</p>
            <Link to={`/singleblog/${props.blog.id}`}><button className=''>Read More</button></Link>
        </div>
    </div>
   </div>
  )
}
