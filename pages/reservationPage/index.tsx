import Footer from "../../components/organisms/Footer";
import ReservationDetail from "../../components/organisms/ReservationDetail";
import Navbar from "../../components/organisms/Navbar";
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from "react";
import PriceDetail from "../../components/molecules/PriceDetail";
import { getPaymentDetail, getPriceDetail } from "../../services/patient";
import { PaymentDetailTypes, PriceDetailTypes } from "../../services/data-types";
import jwtDecode from "jwt-decode";
import { JWTPayloadTypes,  UserTypes} from "../../services/data-types";
import TopUpForm from "../../components/organisms/TopUpForm";
import PaymentDetail from "../../components/molecules/PaymentDetail";

export default function priceDetail() {
    const[priceDetail,setPriceDetail]=useState([])
    const[payment,setPayment]= useState([])

    const getPriceDetailList = useCallback(async ()=>{
        const data = await getPriceDetail();
        setPriceDetail(data)
        // console.log(data)
    }, [getPriceDetail])
    const getPaymentDetaiList = useCallback (async () =>{
        const data = await getPaymentDetail();
        setPayment(data)
        console.log(data)
    },[getPaymentDetail])


    useEffect(()=>{
        getPriceDetailList()
        getPaymentDetaiList()
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
         
        <div className="row"    
            style={{
                width:"150%",
                marginTop:"50px"
            
            }}>
                <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Price Information</p>    
            {priceDetail.map((price:PriceDetailTypes) =>{
                return (
                <PriceDetail 
                    key={price._id} 
                    treatmenType={price.treatmentType} 
                    price = {price.price} 
                
                />)
                
            })}  

        </div>
        

        <div className="row"    
            style={{
                width:"150%",
                marginTop:"50px"
            
            }}>
                <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Payment Method</p>    
                {payment.map((payment:PaymentDetailTypes)=>{
                    return(
                        payment.banks.map((bank) =>(
                            <PaymentDetail
                                key={bank._id}
                                bankId={bank._id}
                                type={payment.type}
                                bankName={bank.bankName}
                        // onChange={() => onPaymentItemChange(payment, bank)}
                      />

                    )
                    
                    
                    ))
                })}
            {/* {payment.map((payment) => payment.banks.map((bank) => (
              <PaymentDetail
                key={bank._id}
                bankId={bank._id}
                type={payment.type}
                bankName={bank.bankName}
                onChange={() => onPaymentItemChange(payment, bank)}
              />
            )))} */}

        </div>
        {/* <TopUpForm payment={payment} /> */}
        </div>
        
             
            <div className="row">
                <div style={{justifyContent:'center', alignItems:'center', display:'flex' }}>
            <div className="button-group d-flex flex-column mx-auto pt-50" >
                {/* <button type="button" className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
             onClick={onSubmit}>Continue</button> */}
            <div className="pb-50" style={{
                width:"250%",
                maxWidth:"1000%"
            }}>
            <label for="bankAccount" className="form-label text-lg fw-medium color-palette-1 mb-10">Bank
                Account
                Name</label>
            <input type="text" className="form-control rounded-pill text-lg" id="bankAccount"
                name="bankAccount" aria-describedby="bankAccount"
                placeholder="Enter your Bank Account Name"/>
        </div>
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
export async function getServerSideProps({ req }) {
    const { token } = req.cookies;
    if(!token){
        return{
            redirect: {
                destination: '/sign-in',
                permanent: false,
            },
        };
    }
    
    const jwtToken = Buffer.from(token, 'base64').toString('ascii'); 
    const payload: JWTPayloadTypes = jwtDecode(jwtToken);
    const userFromPayload: UserTypes = payload.patient;
    const IMG = process.env.NEXT_PUBLIC_IMG;
    userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;

    return{
        props: {
           user: userFromPayload,
        },
    };
    
}