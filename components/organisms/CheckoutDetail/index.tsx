import { useEffect, useState } from "react"
import NumberFormat from "react-number-format"

export default function CheckoutDetail() {
        const[dataReservation,setDataReservation] = useState({
                name:'',
                lementation:'',
                phoneNumber:'',
                treatmentPrice:{
                    treatmentType:'',
                    price:0,
                    _id:''
                },
                paymentMethod:{
                    payment:{
                        type:'',
                        _id:'' 
                    },
                    bank:{
                       noRekening:'',
                       bankName:'',
                       name:'',
                       _id:''     
                    }    
                       
                },
                bankAccountName:''
            })
        useEffect(()=>{
        const dataFromLocal = localStorage.getItem('data-reservasi')
        const dataRerservasitLocal = JSON.parse(dataFromLocal!)
        console.log('Data Reservasi :',dataRerservasitLocal)
        setDataReservation(dataRerservasitLocal)
        },[])
        const priceTreatment = dataReservation.treatmentPrice.price
        const taxes = dataReservation.treatmentPrice.price * (1/100)
        const total = priceTreatment + taxes
    return (
        <>
        
    <div className="purchase pt-md-50 pt-30">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">Purchase Details</h2>
        <p className="text-lg color-palette-1 mb-20">Reservation ID {' '} <span className="purchase-details">#00R1</span></p>
        <p className="text-lg color-palette-1 mb-20">Treatment{' '} <span className="purchase-details">{dataReservation.treatmentPrice.treatmentType}</span></p>
        <p className="text-lg color-palette-1 mb-20">Price{' '} 
                <span className="purchase-details"> 
                        <NumberFormat 
                        value={priceTreatment}
                        prefix="Rp " 
                        displayType="text" 
                        thousandSeparator="."
                        decimalSeparator=","
                        />
                </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">Admin Fee (10%) 
                <span className="purchase-details">
                        <NumberFormat 
                        value={taxes}
                        prefix="Rp " 
                        displayType="text" 
                        thousandSeparator="."
                        decimalSeparator=","
                        />
                
                </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">Total <span className="purchase-details color-palette-4">
                <NumberFormat 
                value= {total}
                prefix="Rp " 
                displayType="text" 
                thousandSeparator="."
                decimalSeparator=","
                />
                </span>
        </p>
    </div>
    <hr 
            style={
            {
                border:'1px solid black'
            }}/>
    <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
            
                <h2 className="fw-bold text-xl color-palette-1 mb-20">Payment Informations</h2>
                <p className="text-lg color-palette-1 mb-20">Your Account Name <span className="purchase-details">{dataReservation.bankAccountName}</span></p>
                <p className="text-lg color-palette-1 mb-20">Type <span className="payment-details">{dataReservation.paymentMethod.payment.type}</span>
                </p>
                <p className="text-lg color-palette-1 mb-20">Bank Name <span className="payment-details">{dataReservation.paymentMethod.bank.bankName}</span></p>
                <p className="text-lg color-palette-1 mb-20">Bank Account Name <span className="payment-details">{dataReservation.paymentMethod.bank.name}</span></p>
                <p className="text-lg color-palette-1 mb-20">Bank Number <span className="payment-details">{dataReservation.paymentMethod.bank.noRekening}</span>
                </p>
    </div>
    </>
    )
}
