import { Input, Textarea } from "@/components/Input"
import styles from "@/styles/modules/FormOrder.module.css"

export default function OrderForm() {

    const handleForm = (event) => {
        event.defaultPrevented()
    }

    return (
        <form className={styles.form} onSubmit={handleForm}>

            <Input error={"Este campo es obligatorio"} label={"Nombre de producto"} required={true} type={"text"} placeholder={"Ingrese el nombre del producto"} />
            <Textarea error={"Este campo es obligatorio"} label={"Descripción de producto"} required={false} placeholder={"Ingrese la descripción del producto"} />
            <fieldset className="flex gap-1">
                <Input label={"Precio"} required={true} type={"number"} placeholder={"Ingrese precio"} />
                <Input error={"Este campo es obligatorio"} label={"Cantidad"} required={true} type={"number"} placeholder={"Ingrese cantidad"} />
            </fieldset>

            <button type="submit">Añadir a la orden</button>
        </form>
    )
}