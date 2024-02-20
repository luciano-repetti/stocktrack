import TemplateBody from '@/components/TemplateBody'
import Head from 'next/head'

export default function Help() {
    return (
        <>
            <Head>
                <title>Ayuda</title>
            </Head>
            <TemplateBody namePage={"Ayuda"}>
            </TemplateBody>
        </>
    )
}
