import Footer from "../Footer";
import PriceDetail from "../../molecules/PriceDetail";
import Navbar from "../Navbar";
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from "react";

export default function priceDetail() {
        const {query, isReady} = useRouter();
        const[dataPrice,setPrice]=useState({
            treatmentType:'',
            price:0,
        })
       
    
        useEffect(() => {
            if(isReady){
                console.log('Router is available', query.id);
                // getVoucherDetailAPI(query.id);
            } else{
                console.log('Router is not available');
            }
        }, [isReady]);

    return (
        <>
        <Navbar />
        <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
            <div className="detail-header pb-50">
                <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">Price Detail</h2>
            </div>
            <div className="row">
                <PriceDetail/>
 
            </div>
        </div>
    </section>
    <Footer/>
    </>
    )
}
