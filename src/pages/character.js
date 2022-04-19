import React from 'react'
import {Component} from 'react'
import { useParams } from 'react-router-dom'
import Info from '../components/info'


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

         //return
         if(this.state.finished){
         return(
            <div className="container">
                 <div className='row'> 
                 {/* image */}
                 <div className='col-lg-5 col-md-6 '>
                      <div class="mb-2 text-center ">
                            <img class="w-75 z-depth-2 rounded-2 " src={character[0].img} alt=""/>
                      </div>
                      
                 </div>
                 {/* END image */}
                 {/* about */}
                 <div className='col-lg-5 col-md-6'>
                     <div className='card mb-4'>
                           <div class="card-body">
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
                                  info={character[0].occupation}
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