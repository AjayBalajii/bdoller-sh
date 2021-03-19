import React from "react";
import history from "./utils/history";

import {useState} from 'react';
import web3 from './web3';
import lottery from './storeabicon';//this line import lottery folder

import { Router, Route, Switch } from "react-router-dom";
import Homepage from "./Moa";
import Secondpage from "./Secondpage";
import Thirdpage from "./Thirdpage";

import Firstpage from "./Firstpage";
import Fifthpage from "./Fifthpage";
import share from "./sharerewardpool";
import lp from "./pancakeLP";


function Fourthpage() {

  
  const [geta,setgeta] = useState("");
  var[sid,setsId] = useState("");
  var[bal,setbal] = useState("");
  var [app,setapprove] = useState("");
  var [tid1,setId1] = useState("");
  var[withd,setwithdraw] = useState("");
  var [withd1,setwithdraw1] = useState("");

  
      const onSubmitNFT = async (event) => {
    
  
      event.preventDefault();
    
      const accounts = await  web3.eth.getAccounts();
      setbal(await lp.methods.balanceOf(accounts[0]).call());            
     alert("completed");    
   
  };
  const Staked = async (event) =>{
    event.preventDefault();
    const accounts = await  web3.eth.getAccounts();
    var te=sid;
    alert(te)
    
    setsId(await share.methods.deposit("0",te).
    send({
      from: accounts[0]
     
    }));
  }
  const Withdraw = async (event) =>{
    event.preventDefault();
    const accounts = await  web3.eth.getAccounts();
    var te1=tid1;
    alert(te1)
    setwithdraw(await share.methods.withdraw("0",te1).
    send({
      from: accounts[0]
     
    }));
  }
  const settle = async (event) =>{
    event.preventDefault();
    const accounts = await  web3.eth.getAccounts();

    setwithdraw1(await share.methods.emergencyWithdraw("0").
    send({
      from: accounts[0]
     
    }));
  }
const accept = async (event) =>{
      event.preventDefault();
      const accounts = await  web3.eth.getAccounts();
      setapprove(await lp.methods.approve("0xEB50a80F7DE37AF8669b0C4973B2A33E8502c5a7","999999999900000000000000000000000000000").
      send({
        from: accounts[0]
       
      }));
      alert("approved");
    
    
    
  }
    
  return (
    <div className="App">
      
<center>
<br></br>
<h1>Pancake PRABH/BUSD</h1>

		<form onSubmit={onSubmitNFT} id="create-course-form" >
    <button
                class="btn btn-info btn-block"
                type="submit">
                
                Submit
              </button>
</form>
<p>Deposit Cake-LP PRABH/BUSD and earn eBNBshare</p>

<b> First we need to approve then only we are able to call stake and Withdraw</b> <br /><br />
           <button onClick={accept}>Approve</button>
          <br /><br />
<div>Deposit LpToken !!</div><br />
   
   <input type = "number" name="sid" required onChange={event => setsId( event.target.value)} /><br />

    <button  onClick={Staked}>Stake</button><br /><br />
    <b>Your Deposit amount<br /> {bal}</b><br />.

    <div>withdraw your LpToken !!</div> <br />
   
   <input type = "number" name="tid1" required onChange={event => setId1( event.target.value)} />
   <br />

    <button  onClick={Withdraw}>Withdraw</button><br /> <br />
    <div>Settle and withdraw your LpToken !!</div>
    <button  onClick={settle}>Settle & Withdraw</button>


      
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
            <Route path="/Secondpage">
              <Secondpage />
            </Route>
            <Route path="/Thirdpage">
              <Thirdpage />
              <Route path="/Firstpage">
              <Firstpage />
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

export default Fourthpage;
