'use client'
import CountriesSlider from '@/components/slider/CountriesSlider'
import Link from "next/link";
import Layout from "@/components/layout/Layout"
import Countries1 from "@/components/sections/home4/Countries1"
import { useState } from 'react'
import Countries from '@/components/sections/home4/Countries';
import Feature from '@/components/sections/home4/Feature';
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(4)
  const handleOnClick = (index) => {
      setActiveIndex(index)
  }
    const [isOpen, setOpen] = useState(false)
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Countries Overview">
                {/* countries section */}
                <section className="countries-style-four sec-pad">
                <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-48.png)' }}></div>
            
                    <div className="content-box">
                        {/*Theme Carousel*/}
                        <Countries1 />              
                    </div>
                
                </section>
                {/*countries details end*/}
                <Countries />
                {/* countries section */}
                <Feature />
                 {/*countries details end*/}
                {/* countries section */}
           
                 {/*countries details end*/}
                                

                            </Layout>
        </>
    )
}


