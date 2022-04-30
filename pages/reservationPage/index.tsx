import Footer from "../../components/organisms/Footer";
import ReservationDetail from "../../components/organisms/ReservationDetail";
import Navbar from "../../components/organisms/Navbar";
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from "react";
import PriceDetail from "../../components/molecules/PriceDetail";
import { getPaymentDetail, getPriceDetail } from "../../services/patient";
import { BanksTypes, PaymentDetailTypes, PriceDetailTypes } from "../../services/data-types";
import jwtDecode from "jwt-decode";
import { JWTPayloadTypes,  UserTypes} from "../../services/data-types";
import TopUpForm from "../../components/organisms/TopUpForm";
import PaymentDetail from "../../components/molecules/PaymentDetail";
import cx from 'classnames';
import {toast} from 'react-toastify'

interface reservationProps {
    treatments: PriceDetailTypes[];
    payments: PaymentDetailTypes[]
  }

export default function priceDetail(props:reservationProps) {
    const[priceDetail,setPriceDetail]=useState([])
    const[payment,setPayment]= useState([])
    const[paymentMethod,setPaymentMethod] = useState({})
    const[treatmentPrice,setTreatmentPrice] = useState({})
    const [bankAccountName, setBankAccountName] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [lementation, setLementation] = useState('');
    const {user} =props;
    // console.log(user)
    // const { treatments, payments } = props;

    const router = useRouter();
    const className = {
        label: cx('form-label text-lg fw-medium color-palette-1 mb-10'),
    };


    const getPriceDetailList = useCallback(async ()=>{
        const data = await getPriceDetail();
        setPriceDetail(data)
        localStorage.setItem('data-price',JSON.stringify(data))
        // console.log(data)
    }, [getPriceDetail])
    const getPaymentDetaiList = useCallback (async () =>{
        const data = await getPaymentDetail();
        setPayment(data)
        localStorage.setItem('data-method',JSON.stringify(data))

        // console.log(data)
    },[getPaymentDetail])


    useEffect(()=>{
        getPriceDetailList()
        getPaymentDetaiList()
    })

    const onTreatmentClick = (data:PriceDetailTypes) =>{
        console.log('data :', data)
        setTreatmentPrice(data)
        // localStorage.setItem('data-treatment chosen :',JSON.stringify(data))
    }
    const onPaymentClick = (payment:PaymentDetailTypes,bank:BanksTypes) =>{
        // console.log('data :', data)
        // localStorage.setItem('data-treatment chosen :',JSON.stringify(data))
        // console.log('PAYMENT METHOD: ',payment)
        // console.log('Bank : ',bank)
        const data ={
            payment,
            bank
        }
        setPaymentMethod(data)
        // localStorage.setItem('data-payment chosen :',JSON.stringify(data))



    }
    const onSubmit = () => {
        // console.log('Name : ', name)
        // console.log('PhoneNumber : ', phoneNumber)
        // console.log('Lementation : ', lementation)
        // console.log('Bank  account: ', bankAccountName)
        // console.log('Price  : ', treatmentPrice)
        // console.log('Payment: ', paymentMethod)
        // localStorage.setItem('data-treatment chosen :',JSON.stringify(data))
        // localStorage.setItem('data-payment chosen :',JSON.stringify(data))
        if (name === '' ||bankAccountName === '' || phoneNumber === '' || lementation === '' ||treatmentPrice === {} || paymentMethod === {}) {
            // alert('silahkan isi semua data!!!');
            toast.error('Please Enter Fullfill All The Form')
          } else {
            const data = {
              name,
              bankAccountName,
              phoneNumber,
              lementation,
              treatmentPrice,
              paymentMethod
            };
            localStorage.setItem('data-reservasi', JSON.stringify(data));
            router.push('/checkout');
        }
    }

    return (
        <>
        <Navbar />
        <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
            <div className="row">
                {/* <ReservationDetail /> */}
                <div >
        <div style={{justifyContent:'center', alignItems:'center', display:'flex', }}>
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Reservation Form</h2>
            </div>
            <div style={{justifyContent:'left', alignItems:'center', display:'flex',marginLeft: " 240px"}}>
            <div className="pt-50">
                <label className={className.label}>Full Name</label>
                <input type="text" 
                className="form-control rounded-pill text-lg" 
                aria-describedby="name" 
                placeholder="Enter your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                style={{
                    width:"250%",
                    maxWidth:"1000%"
                }}
                />
            </div>
        </div>
        <div style={{justifyContent:'left', alignItems:'center', display:'flex',marginLeft: " 240px"}}>
        <div className="pt-30">
            <label className={className.label}>Phone Number</label>
            <input type="text" 
            className="form-control rounded-pill text-lg" 
            aria-describedby="email" 
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            style={{
                width:"250%",
                maxWidth:"1000%"
            }}
            />
        </div>
        </div>
        <div style={{justifyContent:'left', alignItems:'center', display:'flex',marginLeft: " 240px"}}>
        <div className="pt-30">
            <label className={className.label}>Lementation</label>
            <input type="text" 
            className="form-control rounded-pill text-lg" 
            aria-describedby="password" 
            placeholder="Presenting complaint"
            value={lementation}
            onChange={(event) => setLementation(event.target.value)}
            style={{
                width:"250%",
                maxWidth:"1000%"
            }}
            />
        </div>
        </div>

        </div>
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
                    _id ={price._id}
                    onChange={()=> onTreatmentClick(price)}
                
                />)
                
            })}  

        </div>
        

        <div className="row"    
            style={{
                width:"150%",
                marginTop:"50px"
            
            }}>
                
                <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Payment Method</p>    
                <fieldset id="paymentMethod">
                {payment.map((payment:PaymentDetailTypes)=>{
                    return(
                        payment.banks.map((bank) =>(
                            <PaymentDetail
                                key={bank._id}
                                bankId={bank._id}
                                type={payment.type}
                                bankName={bank.bankName}
                                onChange={() => onPaymentClick(payment, bank)}
                      />

                    )
                    
                    
                    ))
                })}
                </fieldset>

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
            <div className="button-group d-flex flex-column mx-auto pt-50" 
            style={{
                justifyContent:'left', alignItems:'center', display:'flex',marginLeft: " 240px"
            }}>
                {/* <button type="button" className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
             onClick={onSubmit}>Continue</button> */}
            <div className="pb-50" style={{
                width:"250%",
                maxWidth:"1000%"
                // mar
            }}>
            <label for="bankAccount" className="form-label text-lg fw-medium color-palette-1 mb-10"
            style={{
                textAlign:'center'
            }}>Bank
                Account
                Name</label>
            <input 
            type="text" 
            className="form-control rounded-pill text-lg" 
            id="bankAccount"
            name="bankAccount" 
            aria-describedby="bankAccount"
            placeholder="Enter your Bank Account Name"
            value={bankAccountName}
            onChange={(event) => setBankAccountName(event.target.value)}
            style={{
                width:"95%",
                maxWidth:"500%"
            }}
            />
        </div>
        
            <button
            className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill" 
            // href="/sign-in"
            type="button"
            onClick={onSubmit}
            style={{
                backgroundColor:"#4d17e2",
                color:'white',
                width: '23.75rem'
            }}
            >Reservation</button>
            </div>
        </div>
        
            
        </div>
    </section>
    <Footer/>
    </>
    )
}
interface GetServerSideProps{
    req:{
        cookies: {
        token:string
        };
    }
}

export async function getServerSideProps({ req }:GetServerSideProps) {
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