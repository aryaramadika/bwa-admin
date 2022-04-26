import { useEffect, useState } from "react"


export default function CheckoutItem() {
    const[dataTreatment,setDataTreatment] = useState({
        name:'',
        lementation:'',
        phoneNumber:'',
        price:0,
        treatmentPrice:{
            treatmentType:'',
            price:0
        }
    })
    useEffect(() => {
        const dataFromLocal = localStorage.getItem('data-reservasi')
        const dataTreatmentLocal = JSON.parse(dataFromLocal!)
        // console.log('data price:', dataTreatmentLocal)
        setDataTreatment(dataTreatmentLocal)
    },[])
    return (
    <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
        <div className="pe-4">
            {/* <div className="cropped">
                <img src="/img/Thumbnail-3.png" className="img-fluid" alt=""/>
            </div> */}
        </div>
        <div style={{
            marginLeft:'-25px',
            marginTop:'-25px'
        }}>
            {/* <p className="color-palette-2 m-0" align='center'>Nama Pasien </p> */}
            {/* <p className="fw-normal text-xl color-palette-1 mb-10" style={{
                fontSize:'40px',
                margin:'revert'
            }} align='center'>{dataTreatment.name}<br/> {dataTreatment.price}</p> */}

            
                <p className="text-lg color-palette-1 mb-20">Nama Pasien <span
                        className="purchase-details" style={{
                            marginLeft:'321px'
                        }}>{dataTreatment.name}</span></p>
                <p className="text-lg color-palette-1 mb-20">Treatment <span
                        className="purchase-details" style={{
                            marginLeft:'321px'
                        }}>{dataTreatment.treatmentPrice.treatmentType}</span></p>
                <p className="text-lg color-palette-1 mb-20">Lementation <span className="purchase-details" style={{
                            marginLeft:'321px'
                        }}>{dataTreatment.lementation}</span></p>
                <p className="text-lg color-palette-1 mb-20">Phone Number <span className="purchase-details" style={{
                            marginLeft:'321px'
                        }}>{dataTreatment.phoneNumber}</span></p>
                
            
            {/* <p className="color-palette-2 m-0" align='center'>Silahkan Lanjutkan Pembayaran</p> */}
           
        </div>
    </div>

    )
}
