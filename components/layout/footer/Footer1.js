'use client'
import Link from "next/link";

export default function Footer1() {
    return (
        <>
            <footer className="main-footer" id="footer">
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-25.png)" }}></div>
                <div className="auto-container">
                    <div className="widget-section">
                        <div className="row clearfix">
                            {/* Footer Logo and Contact Information */}
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget logo-widget">
                                    <figure className="footer-logo">
                                        <Link href="/"><img src="assets/images/footer-logo.png" alt="Footer Logo" /></Link>
                                    </figure>
                                    <div className="text mb_25">
                                        <p>Your trusted partner in immigration and consultancy services, helping clients achieve their dreams of relocating overseas.</p>
                                    </div>
                                    <ul className="info clearfix mb_30">
                                        <li><i className="icon-29"></i><Link href="tel:+923179650314">+92 317 9650314</Link></li>
                                        <li><i className="icon-1"></i><Link href="mailto:support@ahiraf.com">support@ahiraf.com</Link></li>
                                        <li><i className="icon-2"></i>Office No. 301, Building No. 56-B Commercial Area A, DHA Phase 2</li>
                                        <li><i className="icon-2"></i>Opening Hours: Mon - Sat: 10 AM - 6 PM</li>
                                    </ul>
                                    <ul className="social-links clearfix">
                                        <li><Link href="/"><i className="icon-4"></i></Link></li>
                                        <li><Link href="/"><i className="icon-5"></i></Link></li>
                                        <li><Link href="/"><i className="icon-6"></i></Link></li>
                                        <li><Link href="/"><i className="icon-7"></i></Link></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Explore Links */}
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget links-widget">
                                    <div className="widget-title">
                                        <h3>Explore</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                        <li><Link href="countries-details">United States</Link></li>
                                            <li><Link href="countries-details-2">Germany</Link></li>
                                            <li><Link href="countries-details-3">Canada</Link></li>
                                     
                                            <li><Link href="countries-details-6" className="current">Australia</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Useful Links */}
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget links-widget">
                                    <div className="widget-title">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                        <li className="dropdown"><Link href="/">Home</Link>
                   
                   </li>
                   <li className="dropdown"><Link href="/about-us">About</Link>
                       
                   </li>

                                                <li className="dropdown"><Link href="/countries">Countries</Link></li>
                                                <li className="dropdown"><Link href="/visa">Visa</Link>
                  
                  </li>
                  {/* Projects */}
                 
                  {/* Blog */}
             
                  {/* Contact */}
                  <li><Link href="/contact">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Projects Gallery */}
                           
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="copyright">
                            <p>Copyright By &copy; <Link href="/">Ahiraf</Link> - 2024</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
