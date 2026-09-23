"use client";
import Link from "next/link";
import CountUp from "react-countup";
import { skills1Data } from "@/data/sections/skills1";
export default function Skills1() {
    return (
        <>
            <section className="section-skills-1 position-relative section-padding bg-900">
                <div className="container">
                    <div className="row">
                        <div className="text-center mb-7">
                            <h3 className="ds-3 mt-3 mb-3 text-primary-1">{skills1Data.title}</h3>
                            <span className="fs-5 fw-medium text-200">
                                {skills1Data.description}
                            </span>
                        </div>
                        <div className="d-flex flex-wrap flex-lg-nowrap justify-content-center gap-3 mb-7 px-6">
                            <div className="d-flex flex-wrap flex-lg-nowrap justify-content-center gap-3 mb-7 px-6">
                                {skills1Data.mainSkills.map((skill) => (
                                    <div key={skill.id} className="skills">
                                        <div className="skills-icon mb-5">
                                            {/* Aquí cargamos la ruta de tu logo dinámicamente */}
                                            <img src={skill.icon} alt={skill.name} />
                                        </div>
                                        <div className="skills-ratio text-center">
                                            <h3 className="count fw-semibold my-0">
                                                <CountUp className="odometer fw-semibold" enableScrollSpy={true} end={skill.percentage} />%
                                            </h3>
                                            <p className="text-400 fw-medium text-uppercase">{skill.name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-center">
                                <p className="fs-5 text-200 mb-0">{skills1Data.additionalText}</p>
                                <div className="d-flex flex-wrap justify-content-center gap-1">
                                    {skills1Data.additionalSkills.map((tech, index) => (
                                        <Link key={tech.id} href={tech.link} className="fs-5 fw-bold">
                                            {tech.name}{index < skills1Data.additionalSkills.length - 1 ? "," : ""}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
