import React from 'react'
import {Component} from 'react'
import { useParams } from 'react-router-dom'
import Info from '../components/info'
import Cardimage from '../components/Cardimage'


class Character extends Component{
    //Start constructor
    // eslint-disable-next-line no-useless-constructor
    constructor(){
         super()
         this.state={
             character:[],
             finished:false,
         }

    }
    //End constructor
    //get data from api
    componentDidMount(){
        const {id} = this.props.params 
        fetch(`https://breakingbadapi.com/api/characters/${id}`)
        .then((res)=>res.json())
        .then((json)=>{
            this.setState({
                character:json,
                finished:true,
                
               
            })
            console.log(this.state.character[0].img)
        })
    }
    //ENd componentDidMount
    //mapping
   
    //End actor
    //Start render
    render(){
        const {character}=this.state
        const loading=''

         /*function get and style occupation */ 
            function occupation(){
                let p=''
                const data_occupation=character[0].occupation.map(a=>
                     p +=a +' '+'/'
                     
                    )
                   return p.slice(0, -1)
            }
        /*END function get and style occupation */ 

         //return
         if(this.state.finished){
         return(
            <div className="container ">
                 <div className='row m-1 '> 
                
                 {/* image */}
                 <Cardimage
                 img={character[0].img}
                 name={character[0].name}
                 occupation={occupation()}
                 />
                
                      
                      
             
                 {/* END image */}
                 {/* about */}
                 <div className='col-lg-5 col-md-6'>
                     <div className='card mb-4'>
                           <div className="card-body">
                               {/* Full Name */}
                                 <Info
                                  name='Full Name'
                                  info={character[0].name}
                                  />
                                {/* End Full Name */}
                                   <hr/>
                                   {/* Nick Name */}
                                   <Info
                                   name='Nick Name'
                                  info={character[0].nickname}
                                  />
                                 
                                   {/* End Nick Name */}
                                   <hr/>
                                   {/* Full Name */}
                                   <Info
                                   name='Birthday'
                                  info={character[0].birthday}
                                  />
                                   {/* End Full Name */}
                                   <hr/>
                                    {/* occupation */}
                                    <Info
                                   name='Occupation'
                                  info={occupation()}
                                  />
                                   {/* End occupation */}
                                   <hr/>
                                    {/* Appearance */}
                                    <Info
                                   name='Appearance'
                                  info={character[0].appearance}
                                  />
                                   {/* End Appearance */}
                                   <hr/>
                                     {/* portrayed */}
                                     <Info
                                   name='Portrayed'
                                  info={character[0].portrayed}
                                  />
                                   {/* End portrayed */}
                              </div>
                       </div>
                        
                 </div>
                        
                                      
                        
                 {/* END about */}
    
                 </div>
            </div>
         )}
         //END return
    }
    //End render

}
export default (props)=>(
<Character
 {...props}
 params={useParams()}
/>
)
