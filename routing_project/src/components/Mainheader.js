import {Link} from 'react-router-dom'
import classes from './Mainheader.module.css'

const Mainheader=()=>{
    return (<div>
        
        
        <header className={classes.header}>
        <h2>Component Lifecycle</h2>
        <nav>
            <ul>    
            <li ><Link to="/mounting">Mounting</Link></li>
            <li ><Link to="/updating">Updating</Link></li>
            <li ><Link to="/unmounting">Unmounting</Link></li>
            </ul>
            </nav>
            </header>
            </div>);
}
export default Mainheader;