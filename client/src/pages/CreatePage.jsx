import React from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Layout from '../components/Layout';

const CreatePage = () => {

    let navigate=useNavigate();


    const CreateData=async (event)=>{

        event.preventDefault();

        let formData=new FormData(event.target);
        let productName= formData.get('productName');
        let productCode= formData.get('productCode');
        let productImage= formData.get('productImage');
        let productCategory= formData.get('productCategory');
        let productQty= formData.get('productQty');
        let productPrice= formData.get('productPrice');


        await axios.post("/api/Create",{
            productName:productName,
            productCode:productCode,
            productImage:productImage,
            productCategory:productCategory,
            productQty:productQty,
            productPrice:productPrice

        })
        navigate("/")
    }
    return (
        <Layout>
        <div className="container mt-5">
            <form onSubmit={CreateData}>
                <div className="row">
                <h3 className='text-xl font-semibold' >Create Food Item</h3>
                <div className="col-md-4 mt-3">
                        <label htmlFor="productName">Product name</label>
                        <input className='form-control mt-2 pt-2 pb-2' type="text" id='productName' name='productName' />
                    </div>
                    <div className="col-md-4 mt-3">
                        <label htmlFor="productName">Product Code</label>
                        <input className='form-control mt-2 pt-2 pb-2' type="text" id='productName' name='productCode' />       
                    </div>
                    <div className="col-md-4 mt-3">
                        <label htmlFor="productName">Product Image</label>
                        <input className='form-control mt-2 pt-2 pb-2' type="text" id='productName' name='productImage' />       
                    </div>
                    <div className="col-md-4 mt-3">
                        <label htmlFor="productName">Food Category</label>
                        <input className='form-control mt-2 pt-2 pb-2' type="text" id='productName' name='productCategory' />       
                    </div>
                    <div className="col-md-4 mt-3">
                        <label htmlFor="productName">Qty</label>
                        <input className='form-control mt-2 pt-2 pb-2' type="text" id='productName' name='productQty' />       
                    </div>
                    <div className="col-md-4 mt-3">
                        <label htmlFor="productName">Price</label>
                        <input className='form-control mt-2 pt-2 pb-2' type="text" id='productName' name='productPrice' />       
                    </div>
                    <div className="col-md-4 mt-3">                       
                        <button type='submit' className='btn btn-primary mt-3'>Submit</button>
                    </div>

                </div>
            </form>
        </div>
        </Layout>
    );
};

export default CreatePage;