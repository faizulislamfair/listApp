import styles from '../../styles/Pandas.module.css'
import Head from 'next/head'

export const getStaticProps = async () => {
   
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

     return {
         props: { pandas: data }
     }

}


const Pandas = ({ pandas }) => {
    return (
        <> 
            <Head>
            <title>Panda List | Panda Listing</title>
            <meta name="keywords" content="pandas" />
            </Head>
            <div>
                <h1>This world belongs to Pandas!</h1>
                {pandas.map(panda => (
                    <div key={panda.id}>
                     <a className={styles.single}>
                         <h3>{ panda.name }</h3>
                     </a>
                    </div>
                ))}
            </div>
        </> 
    );
}
 
export default Pandas;