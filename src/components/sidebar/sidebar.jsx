import { Link } from "react-router-dom";
import styles from "./sidebar.module.css"

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <nav>
                <Link to={'/'} >Dashboard</Link>
                <Link to={'/Products'} >Products</Link>
                <Link to={'/sales'} >Sales</Link>
            </nav>
        </aside>
    )
}
