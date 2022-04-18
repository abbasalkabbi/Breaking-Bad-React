import React from 'react';
import { useParams } from 'react-router-dom';


const Blogs = () => {
    let { id } = useParams();
    return <h1>Blog Articles{id}</h1>;
  };
  
  export default Blogs;