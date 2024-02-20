import TemplateHead from '@/components/Template'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <TemplateHead>
      <Component {...pageProps} />
    </TemplateHead>
  )
}
