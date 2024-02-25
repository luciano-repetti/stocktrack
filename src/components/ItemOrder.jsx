import Image from "next/image";
import styles from "@/styles/modules/OrderList.module.css"
import { formatPriceArg } from "@/helpers/formats";

export const ItemOrder = ({ handler, id, name, price, quantity, description }) => {
    const total = (price * quantity)
    return (
        <>
            <article className="flex flex-column">
                <div className={styles.container_item}>
                    <div className={`${styles.container_info} flex-column`}>
                        <span>{name}</span>
                        <span className={styles.gray}>{description}</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <div className={`${styles.container_info} gap-1`}>
                            <div className={styles.info}>
                                <span>x{quantity}</span>
                                <span className={styles.gray}>x1</span>
                            </div>
                            <div className={styles.info}>
                                <span>${formatPriceArg(total)}</span>
                                <span className={styles.gray}>${formatPriceArg(price)}</span>
                            </div>
                        </div>
                        <div className={`${styles.container_info} flex-column`}>
                            <button><Image width={25} height={25} src={"/icons/edit-icon.svg"} alt="imagen de editar" /></button>
                            <button onClick={() => handler(id)}><Image width={25} height={25} src={"/icons/delete-icon.svg"} alt="imagen de borrar" /></button>
                        </div>
                    </div>
                </div>
                <div className={styles.line}>
                </div>
            </article >
        </>
    )
}
