interface TherapistDescProps {
    type:'desktop'|'mobile';
    data:{
        therapistName: string,
        therapistAge:number,
        therapistGender:string,
        description:string,
        thumbnail:string
    }
}
export default function TherapistDesc(props:TherapistDescProps) {
    const {type, data} = props;
    const ROOT_IMG = process.env.NEXT_PUBLIC_IMAGE
    if(type ==='desktop'){
        return(
            <div className="pb-50 d-md-block d-none">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">
                {data.therapistName}
                </h2>
            <p className="text-lg color-palette-2 mb-0">Umur: {''}{data.therapistAge}</p>
            <p className="mt-10 mb-20 text-lg color-palette-1">
                {data.description}
                </p>
        </div>
        )
    }
    return (
        <div className="row align-items-center">
        <div className="col-md-12 col-4">
            <img src={`${ROOT_IMG}/${data.thumbnail}`} width="280" height="380" className="img-fluid" alt=""/>
        </div>
        <div className="col-md-12 col-8 d-md-none d-block">
            <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">{data.therapistName}</h2>
            <p className="text-sm color-palette-2 text-start mb-0">Umur: {''}{data.therapistAge}</p>
        </div>
    </div>
    )
}
