import Link from "next/link";
import { servicesData } from "../../data/sections/services1";

export default function Service1() {
    return (
        <>
            <section className="section-service-1 pt-120 pb-120">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-7 me-auto">
                            <h3 className="ds-3 mt-3 mb-3 text-primary-1">{servicesData.title}</h3>
                            <span className="fs-5 fw-medium text-200">
                                {servicesData.subtitle}
                            </span>
                        </div>
                        <div className="col-lg-auto">
                            <Link href={servicesData.buttonLink} className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto">
                                {servicesData.buttonText}
                                <i className="ri-arrow-right-up-line" />
                            </Link>
                        </div>
                    </div>
                    <div className="row mt-6 justify-content-between">
                        {servicesData.items.map((item, index) => (
                            <div className="col-12" key={index}>
                                <div
                                    className={`single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3 ${index === servicesData.items.length - 1 ? 'border-bottom' : ''}`}
                                    data-fx={1}
                                    data-img={item.image}
                                >
                                    <div className="service-card-details d-lg-flex align-items-center">
                                        <h3 className="service-card-title w-lg-50 w-100 mb-0">
                                            <Link href={item.link}>
                                                <span className="service-number">{item.id}.</span>
                                                {item.title}
                                            </Link>
                                        </h3>
                                        <Link href={item.link} className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
                                            <p className="service-card-text my-3">
                                                {item.description}
                                            </p>
                                            <div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border flex-shrink-0">
                                                <i className="ri-arrow-right-up-line" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
