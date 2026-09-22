'use client'
import Link from 'next/link'
import { useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { mobileMenuData } from "@/data/layout/menumobile"

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
	return (
		<>
			<div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ${isMobileMenu ? 'sidebar-visible' : ''}`}>
				<div className="mobile-header-wrapper-inner">
					<div className="mobile-header-logo">
						<Link className="d-flex main-logo align-items-center d-inline-flex" href="/">
							<img src="/assets/imgs/footer-1/logo.svg" alt="infinia" />
							<span className="fs-4 ms-2 text-dark">{mobileMenuData.logoText}</span>
						</Link>
						<div className={`burger-icon burger-icon-white border rounded-3 ${isMobileMenu ? 'burger-close' : ''}`} onClick={handleMobileMenu}>
							<span className="burger-icon-top" />
							<span className="burger-icon-mid" />
							<span className="burger-icon-bottom" />
						</div>
					</div>
					<div className="mobile-header-content-area">
						<PerfectScrollbar className="perfect-scroll">
							<div className="mobile-menu-wrap mobile-header-border">
								<nav>
									<ul className="mobile-menu font-heading ps-0">
										{mobileMenuData.navLinks.map((link, index) => (
											<li className="nav-item" key={index}>
												<Link
													className="nav-link"
													href={link.path}
													onClick={handleMobileMenu}
												>
													{link.name}
												</Link>
											</li>
										))}
									</ul>
								</nav>
								{/* Íconos de redes sociales en el menú móvil */}
								<div className="mt-5 pt-4 border-top">
									<p className="text-400 fs-6 mb-3">Sígueme en:</p>
									<div className="d-flex gap-4">
										{mobileMenuData.socialLinks.map((social, index) => (
											<Link key={index} href={social.url} target="_blank" rel="noopener noreferrer" title={social.platform}>
												<i className={`${social.icon} fs-4`} />
											</Link>
										))}
									</div>
								</div>
							</div>
						</PerfectScrollbar>
					</div>
				</div>
			</div>
		</>
	)
}
