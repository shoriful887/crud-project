import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Layout from "../components/Layout";


const UpdatePage = () => {
    let navigate=useNavigate();
    let {id}= useParams();

    const [Existing,SetExisting]=useState(null)

    const ExistingInfo=async (id)=>{
        let res=await axios.get(`/api/ReadByID/${id}`)
        SetExisting(res.data['row'][0])
    }

    useEffect(() => {
        (async ()=>{
            await ExistingInfo(id)
        })()
    }, []);


    const UpdateData=async (event)=>{

        event.preventDefault();

        let formData=new FormData(event.target);
        let productName=formData.get("productName");
        let productCode=formData.get("productCode");
        let productImage=formData.get("productImage");
        let productCategory=formData.get("productCategory");
        let productQty=formData.get("productQty");
        let productPrice=formData.get("productPrice");

        await axios.post(`/api/Update/${id}`,{
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
            <form onSubmit={UpdateData}>               
                <div className="row">
                <div className="col-md-4 mt-3">
                        <label htmlFor="productName">Product name</label>
                        <input defaultValue={Existing!==null?(Existing['productName']):("")} className='form-control mt-2 pt-2 pb-2' type="text" id='productName' name='productName' />
                    </div>
                    <div className="col-md-4 mt-3">
                        <label htmlFor="productCode">Product Code</label>
                        <input defaultValue={Existing!==null?(Existing['productCode']):("")} className='form-control mt-2 pt-2 pb-2' type="text" id='productCode' name='productCode' />       
                    </div>
                    <div className="col-md-4 mt-3">
                        <label htmlFor="productImage">Product Image</label>
                        <input defaultValue={Existing!==null?(Existing['productImage']):("")} className='form-control mt-2 pt-2 pb-2' type="text" id='productImage' name='productImage' />       
                    </div>
                    <div className="col-md-4 mt-3">
                        <label htmlFor="productCategory">Food Category</label>
                        <input defaultValue={Existing!==null?(Existing['productCategory']):("")} className='form-control mt-2 pt-2 pb-2' type="text" id='productCategory' name='productCategory' />       
                    </div>
                    <div className="col-md-4 mt-3">
                        <label htmlFor="productQty">Qty</label>
                        <input defaultValue={Existing!==null?(Existing['productQty']):("")} className='form-control mt-2 pt-2 pb-2' type="text" id='productQty' name='productQty' />       
                    </div>
                    <div className="col-md-4 mt-3">
                        <label htmlFor="productPrice">Price</label>
                        <input defaultValue={Existing!==null?(Existing['productPrice']):("")} className='form-control mt-2 pt-2 pb-2' type="text" id='productPrice' name='productPrice' />       
                    </div>
                    <div className="col-md-4 mt-3">                       
                        <button type='submit' className='btn btn-primary mt-3'>Update</button>
                    </div>

                </div>
            </form>
        </div>
        </Layout>
    );
};

export default UpdatePage;