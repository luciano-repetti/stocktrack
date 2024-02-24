import { Input, Textarea } from "@/components/Input"
import styles from "@/styles/modules/FormOrder.module.css"
import { useState } from "react"


export default function OrderForm({ handler }) {
    const [formItemState, setFormItemState] = useState({
        name: '',
        price: '',
        description: '',
        quantity: '',
    });
    const { name, price, quantity, description } = formItemState;

    const onInputChange = ({ target: { name, value } }) => {
        console.log('Input Change:', name, value);

        setFormItemState({
            ...formItemState,
            [name]: value
        });
    };

    const handleForm = (event) => {
        event.preventDefault()
        console.log('Form Submitted with state:', formItemState);
        handler(formItemState);

        setFormItemState({
            name: '',
            price: '',
            quantity: '',
            description: '',
        })
    }

    return (
        <form className={styles.form} onSubmit={handleForm}>

            <Input
                error={"Este campo es obligatorio"}
                label={"Nombre de producto"}
                name={"name"}
                value={name}
                required={true}
                type={"text"}
                placeholder="Ingrese el nombre del producto"
                onChange={onInputChange}
            />

            <Textarea
                error={"Este campo es obligatorio"}
                label={"Descripción de producto"}
                required={false}
                name={"description"}
                value={description}
                placeholder={"Ingrese la descripción del producto"}
                onChange={onInputChange}
            />


            <fieldset className="flex gap-1">
                <Input
                    label={"Precio"}
                    name={"price"}
                    value={price}
                    required={true}
                    type={"number"}
                    placeholder={"Ingrese precio"}
                    onChange={onInputChange}

                />
                <Input
                    error={"Este campo es obligatorio"}
                    label={"Cantidad"}
                    name={"quantity"}
                    value={quantity}
                    required={true}
                    type={"number"}
                    placeholder={"Ingrese cantidad"}
                    onChange={onInputChange}

                />
            </fieldset>

            <button type="submit">Añadir a la orden</button>
        </form>
    )
}
