import React from 'react'
import {Component} from 'react'
class Actor extends Component{
    constructor(props){
        super()
        this.state={
            name:props.name,
            nickname:props.nickname,
            birthday:props.birthday,
            img:props.img
        }
    }
    render(){
        const {img ,name,nickname,birthday}=this.state
        return(
<div class="card col-md-4 col-sm-6" >
<h5 class="card-title text-center m-1">{name}</h5>
       <div className="card-header" >
              <img src={img} alt={name} />
        </div>
  
  <div class="card-body">
   
    <h5 class="card-text">NickName:<span class="h6"> {nickname}</span></h5>
    <h5 class="card-text">birthday:<span class="h6"> {birthday}</span></h5>
   
  </div>
</div>
        )
    }
}
export default Actor
