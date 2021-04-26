import Link from 'next/link'
import styles from './styles.module.scss'

export const getStaticProps = async () => {
  
  const resp = await fetch('http://localhost:3000/api/random')
  const dados =  await resp.json()
  
  return {
    revalidate: 10,
    props: {
      valor: dados.valor
    }
  }
}

function Estatico(props) {
  return (
    <div className={styles.container}>
      <h1>Conteúdo Estático</h1>
      <h2>Último valor = {props.valor} </h2>
      
      <Link href='/'>
        <a>Voltar</a>
      </Link>
    </div>
  )
}

export default Estatico