import { useEffect, useState } from "react"
import { getPatientOverview } from "../../../services/patient"
import Treatment from "./treatementOverview"
import TableRow from "./TableRow"
import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { useRouter } from "next/router";



export default function OverviewContent() {
    const router = useRouter();
    const [count, setCount] = useState([]);
    const [data, setData] = useState([]);
    useEffect(async () =>{
        const response = await getPatientOverview()
        if (response.error) {
          toast.error(response.message);
        }else{
        //   const { token } = response.data;
        //   // console.log('TOKEN : ',token)
        //   // const user = jwt_decode(token)
        //   // console.log('USER : ' ,user)
        //   const tokenBase64 = btoa(token);
        //   console.log('TOKEN BASE 64 : ' ,tokenBase64)
        //   Cookies.set('token', tokenBase64, { expires: 1 });
        //   // console.log(response)
        //   router.push('/');
        console.log('DATA:',response.data)
        setCount(response.data.count);
        setData(response.data.data);        }
    },[])
    return (
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
                <div className="top-up-categories mb-30">
                    <p className="text-lg fw-medium color-palette-1 mb-14">Total Booking Spent</p>
                    <div className="main-content">
                        <div className="row">
                            {count.map((spend)=>(
                                <Treatment key={spend._id} spending={spend.total} icon ='ic-desktop' >
                                {spend.treatmentType}
                                </Treatment>

                            ))}
                          
                        </div>
                    </div>
                </div>
                <div className="latest-transaction">
                    <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
                    <div className="main-content main-content-table overflow-auto">
                        <table className="table table-borderless">
                            <thead>
                                <tr className="color-palette-1">
                                    <th className="text-start" scope="col">Treatment</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((historyBooking)=>(
                                    <TableRow 
                                    key={historyBooking._id}
                                    title={historyBooking.historyTreatment.treatmentType} 
                                    price={historyBooking.total} 
                                    status={historyBooking.status}/>
                                ))}
                           
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> 
        </main>
    )
}
