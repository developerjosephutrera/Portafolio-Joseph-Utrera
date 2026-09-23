import Link from "next/link"
import { contact1Data } from "../../data/sections/contact1"

export default function Contact1() {
	return (
		<>

			<section id="contact" className="section-contact-1 bg-900 position-relative pt-150 pb-lg-250 pb-150 overflow-hidden">
				<div className="container position-relative z-1">
					<h3 className="ds-3 mt-3 mb-3 text-primary-1">{contact1Data.title}</h3>
					<span className="fs-5 fw-medium text-200">
						{contact1Data.subtitle1}
						<br />
						{contact1Data.subtitle2}
					</span>
					<div className="row mt-8">
						<div className="col-lg-4 d-flex flex-column">
							{/* Mapeo dinámico de la información de contacto */}
							{contact1Data.contactInfo.map((info) => (
								<div key={info.id} className="d-flex align-items-center mb-4 position-relative d-inline-flex">
									{/* Agregamos flex-shrink-0 al contenedor del ícono para evitar que se deforme */}
									<div className="bg-white icon-flip position-relative icon-shape icon-xxl border-linear-2 border-2 rounded-4 flex-shrink-0">
										<i className={`${info.icon} text-primary-1 fs-26`} />
									</div>
									{/* Agregamos text-break por si la pantalla del móvil es muy pequeña y el correo no cabe */}
									<div className="ps-3 text-break">
										<span className="text-400 fs-5">{info.label}</span>
										<h6 className="mb-0">{info.value}</h6>
									</div>
									{/* Renderizamos el enlace SOLO si info.link existe */}
									{info.link && (
										<Link
											href={info.link}
											className="position-absolute top-0 start-0 w-100 h-100"
											target={info.link.startsWith('http') ? "_blank" : "_self"}
										/>
									)}
								</div>
							))}
						</div>

						<div className="col-lg-7 offset-lg-1 ps-lg-0 pt-5 pt-lg-0">
							<div className="position-relative">
								<div className="position-relative z-2">
									<h3>{contact1Data.form.title}</h3>

									{/* Integración con Formspree (método POST requerido) */}
									<form action="https://formspree.io/f/mjykrzgb" method="POST">
										<div className="row mt-3">
											<div className="col-md-6 ">
												<label className="mb-1 mt-3 text-dark" htmlFor="name">{contact1Data.form.nameLabel}</label>
												{/* El atributo name="" es vital para que Formspree capture el dato */}
												<input type="text" className="form-control border rounded-3" id="name" name="name" placeholder={contact1Data.form.namePlaceholder} required />
											</div>
											<div className="col-md-6">
												<label className="mb-1 mt-3 text-dark" htmlFor="email">{contact1Data.form.emailLabel}</label>
												<input type="email" className="form-control border rounded-3" id="email" name="email" placeholder={contact1Data.form.emailPlaceholder} required />
											</div>
											<div className="col-md-6">
												<label className="mb-1 mt-3 text-dark" htmlFor="phone">{contact1Data.form.phoneLabel}</label>
												<input type="text" className="form-control border rounded-3" id="phone" name="phone" placeholder={contact1Data.form.phonePlaceholder} />
											</div>
											<div className="col-md-6">
												<label className="mb-1 mt-3 text-dark" htmlFor="subject">{contact1Data.form.subjectLabel}</label>
												<input type="text" className="form-control border rounded-3" id="subject" name="subject" placeholder={contact1Data.form.subjectPlaceholder} required />
											</div>
											<div className="col-12">
												<label className="mb-1 mt-3 text-dark" htmlFor="message">{contact1Data.form.messageLabel}</label>
												<textarea className="form-control border rounded-3 pb-10" id="message" name="message" placeholder={contact1Data.form.messagePlaceholder} required />
											</div>
											<div className="col-12">
												<button type="submit" className="btn btn-gradient mt-3">
													{contact1Data.form.buttonText}
													<i className="ri-arrow-right-up-line" />
												</button>
											</div>
										</div>
									</form>
								</div>
								<div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
							</div>
						</div>
					</div>
				</div>
				<div className="scroll-move-right position-absolute bottom-0 start-50 translate-middle-x bg-900 overflow-hidden">
					<div className="wow img-custom-anim-top">
						<h3 className="stroke fs-280 text-lowercase text-900 mb-0 lh-1">{contact1Data.watermark}</h3>
					</div>
				</div>
			</section>
		</>
	)
}