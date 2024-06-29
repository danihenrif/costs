import styles from './LinkButton.module.css'
import { Link } from "react-router-dom";
function LinkButton({ to, text }) {
    return (
        <Link to={to} text={text} className={styles.btn}>
            {text}
        </Link>
    )
}
export default LinkButton