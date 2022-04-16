import Footer from "../../components/organisms/Footer";
import TopUpForm from "../../components/organisms/TopUpForm";
import TherapistDesc from "../../components/organisms/TherapistDesc";
import Navbar from "../../components/organisms/Navbar";
import { useRouter } from "next/dist/client/router";
import { useCallback, useEffect, useState } from "react";
import { getDetaiTherapist } from "../../services/patient";

export default function Detail() {
    const {query,isReady} =useRouter();
    const[dataTherapist,setDataTherapist]=useState({
        therapistName:'',
        therapistAge: 0 ,
        therapistGender:'',
        description:'',
        thumbnail:''
    })
    const getTherapistDetailAPI = useCallback(async(id) =>{
        const data = await getDetaiTherapist(id)
        console.log('data : ',data)
        setDataTherapist(data)
    },[])

    useEffect(()=>{
        if(isReady){
            console.log('router tersedia',query.id)
            getTherapistDetailAPI(query.id)
        }else{
            console.log('router tidak ada')
        }
    },[isReady])
    return (
        <>
        <Navbar />
        <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
            <div className="detail-header pb-50">
                <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">OUR THERAPIST STAFF </h2>
                <p className="text-lg color-palette-1 mb-0">GET WELL SOON</p>
            </div>
            <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
                   <TherapistDesc data={dataTherapist} type='mobile'/>
                </div>
                <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
                    <TherapistDesc data={dataTherapist} type='desktop'/>
                    <hr/>
                {/* <TopUpForm /> */}
 
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>


    )
}
