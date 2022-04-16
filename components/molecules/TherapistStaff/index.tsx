import Image from "next/image";
import Link from "next/link";
export interface TherapistStaffProps{
    nameStaff: string;
    ageStaff:number;
    thumbnail:string;
    id:string;
}
export default function TherapistStaff(props:TherapistStaffProps) {
    const{nameStaff,ageStaff,thumbnail,id}= props;


    console.log(nameStaff,ageStaff,thumbnail,id)
    return (
        <div className="featured-game-card position-relative">
        <Link href={`/detail/${id}`}>
            <a >
            <div className="blur-sharp">
                <Image className="thumbnail" src={thumbnail} width={205} height={270} alt=""/>
            </div>
            <div className="cover position-absolute bottom-0 m-32">
                <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                    {/* <div className="game-icon mx-auto">
                     <Image  src="/icon/console.svg" width={34} height ={16} alt="console"/>
                    </div> */}
                    <div>
                        <p className="fw-semibold text-white text-xl m-0" >{nameStaff}</p>
                        <p className="fw-light text-white m-0">{ageStaff}</p>
                    </div>
                </div>
            </div>
        </a>
        </Link>
       

    </div>
    )
}
