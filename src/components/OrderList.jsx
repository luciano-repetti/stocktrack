import styles from "@/styles/modules/OrderList.module.css"
import { ItemOrder } from "./ItemOrder";
import { calculateTotal } from "@/services/pucharseOrder";




export default function OrderList({ items, handler }) {

    const subtotal = calculateTotal(items);
    const descuento = 0;
    const total = subtotal - descuento || 0;

    return (
        <section className={styles.container_order}>
            <article className={styles.list_order}>
                <section className={styles.container_list}>
                    <span className={styles.title}>Orden</span>
                    <section className={styles.list_scroll}>
                        {items?.length > 0 ? (
                            items?.map(({ id, name, price, quantity, description }) => (
                                <ItemOrder handler={handler} key={id} id={id} name={name} price={price} quantity={quantity} description={description} />
                            ))
                        ) : <p>La lista esta vacia.</p>}
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


