import axios, { AxiosRequestConfig } from 'axios'
import Cookies from "js-cookie"
import jwt_decode from "jwt-decode"
import { JWTPayloadTypes, UserTypes } from '../../../services/data-types';


interface CallApiProps extends AxiosRequestConfig{
    token?: boolean
}


export default async function callAPI({url, method, data, token}: CallApiProps) {
    let headers ={}
    if(token){
        const tokenCookies = Cookies.get('token')
        if(tokenCookies){
            const JwtToken = atob(tokenCookies)
            headers ={
                Authorization:`Bearer ${JwtToken}`
            }
          
        }
    }
    
    const response = await axios({
        url,
        method,
        data,
        headers
    }).catch((err) => err.response);
    // console.log('api response : ', response)
    
    if(response?.status > 300){
        const res = {
            error: true,
            message: response.data.message,
            data: null
        }
        return res;
    };
    const res = {
        error: false,
        message: 'Login Success',
        data: response.data.data
    }
    return res;
}