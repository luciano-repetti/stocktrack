import Header from '@/components/Header'
import Nav from '@/components/Nav'
import styles from '@/styles/modules/TemplateHead.module.css'

export default function TemplateHead({ children }) {

    return (
        <main className={styles.main_body}>
            <Header />
            <Nav />
            <main className={styles.main}>
                {children}
            </main>
        </main>
    )
}