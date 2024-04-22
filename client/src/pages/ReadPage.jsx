import React, {useEffect, useState} from 'react';
import axios from "axios";
import Loader from "../loader/loader.jsx";
import {Link} from "react-router-dom";
import Layout from '../components/Layout.jsx';

const ReadPage = () => {

    const [Data,SetData]=useState([]);

    useEffect(() => {
        (async ()=>{
            await ReadData()
        })()
    }, []);


    const ReadData=async ()=>{
        let res=await axios.get("/api/Read");
        SetData(res.data['row'])
    }

    const DeleteData=async (id)=>{
        await axios.get(`/api/Delete/${id}`);
        await ReadData()
    }
    return (
        <Layout>
            
        <div >            
            <div className="row">
            <h1 className='text-xl font-semibold px-4 py-3'>All Food List</h1>
                    {
                    Data.length===0?(<Loader/>):
                        (Data.map((item,i)=>{
                            return (
                                <div key={i} className='col-md-3 mt-2'>

                                <div className="card relative shadow-xl foodItems">
                                <figure><img className='' src={item['productImage']} alt="Shoes" /></figure>
                                <div className="card-body  ">
                                    <h2 className="card-title">{item['productName']}</h2>
                                    <p className='absolute bg-fuchsia-600 rounded-xl text-white px-3 py-1 top-10 right-10'> Tk: {item['productPrice']}.00</p>
                                    <div className="card-actions justify-start">
                                    <Link className="btn btn-info" to={`/update/${item['_id']}`}>Edit</Link>
                                    <button onClick={()=>DeleteData(item['_id'])} className="btn btn-warning ms-2">Delete</button>
                                    </div>
                                </div>
                                </div>                             
                                   
                                </div>
                            )
                        }))
                    }
            </div>
        </div>
        </Layout>
    );
};

export default ReadPage;