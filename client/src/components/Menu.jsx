import React from 'react';
import { Link } from 'react-router-dom'
import { FaCartShopping, FaSquarePollHorizontal } from "react-icons/fa6";

const Menu = () => {
    return (
        <div>
            <h3 className='text-xl uppercase px-4 text-gray-400'>menu</h3>
      <nav>
        <div>
            <ul className='menu rounded-box'>
                <li><Link to='/create' className=' items-center text-lg  hover:bg-violet-200 py-2 px-4 rounded hover:text-violet-500 gap-3 capitalize '><span><FaCartShopping /></span>create food</Link></li>
                <li><Link to='/' className=' items-center text-lg hover:bg-violet-200 py-2 px-4 rounded hover:text-violet-500 gap-3 capitalize '><span><FaSquarePollHorizontal /></span> all foods</Link></li>
            </ul>
            
        </div>
      </nav>
        </div>
    );
};

export default Menu;