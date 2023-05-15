import { Link } from "react-router-dom";
  
export default function Content()
{
    return <><h1>this is content page</h1> <br/> 
    <ul>
        <li><Link to ="p1">product-1</Link></li>
        <li><Link to ="p2">product-2</Link></li>
        <li><Link to ="p3">product-3</Link></li>
    </ul></>;
}