import React from 'react'
import {Component} from 'react'


import {useParams } from "react-router-dom";


import Actor from '../components/Actor'
import { Loading } from '../components/Loading';

//Statr class character
class Characters extends Component{
    //Start Use constructor
    constructor(props){
       super(props)
       //Start Use state
       this.state={
                    characters:[],
                    finished:false,
                    page:0,
                    firstpage:true,
                    
       }
       //End Use state

    }
    //End Use constructor
    // created method fetch data from api
    componentDidMount(){
        const {id} = this.props.params 
        if(id >0){
            this.setState( {
                page: parseInt(id)
            }
            )
            }
       
        fetch(`https://breakingbadapi.com/api/characters?limit=10&offset=${id+0}`)
        .then((res)=>res.json())
        .then((json)=>{
            this.setState({
                characters:json,
                finished:true,
                
               
            })
        })
    }
   // created method load data in component
    MappingActor(){
                
        if(this.state.finished){
        const data= this.state.characters.map(character=>
            <Actor 
            name={character.name}
            nickname={character.nickname}
            id={character.char_id}
            img={character.img}
            />
            )
            return data
        }
    }
    
      
       
    //Start Use render
    render(){
       
       
        const {finished,page}=this.state
        let loading=""
        let Previous=''
        let Next=''
        // loadiionng  function
        if(!finished){
             loading= <Loading/>
             
        }
        // end loading  funct
        //Previous function
        if(page===0){
            Previous= <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">&#8249; Previous</a>
           </li>
        }
        else if(page===1){
           Previous= <li className='page-item'><a className="page-link" href='/characters'>&#8249; Previous</a></li>
         }else{
           Previous= <li className='page-item'><a className="page-link" href={'/characters/'+(page-1)}>&#8249; Previous</a></li>
         }
        //END Previous function
        //Next function
        if(page===6){
            Next= <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Next &#8250;</a>
           </li>
          }else{
            Next=  <li className='page-item'><a className="page-link" href={'/characters/'+(page+1)}>Next &#8250;</a></li>
          }
         //END Next function
        return(
           
            <div className='container'>
                
                {loading}

<div className="row">
                {this.MappingActor()}
                </div>
               

              
           
            
                <ul className="pagination d-flex justify-content-between">
               {Previous}
               {Next}
              </ul>
             
            </div>
    
        )
    }
    //End Use render

}
//End class character
// eslint-disable-next-line import/no-anonymous-default-export
export default (props)=>(
    <Characters
    {...props}
    params={useParams()}
    />
)
/**Previous= <li class="page-item disabled">
           <a class="page-link" href="#" tabindex="-1" aria-disabled="true">&#8249; Previous</a>
          </li> */