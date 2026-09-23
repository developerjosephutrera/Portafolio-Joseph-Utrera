import Link from "next/link";
import { blog1Data } from "../../data/sections/blog1";

export default function Blog1() {
    return (
        <>
            <section className="section-blog-1 position-relative pt-120 pb-120">
                <div className="container">

                    {/* Encabezado */}
                    <div className="row align-items-end">
                        <div className="col-lg-7 me-auto">
                            <h3 className="ds-3 mt-3 mb-3 text-primary-1">
                                {blog1Data.title}
                            </h3>

                            <span className="fs-5 fw-medium text-200">
                                {blog1Data.subtitle}
                            </span>
                        </div>

                        <div className="col-lg-auto">
                            <Link
                                href={blog1Data.buttonLink}
                                className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto"
                            >
                                {blog1Data.buttonText}
                                <i className="ri-arrow-right-up-line ms-1" />
                            </Link>
                        </div>
                    </div>

                    {/* Blog cards */}
                    <div className="row mt-8">
                        {blog1Data.posts.map((post) => (
                            <div
                                key={post.id}
                                className="col-lg-4 col-md-6"
                            >
                                <div className="blog-card rounded-4 mb-lg-3 mb-md-5 mb-5">

                                    {/* Imagen */}
                                    <div className="blog-card__image position-relative">
                                        <div className="zoom-img rounded-3 overflow-hidden position-relative">

                                            <img
                                                className="w-100"
                                                src={post.image}
                                                alt={post.title}
                                            />

                                            {/* Categoría */}
                                            <Link
                                                className="position-absolute bottom-0 start-0 m-3 text-white-keep btn btn-gradient fw-medium rounded-3 px-3 py-2"
                                                href={post.link}
                                            >
                                                {post.category}
                                            </Link>

                                            {/* Botón central */}
                                            <Link
                                                href={post.link}
                                                className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape bg-linear-1 rounded-circle"
                                                aria-label={`Ver ${post.title}`}
                                            >
                                                <i className="ri-arrow-right-up-line text-dark" />
                                            </Link>

                                        </div>
                                    </div>

                                    {/* Contenido */}
                                    <div className="blog-card__content position-relative text-center mt-4">

                                        <span className="blog-card__date fs-7">
                                            {post.date} • {post.readTime}
                                        </span>

                                        <h5 className="blog-card__title">
                                            {post.title}
                                        </h5>

                                        <Link
                                            href={post.link}
                                            className="link-overlay position-absolute top-0 start-0 w-100 h-100"
                                            aria-label={`Leer ${post.title}`}
                                        />
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