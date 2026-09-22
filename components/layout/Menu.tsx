import Link from "next/link"
import { usePathname } from "next/navigation" // usePathname is more suited for client-side path checking
import { headerData } from "@/data/layout/header";

export default function Menu() {
	const pathname = usePathname()

	return (
		<>
			<ul className="navbar-nav me-auto mb-2 mb-lg-0">
				{headerData.navLinks.map((link, index) => (
					<li className="nav-item" key={index}>
						<Link
							href={link.path}
							className={pathname === link.path ? "nav-link active" : "nav-link"}
						>
							{link.name}
						</Link>
					</li>
				))}
			</ul>
			{/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
				<li className="nav-item">
					<Link href="/" className={pathname === "/" ? "nav-link active" : "nav-link"}>
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link href="/services" className={pathname === "/services" ? "nav-link active" : "nav-link"}>
						Services
					</Link>
				</li>
				<li className="nav-item">
					<Link href="/work" className={pathname === "/work" ? "nav-link active" : "nav-link"}>
						Portfolio
					</Link>
				</li>
				<li className="nav-item">
					<Link href="/pricing" className={pathname === "/pricing" ? "nav-link active" : "nav-link"}>
						Pricing
					</Link>
				</li>
				<li className="nav-item">
					<Link href="/blog-list" className={pathname === "/blog-list" ? "nav-link active" : "nav-link"}>
						Blog
					</Link>
				</li>
				<li className="nav-item">
					<Link href="/#contact" className={pathname === "#contact" ? "nav-link active" : "nav-link"}>
						Contact
					</Link>
				</li>
			</ul> */}
		</>
	)
}
