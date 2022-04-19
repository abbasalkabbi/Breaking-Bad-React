import React from 'react'
import {Component} from 'react'
class Actor extends Component{
    constructor(props){
        super()
        this.state={
            name:props.name,
            nickname:props.nickname,
            id:props.id,
            img:props.img
        }
    }
    render(){
        const {img ,name,nickname,id}=this.state
        return(
            
            <div class="col-12 col-sm-6 col-lg-3 ">
                 <div class="single_advisor_profile wow fadeInUp " data-wow-delay="0.2s" >
                 <div class="advisor_thumb"><img className='image-profile' src={img} alt={name}/></div>
                 <a href={'../character/'+id}>
                 <div class="single_advisor_details_info">
                <h6>{name}</h6>
                <p class="designation">{nickname} </p>
              </div>
                 </a>
              
                 </div>
            </div>
        )
    }
}
export default Actor
