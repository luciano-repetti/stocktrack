import styles from "@/styles/modules/OrderList.module.css"

export default function OrderList() {

    return (
        <section className={styles.container_order}>
            <article className={styles.list_order}>
                <span className={styles.title}>Orden</span>
                <section>
                    <ItemOrder />
                </section>
            </article>
        </section>
    )
}

const ItemOrder = () => {

    return (
        <article className={styles.container_item}>
            <div className={styles.item}>
                <p>Cubo de rubik</p>
                <div className={styles.amount}>
                    <span>x4</span>
                    <span>$1000</span>
                </div>
            </div>
            <div className={`${styles.item} ${styles.gray}`}>
                <p>Cubo de rubik 3x3</p>
                <div className={styles.amount}>
                    <span>x1</span>
                    <span>$250</span>
                </div>
            </div>
            <div className={styles.line}></div>
        </article>
    )
}