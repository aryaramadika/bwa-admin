import ReserveStep from "../../molecules/ReservationStep"

export default function TransactionStep() {
    return (
        <section id="feature" className="feature pt-50 pb-50">
    <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">How To Do <br/> Online Reservation
        </h2>
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
            <ReserveStep icon="step1" title="1. Start" desc1="Registrasi akun anda" desc2="jika belum memiliki akun"/>
            <ReserveStep icon="step2" title="2. Login " desc1="Login dengan akun " desc2="yang telah teregistrasi"/>
            <ReserveStep icon="step3" title="3. Reservasi" desc1="Masuk kehalaman reservasi" desc2="untuk melakukan reservasi"/>
        </div>
    </div>
</section>


    )
}
