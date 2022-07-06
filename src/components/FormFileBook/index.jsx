
import { useNavigate } from "react-router-dom";
import { useFileBook } from "../../providers/FileBookProvider";

import styles from "./styles.module.css"

export default function FormFileBook() {

    const navigate = useNavigate();


    const { fileBook, setFileBook } = useFileBook();


    async function readUrlBook(event) {
        event.preventDefault();     
         navigate('/reader/file', { replace: true }); 
    }

    return (
        <form onSubmit={(event) => { readUrlBook(event); }} action="">
            <label htmlFor="bookFile">Url do Ebook</label>
            <input onChange={(event) => {  setFileBook(event.target.files[0]); }} type="file" accept="application/epub+zip" name="bookFile" id="bookFile" />
            <button type="submit">Ok</button>
        </form>
    );
}