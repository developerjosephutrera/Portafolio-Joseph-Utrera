'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import { projects1Data } from "../../data/sections/projects1";

export default function PortfolioFilter() {
	// Isotope
	const isotope = useRef<Isotope | null>(null)
	const [filterKey, setFilterKey] = useState<string>("*")

	useEffect(() => {
		const timeout = setTimeout(() => {
			isotope.current = new Isotope(".masonry-active", {
				itemSelector: ".filter-item",
				percentPosition: true,
				layoutMode: "fitRows",
			})
		}, 1000)

		return () => {
			clearTimeout(timeout)

			if (isotope.current) {
				isotope.current.destroy()
				isotope.current = null
			}
		}
	}, [])

	useEffect(() => {
		if (isotope.current) {
			isotope.current.arrange({ filter: filterKey === "*" ? "*" : `.${filterKey}` })
		}
	}, [filterKey])

	const handleFilterKeyChange = useCallback((key: string) => () => {
		setFilterKey(key)
	}, [])

	const activeBtn = (value: string) => (value === filterKey ? "active btn btn-md btn-filter mb-2 me-2 text-uppercase" : "btn btn-md btn-filter mb-2 me-2 text-uppercase")

	return (
		<>

			<div className="container">
				<div className="text-start">
					<div className="button-group filter-button-group filter-menu-active">
						{projects1Data.categories.map((category, index) => {
							// Isotope espera el valor sin el punto para el estado interno, excepto para el "*"
							const filterValue = category.filterClass === "*" ? "*" : category.filterClass.replace(".", "");

							return (
								<button
									key={index}
									className={activeBtn(filterValue)}
									onClick={handleFilterKeyChange(filterValue)}
								>
									{category.name}
								</button>
							);
						})}
					</div>
				</div>
				<div className="row masonry-active justify-content-between mt-6">
					{projects1Data.items.map((item) => (
						<div
							key={item.id}
							className={`filter-item col-lg-6 col-12 ${item.categoryClass}`}
						>
							<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">

								<Link
									href={item.link}
									className="project-card-image d-block rounded-3 overflow-hidden"
								>
									<img
										className="w-100 h-100 zoom-img"
										src={item.image}
										alt={item.title}
									/>
								</Link>

								<div className="d-flex align-items-center mt-4">

									<Link
										href={item.link}
										className="project-card-content"
									>
										<h3 className="fw-semibold">{item.title}</h3>
										<p>{item.client}</p>
									</Link>

									<Link
										href={item.link}
										className="project-card-icon icon-shape ms-auto icon-md rounded-circle"
									>
										<i className="ri-arrow-right-up-line" />
									</Link>

								</div>

							</div>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
