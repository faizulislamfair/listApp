export const getStaticPaths = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    const paths = data.map(panda => {
        return {
            params: { id: panda.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }

}


export const getStaticProps = async (context) => {
     const id = context.params.id;
     const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
     const data = await res.json();

     return {
         props: { panda: data }
     }
}


const Details = ({ panda }) => {
    return (  
        <div>
            <h1>{ panda.name }</h1>
            <p>{ panda.email }</p>
            <p>{ panda.website }</p>
            <p>{ panda.address.city }</p>
        </div>
    );
}
 
export default Details;