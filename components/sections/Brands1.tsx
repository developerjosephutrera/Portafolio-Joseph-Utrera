import Marquee from 'react-fast-marquee'
import { brands1Data } from '@/data/sections/brands1'

export default function Brands1() {
    return (
        <>
            <section className="section-brands-1 section-padding">
                <div className="container">
                    <div className="text-center">
                        <h2>{brands1Data.title}</h2>
                        <p className="text-300">
                            {brands1Data.subtitle}
                        </p>
                    </div>
                </div>
                <div className="container-fluid">
                    {/* Agregamos autoFill={true} para eliminar el espacio vacío al final */}
                    <Marquee 
                        className="carouselTicker carouselTicker-right mt-5 position-relative z-1" 
                        direction="right"
                        autoFill={true}
                    >
                        {/* Agregamos align-items-center para que todos los logos queden centrados verticalmente */}
                        <ul className="carouselTicker__list m-0 p-0 d-flex align-items-center">
                            {brands1Data.brands.map((brand) => (
                                /* Aumentamos el margen lateral a mx-5 */
                                <li key={brand.id} className="carouselTicker__item mx-5" style={{ listStyle: 'none' }}>
                                    <img 
                                        src={brand.image} 
                                        alt={brand.name} 
                                        style={{ height: '85px', objectFit: 'contain' }} // Aumentamos la altura a 85px
                                    />
                                </li>
                            ))}
                        </ul>
                    </Marquee>
                </div>
            </section>
        </>
    )
}