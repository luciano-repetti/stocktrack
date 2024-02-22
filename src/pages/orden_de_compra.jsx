import TemplateBody from '@/components/TemplateBody'
import Order from '@/components/forms/Order'
import Head from 'next/head'

export default function PurchaseOrder() {
    return (
        <>
            <Head>
                <title>Orden de compra</title>
            </Head>
            <TemplateBody namePage={"Orden de compra"}>
                <Order />
            </TemplateBody>
        </>
    )
}
