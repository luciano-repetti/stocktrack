import Link from "next/link"
import styles from "@/styles/modules/Header.module.css"
import Image from "next/image"

const Header = () => {
    const upperPanel = ['search_icon', 'notification_icon', 'palette_icon'];

    return (
        <>
            <header>
                <nav className={styles.navigation}>
                    {upperPanel.map((icon) => (
                        <Link href="" key={crypto.randomUUID()}>
                            <Image width={35} height={35} src={`/icons/${icon}.png`} alt={`Imagen de ${icon}`} />
                        </Link>
                    ))}
                </nav>
            </header>
        </>
    )
}

export default Header;

