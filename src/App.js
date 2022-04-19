import React from "react";
import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from './pages/home'
import Characters from "./pages/characters";
import Character from "./pages/character";
import NoPage from "./pages/NoPage";


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
    <Route path="character/:id" element={<Character/>}/>
      
   
    
                
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
            
        )
    }
    
}
export default App;