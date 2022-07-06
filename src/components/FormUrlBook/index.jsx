import { useNavigate } from "react-router-dom";
import { useUrlBook } from "../../providers/UrlBookProvider";
import styles from "./styles.module.css"

export default function FormUrlBook() {

    const navigate = useNavigate();

    const { urlBook, setUrlBook } = useUrlBook();

    function readUrlBook(event) {
        event.preventDefault();
        navigate('/reader/url', { replace: true })
    }

    return (
        <form className={styles.urlForm} onSubmit={(event) => { readUrlBook(event); }} action="">
            <div className={styles.inputText}>
                <label htmlFor="bookUrl">Link de um Ebook</label>
                <input onChange={(event) => { setUrlBook(event.target.value) }} type="text" name="bookUrl" id="bookUrl" />
            </div>
            <button type="submit">Ok</button>
        </form>
    );
}