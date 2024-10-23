import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home1/Banner"
import Feature from "@/components/sections/home4/Feature"
import About from "@/components/sections/home2/About"
import Countries from "@/components/sections/home4/Countries"
import Skills from "@/components/sections/home4/Skills"
import Countries1 from "@/components/sections/home4/Countries1"
import Team from "@/components/sections/home4/Team"
import Education from "@/components/sections/home4/Education"
import News from "@/components/sections/home4/News"
import Dream from "@/components/sections/home3/Dream"
import Coaching from "@/components/sections/home3/Coaching"
export default function Home() {
    return (
        <Layout headerStyle={1} footerStyle={1}>
            <Banner />
            <Feature />
            <About />
            <Coaching/>
            <Countries />
            <Skills />
            <Countries1 />
      
            <News />
        <Dream/>
        </Layout>

    )
}