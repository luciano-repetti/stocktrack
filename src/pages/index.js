import Header from '@/components/Header'
import Nav from '@/components/Nav'

export default function Home() {
  return (
    <main style={{ display: 'flex' }}>
      <Header />
      <Nav />
      <main style={{ marginTop: '8svh' }}>
        <h3>Hola</h3>
      </main>
    </main>
  )
}
