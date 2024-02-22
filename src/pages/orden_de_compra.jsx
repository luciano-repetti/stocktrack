import Head from 'next/head'
import TemplateBody from '@/components/TemplateBody'
import OrderForm from '@/components/forms/Order'
import OrderList from '@/components/Order'

export default function PurchaseOrder() {
    return (
        <>
            <Head>
                <title>Orden de compra</title>
            </Head>
            <TemplateBody namePage={"Orden de compra"}>
                <OrderForm />
                <OrderList />
            </TemplateBody>
        </>
    )
}
