import TemplateNavbar from '@/components/TemplateNavbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
    return (
        <TemplateNavbar>
            <Component {...pageProps} />
        </TemplateNavbar>
    )
}
