import React from "react";
import history from "./utils/history";

import {useState} from 'react';
import web3 from './web3';
import lottery from './storeabicon';//this line import lottery folder

import { Router, Route, Switch } from "react-router-dom";
import Popup from 'reactjs-popup';

import Treasury from './Treasury';
import Firstpage from "./Firstpage";
import Thirdpage from "./Thirdpage";
import Fourthpage from "./Fourthpage";
import Fifthpage from "./Fifthpage";
import bdooracle from "./bdooracle";
import boardroom from "./Boardroom";
import Homepage from "./Moa";
import bdo from "./bdo";
import share from "./share";


function Secondpage() {
  var [getCurrentEpoch,setepoch] = useState("");

  var [nextseigniorage,setnextseigniorage] = useState("");

  
  const [geta,setgeta] = useState("");
  var [rate,setrate] = useState("");
  var [twap,settwap] = useState("");
  var [staked,setstaked] = useState("");
  var [locked,setlock] = useState("");
  var [app,setapprove] = useState("");
  var [stake,setstake] = useState("");
  var [amount,setamount]= useState("");
  const [tid,setId] = useState("");
  const [tid1,setId1] = useState("");
  const [Seigniorage,setSeigniorage] = useState("");
  var [withdraw,setwithdraw] = useState("");
  var [bal,setbal] = useState("");
  var [claim,setclaim] = useState("");
  var[ear,setear] = useState("");
  


      const approve = async (event) =>{
        event.preventDefault();
        const accounts = await  web3.eth.getAccounts();
        setapprove(await share.methods.approve("0x409e9135Ab9005abaAEcC6C03E300809848a41E4","999999999900000000000000000000000000000").
        send({
          from: accounts[0]
         
        }));
      }
      const Staked = async (event) =>{
        event.preventDefault();
        const accounts = await  web3.eth.getAccounts();
        var te=tid;
        alert(te)
        setstake(await boardroom.methods.stake(te).
        send({
          from: accounts[0]
         
        }));
        setSeigniorage(await boardroom.methods.allocateSeigniorage(te).send({ from:accounts[0]}));
        
      }
      const Withdraw = async (event) =>{
        event.preventDefault();
        const accounts = await  web3.eth.getAccounts();
        var te1=tid1;
        alert(te1)
        setwithdraw(await boardroom.methods.withdraw(te1).
        send({
          from: accounts[0]
         
        }));
      }
      const Claim = async (event) =>{
        event.preventDefault();
        const accounts = await web3.eth.getAccounts();
        setclaim(await boardroom.methods.claimReward().send({
          from: accounts[0]
         
        }));
        alert("Rewards claimed");
      }
      
      const onSubmitNFT = async (event) => {
    
    
      //var te=tid;
  
      event.preventDefault();
    
      const accounts = await  web3.eth.getAccounts();
      settwap(await bdooracle.methods.twap("0x8352A0a849cD181Cc7Ef61F972b7B8E5d677b66D","1000000000000000000").call());   
      //setrate(await Treasury.events.maxSupplyExpansionPercent);
      setepoch(await bdooracle.methods.getCurrentEpoch().call());
      setstaked(await boardroom.methods.totalSupply().call());
    setnextseigniorage(await Treasury.methods.nextEpochPoint().call()); 
    setlock(await bdo.methods.balanceOf("0xF277De5B326C3538c81e73cE9a6f7232eAEE4439").call()); 
    setbal(await boardroom.methods.balanceOf(accounts[0]).call());  
    setear(await boardroom.methods.earned(accounts[0]).call()); 
     alert("completed");    

   

      
  };
    
  return (
    <div className="App">
      
<center>
<br></br>
<h1>BoardRoom </h1>

		<form onSubmit={onSubmitNFT} id="create-course-form" >

    <button
                class="btn btn-info btn-block"
                type="submit">
                
                Submit
              </button>


</form>

<p>
          epoch<br/> {getCurrentEpoch}
         </p>

         <p>
         nextEpochPoint<br/> {nextseigniorage}
         </p>
         <p>
         eBNBmom Price(TWAP)<br/> {twap}
         </p>
         <p>
           SeBNBmom Staked<br/> {staked}
         </p>
         <p>
           Locked value<br />{locked}
         </p>
         <p>
         <b> First we need to approve then only we are able to call stake and Withdraw</b> <br />
           <button onClick={approve}>Approve</button>
         </p> <br />
         <Popup trigger={<button> Stake</button>} position="right center"><br />
    <div>Stake your coin !!</div>
   
   <input type = "number" name="tid" required onChange={event => setId( event.target.value)} />

    <button  onClick={Staked}>Stake</button>
  </Popup><br />
  <b>Your staked amount<br /> {bal}</b>
  <br />
 
  <Popup trigger={<button> Withdraw</button>} position="right center">
    <div>withdraw your staked coin !!</div>
   
   <input type = "number" name="tid1" required onChange={event => setId1( event.target.value)} />

    <button  onClick={Withdraw}>Withdraw</button>
  </Popup>
  <br />
  <br />
  <b>Your Earned amount=>{ear}</b><br />
  <button  onClick={Claim}>ClaimRewards</button>
         
      
<br></br>
<br></br>

<button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Moa");
                }}>
                Homepage
              </button>
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
            <Route path="/Moa">
              <Homepage />
            </Route>
            <Route path="/Firstpage">
              <Firstpage />
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

export default Secondpage;
