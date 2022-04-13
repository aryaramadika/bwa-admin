import TherapistStaff from "../../molecules/TherapistStaff"
import { useCallback,useEffect, useState } from "react"
import axios from "axios"
import { getFeaturedTherapist } from "../../../services/patient"
export default function FeaturedTherapist() {
    const [therapistList, setTherapistList] = useState([])
    const getFeaturedTherapistList = useCallback(async ()=>{
        const data = await getFeaturedTherapist();
        setTherapistList(data)
        console.log(data)
    }, [getFeaturedTherapist])
    useEffect(async () => {
    //    const response = await axios.get('http://localhost:2000/api/v1/patients/landingpage');
    //     console.log('data :', response.data.data);
    //     setTherapistList(response.data.data);
    getFeaturedTherapistList()
    },[])
    return (
        <section className="featured-game pt-50 pb-50">
    <div className="container-fluid" id="fisioterapi">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Our Physiotherapists<br/> 
        </h2>
        <div className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
            data-aos="fade-up">

            {therapistList.map(staff =>{
                <TherapistStaff 
                key={staff._id} 
                nameStaff={staff.therapistName} 
                ageStaff = {staff.therapistAge} 
                thumbnail={`http://localhost:2000/api/v1/uploads/${staff.thumbnail}`}/>

            })}    
            
            
        </div>
   
    </div>
</section>
    )
}
