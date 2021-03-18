import React from "react";
import history from "./utils/history";

import {useState} from 'react';
//import { Link } from 'react-router'
import web3 from './web3';
import './App.css';
import lottery from './bdo';

import { Router, Route, Switch,Link } from "react-router-dom";
import Firstpage from "./Firstpage";
import Secondpage from "./Secondpage";
import Thirdpage from "./Thirdpage";
import Fourthpage from "./Fourthpage";
import Fifthpage from "./Fifthpage";

import Treasury from './Treasury';

function Moa(){
  
  const [balance,setbalance] = useState("");
  const [totalsupply,settotalsupply] = useState("");
  const [tokenname,settokenname] = useState("");
  const [tokensymbol,settokensymbol]= useState("");
  var [price,setprice] = useState("");

 

  const buy = async(event) =>{
    alert("hello");
  }
  const onSubmitNFT = async (event) => {



    event.preventDefault();
  
    const accounts = await  web3.eth.getAccounts();


   

    setbalance(await lottery.methods.balanceOf(accounts[0]).call());
    settotalsupply(await lottery.methods.totalSupply().call());
    setprice( await Treasury.methods.getDollarPrice().call());
    //setprice( await oracle.methods.getDollarPrice().call());
    settokenname(await lottery.methods.name().call());
    settokensymbol(await lottery.methods.symbol().call());
    
    
  //alert(balance);
  //alert(totalsupply);
  //alert(circulatingsupply);
  //alert(epochs);
  //alert(nextseigniorage);
   alert("completed");    

  

    
};
   
return (
    <div className="App">
      
<center>
<br></br>
<h1>Home Page</h1>

<div>

	<form onSubmit={onSubmitNFT} id="create-course-form" >



  
    <button
                class="btn btn-info btn-block"
                type="submit">
                
                Submit
              </button>




</form>

</div>


<h2>Bdollar Contract</h2>
        <p>
            {tokenname}({tokensymbol})
        </p>
        <p>
           total supply <br/> {totalsupply}
        </p>
        <p>
          price<br/> {price}
      </p>
        <p>
          balanceOf<br/> {balance}
         </p>

        
        
       
<Link to="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x190b589cf9fb8ddeabbfeae36a813ffb2a702454">BuyeBNBmon</Link>

        <hr />









      
<br></br>
<br></br>


<button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Firstpage");
                }}>
                Firstpage
              </button>
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Secondpage");
                }}>
                Secondpage
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
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Fifthpage");
                }}
              >
                Fifthpage
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
            </Route>
            <Route path="/Secondpage">
              <Secondpage />
            </Route>
            <Route path="/Thirdpage">
              <Thirdpage />
              <Route path="/Fourthpage">
              <Fourthpage />
            </Route>
            <Route path="/Fifthpage">
              <Fifthpage />
            </Route>
            </Route>
          </Switch>
        </Router>

	  
      </div>      
  );
}

export default Moa;
