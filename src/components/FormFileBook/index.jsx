
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFileBook } from "../../providers/FileBookProvider";

import { BiUpload } from "react-icons/bi"

import styles from "./styles.module.css"

export default function FormFileBook() {

    const navigate = useNavigate();


    const { fileBook, setFileBook } = useFileBook();

    const [labelText, setLabelText] = useState('Selecione um arquivo')


    async function readUrlBook(event) {
        event.preventDefault();
        navigate('/reader/file', { replace: true });
    }

    return (
        <form className={styles.fileForm} onSubmit={(event) => { readUrlBook(event); }} action="">
            <div className={styles.inputFile}>
                <label htmlFor="bookFile">< BiUpload className={styles.uploadIcon}/> {labelText}</label>
                <input onChange={(event) => { setFileBook(event.target.files[0]); setLabelText(event.target.files[0].name); }} type="file" accept="application/epub+zip" name="bookFile" id="bookFile" />
            </div>
            <button type="submit">Ok</button>
        </form>
    );
}