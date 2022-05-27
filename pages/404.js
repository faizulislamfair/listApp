import Link from 'next/link'

const NotFoundPage = () => {
    return ( 
        <div className="not-found">
            <h1>Oooops...</h1>
            <h2>Page Not Found</h2>
            <p>Go back to the <Link href="/"><a>Home Page</a></Link></p>
        </div>
     );
}
 
export default NotFoundPage;