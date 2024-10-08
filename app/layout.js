import "@/node_modules/react-modal-video/css/modal-video.css"
import "../public/assets/css/font-awesome-all.css"
import "../public/assets/css/bootstrap.css"
import "../public/assets/css/style.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { heebo, maven_pro } from '@/lib/font'
export const metadata = {
    title: 'Ahiraf Conssultant',
    description: 'Your trusted partner in immigration and consultancy services',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${maven_pro.variable} ${heebo.variable}`}>
            <body>{children}</body>
        </html>
    )
}
