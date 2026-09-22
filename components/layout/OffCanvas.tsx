import Link from 'next/link'
import { offCanvasData } from '@/data/layout/offCanvas'

export default function OffCanvas({ isOffCanvas, handleOffCanvas }: any) {
	return (
		<>
			{/* offCanvas-menu */}
			<div className={`offCanvas__info ${isOffCanvas ? 'active' : ''}`}>
				<div className="offCanvas__close-icon menu-close" onClick={handleOffCanvas}>
					<button><i className="ri-close-line" /></button>
				</div>
				<div className="offCanvas__logo mb-5">
					<h3 className="mb-0">{offCanvasData.title}</h3>
				</div>
				<div className="offCanvas__side-info mb-30">
					<div className="contact-list mb-30">
						<p className="fs-6 fw-medium text-200 mb-5">{offCanvasData.description}</p>
						{offCanvasData.contactInfo.map((info, index) => (
							<div className="mb-3" key={index}>
								<span className="text-400 fs-5">{info.label}</span>
								{info.href ? (
									<p className="mb-0">
										<a href={info.href} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
											{info.value}
										</a>
									</p>
								) : (
									<p className="mb-0">{info.value}</p>
								)}
							</div>
						))}
					</div>
					<div className="contact-list">
						<div className="d-md-flex d-none gap-3">
							<div className="contact-list">
								<p className="text-400 fs-5 mb-2">Redes Sociales</p>
								<div className="d-flex gap-3">
									{offCanvasData.socialLinks.map((social, index) => (
										<Link key={index} href={social.url} target="_blank" rel="noopener noreferrer" title={social.platform}>
											<i className={`${social.icon} fs-18`} />
										</Link>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={`offCanvas__overly ${isOffCanvas ? 'active' : ''}`} onClick={handleOffCanvas} />
		</>
	)
}
