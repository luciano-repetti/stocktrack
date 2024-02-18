import Link from "next/link"
import styles from "@/styles/modules/Nav.module.css"
import Image from "next/image"

const Nav = () => {

    const navigations = [{ icon: "house_home_icon", name: "FINANZAS" }, { icon: "cart_icon", name: "ORDEN DE COMPRA" }, { icon: "box_icon", name: "INVENTARIO" }, { icon: "history_icon", name: "HISTORIAL" }, { icon: "notes_icon", name: "NOTAS" }, { icon: "question_icon", name: "HELP" }]

    return (
        <header className={styles.header}>
            <article>
                <h1>STOCKTRACK</h1>
            </article>
            <nav className={styles.container}>
                {navigations.map(({ name, icon }, index) => (
                    <Link className={index == 0 ? styles.active : ""} href={""} key={crypto.randomUUID()}>
                        <Image width={35} height={35} src={`/icons/${icon}.png`} alt={`Imagen de ${name}`} />
                        {name}
                    </Link>
                ))}
            </nav>
        </header>
    )
}

export default Nav