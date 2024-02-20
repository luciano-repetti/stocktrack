import TemplateBody from '@/components/TemplateBody'
import Head from 'next/head'

export default function Notes() {
    return (
        <>
            <Head>
                <title>Notas</title>
            </Head>
            <TemplateBody namePage={"Notas"}>
            </TemplateBody>
        </>
    )
}
