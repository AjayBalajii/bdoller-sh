import React from "react";
import history from "./utils/history";

import {useState} from 'react';
import web3 from './web3';
import lottery from './storeabicon';//this line import lottery folder

import { Router, Route, Switch } from "react-router-dom";
import Homepage from "./Moa";
import Firstpage from "./Firstpage";
import Secondpage from "./Secondpage";
import Thirdpage from "./Thirdpage";
import Fourthpage from "./Fourthpage";


function Fifthpage() {

  
  const [geta,setgeta] = useState("");

  
      const onSubmitNFT = async (event) => {
    
    
      //var te=tid;
  
      event.preventDefault();
    
      const accounts = await  web3.eth.getAccounts();
            
     alert("completed");    

    //var getaaa=new web3.eth.Contract(abi,poda);
    
    //await geta.methods.tokenURI(te).send({
    //from: accounts[0]
    //value: this.setState({c:accounts[0]})
    
    //});


      //var printgeta=await getaaa.methods.tokenURI(te).call();

      
  };
    
  return (
    <div className="App">
      
<center>
<br></br>
<h1>Fifthpage</h1>

		<form onSubmit={onSubmitNFT} id="create-course-form" >




</form>



      
<br></br>
<br></br>


<button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Moa");
                }}
              >
                Home Page
              </button>
<button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Firstpage");
                }}
              >
                First Page
              </button>

<button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Secondpage");
                }}>
                Second page
              </button>
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Thirdpage");
                }}
              >
                Third page
              </button>
              
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Fourthpage");
                }}
              >
                Fourth page
              </button>


              <br></br>
<br></br>

              
</center>

<br></br>
<br></br>
                    
                    

            <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <div class="display-4 mb-1">Choose a route to go to</div>
              
            </Route>
            <Route path="/Firstpage">
              <Firstpage />
            
            <Route path="/Secondpage">
              <Secondpage />
            </Route>
            <Route path="/Thirdpage">
              <Thirdpage />
              <Route path="/Fouthpage">
              <Fourthpage />
            </Route>
            </Route>
            </Route>
          </Switch>
        </Router>

	  
      </div>      
  );
}

export default Fifthpage;
