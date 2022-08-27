import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import SingleBlog from './components/SingleBlog';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import AddBlog from './components/AddBlog';
import BlogState from './Context/BlogState';
import MyBlog from './components/MyBlog';
import EditModal from './components/EditModal';
import Profile from './components/Profile';

function App() {
  return (
    <>
    <BlogState>
    <Router>
    <div className="App text-start ">
      
      <Routes>
      <Route exact path="/" element={<><Navbar  /><Home /></> }/>
     
      <Route exact path="/singleblog/:id" element={ <><Navbar  /><SingleBlog /></>}/>
      <Route exact path="/login" element={ <><Login /></>}/>
      <Route exact path="/signup" element={ <><SignUp /></>}/>
      <Route exact path="/addblog" element={ <><Navbar  /><AddBlog /></>}/>
      <Route exact path="/myblog" element={ <><Navbar  /><MyBlog /></>}/>
      <Route exact path="/editblog/:id" element={ <><Navbar  /><EditModal/></>}/>
      <Route exact path="/profile" element={ <><Navbar  /><Profile /></>}/>

      </Routes>
    </div>
    </Router>
    </BlogState>
    </>
    
  )
}

export default App;
