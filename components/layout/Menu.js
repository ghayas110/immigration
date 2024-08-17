'use client'
import Link from "next/link";
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Maven_Proior</Link>
            </ul> */}

            <ul className="navigation clearfix">
                <li className="dropdown"><Link href="/">Home</Link>
                   
                </li>
                <li className="dropdown"><Link href="/about-us">About</Link>
                    
                </li>
                 

                <li className="dropdown"><Link href="/countries">Countries</Link>
                    <ul> 
                            
                    <li><Link href="countries-details">United States</Link></li>
                                          <li><Link href="countries-details-2">Germany</Link></li>
                                          <li><Link href="countries-details-3" >Canada</Link></li>
                                          <li><Link href="countries-details-6">Australia</Link></li>  
                        
                    </ul>
                </li>
                <li className="dropdown"><Link href="/visa">Visa</Link>
                  
                </li>
                {/* Projects */}
               
                {/* Blog */}
           
                {/* Contact */}
                <li><Link href="/contact">Contact Us</Link></li>
            </ul>

        </>
    )
}
