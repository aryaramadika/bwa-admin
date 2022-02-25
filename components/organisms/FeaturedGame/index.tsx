import GameItem from "../../molecules/GameItem"
export default function FeaturedGame() {
    return (
        <section className="featured-game pt-50 pb-50">
    <div className="container-fluid" id="fisioterapi">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Our Physiotherapists<br/> 
        </h2>
        <div className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
            data-aos="fade-up">
            <GameItem title="Super Mechs" category="Mobile" thumbnail="/img/Thumbnail-6.png"/>
            <GameItem title="Call of Duty: Modern" category="Mobile" thumbnail="/img/Thumbnail-7.png"/>
            <GameItem title="Mobile Legends" category="Mobile" thumbnail="/img/Thumbnail-8.png"/>
            <GameItem title="Clash of Clans" category="Mobile" thumbnail="/img/Thumbnail-9.png"/>
            <GameItem title="Valorant" category="Desktop" thumbnail="/img/Thumbnail-10.png"/>
            
        </div>
   
    </div>
</section>
    )
}
