import { Input, Textarea } from "@/components/Input"
import styles from "@/styles/modules/FormOrder.module.css"
import { useState } from "react"


export default function OrderForm({ handler }) {
    const [formItemState, setFormItemState] = useState({
        name: '',
        price: '',
        description: '',
        quantity: '',
        // typeDiscount: '',
        // discount: '',
    });

    const { name, price, quantity, description, discount } = formItemState;

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
            // discount: '',
            // typeDiscount: ''
        })
    }

    return (
        <form className={styles.form} onSubmit={handleForm}>

            <Input
                error={""}
                label={"Nombre de producto"}
                name={"name"}
                value={name}
                required={true}
                type={"text"}
                placeholder="Ingrese el nombre del producto"
                onChange={onInputChange}
            />

            <Textarea
                error={""}
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
                    error={""}
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

            {/* <fieldset style={{ display: 'flex' }}>
                <span style={{ width: '50%' }}>
                    Seleccione descuento:
                    <Input onClick={onInputChange} style={{ flexDirection: 'row-reverse', alignItems: 'center', width: 'fit-content' }} error={""} label={"Porcentaje"} value={"percentage"} name={"typeDiscount"} checked={formItemState.typeDiscount === "percentage"} required={false} type={"radio"} onChange={onInputChange} />

                    <Input onClick={onInputChange} style={{ flexDirection: 'row-reverse', alignItems: 'center', width: 'fit-content' }} error={""} label={"Dinero"} value={"dinner"} name={"typeDiscount"} checked={formItemState.typeDiscount === "dinner"} required={false} type={"radio"} onChange={onInputChange} />

                    <Input onClick={onInputChange} style={{ flexDirection: 'row-reverse', alignItems: 'center', width: 'fit-content' }} error={""} label={"Ninguno"} value={""} name={"typeDiscount"} checked={formItemState.typeDiscount === ""} required={false} type={"radio"} onChange={onInputChange} />
                </span>

                <Input
                    style={{ width: '50%' }}
                    error={""}
                    label={"Descuento total"}
                    name={"discount"}
                    value={discount}
                    required={false}
                    type={"text"}
                    placeholder="Ingrese el descuento"
                    onChange={onInputChange}
                    disabled={formItemState.typeDiscount === ""}
                />
            </fieldset> */}

        </form>
    )
}
