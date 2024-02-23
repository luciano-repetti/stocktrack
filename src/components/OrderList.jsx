import styles from "@/styles/modules/OrderList.module.css"
import Image from "next/image";

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

                    <button className={styles.button_finalize}>Finalizar</button>

                </section>
            </article>
        </section>
    )
}

const ItemOrder = () => {

    return (
        <article className="flex flex-column">
            <div className={styles.container_item}>
                <div className={styles.container_info}>
                    <span>Cubo de rubik</span>
                    <span className={styles.gray}>Cubo de rubik 3x3</span>
                </div>
                <div className="flex gap-1 items-center">
                    <div className={styles.container_info}>
                        <div className={styles.info}>
                            <span>x4</span>
                            <span>$1000</span>
                        </div>
                        <div className={styles.info}>
                            <span className={styles.gray}>x1</span>
                            <span className={styles.gray}>$250</span>
                        </div>
                    </div>
                    <div className={styles.container_info}>
                        <button><Image width={25} height={25} src={"/icons/edit-icon.svg"} alt="imagen de editar" /></button>
                        <button><Image width={25} height={25} src={"/icons/delete-icon.svg"} alt="imagen de borrar" /></button>
                    </div>
                </div>
            </div>
            <div className={styles.line}>
            </div>
        </article>
    )
}