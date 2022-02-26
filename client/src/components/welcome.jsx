import { AiFillPlayCircle } from "react-icons/ai";
import {SiEthereum} from 'react-icons/si';
import {BsInfoCircle} from 'react-icons/bs';
import {Loader} from './';
const Welcome =() =>{

    const  commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";
    
    const Input=({placeholder,type, name,value,handleChange})=>(
        <input placeholder={placeholder} 
        type={type}
        step="0.0001"
        value={value}
        onChange={(e)=>{handleChange(e,name)}}
        className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
        />
    );
    
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
                        
                         <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-12">
                             <div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
                             <div className={`${commonStyles}`}>Security</div>
                             <div className={`rounded-tr-2xl ${commonStyles}`}>Ethereum</div>
                             <div className={`rounded-bl-2xl ${commonStyles}`}>Web 3.0</div>
                             <div className={`${commonStyles}`}>Less Fee</div>
                             <div className={`rounded-br-2xl ${commonStyles}`}>BlockChain</div>
                         </div>
                </div >
                <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
                    <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
                <div className="flex justify-between flex-col w-full h-full">
                    <div className="flex justify-between items-start ">
                        <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                            <SiEthereum fontSize={21} color="#fff"/>
                        </div>
                        <BsInfoCircle fontSize={17} color="#fff"/>
                    </div>
                    <div>
                        <p className="text-white font-light text-sm">
                            Address
                        </p>
                        <p className="text-white font-semibold text-lg">
                            Ethereum
                        </p>
                    </div>

                </div>
                    </div>
                <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                    <Input type="text" placeholder="Address To" name="addressTo" handleChange={()=>{}}/>
                    <Input type="text" placeholder="Keyword (GIF)" name="keyword" handleChange={()=>{}}/>
                    <Input type="number" placeholder="Amount (ETH) " name="amount" handleChange={()=>{}}/>
                    <Input type="text" placeholder="Message" name="message" handleChange={()=>{}}/>
                </div>
                </div>
            </div>
        </div>
        
    )
} 
export default Welcome;