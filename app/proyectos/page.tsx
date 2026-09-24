import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { projectsPageData } from "@/data/proyectos/page";
import Static1 from "@/components/sections/Static1";
import Contact1 from "@/components/sections/Contact1";

export default function Work() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <section className="section-work pt-120 pb-150">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 mx-lg-auto">
                                    <div className="text-center">
                                        <Link href="#" className="btn btn-gradient d-inline-block text-uppercase">
                                            {projectsPageData.hero.badge}
                                        </Link>
                                        <h3 className="ds-3 mt-3 mb-4 text-dark">
                                            {projectsPageData.hero.title.part1} <span className="text-300">{projectsPageData.hero.title.part2} </span> {projectsPageData.hero.title.part3} <span className="text-300">{projectsPageData.hero.title.part4}</span> {projectsPageData.hero.title.part5}
                                        </h3>
                                        <p className="text-300 fs-5">
                                            {projectsPageData.hero.description.part1} <br />{projectsPageData.hero.description.part2}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="card-scroll mt-8">
                                    <div className="cards">
                                        {projectsPageData.projectsList.map((project, index) => (
                                            <div
                                                key={project.id}
                                                className="card-custom"
                                                data-index={index}
                                            >
                                                <div className="card__inner bg-6 p-lg-6 p-md-4 p-3">
                                                    <div className="card__image-container zoom-img position-relative">
                                                        <img
                                                            className="card__image"
                                                            src={project.image}
                                                            alt={project.title}
                                                        />

                                                        <Link
                                                            href={project.link}
                                                            aria-label={`Ver detalles de ${project.title}`}
                                                            className="card-image-overlay position-absolute start-0 end-0 w-100 h-100"
                                                        />
                                                    </div>

                                                    <div className="card__content px-md-4 px-3">
                                                        <div className="card__title d-md-flex align-items-center mb-0 mb-lg-2">
                                                            <Link
                                                                href={project.link}
                                                                className="card_title_link"
                                                            >
                                                                <p className="text-primary-1 mb-0 mb-md-2">
                                                                    {project.category}
                                                                </p>

                                                                <h3 className="fw-semibold">
                                                                    {project.title}
                                                                </h3>
                                                            </Link>

                                                            <Link
                                                                href={project.link}
                                                                aria-label={`Ver detalles de ${project.title}`}
                                                                className="card-icon d-none d-md-inline-flex border text-dark border-dark icon-shape ms-auto icon-md rounded-circle"
                                                            >
                                                                <i className="ri-arrow-right-up-line" />
                                                            </Link>
                                                        </div>

                                                        <p className="text-300 mb-lg-auto mb-md-4 mb-3">
                                                            {project.description}
                                                        </p>

                                                        <div className="d-md-flex content">
                                                            <p className="mb-0 fs-7 text-dark text-uppercase w-40">
                                                                Cliente
                                                            </p>

                                                            <p className="mb-0 card__description text-300 fs-6">
                                                                {project.client}
                                                            </p>
                                                        </div>

                                                        <div className="d-md-flex content">
                                                            <p className="mb-0 fs-7 text-dark text-uppercase w-40">
                                                                Participación
                                                            </p>

                                                            <p className="mb-0 card__description text-300 fs-6">
                                                                {project.role}
                                                            </p>
                                                        </div>

                                                        <div className="d-md-flex content">
                                                            <p className="mb-0 fs-7 text-dark text-uppercase w-40">
                                                                Tecnologías
                                                            </p>

                                                            <p className="mb-0 card__description text-300 fs-6">
                                                                {project.tools}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
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
