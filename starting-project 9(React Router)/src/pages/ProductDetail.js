import { Link, useParams } from "react-router-dom"
export default function ProductDetail()
{
    const params = useParams();
    
    return(
        <>
            <h1>product details of {params.productId}  </h1>
            <p><Link to = '..' relative = 'path'>back</Link></p>
        </>
    ); 
    
}