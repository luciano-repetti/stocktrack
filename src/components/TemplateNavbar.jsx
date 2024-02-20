import Header from '@/components/Header'
import Nav from '@/components/Nav'
import styles from '@/styles/modules/Template.module.css'

export default function TemplateHead({ children }) {

    return (
        <main className={styles.main_navBar}>
            <Header />
            <Nav />
            <main className={styles.main}>
                {children}
            </main>
        </main>
    )
}