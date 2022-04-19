import React from 'react'
import {Component} from 'react'
import { useParams } from 'react-router-dom'
import Info from '../components/info'
import Cardimage from '../components/Cardimage'
import { Loading } from '../components/Loading'

class Character extends Component{
    //Start constructor
    // eslint-disable-next-line no-useless-constructor
    constructor(){
         super()
         this.state={
             character:[],
             finished:false,
             user_id:0
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
                user_id:parseInt(id),
               
            })
            
        })
    }
    //ENd componentDidMount
    //mapping
   
    //End actor
    //Start render
    render(){
        const {character,finished,user_id}=this.state
        let Previous=<li className='page-item'><a className="page-link" href={'/character/'+(user_id-1)}>&#8249; Previous</a></li>
        let Next=  <li className='page-item'><a className="page-link" href={'/character/'+(user_id+1)}>Next &#8250;</a></li>
        let loading=''
            // loadiionng  function
            if(!finished){
                loading= <Loading/>
                
            }
            // end loading  funct
         /*function get and style occupation */ 
            function occupation(){
                let p=''
                const data_occupation=character[0].occupation.map(a=>
                     p +=a +' '+'/'
                     
                    )
                   return p.slice(0, -1)
            }
        /*END function get and style occupation */ 
        //Previous function
        if(user_id ===1){
            Previous=
            <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">&#8249; Previous</a>
           </li>
        }
        //END Previous function
        //Next function
        if(user_id >=57){
            Next= 
            <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Next &#8250;</a>
           </li>
          
      }
      //END Next function
         //return
         if(finished){
         return(
            <div className="container ">
                   {loading}
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
                 {/** Next and Previous */}
                 <ul className="pagination d-flex justify-content-between">
             {Previous}
             {Next}
                 </ul>
                 {/** END Next and Previous */}
    
                 </div>
            </div>
         )}
         else{
             return(
                <div className="container ">
                    {loading}
                </div>
                
             )
         }
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
