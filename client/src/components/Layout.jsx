import React from 'react';
import Menu from './Menu';

const Layout = (props) => {
    return (
        <div>
            <div className=' px-5 flex gap-3 items-center border-b py-4'>
                <h3 className='bg-violet-600 w-8 h-8 text-xl font-bold text-white flex justify-center items-center rounded-full'>G</h3>
                  <h3 className='text-xl font-semibold text-violet-600'>CRUD Food</h3>
            </div>
            <div className='container-fluid'>
                <div className="row">
                <div className='col-md-2 py-5 shadow h-screen'>
                  <Menu/>
                </div>
                <div className='col-md-10 py-1 px-5'>
                    {props.children}
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default Layout;