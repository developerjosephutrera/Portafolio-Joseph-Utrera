import Link from "next/link";
import { footerData } from "../../../data/layout/footer";
import { headerData } from "@/data/layout/header";

export default function Footer1() {
    return (
        <>
            <footer>
                <div className="section-footer position-relative pt-60 pb-60 bg-secondary-1">
                    <div className="container position-relative z-1">
                        <div className="text-center">
                            <Link className="d-flex main-logo align-items-center d-inline-flex" href="/">
                                <img src="/assets/imgs/footer-1/logo.svg" alt="infinia" />
                                <span className="fs-4 ms-2 text-white-keep">{footerData.logoText}</span>
                            </Link>
                            <div className="navigation d-none d-md-flex align-items-center justify-content-center flex-wrap gap-4 my-4">
                                {headerData.navLinks.map((link, index) => (
                                    <Link key={index} href={link.path} className="fs-5">
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="row text-center py-4">
                            <span className="fs-6 text-white-keep">
                                {footerData.copyright}
                            </span>
                        </div>
                    </div>
                    <div className="position-absolute top-0 start-0 w-100 h-100 z-0" data-background="assets/imgs/footer-1/background.png " />
                </div>
            </footer>
        </>
    );
}
