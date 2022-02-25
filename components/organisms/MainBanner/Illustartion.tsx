import Image from "next/image"

export default function Illustartion() {
    return (
        <div className="col-lg-6 col-12 d-lg-block d-none">
        <div className="d-flex justify-content-lg-end justify-content-center me-lg-5">
            <div className="position-relative" data-aos="zoom-in">
                <img src="/img/Header-15.png" className="img-fluid" alt=""/>
                <div className="card left-card position-absolute border-0">
                    <div className="d-flex align-items-center mb-16 gap-3">
                        <Image  src="/img/Header-4.png" width={40} height={40} className="rounded-pill"
                            alt=""/>
                        <div>
                            <p  className="text-sm fw-medium color-palette-1 m-0">Oka Mahardika</p>
                            <p className="text-xs fw-light color-palette-2 m-0">Patient</p>
                        </div>
                    </div>
                    <div className="d-flex gap-2">
                     <Image src ="/icon/star.svg" width={24} height={22} />
                     <Image src ="/icon/star.svg" width={24} height={22} />
                     <Image src ="/icon/star.svg" width={24} height={22} />
                     <Image src ="/icon/star.svg" width={24} height={22} />
                     <Image src ="/icon/star.svg" width={24} height={22} />

                    </div>
                </div>
                <div className="card right-card position-absolute border-0">
                    <div className="position-relative d-flex flex-row justify-content-center mb-24">
                        <img src="/img/Header-13.png" height="80px" width="80px" className="rounded-pill" alt=""/>
                        <p className="right-card-support text-white text-xxs text-center position-absolute m-0">
                            Therapists</p>
                    </div>
                    <div>
                        <p className="text-sm text-center m-0 fw-medium color-palette-1">Our Staff</p>
                        <p className="fw-light text-center m-0 color-palette-2 text-xs">Physiotherapy</p>
                    </div>
                </div>
            </div>

        </div>
    </div>

    )
}
