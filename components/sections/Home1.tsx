import Link from "next/link"
import { heroData } from "../../data/sections/hero"

export default function Home1() {
	return (
		<>

			<section className="section-hero-1 hero-home position-relative pt-200 pb-120 overflow-hidden">
				<div className="container position-relative z-3">
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<span className="text-dark">{heroData.greeting}</span>
							<h1 className="ds-2 mb-3 hero-title">{heroData.headline}<span className="text-primary-1"> {heroData.headline2}</span></h1>
							<p className="text-300 mb-6">{heroData.description}</p>
							<div className="hero-actions">
								<Link
									href={heroData.buttons.primary.link}
									className="btn btn-gradient hero-action-btn"
									target="_blank"
								>
									{heroData.buttons.primary.label}
									<i className="ri-download-line ms-2" />
								</Link>

								<Link
									href={heroData.buttons.secondary.link}
									className="btn btn-outline-secondary hero-action-btn"
								>
									<span>{heroData.buttons.secondary.label}</span>
									<i className="ri-arrow-right-line ms-2" />
								</Link>
							</div>
							<p className="text-400 mt-6 mb-3">{heroData.experienceText}</p>
							{/* Contenedor con un ancho máximo para forzar el salto de línea elegante */}
							<div className="d-flex flex-wrap gap-3" style={{ maxWidth: "420px" }}>
								{heroData.techIcons.map((icon, index) => (
									<div key={index} className="brand-logo icon-xl icon-shape rounded-3 bg-900" title={icon.name}>
										<img
											src={icon.src}
											alt={`Logo de ${icon.name}`}
											width="36"
											height="36"
											style={{ objectFit: 'contain' }}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="shape-1 position-absolute bottom-0 start-50 z-1 ms-10 d-none d-md-block">
					<img
						className="position-relative z-1"
						src="/assets/imgs/hero/hero-1/man.png"
						alt="Joseph Utrera"
						style={{ maxHeight: "850px", width: "auto" }}
					/>
					<div className="position-absolute top-50 start-0 translate-middle z-0 mt-8 ms-10 ps-8">
						<img className="ribbonRotate" src="/assets/imgs/hero/hero-1/decorate.png" alt="" />
					</div>
				</div>
				<div className="position-absolute top-0 start-0 w-100 h-100 filter-invert" data-background="assets/imgs/hero/hero-1/background.png" />
			</section>

		</>
	)
}
