import { useCallback, useEffect, useState } from "react"
import { getRecommendHistory } from "../../../services/patient"
import TableRow from "./TableRow"
import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { useRouter } from "next/router";



export default function ReccomendationHistory() {
   const [recommend,setRecommed] = useState([])
   const[emr,setEMR]= useState([])



   const getRecommendationAPI = useCallback(async()=>{
        
    const response = await getRecommendHistory()
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
      console.log('DATA history recommendation:',response)
      setRecommed(response.data.data)
    //   setTotal(response.data.totalTransaction)
    //   setTransactions(response.data.data)
    //   setCount(response.data.count);
    //   setData(response.data.data);    
    }

},[])
useEffect(()=>{
    getRecommendationAPI()
},[])
    return (
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Recommendation History</h2>
                <div className="latest-transaction">
                    <p className="text-lg fw-medium color-palette-1 mb-14">Recommendation</p>
                    <div className="main-content main-content-table overflow-auto">
                        <table className="table table-borderless">
                            <thead>
                                <tr className="color-palette-1">
                                    <th className="text-start" scope="col">Recommendation</th>
                                    <th scope="col">Diagnosis</th>
                                    <th scope="col">Next Treatment</th>
                                    <th scope="col">Detail</th>

                                </tr>
                            </thead>
                            <tbody id="list_status_item">
                                {recommend.map(recommends =>{
                                    return(
                                    <TableRow 
                                    key={recommends._id}
                                    recommendation={recommends.recommend} 
                                    diagnosis={recommends.emr.diagnosis}
                                    date={recommends.date} 
                                    status={recommends.status}/>
                                    )
                                })}
                                {/* {recommend.map((recommendations)=>(
                                    <TableRow 
                                    key={historyCheckUp._id}
                                    title={historyCheckUp.primaryComplain} 
                                    diagnosis={historyCheckUp.diagnosis} 
                                    date={historyCheckUp.date}
                                    />
                                    // status={historyBooking.status}/>
                                ))}
                            */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> 
        </main>
    )
}
