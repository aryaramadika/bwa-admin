import NumberFormat from "react-number-format";

export interface paymentDetalProps{
    type: string;
    bankName:string;
    bankId:string;
}
export default function PaymentDetail(props:paymentDetalProps) {
    const{type,bankName,bankId}= props;


    console.log(type,bankName,bankId)
    return (
        // <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        //         <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">bankName Information</p>
        //         {/* <div className="row justify-content-between">
        //             <label className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
        //                 >
        //                 <input className="d-none" type="radio" id="topup1" name="topup" value="topup1"/>
        //                 <div className="detail-card">
        //                     <div className="d-flex justify-content-between">
        //                         <p className="text-3xl color-palette-1 m-0"><span className="fw-medium">{type}  </span>
        //                         </p>
        //                         <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20" fill="none"
        //                             xmlns="http://www.w3.org/2000/svg">
        //                             <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
        //                             <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#00BAFF"
        //                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        //                         </svg>
        //                     </div>
        //                     <p className="text-lg color-palette-1 m-0">{bankName}</p>
        //                 </div>
        //             </label>
        //         </div> */}
                
        //     <div className="d-sm-block d-flex flex-column w-100">
        //         <a href="./" type="submit"
        //             className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg">Back to Homepage</a>
        //     </div>
        
        // <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        // <div className="row justify-content-between">
      
            <label className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
               >
                <input className="d-none" type="radio" id="topup1" name="topup" value="topup1"/>
                <div className="detail-card">
                    <div className="d-flex justify-content-between">
                        <p className="text-3xl color-palette-1 m-0"><span className="fw-medium">{type} </span>
                            
                        </p>
                        <svg id="icon-check" width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                            <path d="M5.83301 10L8.46459 12.5L14.1663 7.5" stroke="#00BAFF"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <p className="text-lg color-palette-1 m-0" > {bankName}
                                  
                    </p>
                </div>
            </label>
            
          
                
            // <div className="col-lg-4 col-sm-6">
            // </div>
    //     </div>
    // </div>
    
    )
}
