'use client'
import Link from "next/link";
import { useState } from "react";

export default function Countries() {
    const [activeIndex, setActiveIndex] = useState(4);
    const handleOnClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <section className="countries-style-three alternat-2 sec-pad">
            <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-63.png)' }}></div>
            <div className="auto-container">
                <div className="sec-title mb_60 centred">
                    <span className="sub-title">Countries We Serve</span>
                    <h2>Immigration Services Tailored to Each Country's <br />Unique Requirements</h2>
                </div>
                <div className="tabs-box">
                    <div className="tab-btn-box mb_50">
                        <div className="tab-btns tab-buttons" role="tablist">
                            <div className="row clearfix">
                                <div className="col-lg-3 col-md-6 col-sm-12 btn-column">
                                    <div className="nav-link" onClick={() => handleOnClick(4)}>
                                        <div className={activeIndex == 4 ? "tab-btn active" : "tab-btn"}>
                                            <h3><i className="icon-33"></i> EB2 NIW</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 btn-column">
                                    <div className="nav-item" onClick={() => handleOnClick(5)}>
                                        <div className={activeIndex == 5 ? "tab-btn active" : "tab-btn"}>
                                            <h3><i className="icon-34"></i> Immigration</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 btn-column">
                                    <div className="nav-item" onClick={() => handleOnClick(6)}>
                                        <div className={activeIndex == 6 ? "tab-btn active" : "tab-btn"}>
                                            <h3><i className="icon-14"></i> Business</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 btn-column">
                                    <div className="nav-item" onClick={() => handleOnClick(7)}>
                                        <div className={activeIndex == 7 ? "tab-btn active" : "tab-btn"}>
                                            <h3><i className="icon-17"></i> Tourist</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                        {/* EB2 NIW */}
                        <div className={activeIndex == 4 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <div className="row clearfix">
                                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                    <div className="countries-block-four">
                                        <div className="inner-box">
                                            <div className="flag"><img src="assets/images/icons/flag-6.png" alt="USA Flag" /></div>
                                            <h3><Link href="index-3">United States</Link></h3>
                                            <p>The EB-2 NIW visa provides permanent residency for those with advanced degrees or exceptional abilities.</p>
                                            <div className="text">Visa Type:</div>
                                            <span className="designation">EB2 NIW, Permanent Residency</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                    <div className="countries-block-four">
                                        <div className="inner-box">
                                            <div className="flag"><img src="assets/images/icons/flag-8.png" alt="Germany Flag" /></div>
                                            <h3><Link href="index-3">Germany</Link></h3>
                                            <p>Germany offers a highly-skilled migrant visa, perfect for professionals looking to advance their careers.</p>
                                            <div className="text">Visa Type:</div>
                                            <span className="designation">Highly-Skilled Worker Visa</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                    <div className="countries-block-four">
                                        <div className="inner-box">
                                            <div className="flag"><img src="assets/images/icons/flag-15.png" alt="Canada Flag" /></div>
                                            <h3><Link href="index-3">Canada</Link></h3>
                                            <p>Canada’s Express Entry system allows skilled workers to obtain permanent residency quickly.</p>
                                            <div className="text">Visa Type:</div>
                                            <span className="designation">Express Entry, PR Visa</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                    <div className="countries-block-four">
                                        <div className="inner-box">
                                            <div className="flag"><img src="assets/images/icons/flag-11.png" alt="Australia Flag" /></div>
                                            <h3><Link href="index-3">Australia</Link></h3>
                                            <p>Australia offers a variety of skilled worker visas for those looking to live and work in the country.</p>
                                            <div className="text">Visa Type:</div>
                                            <span className="designation">Skilled Worker Visa, Permanent Residency</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Immigration */}
                        <div className={activeIndex == 5 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <div className="row clearfix">
                                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                    <div className="countries-block-four">
                                        <div className="inner-box">
                                            <div className="flag"><img src="assets/images/icons/flag-6.png" alt="USA Flag" /></div>
                                            <h3><Link href="index-3">United States</Link></h3>
                                            <p>Permanent Residency options available for skilled workers and family-sponsored immigrants.</p>
                                            <div className="text">Visa Type:</div>
                                            <span className="designation">Green Card, Family Visa</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                    <div className="countries-block-four">
                                        <div className="inner-box">
                                            <div className="flag"><img src="assets/images/icons/flag-8.png" alt="Germany Flag" /></div>
                                            <h3><Link href="index-3">Germany</Link></h3>
                                            <p>Germany offers a range of visas including family reunification and employment-based immigration.</p>
                                            <div className="text">Visa Type:</div>
                                            <span className="designation">Family Visa, Employment Visa</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                    <div className="countries-block-four">
                                        <div className="inner-box">
                                            <div className="flag"><img src="assets/images/icons/flag-15.png" alt="Canada Flag" /></div>
                                            <h3><Link href="index-3">Canada</Link></h3>
                                            <p>Canada's immigration pathways include family sponsorship, skilled immigration, and provincial programs.</p>
                                            <div className="text">Visa Type:</div>
                                            <span className="designation">Family Visa, Skilled Worker Visa</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                    <div className="countries-block-four">
                                        <div className="inner-box">
                                            <div className="flag"><img src="assets/images/icons/flag-11.png" alt="Australia Flag" /></div>
                                            <h3><Link href="index-3">Australia</Link></h3>
                                            <p>Australia offers permanent residency through skilled migration and family sponsorship programs.</p>
                                            <div className="text">Visa Type:</div>
                                            <span className="designation">Skilled Migration, Family Visa</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Business */}
                        <div className={activeIndex == 6 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <div className="row clearfix">
                                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                    <div className="countries-block-four">
                                        <div className="inner-box">
                                            <div className="flag"><img src="assets/images/icons/flag-6.png" alt="USA Flag" /></div>
                                            <h3><Link href="index-3">United States</Link></h3>
                                            <p>The U.S. offers business visas for investors and entrepreneurs, including the E-2 visa and L-1 visa.</p>
                                            <div className="text">Visa Type:</div>
                                            <span className="designation">E-2 Visa, L-1 Visa</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                    <div className="countries-block-four">
                                        <div className="inner-box">
                                            <div className="flag"><img src="assets/images/icons/flag-8.png" alt="Germany Flag" /></div>
                                            <h3><Link href="index-3">Germany</Link></h3>
                                            <p>Germany's business immigration programs include visas for self-employed professionals and entrepreneurs.</p>
                                            <div className="text">Visa Type:</div>
                                            <span className="designation">Business Visa, Entrepreneur Visa</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                    <div className="countries-block-four">
                                        <div className="inner-box">
                                            <div className="flag"><img src="assets/images/icons/flag-15.png" alt="Canada Flag" /></div>
                                            <h3><Link href="index-3">Canada</Link></h3>
                                            <p>Canada offers business immigration options including the Startup Visa and Provincial Nominee Programs for entrepreneurs.</p>
                                            <div className="text">Visa Type:</div>
                                            <span className="designation">Startup Visa, Entrepreneur Visa</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                    <div className="countries-block-four">
                                        <div className="inner-box">
                                            <div className="flag"><img src="assets/images/icons/flag-11.png" alt="Australia Flag" /></div>
                                            <h3><Link href="index-3">Australia</Link></h3>
                                            <p>Australia offers business migration visas for investors and entrepreneurs, including the Business Innovation and Investment visa.</p>
                                            <div className="text">Visa Type:</div>
                                            <span className="designation">Investor Visa, Entrepreneur Visa</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tourist */}
                        <div className={activeIndex == 7 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <div className="row clearfix">
                                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                    <div className="countries-block-four">
                                        <div className="inner-box">
                                            <div className="flag"><img src="assets/images/icons/flag-6.png" alt="USA Flag" /></div>
                                            <h3><Link href="index-3">United States</Link></h3>
                                            <p>The U.S. offers tourist visas (B-1/B-2) for short-term visits for business or leisure.</p>
                                            <div className="text">Visa Type:</div>
                                            <span className="designation">Tourist Visa (B-1/B-2)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                    <div className="countries-block-four">
                                        <div className="inner-box">
                                            <div className="flag"><img src="assets/images/icons/flag-8.png" alt="Germany Flag" /></div>
                                            <h3><Link href="index-3">Germany</Link></h3>
                                            <p>Germany offers Schengen visas for short-term travel within the Schengen Area for tourism or business.</p>
                                            <div className="text">Visa Type:</div>
                                            <span className="designation">Schengen Visa</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                    <div className="countries-block-four">
                                        <div className="inner-box">
                                            <div className="flag"><img src="assets/images/icons/flag-15.png" alt="Canada Flag" /></div>
                                            <h3><Link href="index-3">Canada</Link></h3>
                                            <p>Canada offers temporary resident visas (TRV) for visitors, including tourism and family visits.</p>
                                            <div className="text">Visa Type:</div>
                                            <span className="designation">Temporary Resident Visa (TRV)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 countries-block">
                                    <div className="countries-block-four">
                                        <div className="inner-box">
                                            <div className="flag"><img src="assets/images/icons/flag-11.png" alt="Australia Flag" /></div>
                                            <h3><Link href="index-3">Australia</Link></h3>
                                            <p>Australia offers visitor visas for short-term travel, tourism, and family visits.</p>
                                            <div className="text">Visa Type:</div>
                                            <span className="designation">Visitor Visa</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
