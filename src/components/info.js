import React from "react";
function Info(props){
    return(
        <div class="row">
             <div class="col-sm-3">
                 <p class="mb-0">{props.name}</p>
             </div>
             <div class="col-sm-9">
                    <p class="text-muted mb-0 ">{props.info}</p>
             </div>
        </div>
    )
         
                            
} 

export default Info
