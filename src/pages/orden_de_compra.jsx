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


    useEffect(() => {
        const data = getPucharseOrder();
        setPucharseOrder(data);
        setItems(data.items);
    }, []);


    const handlerAddItems = ({ name, price, quantity }) => {

        if (name && price && quantity) {

            setItems([...items, {
                name: name.trim(),
                price: +price.trim(),
                quantity: +quantity.trim(),
            }])
        } else {
            console.error("Alguno de los valores no esta siendo pasado")
        }
    }


    return (
        <>
            <Head>
                <title>Orden de compra</title>
            </Head>
            <TemplateBody namePage={"Orden de compra"}>
                <OrderForm handler={handlerAddItems} />
                <OrderList items={items} />
            </TemplateBody>
        </>
    )
}
