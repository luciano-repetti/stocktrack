import Head from 'next/head'
import TemplateBody from '@/components/TemplateBody'
import OrderForm from '@/components/forms/OrderForm'
import OrderList from '@/components/OrderList'

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
