"use client";
import { useState } from "react";
import Link from "next/link";
import { resume1Data } from "../../data/sections/resume1";

export default function Resume1() {
    // Estado para controlar si se muestran todos los cursos o solo los primeros 4
    const [showAllEducation, setShowAllEducation] = useState(false);

    // Variable que determina qué elementos renderizar basándose en el estado
    const displayedEducation = showAllEducation 
        ? resume1Data.education 
        : resume1Data.education.slice(0, 5); // Muestra solo los primeros 5 elementos si showAllEducation es false

    return (
        <>
            <section id="resume" className="section-resume-1 position-relative pt-150 overflow-hidden" data-background="/assets/imgs/projects/projects-1/background.png">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-7 me-auto">
                            <h3 className="ds-3 mt-3 mb-3 text-primary-1">{resume1Data.title}</h3>
                            <span className="fs-5 fw-medium text-200">
                                {resume1Data.subtitle}
                            </span>
                        </div>
                        <div className="col-lg-auto">
                            <Link href={resume1Data.topButtonLink} className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto">
                                {resume1Data.topButtonText}
                                <i className="ri-arrow-right-up-line" />
                            </Link>
                        </div>
                    </div>
                    
                    <div className="row mt-6">
                        {/* COLUMNA EDUCACIÓN */}
                        <div className="col-lg-6 col-12">
                            <div className="resume-card p-lg-6 p-4 mb-lg-0 mb-6 h-100">
                                <div className="resume-card-header d-flex align-items-end">
                                    <img className="border-linear-1 border-3 pb-2 pe-2" src="/assets/imgs/resume/resume-1/icon-1.svg" alt="Education Icon" />
                                    <h3 className="fw-semibold mb-0 border-bottom border-600 border-3 pb-2 w-100">Educación</h3>
                                </div>
                                <div className="resume-card-body">
                                    {/* Mapeamos 'displayedEducation' en lugar del arreglo completo */}
                                    {displayedEducation.map((item) => (
                                        <div key={item.id} className="resume-card-item px-4 py-3 mt-5">
                                            <div className="d-flex align-items-end">
                                                <div>
                                                    <p className="fw-extra-bold text-linear-1 mb-2">{item.date}</p>
                                                    <h5>{item.title}</h5>
                                                    <p className="text-300 mb-0">{item.institution}</p>
                                                </div>
                                                <h3 className="text-linear-1 ms-auto fw-semibold">
                                                    {item.score.includes("/") ? (
                                                        <>
                                                            {item.score.split("/")[0]}
                                                            <span className="fs-4 fw-bold">/5</span>
                                                        </>
                                                    ) : (
                                                        <span className="fs-6 fw-bold">{item.score}</span>
                                                    )}
                                                </h3>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Botón para Desplegar más / Ver menos */}
                                    {resume1Data.education.length > 5 && (
                                        <div className="text-center mt-5">
                                            <button 
                                                onClick={() => setShowAllEducation(!showAllEducation)}
                                                className="text-primary-1 fw-bold bg-transparent border-0 p-0 fs-6"
                                                style={{ cursor: "pointer", transition: "all 0.3s ease" }}
                                            >
                                                {showAllEducation ? "− Ver menos" : "+ Desplegar más"}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* COLUMNA EXPERIENCIA */}
                        <div className="col-lg-6 col-12">
                            <div className="resume-card p-lg-6 p-4 h-100">
                                <div className="resume-card-header d-flex align-items-end">
                                    <img className="border-linear-1 border-3 pb-2 pe-2" src="/assets/imgs/resume/resume-1/icon-2.svg" alt="Experience Icon" />
                                    <h3 className="fw-semibold mb-0 border-bottom border-600 border-3 pb-2 w-100">Experiencia</h3>
                                </div>
                                <div className="resume-card-body">
                                    {resume1Data.experience.map((item) => (
                                        <div key={item.id} className="resume-card-item px-4 py-3 mt-5">
                                            <p className="fw-extra-bold text-linear-1 mb-2">{item.date}</p>
                                            <h5>{item.title}</h5>
                                            <p className="text-300 mb-2">{item.company}</p>
                                            <p className="text-400 fs-7 mb-0">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MARCA DE AGUA (WATERMARK) */}
                <div className="scroll-move-right position-relative pb-160 pt-lg-150">
                    <div className="d-flex align-items-center gap-5 wow img-custom-anim-top position-absolute top-50 start-50 translate-middle">
                        <h3 className="stroke fs-150 text-uppercase text-white">{resume1Data.watermark}</h3>
                    </div>
                </div>
            </section>
        </>
    )
}