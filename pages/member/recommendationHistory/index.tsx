import  CheckUpHistory from "../../../components/organisms/ReccomendationHistory";
import SideBar from "../../../components/organisms/SideBar";
import { JWTPayloadTypes, UserTypes } from '../../../services/data-types';
import jwtDecode from 'jwt-decode';
import ReccomendationHistory from "../../../components/organisms/ReccomendationHistory";


export default function Customer() {
    return (
        <section className="overview overflow-auto">
        <SideBar />
        <ReccomendationHistory />
    </section>
    )
}
interface GetServerSideProps{
    req:{
        cookies: {
        token:string
        };
    }
}

export async function getServerSideProps({ req }:GetServerSideProps) {
    const { token } = req.cookies;
    if(!token){
        return{
            redirect: {
                destination: '/sign-in',
                permanent: false,
            },
        };
    }
    
    const jwtToken = Buffer.from(token, 'base64').toString('ascii'); 
    const payload: JWTPayloadTypes = jwtDecode(jwtToken);
    const userFromPayload: UserTypes = payload.patient;
    const IMG = process.env.NEXT_PUBLIC_IMG;
    userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;

    return{
        props: {
           user: userFromPayload,
        },
    };
    
}
