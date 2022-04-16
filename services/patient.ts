import axios from "axios";


const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function getFeaturedTherapist() {
    
    const ENDPOINT = 'patients/landingpage';

    const response = await axios.get(`${ROOT_API}/${API_VERSION}/${ENDPOINT}`);
    const axiosResponse = response.data;
    
    return  axiosResponse.data;
    
}
export async function getDetaiTherapist(id) {
    const ENDPOINT = `patients/${id}/detail`;

    const response = await axios.get(`${ROOT_API}/${API_VERSION}/${ENDPOINT}`);
    const axiosResponse = response.data;
    
    return  axiosResponse.data;
}
export async function getPriceDetail() {
    const ENDPOINT = `patients/pricedetail`;

    const response = await axios.get(`${ROOT_API}/${API_VERSION}/${ENDPOINT}`);
    const axiosResponse = response.data;
    
    return  axiosResponse.data;}

