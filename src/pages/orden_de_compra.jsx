import Head from 'next/head'
import TemplateBody from '@/components/TemplateBody'
import OrderForm from '@/components/forms/OrderForm'
import OrderList from '@/components/OrderList'
import { getOrderStorage, getPucharseOrder, postItemStorage, postOrderStorage } from '@/services/pucharseOrder';
import { useEffect, useState } from 'react';

const pucharseOrderInitial = {
    id: 0,
    items: [],
    date: "",
}

export default function PurchaseOrder() {
    const [items, setItems] = useState([]);

    // const [counter, setCounter] = useState(4);

    useEffect(() => {
        setItems(getOrderStorage());
    }, []);


    const handlerAddItems = ({ name, price, quantity, description }) => {

        if (name && price && quantity) {

            const currentItem = {
                id: crypto.randomUUID(),
                name: name.trim(),
                description: description.trim(),
                price: +price.trim(),
                quantity: +quantity.trim()
            }

            // Esto:
            setItems((prevState) => {
                if (prevState?.length > 0) {
                    return [...prevState, currentItem]
                } else {
                    return [currentItem]
                }
            })
            postItemStorage(currentItem)

            // Es igual a esto:
            // setItems([...items, {
            //     id: counter,
            //     name: name.trim(),
            //     description: description.trim(),
            //     price: +price.trim(),
            //     quantity: +quantity.trim(),
            // }])
        } else {
            console.error("Alguno de los valores no esta siendo pasado")
        }

        // setCounter(counter + 1);
    }

    const handlerDeleteItem = (id) => {
        const itemsFilter = items.filter(item => item.id !== id)
        setItems(itemsFilter)
        postOrderStorage(itemsFilter)
    }



    return (
        <>
            <Head>
                <title>Orden de compra</title>
            </Head>
            <TemplateBody namePage={"Orden de compra"}>
                <OrderForm handler={handlerAddItems} />
                <OrderList handler={handlerDeleteItem} items={items} />
            </TemplateBody>
        </>
    )
}
