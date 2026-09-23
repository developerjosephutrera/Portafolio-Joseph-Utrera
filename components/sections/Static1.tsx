'use client'
import CountUp from 'react-countup'
import { staticData } from '@/data/sections/static1'

export default function Static1() {
	return (
		<>

			<div className="section-static-1 position-relative overflow-hidden z-0 py-8 bg-900">
				<div className="container">
					<div className="inner">
						<div className="row align-items-center justify-content-between">
							{staticData.map((stat, index) => (
								<div className="col-lg-auto col-md-6" key={index}>
									<div className="counter-item-cover counter-item">
										<div className="content text-center mx-auto d-flex align-items-center">
											<span className="ds-3 count text-primary-1 fw-medium my-0">
												{stat.prefix}
												<CountUp enableScrollSpy={true} end={stat.value} className="odometer ds-1 text-dark fw-semibold" />
											</span>
											<div className="text-start ms-2">
												<p className="fs-5 mb-0 text-300">{stat.titleLight}</p>
												<p className="fs-5 mb-0 fw-bold">{stat.titleBold}</p>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
