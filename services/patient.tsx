import axios from "axios";

export async function getFeaturedTherapist() {
    const ROOT_API = process.env.NEXT_PUBLIC_API;
    const API_VERSION = 'api/v1';
    const ENDPOINT = 'patients/landingpage';

    const response = await axios.get(`${ROOT_API}/${API_VERSION}/${ENDPOINT}`);
    const axiosResponse = response.data;
    
    return  axiosResponse.data;
    
}
export async function getDetaiTherapist() {
    return null
}