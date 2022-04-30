import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import { JWTPayloadTypes, UserTypes } from '../../../services/data-types';


export default function Profile() {
    const [ user, setUser] = useState({
        avatar:'',
        name:'',
        email:''
    })
    useEffect(()=>{
        const token = Cookies.get('token')
        if(token){
            const JwtToken = atob(token)
            const payload: JWTPayloadTypes = jwt_decode(JwtToken)
            const userPayload : UserTypes = payload.patient
            // const IMG = process.env.NEXT_PUBLIC_IMAGE
            // user.avatar = `${IMG}/${userPayload.avatar}`
            setUser(userPayload)
        }

        
        // console.log('User  :',user)
    },[])
    return (
        <div className="user text-center pb-50 pe-30">
        <img src={user.avatar} width="90" height="90" className="img-fluid mb-20" style={{borderRadius:"100%"}} />
        <h2 className="fw-bold text-xl color-palette-1 m-0">{user.name}</h2>
        <p className="color-palette-2 m-0">{user.email}</p>
    </div>
    )
}
