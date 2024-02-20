import styles from '@/styles/modules/Template.module.css'

export default function TemplateBody({ namePage, children }) {

    return (
        <main className={styles.main_body}>
            <h3 className={styles.name_page} style={{ textTransform: "uppercase" }}>{namePage}</h3>
            <article className={styles.container_content}>
                {children}
            </article>
        </main>
    )
}