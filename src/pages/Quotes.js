import React from "react";
import { Component } from "react";
import Cardquote from "../components/Cardquote";
import { Loading } from "../components/Loading";


class Quotes extends Component{
    constructor(){
        super()
        this.state={
            quotes:[],
            finished:false,
        }

    }
   
     // created method fetch data from api
     componentDidMount(){
       
        fetch(`https://breakingbadapi.com/api/quotes`)
        .then((res)=>res.json())
        .then((json)=>{
            this.setState({
                quotes:json,
                finished:true,
                
               
            })
        })
    }
   // created method load data in component
   MappingQuotes(){
       if(this.state.finished){
           const data=this.state.quotes.map(q=>
            <Cardquote 
            author={q.author}
            quote={q.quote}
            />)
            return data
       }
   }

    render(){
        const {finished}=this.state
        let loading=''
            // loadiionng  function
            if(!finished){
                loading= <Loading/>
                
            }
            // end loading  funct
        return(
           <div className="container mt-5">
               {loading}
                <div className="row">
                {this.MappingQuotes()}

                </div>
           </div>
          
            
        )
    }
    
}
// eslint-disable-next-line import/no-anonymous-default-export
export default Quotes

