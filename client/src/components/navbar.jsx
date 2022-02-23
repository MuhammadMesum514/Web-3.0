import {HiMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';
import logo from '../../images/logo.png';
const Navbar =({title,classProps}) => {
    return(
        <li className='mx-4 cursor-pointer'></li>

    )
}
    return(
        <nav className='w-full flex md:justify-center justify-between'>
            <div className='md:flex[0.5] flex-initial justify-center items-center'>
                <img src={logo} alt="logo" className='w-32 cursor-pointer'></img>
                <ul className='md:flex text-white hidden list-none flex-initial justify-between items-center flex-row'>

                </ul>
            </div>
        </nav>
        // <h1>NavBar</h1>
    )
} 
export default Navbar;