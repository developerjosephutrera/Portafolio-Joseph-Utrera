import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { servicesPageData } from "@/data/services/page";
import Static1 from "@/components/sections/Static1";
import Contact1 from "@/components/sections/Contact1";

export default function Services() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <section className="section-service-list pt-120 pb-150">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-lg-auto">
                                    <div className="text-center">
                                        <Link href="#" className="btn btn-gradient d-inline-block text-uppercase">
                                            {servicesPageData.hero.badge}
                                        </Link>
                                        <h3 className="ds-3 mt-3 mb-4 text-dark">
                                            {servicesPageData.hero.title.part1}
                                            <span className="text-300">{servicesPageData.hero.title.part2}</span>
                                            {servicesPageData.hero.title.part3}
                                            <span className="text-300">{servicesPageData.hero.title.part4}</span>
                                        </h3>
                                        <p className="text-300 fs-5">
                                            {servicesPageData.hero.description.part1}
                                            <br />
                                            {servicesPageData.hero.description.part2}
                                        </p>
                                    </div>
                                    <div className="card-scroll mt-8">
                                        <div className="cards">
                                            {servicesPageData.servicesList.map((service, index) => (
                                                <div key={service.id} className="card-custom" data-index={index}>
                                                    <div className="card__inner bg-6 px-md-5 py-md-6 px-3 py-4">

                                                        {/* Título y Subtítulo */}
                                                        <div className="card__title d-flex align-items-center mb-md-4 mb-3">
                                                            <Link href={service.link} className="card_title_link">
                                                                <h3 className="fw-semibold mb-2">{service.title}</h3>
                                                                <p className="mb-0">{service.subtitle}</p>
                                                            </Link>
                                                            <Link href={service.link} className="card-icon border text-dark border-dark icon-shape ms-auto icon-md rounded-circle">
                                                                <i className="ri-arrow-right-up-line" />
                                                            </Link>
                                                        </div>

                                                        {/* Imagen con zoom */}
                                                        <div className="card__image-container zoom-img position-relative">
                                                            <img className="card__image" src={service.image} alt={service.title} />
                                                            <Link href={service.link} className="card-image-overlay position-absolute start-0 end-0 w-100 h-100" />
                                                        </div>

                                                        {/* Contenido / Features */}
                                                        <div className="card__content mt-lg-5 mt-md-4 mt-3 pb-4">
                                                            {service.features.map((feature, fIndex) => (
                                                                <div key={fIndex} className="d-md-flex content mb-4">
                                                                    {/* flex-shrink-0 previene que el título se deforme */}
                                                                    <p className="fs-7 text-dark text-uppercase w-md-40 pe-8 mb-2 d-inline-block flex-shrink-0">
                                                                        {feature.name}
                                                                    </p>
                                                                    <p className="card__description text-300 fs-6 mb-0">
                                                                        {feature.description}
                                                                    </p>
                                                                </div>
                                                            ))}
                                                        </div>

                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*Static 1*/}
                    <Static1 />
                    {/* Contact 1*/}
                    <Contact1 />
                </div>
            </Layout>
        </>
    );
}
