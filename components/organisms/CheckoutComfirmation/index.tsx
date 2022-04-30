import { useRouter } from "next/router";
import { useState } from "react"
import { toast } from "react-toastify";
import { setBooking } from "../../../services/patient";


export default function CheckoutConfirmation() {
    const [checkbox,setCheckbox] = useState(false)
    const router = useRouter()
    const onSubmit = async () => {
        // console.log('submit',checkbox)
        const dataReservationLocal = localStorage.getItem('data-reservasi')
        const dataReservation = JSON.parse(dataReservationLocal!)
        if (!checkbox) {
            toast.error('Make sure you already pay the reservation');
            // [CODE UPDATE] menggagalkan checkout jika checkbox false
            return;
        }
        const data ={
            treatment : dataReservation.treatmentPrice._id,
            payment : dataReservation.paymentMethod.payment._id,
            bank : dataReservation.paymentMethod.bank._id,
            accountUser : dataReservation.bankAccountName,
            name:  dataReservation.name,
            // address : "Jln Batubulan",
            phoneNumber: dataReservation.phoneNumber,
            // gender: "WOMAN",
            // age: 22,
            lementation:dataReservation.lementation
        }
        // console.log('data: ',data)
        const response = await setBooking(data);
        if (response.error) {
            toast.error(response.message);
          } else {
            // [CODE UPDATE] memindahkan router.push sebelum toast
            router.push('/complete-checkout');
            toast.success('Checkout Berhasil');
          }
        
    }
    return (
    <>
    <label className="checkbox-label text-lg color-palette-1">I have transferred the money
        <input type="checkbox" checked={checkbox} onChange={() => setCheckbox(!checkbox)}/>
        <span className="checkmark"></span>
    </label>
    <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button 
        className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"    
        // href="./complete-checkout"
        onClick={onSubmit} 
        type="button">
            Confirm
            Payment
        </button>
    </div>
    </>
    )
}
