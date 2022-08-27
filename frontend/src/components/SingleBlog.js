
import "./SingleBlog.css"
import React, { useContext, useEffect,useState } from 'react'
import BlogContext from '../Context/BlogContext'
import { useNavigate, useParams } from 'react-router-dom';
import EditModal from "./EditModal";
const PF = "http://localhost:5000/images/";

export default function SingleBlog() {
  const clicked = () => {
    setModalOn(true)
  }
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false)
  const navigate = useNavigate();
  const {deleteBlog} = useContext(BlogContext);
  const{id}=useParams();
  const context = useContext(BlogContext);
  const{blogs,getBlogByid}=context;
  useEffect(()=>{
    getBlogByid(id);
  },[])
  const deleteblog =()=>{
      deleteBlog(id);
      navigate("/");
  }
  return (
    <>
    <div className="singlePost m-4">
    <div className="singlePostWrapper">
      <img
        className="singlePostImg"
        src={PF + blogs[0].imageurl}
        alt=""
      />
      <h1 className="singlePostTitle">
        {blogs[0].title}
        <div className="singlePostEdit">
          {(blogs[0].author==localStorage.getItem("user"))&&(<><i className="singlePostIcon far fa-edit"   onClick={clicked}></i> 
           <i className="singlePostIcon far fa-trash-alt" onClick={deleteblog}></i></>)}
        </div>
      </h1>
      <div className="singlePostInfo">
        <span>
          Author:
          <b className="singlePostAuthor">
            <a className="link" href="/posts?username=Safak">
              {blogs[0].author}
            </a>
          </b>
        </span>
        <span>{blogs[0].createdAt}</span>
      </div>
      <p className="singlePostDesc">
        {blogs[0].description}
      </p>
    </div>
  </div>
  {modalOn && < EditModal setModalOn={setModalOn} setChoice={setChoice} blog1={blogs[0]} />}

  </>
  )
}
