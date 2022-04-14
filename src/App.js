import React from "react";
import { Component } from "react";
import Actor from "./components/Actor";

class App extends Component{
    constructor(){
        super()
        this.state={
            characters:[],
            finished:false
        }

    }
    componentDidMount(){
        fetch('https://breakingbadapi.com/api/characters')
        .then((res)=>res.json())
        .then((json)=>{
            this.setState({
                characters:json,
                finished:true
            })
        })
    }
    MappingActor(){
                
        if(this.state.finished){
        const data= this.state.characters.map(character=>
            <Actor 
            name={character.name}
            nickname={character.nickname}
            birthday={character.birthday}
            img={character.img}
            />
            )
            return data
        }
       
       
    }
    render(){
        const {finished}=this.state
        return(
           
            <div className='container'>
                {!finished ?'isloading':''}
                <div className="row">
                {this.MappingActor()}
                </div>
                 
                
            </div>
            
        )
    }
    
}
export default App;