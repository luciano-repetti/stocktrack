import Link from 'next/link'
import styles from '@/styles/modules/Nav.module.css'
import Image from 'next/image'
import { useState } from 'react'

const Nav = () => {

    const [expand, setExpand] = useState(false)

    const navigations = [
        { icon: 'house_home_icon', name: 'FINANZAS', link: 'finanzas' },
        { icon: 'cart_icon', name: 'ORDEN DE COMPRA', link: 'orden_de_compra' },
        { icon: 'box_icon', name: 'INVENTARIO', link: 'inventario' },
        { icon: 'history_icon', name: 'HISTORIAL', link: 'historial' },
        { icon: 'notes_icon', name: 'NOTAS', link: 'notas' },
        { icon: 'question_icon', name: 'AYUDA', link: 'ayuda' },
    ]

    const handleExpandMenu = () => {
        setExpand(!expand)
    }

    return (
        <header className={`${styles.header} ${expand ? styles.expand : ""}`}>
            <article className={styles.containerLogo}>
                {!expand && (
                    <h2>ST</h2>
                )}
                <h1 style={!expand ? { display: "none" } : {}}>STOCKTRACK</h1>
            </article>

            <nav className={styles.container}>
                {navigations.map((data, index) => (
                    <LinkCustom expand={expand} data={data} active={index == 0} key={crypto.randomUUID()} />
                ))}
            </nav>

            <div className={`${styles.containerExpand} ${expand ? styles.expand : ""}`}>
                <button onClick={handleExpandMenu} className={styles.buttonExpand} >
                    <Image width={30} height={30} src={"/icons/arrow_rigth_icon.svg"} alt='flecha expande menu' />
                </button>
            </div>
        </header>
    )
}

export default Nav

const LinkCustom = ({ data, active, expand }) => {
    const { name, icon, link } = data

    return (
        <Link
            className={`${expand ? styles.expand : ""} ${active ? styles.active : ""}`}
            href={link}
        >
            <Image
                width={35}
                height={35}
                src={`/icons/${icon}.png`}
                alt={`Imagen de ${name}`}
            />
            {expand && (
                name
            )}
        </Link>
    )
}
