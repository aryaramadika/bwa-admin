import axios from "axios";
import callAPI from "../config/api";
import { LoginTypes } from "./data-types";


const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function setSignUp(data:FormData) {
    
    const ENDPOINT = `${ROOT_API}/${API_VERSION}/auth/signup`;
 
    return callAPI({
        url:ENDPOINT,
        method:'POST',
        data
    });
    
}
export async function setSignIn(data: LoginTypes) {

    const ENDPOINT = `${ROOT_API}/${API_VERSION}/auth/signin`;

    return callAPI({
        url:ENDPOINT,
        method:'POST',
        data
    });
    // const axiosResponse = response.data;
    // return  axiosResponse.data;
    
}