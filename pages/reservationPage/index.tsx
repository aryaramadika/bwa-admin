import Footer from "../../components/organisms/Footer";
import ReservationDetail from "../../components/organisms/ReservationDetail";
import Navbar from "../../components/organisms/Navbar";
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from "react";
import PriceDetail from "../../components/molecules/PriceDetail";
import { getPriceDetail } from "../../services/patient";
import { PriceDetailTypes } from "../../services/data-types";

export default function priceDetail() {
    const[priceDetail,setPriceDetail]=useState([])
    const getPriceDetailList = useCallback(async ()=>{
        const data = await getPriceDetail();
        setPriceDetail(data)
        console.log(data)
    }, [getPriceDetail])

    useEffect(()=>{
        getPriceDetailList()
    })

    return (
        <>
        <Navbar />
        <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
            <div className="row">
                <ReservationDetail />
            </div>
            
        </div>
        <div className="container-xxl container-fluid" style={{
            justifyContent:"center",
            width:"75%"
        }}>
        <div className="row"  style={{
            width:"150%",
            marginTop:"50px"
            
        }}>
            {priceDetail.map((price:PriceDetailTypes) =>{
                return (
                <PriceDetail 
                    key={price._id} 
                    treatmenType={price.treatmentType} 
                    price = {price.price} 
                
                />)
                
            })}  

        </div>
        </div>
             
            <div className="row">
                <div style={{justifyContent:'center', alignItems:'center', display:'flex' }}>
            <div className="button-group d-flex flex-column mx-auto pt-50" >
                {/* <button type="button" className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
             onClick={onSubmit}>Continue</button> */}
            <a 
            className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill" 
            href="/sign-in"
            role="button"
            style={{
                backgroundColor:"#4d17e2",
                color:'white',
                width: '23.75rem'
            }}
            >Reservation</a>
                    </div>
            </div>
            
        </div>
    </section>
    <Footer/>
    </>
    )
}