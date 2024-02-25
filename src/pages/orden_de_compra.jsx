import Head from 'next/head'
import TemplateBody from '@/components/TemplateBody'
import OrderForm from '@/components/forms/OrderForm'
import OrderList from '@/components/OrderList'
import { getPucharseOrder } from '@/services/getPucharseOrder';
import { useEffect, useState } from 'react';

const pucharseOrderInitial = {
    id: 0,
    items: [],
    date: "",
}

export default function PurchaseOrder() {
    const [pucharseOrder, setPucharseOrder] = useState(pucharseOrderInitial);

    const [items, setItems] = useState([]);

    const [counter, setCounter] = useState(4);

    useEffect(() => {
        const data = getPucharseOrder();
        setPucharseOrder(data);
        setItems(data.items);
    }, []);


    const handlerAddItems = ({ name, price, quantity, description }) => {

        if (name && price && quantity) {

            setItems([...items, {
                id: counter,
                name: name.trim(),
                description: description.trim(),
                price: +price.trim(),
                quantity: +quantity.trim(),
            }])
        } else {
            console.error("Alguno de los valores no esta siendo pasado")
        }

        setCounter(counter + 1);
    }

    const handlerDeleteItem = (id) => {
        console.log(id);
        setItems(items.filter(item => item.id !== id))
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
