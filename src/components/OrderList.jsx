import styles from "@/styles/modules/OrderList.module.css"

export default function OrderList() {

    const subtotal = 3000;
    const descuento = 300;
    const total = subtotal - descuento;
    return (
        <section className={styles.container_order}>
            <article className={styles.list_order}>
                <section className={styles.container_list}>
                    <span className={styles.title}>Orden</span>
                    <section className={styles.list_scroll}>
                        <ItemOrder />
                        <ItemOrder />
                        <ItemOrder />
                        <ItemOrder />
                        <ItemOrder />
                        <ItemOrder />
                        <ItemOrder />
                        <ItemOrder />
                        <ItemOrder />
                        <ItemOrder />
                        <ItemOrder />
                        <ItemOrder />
                    </section>
                </section>

                <section className={styles.sublist_order}>
                    <article className="flex justify-between">
                        <span>Subtotal:</span>
                        <span>${subtotal}</span>
                    </article>

                    <article className="flex justify-between">
                        <span>Descuento:</span>
                        <span>${descuento}</span>
                    </article>

                    <article className="flex justify-between">
                        <span>Total:</span>
                        <span>${total}</span>
                    </article>

                    <button >Finalizar</button>

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
