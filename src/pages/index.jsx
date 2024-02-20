import TemplateBody from '@/components/TemplateBody'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Finanzas</title>
      </Head>
      <TemplateBody namePage={"Finanzas"}>
      </TemplateBody>
    </>
  )
}
