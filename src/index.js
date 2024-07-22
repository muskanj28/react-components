import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import News from './pages/News';
import About from './pages/About';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
// import Hook from './Hook';
import blog from './Blog/blog.json';
import App from './App';
import Project from './Hooks_Question/Project';
import Project3 from './Hooks_Question/Project3';
import Todo from './pages/Todo';
import TextUtiles from './pages/TextUtiles';
import Timer from './pages/Timer';

// import Project4 from './Hooks_Question/Project4';



// import { Alert } from 'bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(blog);
root.render(
  <BrowserRouter>
  <div>
    <Layout/>
    <div className='container my-4'>
  

      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Home name="Muskan Jain"/>} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="blogs" element={<Blogs blog_data={blog} />} />
          {/* <Route path="hooks" element={<Hook />} /> */}
          <Route path="app" element={<App />} />
          <Route path="project" element={<Project />} />
          <Route path="todo" element={<Todo />} />
          <Route path="project3" element={<Project3/>} />
          <Route path="textUtiles" element={<TextUtiles/>} />
          <Route path="timer" element={<Timer/>} />
          {/* <Route path="project4" element={<Project4/>} /> */}
        
      </Routes>
      </div>
      </div>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
