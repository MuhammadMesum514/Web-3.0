import { AiFillPlayCircle } from "react-icons/ai";
import {SiEthereum} from 'react-icons/si';
import {BsInfoCircle} from 'react-icons/bs';
import {Loader} from './';
const Welcome =() =>{

    const connectWallet =()=>{

    }

    return(
        <div className="flex w-full justify-between items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col md:mr-10">
                    <h1 className=" text-white text-3xl sm:text-5xl text-gradient py-1">Send Crypto <br /> All Across the world</h1>
                    <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                      Explore the world of Crypto with Me <br/> Buy and Sell Crypto Anytime, Anywhere 
                    </p>
                    
                    <button type="button" 
                    className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd] " 
                     onClick={connectWallet}>
                         <p className="text-white text-base font-semibold">Connect Wallet </p> </button>
                         <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-12"></div>
                </div>
            </div>
        </div>
        
    )
} 
export default Welcome;