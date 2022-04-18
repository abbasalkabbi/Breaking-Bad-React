import React from "react";
import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from './pages/home'
import Characters from "./pages/characters";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import Test from "./pages/test";

class App extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super()
       
    }
    
    
    render(){
       
        return(
           
            <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="characters" element={<Characters/>}>
      <Route path=":id" element={<Characters/>} />
    </Route>
    <Route path="blogs" element={<Blogs/>}>
      <Route path=":id" element={<Blogs/>} />
    </Route>
    <Route path="test" element={<Test/>}>
      <Route path=":id" element={<Test/>} />
    </Route>
                
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
            
        )
    }
    
}
export default App;