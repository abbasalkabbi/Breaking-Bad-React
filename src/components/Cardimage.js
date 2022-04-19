import React from "react";



function Cardimage(props){

    return(  
    <div className='col-lg-5 col-md-6 '>
    <div className='card'>
        <div class="d-flex flex-column align-items-center text-center">
              <img class="rounded-circle "style={{width:'250px',height:'250px'}} src={props.img} alt=""/>
              <div class="mt-3">
     <h4>{props.name}</h4>
     <p className="text-secondary mb-1">{props.occupation}</p>
    
   </div>
        </div>
    </div>
     
     
</div>)
}
export default Cardimage