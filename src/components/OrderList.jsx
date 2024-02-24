import styles from "@/styles/modules/OrderList.module.css"
import { ItemOrder } from "./ItemOrder";
import { calculateTotal } from "@/services/getPucharseOrder";




export default function OrderList({ items, handler }) {

    const subtotal = calculateTotal(items);
    const descuento = 300;
    const total = subtotal - descuento;

    return (
        <section className={styles.container_order}>
            <article className={styles.list_order}>
                <section className={styles.container_list}>
                    <span className={styles.title}>Orden</span>
                    <section className={styles.list_scroll}>
                        {items.map(({ id, name, price, quantity, description }) => (
                            <ItemOrder handler={handler} key={id} id={id} name={name} price={price} quantity={quantity} description={description} />
                        ))}
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

                    <button className={styles.button_finalize}>Finalizar</button>

                </section>
            </article>
        </section>
    )
}


