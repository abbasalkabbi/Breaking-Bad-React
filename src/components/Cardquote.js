import React from "react";
function Cardquote(props){
    return(
        <div class="col-lg-6 mx-auto">

       
        <blockquote class="blockquote blockquote-custom bg-white p-5 shadow rounded">
            <div class="blockquote-custom-icon bg-info shadow-sm"><i class="fa fa-quote-left text-white"></i></div>
            <p class="mb-0 mt-2 font-italic">"{props.quote} ."</p>
            <footer class="blockquote-footer pt-4 mt-4 border-top">Author/
                <cite title="Source Title">{props.author} </cite>
            </footer>
        </blockquote>

    </div>
    )
         
                            
} 

export default Cardquote
/** <div class="col-3 m-1">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{props.author}</h5>
        <p class="card-text">{props.quote}</p>
      </div>
    </div>
  </div> */