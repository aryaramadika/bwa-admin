import Footer from "../../components/organisms/Footer";
import Navbar from "../../components/organisms/Navbar";
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from "react";
import PriceDetail from "../../components/molecules/PriceDetail";
import { getPriceDetail } from "../../services/patient"
import { PriceDetailTypes } from "../../services/data-types"



export default function priceDetail() {
        // const {query, isReady} = useRouter();
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
            <div className="detail-header pb-50">
                <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">Price Detail</h2>
            </div>
            <div className="row">
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
    </section>
    <Footer/>
    </>
    )
}
