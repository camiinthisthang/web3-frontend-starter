//import abiJSON from "./your-abi-here.json";
import { ethers } from "ethers";

function connectContract() {
    const contractAddress = "0x[YOUR_CONTRACT_ADDRESS]";
    const contractABI = abiJSON.abi;
    let rsvpContract;
    try {
        const { ethereum } = window;
  
        if (ethereum.chainId === "0x13881") {
          //checking for eth object in the window, see if they have wallet connected to Polygon Mumbai network
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          rsvpContract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          ); // instantiating new connection to the contract
        } else {
          console.log("Ethereum object doesn't exist!");
        }
      } catch (error) {
        console.log("ERROR:", error);
      }
      return rsvpContract;
  }
  
  export default connectContract;

//in your nextjs pages that trigger your smart contract calls, import this at the top:
  //import connectContract from "../utils/connectContract";
  //then when you want to call those functions:
  //const rsvpContract = connectContract();
  //const txn = await rsvpContract.youtFunction()