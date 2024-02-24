import Image from "next/image";
import styles from "@/styles/modules/OrderList.module.css"

export const ItemOrder = ({ name, price, quantity }) => {
    const total = (price * quantity)
    return (
        <>
            <article className="flex flex-column">
                <div className={styles.container_item}>
                    <div className={styles.container_info}>
                        <span>{name}</span>
                        <span className={styles.gray}>Cubo de rubik 3x3</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <div className={styles.container_info}>
                            <div className={styles.info}>
                                <span>{quantity}</span>
                                <span>{total}</span>
                            </div>
                            <div className={styles.info}>
                                <span className={styles.gray}>x1</span>
                                <span className={styles.gray}>{price}</span>
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
        </>
    )
}
