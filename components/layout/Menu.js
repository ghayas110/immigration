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
                <ul> 
                            
                         
                                                  <li><Link href="visa-details">Australia SubClass 189</Link></li>
                                                  <li><Link href="visa-details-2" >Australia SubClass 199</Link></li>
                                                  <li><Link href="visa-details-3">Australia SubClass 491</Link></li>  
                                                  <li><Link href="visa-details-4">E2 Treaty Visa</Link></li>
                                                  <li><Link href="visa-details-5">EB1 A </Link></li>
                                                  <li><Link href="visa-details-6">EB2 NIW </Link></li>
                                                  <li><Link href="visa-details-7">UK Innovator Visa </Link></li>
                                                  <li><Link href="visa-details-8" >Canada Express Entry </Link></li>
                                                  <li><Link href="visa-details-9" >Canada Provincial Nominee Program </Link></li>

                                
                            </ul>
                </li>
                {/* Projects */}
               
                {/* Blog */}
           
                {/* Contact */}
                <li><Link href="/contact">Contact Us</Link></li>
            </ul>

        </>
    )
}
