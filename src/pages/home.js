import React from "react";
import { Component } from "react";


class Home extends Component{
    constructor(){
        super()
        this.state={
           
        }

    }
   
    
    render(){
       
        return(
           
         <div className="bg-light bg-gradient">
           <div className="container home">
            <div className="text-center">
                  <h1 class="display-1">React App With Route</h1>
                 <h1 class="display-2">Breaking Bad Api</h1>

            </div>
          {/* images */}
          <div className="row">
              <div className="col-6">
                  <div className="card">
                      
                           <img src="https://i.pinimg.com/564x/92/2d/f0/922df0e7f73d2e6dde3a001f22c6747e.jpg" style={{width:'100%',height:'400px'}}/>
                    
                  </div>
              </div>
              <div className="col-6">
                  <div className="card">
                      
                           <img className="rotated" src="https://i.pinimg.com/564x/92/2d/f0/922df0e7f73d2e6dde3a001f22c6747e.jpg" style={{width:'100%',height:'400px'}}/>
                    
                  </div>
              </div>
          </div>
          {/* images End */}
           
           </div>
           <footer class="bg-light text-center text-lg-start">

  <div class="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
    <p>Email: abbasalkabi2003@gmail.com</p>
    <a class="text-dark " href="https://breakingbadapi.com/">Breaking Bad Api</a>
    <br/>
    <a class="text-dark" href="https://github.com/abbasalkabbi/Breaking-Bad-React">Github</a>
  </div>

</footer>
         </div>
            
        )
    }
    
}
export default Home;